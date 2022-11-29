import { z } from "zod";
import {
  FollowUserDocument,
  GetFamilyAndFriendsDataDocument,
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
  let followedUsers =
    data?.user?.follows?.map((f) => {
      return {
        ...f.user,
        claimCount:
          data?.user?.claims?.filter((c) => c?.giftIdea?.userId === f?.user?.id)
            ?.length || 0,
      };
    }) || [];

  // Sort followedUsers by the number of claims they have then by their name
  followedUsers = followedUsers.sort((a, b) => {
    let aCount = a.claimCount;
    let bCount = b.claimCount;
    if (aCount < bCount) {
      return 1;
    } else if (aCount > bCount) {
      return -1;
    } else {
      return (a.name || "").localeCompare(b.name || "");
    }
  });
  let followedIds = followedUsers?.map((f) => f.id);
  let availableUsers = data?.allUsers?.filter(
    (u) => !followedIds?.includes(u.id) && u.id !== userId
  );

  return {
    followedUsers,
    availableUsers,
  };
};

export type FollowedUser = Awaited<
  ReturnType<typeof getFamilyAndFriendsUsers>
>["followedUsers"][number];

export type AvailableUser = Awaited<
  ReturnType<typeof getFamilyAndFriendsUsers>
>["availableUsers"][number];

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
