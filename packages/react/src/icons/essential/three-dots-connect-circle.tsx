import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm13 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 13a7.98 7.98 0 0 0-2.708-6M4 13a7.98 7.98 0 0 1 2.708-6M10 20.748A8 8 0 0 0 12 21a8 8 0 0 0 2-.252"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m16 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452 8.8 8.8 0 0 0 4.374 0 .75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 3a3 3 0 1 0 3 3m-9.5 9a3 3 0 1 0 3 3m10 3a3 3 0 1 1 3-3M20 13a7.98 7.98 0 0 0-2.708-6M4 13a7.98 7.98 0 0 1 2.708-6M10 20.748A8 8 0 0 0 12 21a8 8 0 0 0 2-.252"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 6a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M12 3.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M9.25 18a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M5.5 15.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m13-1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M20.75 18a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452 8.8 8.8 0 0 0 4.374 0 .75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452 8.8 8.8 0 0 0 4.374 0 .75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m16 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm13 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 13a7.98 7.98 0 0 0-2.708-6M4 13a7.98 7.98 0 0 1 2.708-6M10 20.748A8 8 0 0 0 12 21a8 8 0 0 0 2-.252"
        opacity=".5"
      />
    </>
  ),
};

export function ThreeDotsConnectCircle({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ThreeDotsConnectCircle.displayName = "IconThreeDotsConnectCircle";

export const IconThreeDotsConnectCircle = ThreeDotsConnectCircle;
export const ThreeDotsConnectCircleIcon = ThreeDotsConnectCircle;
