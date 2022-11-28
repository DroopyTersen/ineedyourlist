import { Link, useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { LoginButton } from "~/routes/__auth/login";
import { useEnvVar } from "~/toolkit/remix/useEnvVar";
import { useCurrentUser } from "../auth/useCurrentUser";
import { AccountDropodown } from "./AccountDropodown";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const currentUser = useCurrentUser();
  let { pathname, search } = useLocation();
  let environment = useEnvVar("PUBLIC_ENV");
  let overlayRef = useRef<HTMLLabelElement>(null);
  let checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (overlayRef.current && checkboxRef.current?.checked) {
      overlayRef.current.click();
    }
  }, [pathname, search]);
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        ref={checkboxRef}
      />
      <div className="flex flex-col drawer-content">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="rounded-full btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="flex-grow px-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo_512_transparent.png"
                className="hidden lg:inline relative w-12 h-10 -my-1 lg:h-12 lg:w-14 lg:bottom-[2px]"
              />
              <span className="font-bold lg:text-xl text-secondary">
                I Need Your List!
              </span>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              {currentUser && (
                <>
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link className="hidden rounded lg:block" to={link.to}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <AccountDropodown user={currentUser} />
                </>
              )}
              {!currentUser && (
                <>
                  <LoginButton />
                </>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay"
          ref={overlayRef}
        ></label>

        <div className="p-4 menu w-80 bg-base-100">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src="/logo_512_transparent.png"
              className="relative w-12 h-10 -my-1 lg:h-12 lg:w-14 lg:bottom-[2px]"
            />
            <span className="relative text-lg font-bold text-secondary top-2">
              I Need Your List!
            </span>
          </Link>
          <ul>
            {currentUser &&
              links.map((link) => (
                <li key={link.to}>
                  <Link className="rounded" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    label: "My List",
    to: "/my-list",
  },
  {
    label: "Family & Friends",
    to: "/family-and-friends",
  },
  {
    label: "Shopping List",
    to: "/shopping-list",
  },
];

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}
export const MainContentPadded = ({
  children,
  className = "",
}: MainContentProps) => {
  return (
    <main className={`p-3 sm:p-6 prose-sm prose max-w-none ${className}`}>
      {children}
    </main>
  );
};

export const MainContentFullBleed = ({
  children,
  className = "",
}: MainContentProps) => {
  return (
    <main className={`py-3 sm:py-6 prose-sm prose max-w-none ${className}`}>
      {children}
    </main>
  );
};
