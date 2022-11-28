import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { AiOutlineGift } from "react-icons/ai";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import {
  getUserWithGiftIdeas,
  insertGiftIdea,
} from "~/features/gift-ideas/gift-ideas.data.server";
import { GiftIdeaForm } from "~/features/gift-ideas/GiftIdeaForm";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { ErrorContainer } from "~/toolkit/components/errors/ErrorContainer";
import { tryPerformMutation } from "~/toolkit/remix/tryPerformMutation";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient } = await requireAuthenticatedLoader(request);
  let user = await getUserWithGiftIdeas(gqlClient, params.userId);
  return json({ user });
};

export default function AddGiftIdeaRoute() {
  let data = useLoaderData<typeof loader>();
  let errors = useActionData()?.errors as string[];
  let user = data?.user;
  return (
    <MainContentPadded>
      <h1 className="flex items-center gap-2 text-secondary/90">
        <AiOutlineGift size={32} />
        Gift idea for {user?.name}
      </h1>
      <p>
        This gift idea will be hidden from {user?.name}, but visible to family
        and friends.
      </p>
      {errors?.length > 0 && (
        <ErrorContainer title="Unable to save gift idea">
          {errors.map((error, index) => (
            <pre
              key={index}
              className="text-gray-800 whitespace-pre-wrap"
              style={{ wordBreak: "break-word" }}
            >
              {error}
            </pre>
          ))}
        </ErrorContainer>
      )}
      <GiftIdeaForm backUrl={"/family-and-friends/" + user?.id} />
    </MainContentPadded>
  );
}

export const action = async ({ request, params }: ActionArgs) => {
  console.log("🚀 | AddGiftIdeaRoute Action | params", params);
  let returnTo = `/family-and-friends/${params.userId}`;

  return tryPerformMutation(
    request,
    returnTo,
    async ({ gqlClient, formData }) => {
      return insertGiftIdea(gqlClient, params.userId + "", formData);
    }
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
