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
import { AppLayout } from "./features/layout/AppLayout";
import { getUserById } from "./features/users/users.data.server";
import { AppUser } from "./features/users/users.types";
import { getPublicEnvVars } from "./toolkit/remix/envVars.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async ({ request }: LoaderArgs) => {
  let userSession = await authSession.get(request);
  let user: AppUser | undefined | null;
  if (userSession?.userId && userSession?.hasuraToken) {
    user = await getUserById(
      createUserGqlClient(userSession.hasuraToken),
      userSession.userId
    );
  }
  return json({
    user,
    ENV: getPublicEnvVars(),
  });
};

export default function App() {
  return (
    <html lang="en" data-theme="droopy-theme">
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

export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
  !!submission;
