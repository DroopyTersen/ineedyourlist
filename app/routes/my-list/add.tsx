import { ActionArgs } from "@remix-run/node";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { GiftIdeaForm } from "~/features/my-list/GiftIdeaForm";
import { insertGiftIdea } from "~/features/my-list/my-list.data.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

export default function AddGiftIdeaRoute() {
  return (
    <MainContentPadded>
      <h1 className="text-secondary/90">Add a Gift Idea</h1>
      <GiftIdeaForm backUrl="/my-list" />
    </MainContentPadded>
  );
}
export const action = async ({ request }: ActionArgs) => {
  return tryPerformMutation(
    request,
    "/my-list",
    ({ gqlClient, userId, formData }) =>
      insertGiftIdea(gqlClient, userId, formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
