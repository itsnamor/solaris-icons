import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
      />
    </>
  ),
  bold: (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.998 18q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 12.25c-2.314 0-4.445.526-6.025 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.003 2.62 1.276 3.662.63.512 1.51.877 2.7 1.117 1.193.242 2.748.369 4.774.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117 1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.726-3.836-1.579-.888-3.71-1.414-6.024-1.414M4.75 17.5c0-.851.621-1.775 1.96-2.528 1.317-.74 3.185-1.222 5.29-1.222s3.973.482 5.289 1.222c1.34.753 1.96 1.677 1.96 2.528 0 1.308-.04 2.044-.723 2.6-.37.302-.99.597-2.05.811-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
        opacity=".5"
      />
    </>
  ),
};

export function User({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconUser = User;
export const UserIcon = User;
