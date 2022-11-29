import { Form, Link } from "@remix-run/react";
import { BsTrash } from "react-icons/bs";
import { GiftIdeaFormFieldsFragment } from "~/.gql/graphql.types";
import { InputField, TextAreaField } from "~/toolkit/components/forms";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";

interface GiftIdeaFormProps {
  backUrl: string;
  giftIdea?: Partial<GiftIdeaFormFieldsFragment> | null;
}

export function GiftIdeaForm({ backUrl, giftIdea }: GiftIdeaFormProps) {
  return (
    <Form className="max-w-2xl space-y-6" method="post">
      <InputField
        label="Title"
        name="title"
        hint="What is it?"
        required
        autoFocus
        defaultValue={giftIdea?.title || ""}
      />
      <TextAreaField
        label="Link"
        name="url"
        rows={3}
        hint="Is there a url to help someone get the right thing?"
        defaultValue={giftIdea?.url || ""}
      />
      <TextAreaField
        label="Description"
        name="description"
        rows={5}
        hint="Tell us more about it. Size? Color? Etc..."
        defaultValue={giftIdea?.description || ""}
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        {giftIdea?.id ? (
          <ConfirmationButton
            action="/my-list?index"
            className="btn btn-error"
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
        ) : (
          <div></div>
        )}
        <div className="space-x-2">
          <Link to={backUrl} className="w-28 btn btn-ghost">
            Cancel
          </Link>
          <button type="submit" className="w-28 btn">
            Save
          </button>
        </div>
      </div>
    </Form>
  );
}
