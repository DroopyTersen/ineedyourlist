import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { GiftIdeaFormFieldsFragment } from "~/.gql/graphql.types";
import { TextAreaField } from "~/toolkit/components/forms";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";
import { useCurrentUser } from "../auth/useCurrentUser";

interface GiftIdeaFormProps {
  backUrl: string;
  giftIdea?: Partial<GiftIdeaFormFieldsFragment> | null;
}

export function GiftIdeaForm({ backUrl, giftIdea }: GiftIdeaFormProps) {
  let currentUser = useCurrentUser();
  let [url, setUrl] = useState(giftIdea?.url || "");
  return (
    <Form className="relative flex flex-col gap-4" method="post">
      {giftIdea?.id && giftIdea?.createdById === currentUser?.id && (
        <ConfirmationButton
          action="/my-list?index"
          className="absolute rounded-full -top-4 -right-4 text-red-700/50 hover:text-red-800 hover:bg-red-200 btn btn-ghost btn-square"
          formData={{ giftIdeaId: giftIdea?.id, returnTo: backUrl }}
          confirmation={{
            title: `Remove from Gift Idea?`,
            body: (
              <div>
                <p>
                  If someone has already claimed this gift,{" "}
                  <b>{giftIdea?.title}</b>, they will still see it.
                </p>
              </div>
            ),
          }}
        >
          <BsTrash size={20} />
        </ConfirmationButton>
      )}
      <TextAreaField
        label="Title"
        name="title"
        hint="What is it?"
        rows={2}
        required
        autoFocus
        defaultValue={giftIdea?.title || ""}
      />
      <div>
        <TextAreaField
          label="Link"
          altLabel={
            url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm uppercase link link-accent"
              >
                Test Link
                <BiLinkExternal />
              </a>
            ) : undefined
          }
          name="url"
          rows={3}
          hint="Is there a url to help someone get the right thing?"
          defaultValue={giftIdea?.url || ""}
          onChange={(e) => setUrl(e.currentTarget.value)}
        />
        {url && <div className="mt-2"></div>}
      </div>
      <TextAreaField
        label="Description"
        name="description"
        rows={5}
        hint="Tell us more about it. Size? Color? Etc..."
        defaultValue={giftIdea?.description || ""}
      />

      <div className="flex flex-wrap items-center justify-end gap-2">
        <Link to={backUrl} className="w-28 btn btn-ghost">
          Cancel
        </Link>
        <button type="submit" className="w-28 btn btn-success">
          Save
        </button>
      </div>
    </Form>
  );
}
