import { LoaderFunction } from "@remix-run/node";
import { createAdminGqlClient, signHasuraToken } from "~/common/hasura.server";
import { fetchAccessToken, fetchProfile } from "~/features/auth/auth0.server";
import { authSession } from "~/features/auth/authSession.server";
// import { createUserSession } from "~/features/auth/auth.server.dotadda";

import {
  getUserByUsername,
  insertUser,
} from "~/features/users/users.data.server";
import { AppUser } from "~/features/users/users.types";
import { getAuthRedirectUri } from "~/toolkit/http/url.utils";

export const loader: LoaderFunction = async ({ request }) => {
  let searchParams = new URL(request.url).searchParams;
  let code = searchParams.get("code");
  let state = searchParams.get("state");
  let returnTo = searchParams.get("returnTo") || "/";
  let error = searchParams.get("error");
  let error_description = searchParams.get("error_description");

  if (error) {
    throw new Error(`${error} - ${error_description}`);
  }
  const redirect_uri = getAuthRedirectUri(returnTo + "", "/api/auth-callback");
  if (!code || !state) {
    throw new Error("Missing code and status query params");
  }

  let adminClient = createAdminGqlClient();
  let githubTokenResult = await fetchAccessToken(code, redirect_uri);
  if (!githubTokenResult) {
    throw new Error("Unble to get access token");
  }

  let profile = await fetchProfile(githubTokenResult.access_token);
  console.log("🚀 | profile", profile);
  if (!profile?.sub) {
    throw new Error("Unable to get logged in user email");
  }
  let user: AppUser | undefined | null = await getUserByUsername(
    adminClient,
    profile?.sub
  );
  if (!user) {
    user = await insertUser(adminClient, {
      name: profile.name,
      username: profile.sub,
      photo: profile.picture,
    });
  }
  if (!user) {
    throw Error("Unable find existing user or create a new user");
  }
  let hasuraToken = signHasuraToken(user);
  return authSession.create({ userId: user.id, hasuraToken }, returnTo);
};
