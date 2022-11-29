import { json, LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  ShouldReloadFunction,
} from "@remix-run/react";

import globalStyles from "../public/css/global.css";
import tailwindStyles from "../public/css/tailwind.css";
import { createUserGqlClient } from "./common/hasura.server";
import { authSession } from "./features/auth/authSession.server";
import {
  AvailableUser,
  FollowedUser,
  getFamilyAndFriendsUsers,
} from "./features/family-and-friends/family-and-friends.data.server";
import { AppLayout } from "./features/layout/AppLayout";
import { getUserById } from "./features/users/users.data.server";
import { AppUser } from "./features/users/users.types";
import { AppErrorBoundary } from "./toolkit/components/errors/AppErrorBoundary";
import { getPublicEnvVars } from "./toolkit/remix/envVars.server";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "I Need Your List",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async ({ request }: LoaderArgs) => {
  let userSession = await authSession.get(request);
  let user: AppUser | undefined | null;
  let followedUsers: FollowedUser[] = [];
  let availableUsers: AvailableUser[] = [];
  if (userSession?.userId && userSession?.hasuraToken) {
    let gqlClient = await createUserGqlClient(userSession.hasuraToken);
    let results = await Promise.all([
      getUserById(gqlClient, userSession.userId),
      getFamilyAndFriendsUsers(gqlClient, userSession.userId),
    ]);
    user = results?.[0];
    followedUsers = results?.[1]?.followedUsers || [];
    availableUsers = results?.[1]?.availableUsers || [];
  }
  return json({
    user,
    followedUsers,
    availableUsers,
    ENV: getPublicEnvVars(),
  });
};

export default function App() {
  return (
    <html lang="en" data-theme="winter">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <AppLayout>
          <Outlet />
        </AppLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
const AppError = ({ error }: { error?: Error }) => {
  return (
    <html lang="en" data-theme="winter">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <AppLayout>
          <AppErrorBoundary error={error} />
        </AppLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};
export const ErrorBoundary = AppError;
export const CatchBoundary = AppError;

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
  !!submission;
