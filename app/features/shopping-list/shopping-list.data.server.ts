import { GetUserShoppingListDocument } from "~/.gql/graphql.types";

import { GqlClient } from "~/toolkit/http/createGqlClient";

export const getUserShoppingList = async (
  gqlClient: GqlClient,
  userId: string
) => {
  let data = await gqlClient.request(GetUserShoppingListDocument, { userId });
  let claims = data?.user?.claims || [];

  let usersToShopFor = data?.followedUsers?.map(({ user }) => {
    return {
      ...user,
      shoppingList: claims
        .filter((claim) => claim.giftIdea?.userId === user.id)
        .map((claim) => ({
          id: claim.giftIdea?.id,
          title: claim.giftIdea?.title,
          isPurchased: claim.isPurchased,
        })),
    };
  });

  // Sort usersToShopFor by the number of items in their shopping list then by their name
  usersToShopFor = usersToShopFor.sort((a, b) => {
    let aCount = a.shoppingList.length;
    let bCount = b.shoppingList.length;
    if (aCount < bCount) {
      return 1;
    } else if (aCount > bCount) {
      return -1;
    } else {
      return (a.name || "").localeCompare(b.name || "");
    }
  });
  return usersToShopFor;
};
