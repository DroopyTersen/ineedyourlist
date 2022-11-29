import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { BsTrash } from "react-icons/bs";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import {
  markGiftIdeaAsPurchased,
  markGiftIdeaAsUnPurchased,
  unclaimGiftIdea,
} from "~/features/gift-ideas/gift-ideas.data.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { getUserShoppingList } from "~/features/shopping-list/shopping-list.data.server";

import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { Check } from "~/toolkit/components/forms";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";
import { tryParseActionError } from "~/toolkit/remix/tryParseActionError.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient, userId } = await requireAuthenticatedLoader(request);
  let usersToShopFor = await getUserShoppingList(gqlClient, userId);

  return json({ usersToShopFor });
};

export default function ShoppingListRoute() {
  let data = useLoaderData<typeof loader>();
  let fetcher = useFetcher();

  let setIsPurchased = (giftIdeaId: string, isPurchased: boolean) => {
    fetcher.submit(
      {
        giftIdeaId,
        intent: "setPurchased",
        isPurchased: isPurchased ? "true" : "false",
      },
      {
        method: "post",
      }
    );
  };

  return (
    <MainContentPadded>
      <div className="flex items-center justify-between mb-6">
        <h1 className="m-0 text-secondary/90">Shopping List</h1>
      </div>
      <div className="space-y-2">
        {data?.usersToShopFor?.map((user) => (
          <div key={user.id} className="shadow-xl card bg-base-100">
            <div className="card-body">
              <Link to={`/family-and-friends/${user?.id}`}>
                <h2 className="m-0 text-2xl card-title text-accent">
                  {user.name}
                </h2>
              </Link>
              <div>
                {!user?.shoppingList?.length && (
                  <div className="text-center">
                    <div>
                      <em>
                        You haven't claimed any gift ideas for {user.name} yet.
                      </em>
                    </div>
                    <Link
                      to={`/family-and-friends/${user?.id}`}
                      className="mt-4 btn btn-success"
                    >
                      Claim a gift idea
                    </Link>
                  </div>
                )}
                {user.shoppingList.map((giftIdea) => (
                  <div
                    key={giftIdea.id}
                    className="flex justify-between md:grid items-center md:justify-start md:grid-cols-[500px_auto]"
                  >
                    <Check
                      name={`giftIdea-${giftIdea.id}`}
                      defaultChecked={giftIdea.isPurchased}
                      className="flex items-center justify-start flex-grow px-3 -ml-3"
                      onChange={(e) => {
                        setIsPurchased(giftIdea.id, e.currentTarget?.checked);
                      }}
                    >
                      <span
                        className={
                          "ml-2 max-w-sm md:text-xl py-1 " +
                          (giftIdea?.isPurchased ? "line-through" : "")
                        }
                      >
                        {giftIdea.title}
                      </span>
                    </Check>
                    <div>
                      <ConfirmationButton
                        formData={{
                          intent: "removeClaim",
                          giftIdeaId: giftIdea.id,
                        }}
                        className="rounded-full text-red-700/50 hover:text-red-800 hover:bg-red-200 btn btn-ghost btn-square"
                        confirmation={{
                          title: "Unclaim Gift Idea?",
                          body: (
                            <>
                              <p>
                                Are you sure you want to unclaim{" "}
                                <b>{giftIdea?.title}</b>?
                              </p>
                              <p className="mt-2">
                                This will remove it from your shopping list and
                                make it available for someone else to claim.
                              </p>
                            </>
                          ),
                        }}
                      >
                        <BsTrash size={20} />
                      </ConfirmationButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainContentPadded>
  );
}
export const action = async ({ request }: ActionArgs) => {
  let { gqlClient, userId, formData, intent } =
    await requireAuthenticatedAction(request);
  try {
    if (intent === "setPurchased") {
      let isPurchased = formData.get("isPurchased") === "true";
      let mutation = isPurchased
        ? markGiftIdeaAsPurchased
        : markGiftIdeaAsUnPurchased;
      await mutation(gqlClient, userId, formData);
      return redirect("/shopping-list");
    } else if (intent === "removeClaim") {
      await unclaimGiftIdea(gqlClient, userId, formData);
      return redirect("/shopping-list");
    }
    return json({ message: "Uknown intent" }, { status: 400 });
  } catch (err) {
    return tryParseActionError(err, formData);
  }
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
