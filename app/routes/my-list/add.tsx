import { ActionArgs } from "@remix-run/node";
import { AiOutlineGift } from "react-icons/ai";
import { insertGiftIdea } from "~/features/gift-ideas/gift-ideas.data.server";
import { GiftIdeaForm } from "~/features/gift-ideas/GiftIdeaForm";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

export default function AddGiftIdeaRoute() {
  return (
    <MainContentPadded>
      <h1 className="flex items-center gap-2 mb-6 text-secondary/90">
        <AiOutlineGift size={32} />
        Add a Gift Idea
      </h1>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <GiftIdeaForm backUrl="/my-list" />
        </div>
      </div>
    </MainContentPadded>
  );
}
export const action = async ({ request }: ActionArgs) => {
  return tryPerformMutation(
    request,
    "/my-list",
    ({ gqlClient, formData, userId }) =>
      insertGiftIdea(gqlClient, userId, formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
