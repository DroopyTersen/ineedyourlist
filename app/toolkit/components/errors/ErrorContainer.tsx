import { MdErrorOutline } from "react-icons/md";
export const ErrorContainer = ({
  title = "",
  children = undefined,
  className = "",
}: ErrorContainerProps) => {
  return (
    <div
      className={
        "flex flex-col rounded items-center p-4 bg-red-200 text-sm not-prose " +
        className
      }
    >
      <div className="text-red-800/60">
        <MdErrorOutline size={45} />
      </div>
      {title && <h3 className="my-2 text-2xl text-red-800">{title}</h3>}
      {children}
    </div>
  );
};

export interface ErrorContainerProps {
  /** The primary error message to display */
  title: string;
  /** Additional error details */
  children?: React.ReactNode;
  /** The icon name */
  icon?: string;
  className?: string;
}
