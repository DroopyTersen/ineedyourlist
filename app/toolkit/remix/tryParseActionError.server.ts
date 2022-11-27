import { json } from "@remix-run/node";
import type { ZodError } from "zod";

export const tryParseActionError = (err: any, formData: any) => {
  if ("issues" in err) {
    let zodError = err as ZodError;
    let errors = zodError?.issues?.map((issue) => ({
      path: issue.path.join("."),
      message: `${issue.message}`,
    }));
    console.log("Error parsing note form values", err);
    return json({ errors, submittedValues: formData });
  }
  return json({ errors: [err], submittedValues: formData });
};
