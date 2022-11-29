import { FaUserCircle } from "react-icons/fa";

interface Props {
  className?: string;
  photo?: string;
  name?: string;
}

export function AvatarImage({ className = "", photo = "", name }: Props) {
  if (!photo) {
    return (
      <FaUserCircle
        className={`relative inline-block h-10 w-10 rounded-full ring-2 ring-gray-300 ${className}`}
      />
    );
  }
  return (
    <img
      title={name}
      className={`relative inline-block h-10 w-10 rounded-full ring-2 ring-gray-300 m-0`}
      src={photo}
      alt={name}
      referrerPolicy="no-referrer"
    />
  );
}
interface AvatarProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  icon?: React.ReactNode;
  photo?: string;
}
export function AvatarFull({
  photo = "",
  title = "",
  subtitle = "",
  icon,
}: AvatarProps) {
  return (
    <div className="flex items-center gap-3">
      {!photo && !icon && (
        <FaUserCircle className="inline-block rounded-full h-9 w-9 text-primary-200" />
      )}
      {!!icon ? icon : null}
      {photo && (
        <img
          className="inline-block m-0 rounded-full h-9 w-9"
          src={photo}
          alt={typeof title === "string" ? title : "Avatar"}
          referrerPolicy="no-referrer"
        />
      )}
      <div className="">
        <div className="m-0 text-sm font-medium text-gray-700 group-hover:text-gray-900">
          {title}
        </div>
        <div className="m-0 text-xs font-medium text-gray-500 group-hover:text-gray-700">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
