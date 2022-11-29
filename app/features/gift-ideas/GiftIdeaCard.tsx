import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaPencilAlt, FaUserSecret } from "react-icons/fa";
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
  let [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  let claimStatus: ClaimStatus = "Up for grabs";
  let claim = giftIdea.claims?.[0];
  if (claim && !claim.isPurchased) {
    claimStatus = "Claimed";
  } else if (claim && claim.isPurchased) {
    claimStatus = "Purchased";
  }
  let isSecret = giftIdea?.user?.id !== giftIdea?.createdBy?.id;

  return (
    <div
      key={giftIdea.id}
      className="w-full max-w-full shadow-xl card card-compact sm:card-normal bg-base-100 not-prose"
    >
      {currentUser?.id === giftIdea?.createdBy?.id && (
        <Link
          to={giftIdea.id}
          className="absolute top-0 right-0 rounded-full btn btn-square btn-ghost"
        >
          <FaPencilAlt />
        </Link>
      )}
      <div className="card-body">
        <div className="flex flex-col mb-4 top-content">
          <div className="flex items-center justify-between">
            <h2 className="m-0 card-title text-accent">
              {/* {isSecret ? (
              <FaUserSecret />
            ) : (
              )} */}
              <ClaimStatusIcon claimStatus={claimStatus} />
              <span
                className={claimStatus === "Purchased" ? "line-through" : ""}
              >
                {giftIdea.title}
              </span>
              {giftIdea?.url && (
                <a
                  href={giftIdea?.url || "/thing"}
                  target="_blank"
                  className="p-2 hover:text-accent-focus"
                  title="Open in new tab"
                >
                  <BiLinkExternal />
                </a>
              )}
            </h2>
          </div>
          <div className="">
            <div className="text-sm">
              Suggested by:{" "}
              <span className="font-bold">{giftIdea?.createdBy?.name}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2">
          <div className="space-y-4 lg:space-y-8 left-content">
            {claim ? (
              <AvatarFull
                photo={claim?.user?.photo || ""}
                title={
                  (
                    <div className="flex items-center gap-1">
                      {claimStatus}
                      <ClaimStatusIcon claimStatus={claimStatus} />
                    </div>
                  ) as any
                }
                subtitle={
                  claim?.user?.name +
                  (claim.user?.id === currentUser?.id ? " (you!)" : "")
                }
              />
            ) : (
              <AvatarFull
                icon={<></>}
                title={claimStatus}
                subtitle={"No one has claimed this gift idea yet."}
              />
            )}
            {isSecret && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-secondary-content/30">
                <div className="flex-grow">
                  <FaUserSecret size={24} />
                </div>
                <p className="m-0 text-sm">
                  <b className="text-base">Shhhh!</b> Don't say anything to{" "}
                  {giftIdea?.user?.name} about this one. They don't know about
                  it and won't see it because it was added by{" "}
                  {giftIdea?.createdBy?.name}.
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-end right-content">
            {claim && claim?.user?.id === currentUser?.id ? (
              claim.isPurchased ? (
                <Form method="post" className="flex flex-col gap-2">
                  <p className="text-sm text-center">
                    Congrats! You purchased this already.
                  </p>
                  <input type="hidden" name="giftIdeaId" value={giftIdea.id} />
                  <button
                    name="intent"
                    value="unclaim"
                    className="btn btn-error"
                  >
                    Nevermind, I don't have it
                  </button>
                </Form>
              ) : (
                <div>
                  <Form method="post" className="flex flex-col gap-2">
                    <input
                      type="hidden"
                      name="giftIdeaId"
                      value={giftIdea.id}
                    />
                    <button
                      name="intent"
                      value="markPurchased"
                      className="btn btn-success"
                    >
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
                  <div className="m-0 mt-4 text-sm">
                    Go buy it, then come back here an mark it as purchased.
                  </div>
                </div>
              )
            ) : claim ? (
              claim.isPurchased ? (
                <p>Someone already bought this.</p>
              ) : (
                <p className="m-0 text-sm">
                  Someone else has already called dibs! Once they buy it,
                  they'll come back here and mark it as purchased.
                </p>
              )
            ) : (
              <Form method="post">
                <input type="hidden" name="giftIdeaId" value={giftIdea.id} />
                <input type="hidden" name="intent" value="claim" />
                <button className="btn btn-success btn-block">
                  I'll get it!
                </button>
              </Form>
            )}
          </div>
        </div>
        {giftIdea.description && (
          <details className="mt-4 rounded-lg bg-primary-content/30">
            <summary className="flex items-center p-4 text-sm font-bold rounded-lg hover:bg-primary-content/50">
              <span className="mr-1">
                <BsChevronDown size={16} />
              </span>
              Description
            </summary>

            <pre className="p-4 pt-1 font-sans whitespace-pre-wrap select-text">
              {giftIdea.description}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export const ClaimStatusIcon = ({
  claimStatus,
  ...rest
}: {
  claimStatus: ClaimStatus;
  [key: string]: any;
}) => {
  return (
    <>
      {claimStatus === "Up for grabs" && <SlBulb {...rest} />}
      {claimStatus === "Claimed" && <SlLock {...rest} />}
      {claimStatus === "Purchased" && <SlCheck {...rest} />}
    </>
  );
};
