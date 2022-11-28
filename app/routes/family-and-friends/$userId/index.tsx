import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { AiOutlineGift } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { MdPersonOff } from "react-icons/md";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import {
  claimGiftIdea,
  getUserWithGiftIdeas,
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
  let user = await getUserWithGiftIdeas(gqlClient, params.userId);
  return json({ user });
};

export default function UserIdRoute() {
  let data = useLoaderData<typeof loader>();
  let user = data?.user;
  let giftIdeas = user?.giftIdeas || [];
  return (
    <MainContentPadded>
      <div className="flex items-start justify-between">
        <h1 className="text-secondary/90">{user?.name || user?.username}</h1>
        <ConfirmationButton
          className="text-red-800 rounded-full btn btn-ghost btn-square"
          action="/family-and-friends?index"
          formData={{ userId: user?.id, intent: "unfollow" }}
          confirmation={{
            title: `Remove from Family & Friends?`,
            body: `You won't see their list anymore. Other people will still see any gifts you have claimed for ${user?.name}.`,
          }}
        >
          <MdPersonOff size={26} />
        </ConfirmationButton>
      </div>
      <div className="flex flex-col items-center mb-8 lg:gap-2 lg:flex-row-reverse lg:justify-start">
        <Link to="add-gift-idea" className="w-full gap-2 btn lg:w-auto">
          <AiOutlineGift size={20} /> Add a Gift Idea
        </Link>
        <div className="flex items-center gap-3">
          <span className="pl-2">
            <FaUserSecret size={18} />
          </span>
          <p>Any gift ideas you add will be hidden from {user?.name}.</p>
        </div>
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