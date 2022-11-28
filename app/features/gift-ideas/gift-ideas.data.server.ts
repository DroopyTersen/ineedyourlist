import { z } from "zod";
import {
  ClaimGiftIdeaDocument,
  MarkGiftIdeaAsPurchasedDocument,
  UnClaimGiftIdeaDocument,
} from "~/.gql/graphql.types";
import { GqlClient } from "~/toolkit/http/createGqlClient";

const ClaimGiftIdeaSchema = z.object({
  giftIdeaId: z.string(),
});

export const claimGiftIdea = async (
  gqlClient: GqlClient,
  formData: FormData
) => {
  let input = ClaimGiftIdeaSchema.parse(Object.fromEntries(formData));
  await gqlClient.request(ClaimGiftIdeaDocument, {
    giftIdeaId: input.giftIdeaId,
  });
};

export const markGiftIdeaAsPurchased = async (
  gqlClient: GqlClient,
  currentUserId: string,
  formData: FormData
) => {
  let input = ClaimGiftIdeaSchema.parse(Object.fromEntries(formData));
  await gqlClient.request(MarkGiftIdeaAsPurchasedDocument, {
    giftIdeaId: input.giftIdeaId,
    userId: currentUserId,
  });
};

export const unclaimGiftIdea = async (
  gqlClient: GqlClient,
  currentUserId: string,
  formData: FormData
) => {
  let input = ClaimGiftIdeaSchema.parse(Object.fromEntries(formData));
  let data = await gqlClient.request(UnClaimGiftIdeaDocument, {
    giftIdeaId: input.giftIdeaId,
    userId: currentUserId,
  });
  console.log("🚀 | data", data);
};
