import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { GiftIdeaForm } from "~/features/my-list/GiftIdeaForm";
import {
  getGiftIdeaById,
  updateGiftIdea,
} from "~/features/my-list/my-list.data.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

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
      <h1 className="text-secondary/90">{loaderData?.giftIdea?.title}</h1>

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
