import z from "zod";
import {
  GetUserByIdDocument,
  GetUsersByUsernameDocument,
  InsertUserDocument,
  UpdateUserDocument,
  UsersInsertInput,
} from "~/.gql/graphql.types";

import { GqlClient } from "~/toolkit/http/createGqlClient";

export const getUserByUsername = async (
  gqlClient: GqlClient,
  username: string
) => {
  let data = await gqlClient.request(GetUsersByUsernameDocument, { username });
  return data?.users?.[0];
};

export const getUserById = async (gqlClient: GqlClient, id: string) => {
  let data = await gqlClient.request(GetUserByIdDocument, { id });
  return data?.user;
};

export const insertUser = async (
  gqlClient: GqlClient,
  { name, username, photo }: UsersInsertInput
) => {
  let data = await gqlClient.request(InsertUserDocument, {
    name,
    username,
    photo,
  });
  return data?.user;
};

const UpdateUserSchema = z.object({
  name: z.string().optional(),
  photo: z.string().url().or(z.literal("")),
});

export const updateUserProfile = async (
  gqlClient: GqlClient,
  userId: string,
  formData: FormData
) => {
  let updates = UpdateUserSchema.parse(Object.fromEntries(formData));
  let data = await gqlClient.request(UpdateUserDocument, {
    id: userId,
    updates,
  });

  return data?.user;
};
