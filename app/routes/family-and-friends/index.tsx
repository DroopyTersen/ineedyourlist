import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import {
  requireAuthenticatedAction,
  requireAuthenticatedLoader,
} from "~/features/auth/auth.remix.server";
import {
  followUser,
  getFamilyAndFriendsUsers,
  unfollowUser,
} from "~/features/family-and-friends/family-and-friends.data.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { AvatarFull } from "~/toolkit/components/avatar/Avatar";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";
import { SelectField } from "~/toolkit/components/forms";
import { tryParseActionError } from "~/toolkit/remix/tryParseActionError.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient, userId } = await requireAuthenticatedLoader(request);
  let data = await getFamilyAndFriendsUsers(gqlClient, userId);
  return json(data);
};

export default function FamilyAndFrinedsRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <h1 className="mb-1 text-secondary/90">Family {"&"} Friends</h1>

      <div className="mt-6 shadow-xl card bg-base-100 not-prose">
        <div className="card-body">
          <h2 className="m-0 card-title">Who are you buying gifts for?</h2>
          {data?.availableUsers?.length > 0 && (
            <>
              <Form className="flex items-start gap-2" method="post">
                <SelectField name="userId" label="">
                  <option value="">Add someone...</option>
                  {data?.availableUsers?.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </SelectField>
                <button
                  name="intent"
                  value="followUser"
                  type="submit"
                  className="relative btn bottom-[2px]"
                >
                  Add
                </button>
              </Form>
              <p className="-mt-1 text-sm leading-tight">
                A person will show up once they've logged in the first time.
              </p>
            </>
          )}
          <ul className="mt-4 text-xl list-none">
            {data?.followedUsers?.map((user) => (
              <li key={user.id}>
                <Link className="block py-4 text-accent" to={`${user.id}`}>
                  <AvatarFull
                    title={
                      (
                        <span className="text-xl text-accent">{user.name}</span>
                      ) as any
                    }
                    photo={user?.photo || ""}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainContentPadded>
  );
}

export const action = async ({ request }: ActionArgs) => {
  let { gqlClient, userId, intent, formData } =
    await requireAuthenticatedAction(request);

  try {
    if (intent === "unfollow") {
      await unfollowUser(gqlClient, userId, formData);
    } else {
      await followUser(gqlClient, formData);
    }
    return redirect("/family-and-friends");
  } catch (err: unknown) {
    return tryParseActionError(err, formData);
  }
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
