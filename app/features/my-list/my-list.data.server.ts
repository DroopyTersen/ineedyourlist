import { GraphQLClient } from "graphql-request";

import {
  CreateGenericWishListDocument,
  GetGiftIdeaByIdDocument,
  GetMyListDocument,
  GetWishlistByUserIdDocument,
  InsertGiftIdeaDocument,
  UpdateGiftIdeaDocument,
} from "~/.gql/graphql.types";
import { GqlClient } from "~/toolkit/http/createGqlClient";
import { GiftIdeaInputSchema, GiftIdeaRemoveSchema } from "./my-list.types";

export const ensureWishlist = async (gqlClient: GqlClient, userId: string) => {
  let data = await gqlClient.request(GetWishlistByUserIdDocument, { userId });
  if (!data?.wishlists?.[0]) {
    await gqlClient.request(CreateGenericWishListDocument);
  }
};

export const getMyGiftIdeas = async (gqlClient: GqlClient, userId: string) => {
  let data = await gqlClient.request(GetMyListDocument, { userId });
  return data?.wishlists?.[0]?.giftIdeas || [];
};

const getDefaultWishtListId = async (gqlClient: GqlClient, userId: string) => {
  let data = await gqlClient.request(GetWishlistByUserIdDocument, { userId });
  return data?.wishlists?.[0]?.id;
};

export const insertGiftIdea = async (
  gqlClient: GraphQLClient,
  userId: string,
  formData: FormData
) => {
  let wishlistId = await getDefaultWishtListId(gqlClient, userId);
  if (!wishlistId) throw new Error("Unable to find default wishlist");
  let input = GiftIdeaInputSchema.parse({
    ...Object.fromEntries(formData),
  });
  let data = await gqlClient.request(InsertGiftIdeaDocument, {
    input: { ...input, wishlistId },
  });
  return data?.giftIdea;
};

export const updateGiftIdea = async (
  gqlClient: GraphQLClient,
  userId: string,
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
  gqlClient: GraphQLClient,
  formData: FormData
) => {
  let input = GiftIdeaRemoveSchema.parse(Object.fromEntries(formData));
  let data = await gqlClient.request(UpdateGiftIdeaDocument, {
    id: input?.giftIdeaId,
    input: {
      removed: true,
    },
  });
  return data?.giftIdea;
};

export const getGiftIdeaById = async (
  gqlClient: GqlClient,
  giftIdeaId: string
) => {
  let data = await gqlClient.request(GetGiftIdeaByIdDocument, {
    id: giftIdeaId,
  });
  return data?.giftIdea;
};
