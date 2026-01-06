import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        fill="currentColor"
        d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"
    />
  ),
  broken: (
    <>
      <path
        fill="currentColor"
        d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.5 2.936A7 7 0 1 1 5.936 5.5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M4.25 9a7.75 7.75 0 1 1 8.5 7.714v1.036h1.75a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 1 1-1.5 0v-2.75H9.5a.75.75 0 0 1 0-1.5h1.75v-1.036A7.75 7.75 0 0 1 4.25 9"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <circle cx="12" cy="9" r="7" fill="currentColor" opacity=".5" />
      <path
        fill="currentColor"
        d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      />
    </>
  ),
};

function Female({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Female.displayName = "IconFemale";

export const IconFemale = Female;
export const FemaleIcon = Female;
