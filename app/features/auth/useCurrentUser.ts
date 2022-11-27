import { useRouteData } from "~/toolkit/remix/useRouteData";
import { AppUser } from "../users/users.types";

export const useCurrentUser = () => {
  return useRouteData((r) => r?.id === "root" && r?.data?.user) as AppUser;
};
