import { ActionFunction, redirect } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";
import React, { useEffect } from "react";
import { getLoginUrl } from "~/features/auth/auth0.server";
import { MainContentPadded } from "~/features/layout/AppLayout";
import { getAuthRedirectUri } from "~/toolkit/http/url.utils";

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let returnTo = (formData.get("returnTo") || new URL(request.url).origin) + "";
  if (returnTo.startsWith("/")) {
    returnTo = new URL(returnTo, new URL(request.url).origin).href;
  }
  const redirect_uri = getAuthRedirectUri(returnTo + "", "/api/auth-callback");

  let { url } = await getLoginUrl(redirect_uri);
  return redirect(url);
};

export default function () {
  return (
    <MainContentPadded className="flex flex-col items-center">
      <div className="text-center">
        <div className="max-w-5xl shadow-xl card card-compact sm:card-normal bg-base-100">
          <div className="card-body">
            {/* <h1 className="m-0 mb-4 text-accent-focus">I Need Your List!</h1> */}
            <img
              src="/logo_512_transparent.png"
              className="w-[300px] max-w-full mx-auto my-0 opacity-60"
              alt="App Logo"
            />
            <div className="relative">
              <div className="absolute top-[-120px] left-0 right-0 mx-auto text-center">
                <LoginButton className="w-32 text-white shadow-xl btn-secondary" />
              </div>
              <div className="mt-2 text-lg">
                Click above to login with your <b>Google</b> or <b>Facebook</b>{" "}
                account.
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mt-6 shadow-xl card card-compact sm:card-normal bg-base-100">
          <div className="card-body">
            <h2 className="m-0">What is it?</h2>
            <p className="m-0 mt-2 text-lg">
              <b>I Need Your List!</b> helps track your holiday shopping.
            </p>
            <ul className="text-left w-[60ch] max-w-full mx-auto">
              <li>
                Are you frustrated by constantly asking what people want for
                Christmas?
              </li>
              <li>Tired of being asked for your Christmas list?</li>
              <li>
                Annoyed that someone gave the same gift idea to 3 people and now
                you don't know whose going to buy it?
              </li>
            </ul>
            <p>
              <b>I Need Your List!</b> fixes that and more!
            </p>
            <ul className="text-left w-[60ch] max-w-full mx-auto">
              <li>
                Add gift ideas in a single place where you can share them with
                family and friends.
              </li>
              <li>
                Collaborate with family on friends to track who is buying what,
                all while keeping it a surprise for the recipient.
              </li>
              <li>
                Automatically create a shopping list based on the gifts ideas
                you called dibs on.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainContentPadded>
  );
}

export function LoginButton({ className = "" }) {
  let [searchParams] = useSearchParams();
  let [returnTo, setreturnTo] = React.useState<string>(
    searchParams.get("returnTo") || ""
  );

  useEffect(() => {
    setreturnTo((prev) => {
      if (prev.startsWith("/")) {
        return new URL(prev, window.location.origin).href;
      } else return prev;
    });
  }, [searchParams]);

  return (
    <div>
      <Form method="post" action="/login">
        <input type="hidden" name="returnTo" value={returnTo}></input>
        <button className={"btn " + className}>Log in</button>
      </Form>
    </div>
  );
}
