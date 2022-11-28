import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { tryPerformMutation } from "~/common/remix.utils";
import { requireAuthenticatedLoader } from "~/features/auth/auth.remix.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import {
  getMyGiftIdeas,
  removeGiftIdea,
} from "~/features/my-list/my-list.data.server";
import { AppErrorBoundary } from "~/toolkit/components/errors/AppErrorBoundary";

export const loader = async ({ request, params }: LoaderArgs) => {
  let { gqlClient, userId } = await requireAuthenticatedLoader(request);
  let wishListItems = await getMyGiftIdeas(gqlClient, userId);
  return json({ items: wishListItems });
};

export default function MyListRoute() {
  let data = useLoaderData<typeof loader>();
  return (
    <MainContentPadded>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary/90">My List</h1>
        <Link to="add" className="btn">
          Add a Gift Idea
        </Link>
      </div>
      <ul>
        {data?.items?.map((item) => (
          <li key={item.id}>
            <Link to={item.id} className="text-accent">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainContentPadded>
  );
}

export const action = async ({ request }: ActionArgs) => {
  console.log("action", request.url);

  return tryPerformMutation(request, "/my-list", ({ gqlClient, formData }) =>
    removeGiftIdea(gqlClient, formData)
  );
};

export const ErrorBoundary = AppErrorBoundary;
export const CatchBoundary = AppErrorBoundary;
