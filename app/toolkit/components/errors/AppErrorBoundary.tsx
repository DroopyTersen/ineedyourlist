import { useCatch } from "@remix-run/react";
import { ErrorContainer } from "./ErrorContainer";

// We can reuse this component for
// both unhandled exceptions (ErrorBoundary)
// and thrown Responses (CatchBoundary)
export const AppErrorBoundary = ({
  error: errorBoundaryError,
}: {
  error?: any;
}) => {
  let caughtThing = useCatch();
  let error = caughtThing || errorBoundaryError;
  console.log("🚀 | error", error);
  let { title = "Uh oh...", message } = tryParseError(error);

  return (
    <ErrorContainer title={title} className="m-4 md:m-6">
      <pre
        className="text-gray-800 whitespace-pre-wrap"
        style={{ wordBreak: "break-word" }}
      >
        {message}
      </pre>
    </ErrorContainer>
  );
};

type ThrownErrorType =
  | string
  | Error
  | { status: number; data: any; statusText: string }
  // DIY Error
  | { message: string }
  // Diy error array
  | { message: string }[];

let tryParseError = (
  thrown: ThrownErrorType
): { title?: string; message: string } => {
  if (!thrown) return { message: "Unknown error" };
  if (typeof thrown === "string") return { message: thrown };
  if ("message" in thrown) return { message: thrown.message };
  if ("data" in thrown && thrown.data) {
    return { message: thrown.data?.message || thrown.data };
  }
  if ("statusText" in thrown && "status" in thrown) {
    if (thrown.status === 404) {
      return {
        title: "Not Found (404)",
        message:
          "Whatever you're looking for doesn't exist (or you don't have access).",
      };
    }
    return { message: `${thrown.status} ${thrown.statusText}` };
  }
  if (Array.isArray(thrown))
    return {
      message: thrown
        .map((e) => e?.message)
        .filter(Boolean)
        .join(", "),
    };

  return { message: "Unknown error" };
};
