import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import {
  getGiftIdeaFormValues,
  getUserWithGiftIdeas,
  updateGiftIdea,
} from "~/features/gift-ideas/gift-ideas.data.server";
import { GiftIdeaForm } from "~/features/gift-ideas/GiftIdeaForm";
import { MainContentPadded } from "~/features/layout/AppLayout";

import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  if (!params?.giftIdeaId)
    throw new Response("Not found: missing gift idea id", { status: 404 });
  let [giftIdea, user] = await Promise.all([
    getGiftIdeaFormValues(gqlClient, params.giftIdeaId || ""),
    getUserWithGiftIdeas(gqlClient, params.userId),
  ]);

  return json({ giftIdea, user });
};
export default function EditGiftIdeaRoute() {
  let loaderData = useLoaderData<typeof loader>();
  let user = loaderData?.user;

  return (
    <MainContentPadded>
      <h1 className="mb-6 text-2xl text-secondary/90">
        {loaderData?.giftIdea?.title}
      </h1>
      <p className="text-sm">
        This gift idea will be hidden from {user?.name}, but visible to family
        and friends.
      </p>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <GiftIdeaForm
            backUrl={"/family-and-friends/" + user?.id}
            giftIdea={loaderData?.giftIdea}
          />
        </div>
      </div>
    </MainContentPadded>
  );
}
export const action = async ({ request, params }: ActionArgs) => {
  if (!("giftIdeaId" in params))
    throw new Response("Not found: missing gift idea id", { status: 404 });
  let returnTo = `/family-and-friends/${params.userId}`;

  return tryPerformMutation(request, returnTo, ({ gqlClient, formData }) =>
    updateGiftIdea(gqlClient, params?.giftIdeaId || "", formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
