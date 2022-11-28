import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { tryPerformMutation } from "~/common/remix.utils";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { GiftIdeaForm } from "~/features/my-list/GiftIdeaForm";
import {
  getGiftIdeaById,
  updateGiftIdea,
} from "~/features/my-list/my-list.data.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  if (!params?.giftIdeaId)
    throw new Response("Not found: missing gift idea id", { status: 404 });
  let giftIdea = await getGiftIdeaById(gqlClient, params.giftIdeaId || "");

  return json({ giftIdea });
};
export default function EditGiftIdeaRoute() {
  let loaderData = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <h1 className="text-secondary/90">Update your gift idea</h1>
      <ConfirmationButton
        action="/my-list?index"
        className="btn btn-error"
        formData={{ giftIdeaId: loaderData?.giftIdea?.id }}
        confirmation={{
          title: `Remove from your list?`,
          body: (
            <div>
              <p>
                If someone has already claimed this gift,{" "}
                <b>{loaderData?.giftIdea?.title}</b>, they will still see it.
              </p>
            </div>
          ),
        }}
      >
        Remove
      </ConfirmationButton>
      <GiftIdeaForm backUrl="/my-list" giftIdea={loaderData?.giftIdea} />
    </MainContentPadded>
  );
}
export const action = async ({ request, params }: ActionArgs) => {
  if (!("giftIdeaId" in params))
    throw new Response("Not found: missing gift idea id", { status: 404 });

  return tryPerformMutation(
    request,
    "/my-list",
    ({ gqlClient, userId, formData }) =>
      updateGiftIdea(gqlClient, userId, params?.giftIdeaId || "", formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
