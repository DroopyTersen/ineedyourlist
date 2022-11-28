import { ActionArgs, json, redirect } from "@remix-run/node";
import { ZodError } from "zod";
import {
  AuthenticatedAction,
  requireAuthenticatedAction,
} from "~/features/auth/auth.remix.server";

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
    if (err instanceof ZodError) {
      return json({ error: err }, { status: 400 });
    }
    if (err instanceof Error) {
      return json(
        {
          error: err?.message,
          formValues: Object.fromEntries(authenticatedAction.formData),
        },
        { status: 500 }
      );
    }
    return json(
      {
        error: "Unknown error",
        formValues: Object.fromEntries(authenticatedAction.formData),
      },
      { status: 500 }
    );
  }
};
