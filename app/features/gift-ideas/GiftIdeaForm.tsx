import { Form, Link } from "@remix-run/react";
import { GiftIdeaFormFieldsFragment } from "~/.gql/graphql.types";
import { InputField, TextAreaField } from "~/toolkit/components/forms";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";

interface GiftIdeaFormProps {
  backUrl: string;
  giftIdea?: Partial<GiftIdeaFormFieldsFragment> | null;
}

export function GiftIdeaForm({ backUrl, giftIdea }: GiftIdeaFormProps) {
  return (
    <Form className="max-w-2xl p-4 space-y-6 bg-gray-100 rounded" method="post">
      <InputField
        label="Title"
        name="title"
        hint="What is it?"
        required
        autoFocus
        defaultValue={giftIdea?.title || ""}
      />
      <InputField
        label="Link"
        name="url"
        hint="Is there a url to help someone get the right thing?"
        defaultValue={giftIdea?.url || ""}
      />
      <TextAreaField
        label="Description"
        name="description"
        hint="Tell us more about it. Size? Color? Etc..."
        defaultValue={giftIdea?.description || ""}
      />
      <div className="flex items-center justify-between gap-2">
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
            Remove
          </ConfirmationButton>
        ) : (
          <div></div>
        )}
        <div className="space-x-2">
          <Link to={backUrl} className="w-32 btn btn-ghost">
            Cancel
          </Link>
          <button type="submit" className="w-32 btn">
            Save
          </button>
        </div>
      </div>
    </Form>
  );
}
