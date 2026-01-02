import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18 6 6 18m0 0V9m0 9h9"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 18h9m-9 0V9m0 9 6.5-6.5M18 6l-2.5 2.5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.53 5.47a.75.75 0 0 1 0 1.06L7.81 17.25H15a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v7.19L17.47 5.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.56 13.5-1.06-1.06-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97 1.06 1.06z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M18.53 6.53a.75.75 0 0 0-1.06-1.06zm-1.06-1.06-12 12 1.06 1.06 12-12z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 9v9h9"
      />
    </>
  ),
};

export function ArrowLeftDown({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowLeftDown = ArrowLeftDown;
export const ArrowLeftDownIcon = ArrowLeftDown;
