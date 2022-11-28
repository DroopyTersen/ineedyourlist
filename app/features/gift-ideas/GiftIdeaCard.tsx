import { Form } from "@remix-run/react";
import { SlBulb, SlCheck, SlLock } from "react-icons/sl";
import { GiftIdeaFieldsFragment } from "~/.gql/graphql.types";
import { AvatarFull } from "~/toolkit/components/avatar/Avatar";
import { useCurrentUser } from "../auth/useCurrentUser";
type ClaimStatus = "Up for grabs" | "Claimed" | "Purchased";

export const GiftIdeaCard = ({
  giftIdea,
}: {
  giftIdea: GiftIdeaFieldsFragment;
}) => {
  let currentUser = useCurrentUser();
  let claimStatus: ClaimStatus = "Up for grabs";
  let claim = giftIdea.claims?.[0];
  if (claim && !claim.isPurchased) {
    claimStatus = "Claimed";
  } else if (claim && claim.isPurchased) {
    claimStatus = "Purchased";
  }
  return (
    <div key={giftIdea.id} className="w-full max-w-full card glass">
      <div className="card-body">
        <h2 className="m-0 card-title text-accent">
          {claimStatus === "Up for grabs" && <SlBulb />}
          {claimStatus === "Claimed" && <SlLock />}
          {claimStatus === "Purchased" && <SlCheck />}
          <span className={claimStatus === "Purchased" ? "line-through" : ""}>
            {giftIdea.title}
          </span>
        </h2>

        <div className="flex flex-row items-center justify-center gap-4 card-actions flex-nowrap">
          {!claim && (
            <>
              <div className="flex-grow">
                <div>
                  <b>{claimStatus}</b>
                </div>
                <div className="m-0">No one has claimed this gift yet.</div>
              </div>
              <Form method="post">
                <input type="hidden" name="giftIdeaId" value={giftIdea.id} />
                <input type="hidden" name="intent" value="claim" />
                <button className="btn">I'll get it!</button>
              </Form>
            </>
          )}
          {claim && claim?.user?.id === currentUser?.id && !claim.isPurchased && (
            <>
              <div className="flex-grow">
                <AvatarFull
                  photo={claim?.user?.photo || ""}
                  title={
                    (
                      <div className="flex items-center gap-1">
                        {claimStatus}
                        <SlLock />
                      </div>
                    ) as any
                  }
                  subtitle={claim?.user?.name + " (you!)"}
                />
                <div className="m-0">
                  Go buy it, then come back here an mark it as purchased.
                </div>
                <Form method="post" className="flex flex-col gap-2 mt-2">
                  <input type="hidden" name="giftIdeaId" value={giftIdea.id} />
                  <button name="intent" value="markPurchased" className="btn">
                    I bought it!
                  </button>
                  <button
                    name="intent"
                    value="unclaim"
                    className="btn btn-error"
                  >
                    Not gonna get it
                  </button>
                </Form>
              </div>
            </>
          )}
          {claim && claim?.user?.id !== currentUser?.id && !claim.isPurchased && (
            <>
              <div className="flex-grow mt-4">
                <AvatarFull
                  photo={claim?.user?.photo || ""}
                  title={
                    (
                      <div className="flex items-center gap-1">
                        {claimStatus}
                        <SlLock />
                      </div>
                    ) as any
                  }
                  subtitle={claim?.user?.name + ""}
                />
                <p className="mt-2">
                  Someone else has already called dibs! Once they buy it,
                  they'll come back here and mark it as purchased.
                </p>
              </div>
              <div></div>
            </>
          )}
          {claim && claim?.user?.id !== currentUser?.id && claim.isPurchased && (
            <>
              <div className="flex-grow mt-4">
                <AvatarFull
                  photo={claim?.user?.photo || ""}
                  subtitle={claim?.user?.name || ""}
                  title={claimStatus}
                />
                <p className="mt-2">Someone already bought this.</p>
              </div>
              <div></div>
            </>
          )}
          {claim && claim?.user?.id === currentUser?.id && claim.isPurchased && (
            <>
              <div className="flex-grow">
                <AvatarFull
                  photo={claim?.user?.photo || ""}
                  title={
                    (
                      <div className="flex items-center gap-1">
                        {claimStatus}
                        <SlLock />
                      </div>
                    ) as any
                  }
                  subtitle={claim?.user?.name + " (you!)"}
                />
                <Form method="post" className="flex flex-col gap-2 mt-2">
                  <input type="hidden" name="giftIdeaId" value={giftIdea.id} />
                  <button
                    name="intent"
                    value="unclaim"
                    className="btn btn-error"
                  >
                    Nevermind, I don't have it
                  </button>
                </Form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
