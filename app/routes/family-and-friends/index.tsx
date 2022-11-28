import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import {
  followUser,
  getFamilyAndFriendsUsers,
  unfollowUser,
} from "~/features/family-and-friends/family-and-friends.data.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { SelectField } from "~/toolkit/components/forms";
import { tryParseActionError } from "~/toolkit/remix/tryParseActionError.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient, userId } = await requireAuthenticatedLoader(request);
  let data = await getFamilyAndFriendsUsers(gqlClient, userId);
  return json(data);
};

export default function FamilyAndFrinedsRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <h1 className="mb-1 text-secondary/90">Family {"&"} Friends</h1>
      <p className="mt-0">Who do you have to buy gifts for?</p>
      {data?.availableUsers?.length > 0 && (
        <Form className="flex items-end gap-2" method="post">
          <SelectField name="userId" label="Add someone to your list">
            <option value="">Choose someone...</option>
            {data?.availableUsers?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </SelectField>
          <button
            name="intent"
            value="followUser"
            type="submit"
            className="relative btn bottom-[2px]"
          >
            Add
          </button>
        </Form>
      )}
      <ul className="text-xl">
        {data?.followedUsers?.map((user) => (
          <li key={user.id}>
            <Link className="text-accent" to={`${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </MainContentPadded>
  );
}

export const action = async ({ request }: ActionArgs) => {
  let { gqlClient, userId, intent, formData } =
    await requireAuthenticatedAction(request);

  try {
    if (intent === "unfollow") {
      await unfollowUser(gqlClient, userId, formData);
    } else {
      await followUser(gqlClient, formData);
    }
    return redirect("/family-and-friends");
  } catch (err: unknown) {
    return tryParseActionError(err, formData);
  }
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
