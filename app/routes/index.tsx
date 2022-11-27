import { Link } from "@remix-run/react";
import { MainContentPadded } from "~/features/layout/AppLayout";
import {
  InputField,
  SelectField,
  TextAreaField,
} from "~/toolkit/components/forms";
import { DeleteButton } from "~/toolkit/components/modal/DeleteButton";
import { useEnvVars } from "~/toolkit/remix/useEnvVar";

export default function Index() {
  let config = useEnvVars();
  return (
    <MainContentPadded>
      <h1 className="text-secondary/90">{config.PUBLIC_ENV} environment</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div>
        <form className="max-w-xs">
          <fieldset className="flex flex-col gap-4">
            <InputField label="First Name" name="firstName" required />
            <InputField label="Last Name" name="lastName" required />
            <SelectField label="Job" name="job" hint="Choose the closest match">
              <option></option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Product Manager</option>
            </SelectField>

            <TextAreaField label="Bio" name="bio" altLabel="0 of 240 chars" />

            <div className="flex justify-end gap-2">
              <Link to="/" className="btn btn-ghost">
                Cancel
              </Link>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <DeleteButton
        className="btn-sm lg:btn-md"
        // action={appRoutes.teams.dotDetails(teamId, dot?.id)}
        confirmation={{
          title: "Delete Dot?",
          body: <div>Are you sure you want to delete this thing?</div>,
        }}
        formData={{
          intent: "delete",
          item_id: "123",
        }}
      >
        Remove thing
      </DeleteButton>
    </MainContentPadded>
  );
}
