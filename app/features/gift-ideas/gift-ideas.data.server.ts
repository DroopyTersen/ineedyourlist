import { z } from "zod";
import {
  ClaimGiftIdeaDocument,
  GetGiftIdeaFormValuesDocument,
  GetUserGiftIdeasDocument,
  InsertGiftIdeaDocument,
  MarkGiftIdeaAsPurchasedDocument,
  MarkGiftIdeaAsUnPurchasedDocument,
  UnClaimGiftIdeaDocument,
  UpdateGiftIdeaDocument,
} from "~/.gql/graphql.types";
import { GqlClient } from "~/toolkit/http/createGqlClient";
import { GiftIdeaInputSchema, GiftIdeaRemoveSchema } from "./gift-idea.types";

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
export const markGiftIdeaAsUnPurchased = async (
  gqlClient: GqlClient,
  currentUserId: string,
  formData: FormData
) => {
  let input = ClaimGiftIdeaSchema.parse(Object.fromEntries(formData));
  await gqlClient.request(MarkGiftIdeaAsUnPurchasedDocument, {
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

export const insertGiftIdea = async (
  gqlClient: GqlClient,
  userId: string,
  formData: FormData
) => {
  let input = GiftIdeaInputSchema.parse(Object.fromEntries(formData));
  console.log("🚀 | insertGiftIdea input", input);
  let data = await gqlClient.request(InsertGiftIdeaDocument, {
    input: {
      ...input,
      userId,
    },
  });
  return data?.giftIdea;
};

export const updateGiftIdea = async (
  gqlClient: GqlClient,
  giftIdeaId: string,
  formData: FormData
) => {
  let input = GiftIdeaInputSchema.parse({
    ...Object.fromEntries(formData),
  });
  let data = await gqlClient.request(UpdateGiftIdeaDocument, {
    id: giftIdeaId,
    input,
  });
  return data?.giftIdea;
};

export const removeGiftIdea = async (
  gqlClient: GqlClient,
  formData: FormData
) => {
  let input = GiftIdeaRemoveSchema.parse(Object.fromEntries(formData));
  // TODO: prevent removal if someone has already purchased/claimed it
  let data = await gqlClient.request(UpdateGiftIdeaDocument, {
    id: input?.giftIdeaId,
    input: {
      removed: true,
    },
  });
  return data?.giftIdea;
};

export const getGiftIdeaFormValues = async (
  gqlClient: GqlClient,
  giftIdeaId: string
) => {
  let data = await gqlClient.request(GetGiftIdeaFormValuesDocument, {
    id: giftIdeaId,
  });
  return data?.giftIdea;
};

export const getUserWithGiftIdeas = async (
  gqlClient: GqlClient,
  userId: string = ""
) => {
  if (!userId) return null;
  let data = await gqlClient.request(GetUserGiftIdeasDocument, { userId });
  return data?.user;
};
