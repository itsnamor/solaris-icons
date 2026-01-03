import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 21h16M4 3h16m-8 2.5 3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m9.28-16.03a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 21h9m7 0h-3M4 3h16m-8 2.5 3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m9.28-16.03a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.53 4.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
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
        d="M4 21h16M4 3h16"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12 5.5 3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
      />
    </>
  ),
};

export function LinesSpacing({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LinesSpacing.displayName = "IconLinesSpacing";

export const IconLinesSpacing = LinesSpacing;
export const LinesSpacingIcon = LinesSpacing;
