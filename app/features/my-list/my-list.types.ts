import { z } from "zod";
import { GiftIdeaFieldsFragment } from "~/.gql/graphql.types";

export type GiftIdeaDto = GiftIdeaFieldsFragment;

export const GiftIdeaInputSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
});

export const GiftIdeaRemoveSchema = z.object({
  giftIdeaId: z.string().uuid(),
});
