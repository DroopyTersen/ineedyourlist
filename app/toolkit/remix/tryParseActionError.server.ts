import { json } from "@remix-run/node";
import type { ZodError } from "zod";

export const tryParseActionError = (err: any, formData: FormData) => {
  // create a variable called submittedValues checking if formData is an instance of FormData and calling Object.fromEntries on it
  // if formData is not an instance of FormData, set submittedValues to raw formData
  let submittedValues =
    formData instanceof FormData ? Object.fromEntries(formData) : formData;
  if ("issues" in err) {
    let zodError = err as ZodError;
    let errors = zodError?.issues?.map((issue) => ({
      path: issue.path.join("."),
      message: `${issue.message}`,
    }));
    console.log("Error parsing note form values", err);
    return json({ errors, submittedValues }, { status: 400 });
  }
  if (err instanceof Error) {
    return json(
      {
        errors: [err.message],
        submittedValues,
      },
      { status: 500 }
    );
  }
  return json(
    {
      errors: ["Unknown error"],
      submittedValues,
    },
    { status: 500 }
  );
};
