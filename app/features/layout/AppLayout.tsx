import { Link } from "@remix-run/react";
import { LoginButton } from "~/routes/__auth/login";
import { Dropdown } from "~/toolkit/components/dropdown/Dropdown";
import { useEnvVar } from "~/toolkit/remix/useEnvVar";
import { useCurrentUser } from "../auth/useCurrentUser";
import { AccountDropodown } from "./AccountDropodown";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const currentUser = useCurrentUser();
  let environment = useEnvVar("PUBLIC_ENV");
  return (
    <>
      <header className="w-full px-2 navbar">
        <div className="navbar-start">
          <Dropdown align="left" className="w-52">
            <Dropdown.CircleTrigger>
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
            </Dropdown.CircleTrigger>
            <Dropdown.MenuContent>
              <li>
                <Link to="/my-list">My List</Link>
              </li>
              <li>
                <Link to="/family-and-friends">Family {"&"} Friends</Link>
              </li>
              <li>
                <Link to="/my-list">Shopping List</Link>
              </li>
            </Dropdown.MenuContent>
          </Dropdown>
        </div>
        <div className="relative navbar-center">
          {environment && environment !== "PROD" && (
            <span className="absolute top-0 text-[11px] text-center w-full dark:text-white/50">
              {environment}
            </span>
          )}
          <Link
            to="/"
            className="text-xl normal-case dark:text-white text-primary-focus/80 btn btn-ghost"
          >
            I Need Your List
          </Link>
        </div>
        <div className="navbar-end">
          <div>
            {currentUser ? (
              <AccountDropodown user={currentUser} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>
      {children}
    </>
  );
}

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
