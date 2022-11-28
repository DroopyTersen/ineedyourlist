import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import { getFollowedUser } from "~/features/family-and-friends/family-and-friends.data.server";
import {
  claimGiftIdea,
  markGiftIdeaAsPurchased,
  unclaimGiftIdea,
} from "~/features/gift-ideas/gift-ideas.data.server";
import { GiftIdeaCard } from "~/features/gift-ideas/GiftIdeaCard";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";
import { tryParseActionError } from "~/toolkit/remix/tryParseActionError.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  let user = await getFollowedUser(gqlClient, params.userId);
  return json({ user });
};

export default function UserIdRoute() {
  let data = useLoaderData<typeof loader>();
  let user = data?.user;
  let giftIdeas = user?.wishlists.flatMap((wl) => wl.giftIdeas);
  return (
    <MainContentPadded>
      <div className="flex items-start justify-between">
        <h1 className="text-secondary/90">{user?.name || user?.username}</h1>
        <ConfirmationButton
          className="text-red-800 btn btn-ghost"
          action="/family-and-friends?index"
          formData={{ userId: user?.id, intent: "unfollow" }}
          confirmation={{
            title: `Remove from Family & Friends?`,
            body: `You won't see their list anymore. Other people will still see any gifts you have claimed for ${user?.name}.`,
          }}
        >
          Remove
        </ConfirmationButton>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {giftIdeas?.map((giftIdea) => (
          <GiftIdeaCard key={giftIdea.id} giftIdea={giftIdea as any} />
        ))}
      </div>
    </MainContentPadded>
  );
}

export const action = async ({ request }: ActionArgs) => {
  let { formData, gqlClient, intent, userId } =
    await requireAuthenticatedAction(request);

  console.log("🚀 | action | intent", intent);
  try {
    if (intent === "claim") {
      await claimGiftIdea(gqlClient, formData);
    } else if (intent === "markPurchased") {
      await markGiftIdeaAsPurchased(gqlClient, userId, formData);
    } else if (intent === "unclaim") {
      await unclaimGiftIdea(gqlClient, userId, formData);
    }
    let path = new URL(request.url).pathname;
    return redirect(path);
  } catch (error) {
    return tryParseActionError(error, formData);
  }
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
