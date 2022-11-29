import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { AiOutlineGift } from "react-icons/ai";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import {
  getUserWithGiftIdeas,
  removeGiftIdea,
} from "~/features/gift-ideas/gift-ideas.data.server";
import { MainContentPadded } from "~/features/layout/AppLayout";

import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient, userId } = await requireAuthenticatedLoader(request);
  let data = await getUserWithGiftIdeas(gqlClient, userId);
  return json({ myGiftIdeas: data?.giftIdeas || [] });
};

export default function MyListRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <div className="flex items-center justify-between mb-6">
        <h1 className="m-0 text-secondary/90">My List</h1>

        <Link to="add" className="gap-2 btn">
          <AiOutlineGift size={20} />
          Add a Gift Idea
        </Link>
      </div>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <ul className="m-0">
            {data?.myGiftIdeas?.map((item) => (
              <li key={item.id} className="py-1">
                <Link to={item.id} className="text-lg lg:text-xl text-accent">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {data?.myGiftIdeas?.length === 0 && (
            <div className="space-y-4 text-center">
              <p className="m-0">You don't have any gift ideas yet. Add one!</p>
              <div>
                <Link to="add" className="gap-2 btn">
                  <AiOutlineGift size={20} />
                  Add your first gift idea
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainContentPadded>
  );
}

export const action = async ({ request }: ActionArgs) => {
  console.log("action", request.url);

  return tryPerformMutation(request, "/my-list", ({ gqlClient, formData }) =>
    removeGiftIdea(gqlClient, formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
