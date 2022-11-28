import { ActionArgs, redirect } from "@remix-run/node";
import {
  AuthenticatedAction,
  requireAuthenticatedAction,
} from "~/features/auth/auth.remix.server";
import { tryParseActionError } from "~/toolkit/remix/tryParseActionError.server";

export const tryPerformMutation = async (
  request: ActionArgs["request"],
  redirectTo: string,
  mutation: (actionContext: AuthenticatedAction) => Promise<any>
) => {
  let authenticatedAction = await requireAuthenticatedAction(request);
  try {
    await mutation(authenticatedAction);
    return redirect(redirectTo);
  } catch (err: unknown) {
    tryParseActionError(err, authenticatedAction.formData);
  }
};
