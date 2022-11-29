import { Link } from "@remix-run/react";
import { AvatarImage } from "~/toolkit/components/avatar/Avatar";
import { FormButton } from "~/toolkit/components/buttons/FormButton";
import { Dropdown } from "~/toolkit/components/dropdown/Dropdown";
import { AppUser } from "../users/users.types";

interface AccountDropodownProps {
  user: AppUser;
}

export function AccountDropodown({ user }: AccountDropodownProps) {
  return (
    <Dropdown align="right">
      <Dropdown.CircleTrigger>
        <AvatarImage
          photo={user.photo || ""}
          name={user.name || user.username}
        />
      </Dropdown.CircleTrigger>
      <Dropdown.Content className="p-2 min-w-[200px] text-neutral">
        <div className="my-2 text-sm text-center text-gray-500 dark:text-gray-300">
          {user.name || user.username}
        </div>
        <Link to="/my-list" className="btn btn-ghost btn-sm btn-block">
          My List
        </Link>

        {/* <Link to="/my-profile" className="btn btn-ghost btn-sm btn-block">
          My Profile
        </Link> */}
        <hr className="my-2 border-gray-900/10" />
        <FormButton
          action="/logout"
          method="post"
          className="btn btn-ghost btn-sm btn-block"
        >
          Log out
        </FormButton>
      </Dropdown.Content>
    </Dropdown>
  );
}
