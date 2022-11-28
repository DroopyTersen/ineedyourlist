import type { ActionFunction } from "@remix-run/node";
import { authSession } from "~/features/auth/authSession.server";

export const action: ActionFunction = async ({ request }) => {
  return authSession.logout(request);
};

export default function () {
  return null;
}
