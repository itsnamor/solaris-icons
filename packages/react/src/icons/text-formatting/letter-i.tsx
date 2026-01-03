import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 22h12M9 2h12M9 22l6-20"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.977 1H9a1 1 0 1 0 0 2h4.656l-5.4 18H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-4.656l5.4-18H21a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 22h12M9 2h12M9 22l2.4-8M15 2l-2.4 8"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.983 1.25H9a.75.75 0 0 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 1 0 0 1.5h12a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.656 3-5.4 18h2.088l5.4-18z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 22h12M9 2h12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m9 22 6-20"
        opacity=".5"
      />
    </>
  ),
};

export function LetterI({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LetterI.displayName = "IconLetterI";

export const IconLetterI = LetterI;
export const LetterIIcon = LetterI;
