import { Form, Link } from "@remix-run/react";
import { InputField, TextAreaField } from "~/toolkit/components/forms";
import { ConfirmationButton } from "~/toolkit/components/modal/ConfirmationButton";
import { GiftIdeaDto } from "./my-list.types";

interface GiftIdeaFormProps {
  backUrl: string;
  giftIdea?: Partial<GiftIdeaDto> | null;
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
        {giftIdea?.id && (
          <ConfirmationButton
            action="/my-list?index"
            className="btn btn-error"
            formData={{ giftIdeaId: giftIdea?.id }}
            confirmation={{
              title: `Remove from your list?`,
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
        )}
        <div className="space-x-2">
          <Link to={backUrl} className="btn btn-ghost">
            Cancel
          </Link>
          <button type="submit" className="btn">
            Save
          </button>
        </div>
      </div>
    </Form>
  );
}
