import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line
  function Input({ className, ...rest }, ref) {
    return <input ref={ref} {...rest} className={getInputClasses(className)} />;
  }
);

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  className?: string;
};

export const getInputClasses = (className) =>
  [
    "input w-full input-accent text-white border-none bg-base-200/80 disabled:text-white/60",
    className,
  ]
    .filter(Boolean)
    .join(" ");
