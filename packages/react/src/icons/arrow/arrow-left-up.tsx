import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18 18 6 6m0 0h9M6 6v9"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97-3.97 3.97A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28l-3.97 3.97z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 6h9M6 6v9m0-9 6.5 6.5M18 18l-2.5-2.5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.25 6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 1 1-1.06 1.06L6.75 7.81V15a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97 1.06-1.06z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M17.47 18.53a.75.75 0 1 0 1.06-1.06zm1.06-1.06-12-12-1.06 1.06 12 12z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 6H6v9"
      />
    </>
  ),
};

export function ArrowLeftUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowLeftUp.displayName = "IconArrowLeftUp";

export const IconArrowLeftUp = ArrowLeftUp;
export const ArrowLeftUpIcon = ArrowLeftUp;
