import { z } from "zod";
import {
  FollowUserDocument,
  GetFamilyAndFriendsDataDocument,
  GetFollowedUserDocument,
  UnFollowUserDocument,
} from "~/.gql/graphql.types";
import { GqlClient } from "~/toolkit/http/createGqlClient";

export const getFamilyAndFriendsUsers = async (
  gqlClient: GqlClient,
  userId: string
) => {
  let data = await gqlClient.request(GetFamilyAndFriendsDataDocument, {
    userId,
  });
  let followedUsers = data?.user?.follows?.map((f) => f.user);
  let followedIds = followedUsers?.map((f) => f.id);
  let availableUsers = data?.allUsers?.filter(
    (u) => !followedIds?.includes(u.id) && u.id !== userId
  );

  return {
    followedUsers,
    availableUsers,
  };
};

const FollowUserSchema = z.object({
  userId: z.string(),
});
export const followUser = async (gqlClient: GqlClient, formData: FormData) => {
  let input = FollowUserSchema.parse(Object.fromEntries(formData));
  await gqlClient.request(FollowUserDocument, {
    followingId: input.userId,
  });
};

const UnFollowUserSchema = z.object({
  userId: z.string(),
});

export const unfollowUser = async (
  gqlClient: GqlClient,
  currenUserId: string,
  formData: FormData
) => {
  let input = UnFollowUserSchema.parse(Object.fromEntries(formData));
  await gqlClient.request(UnFollowUserDocument, {
    followerId: currenUserId,
    followingId: input.userId,
  });
};
export const getFollowedUser = async (
  gqlClient: GqlClient,
  userId: string = ""
) => {
  if (!userId) return null;
  let data = await gqlClient.request(GetFollowedUserDocument, { userId });
  return data?.user;
};
