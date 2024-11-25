import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiOutlineGift } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { MdPersonOff } from "react-icons/md";
import { GiftIdeaFieldsFragment } from "~/.gql/graphql.types";
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
dayjs.extend(relativeTime);
export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  let user = await getUserWithGiftIdeas(gqlClient, params.userId);
  return json({ user });
};

export default function UserIdRoute() {
  let data = useLoaderData<typeof loader>();
  let user = data?.user;
  let giftIdeas = user?.giftIdeas || [];

  // Sort gift ideas into active and archived
  const sixMonthsAgo = dayjs().subtract(6, "months");
  const { activeGiftIdeas, archivedGiftIdeas } = giftIdeas.reduce(
    (acc, idea) => {
      const isOld = dayjs(idea.updatedAt).isBefore(sixMonthsAgo);
      const isClaimed = idea.claims?.length > 0;
      if (isOld && isClaimed) {
        acc.archivedGiftIdeas.push(idea as any);
      } else {
        acc.activeGiftIdeas.push(idea as any);
      }
      return acc;
    },
    { activeGiftIdeas: [], archivedGiftIdeas: [] } as {
      activeGiftIdeas: GiftIdeaFieldsFragment[];
      archivedGiftIdeas: GiftIdeaFieldsFragment[];
    }
  );
  return (
    <MainContentPadded className="max-w-6xl">
      <div className="flex items-start justify-between">
        <h1 className="m-0 mb-6 text-secondary/90 lg:mb-4">
          {user?.name || user?.username}
        </h1>
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

      <div className="grid grid-cols-1 gap-4">
        <div className="shadow-xl card card-compact sm:card-normal bg-base-100">
          <div className="card-body">
            <div className="text-lg card-title">
              Have a gift idea for {user?.name}?
            </div>
            <div className="flex flex-col items-center md:gap-4 md:flex-row md:justify-start">
              <Link to="add-gift-idea" className="w-full gap-2 btn md:w-auto">
                <AiOutlineGift size={20} /> Add a Gift Idea
              </Link>
              <div className="flex items-center gap-2 mt-4 not-prose md:mt-0">
                <span className="flex-grow">
                  <FaUserSecret size={18} />
                </span>
                <p className="text-sm leading-tight">
                  Any gift ideas you add will be hidden from {user?.name}, but
                  visible to family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
        {activeGiftIdeas.length > 0 && (
          <>
            <h2 className="mt-6 mb-2 text-xl">Active Gift Ideas</h2>
            {activeGiftIdeas.map((giftIdea) => (
              <GiftIdeaCard key={giftIdea.id} giftIdea={giftIdea as any} />
            ))}
          </>
        )}

        {archivedGiftIdeas.length > 0 && (
          <>
            <h2 className="mt-8 mb-2 text-xl text-gray-600">
              Older Gift Ideas
            </h2>
            {archivedGiftIdeas.map((giftIdea) => (
              <GiftIdeaCard key={giftIdea.id} giftIdea={giftIdea as any} />
            ))}
          </>
        )}
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
