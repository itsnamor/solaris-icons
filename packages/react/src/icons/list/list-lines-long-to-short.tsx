import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M20 7H4m11 5H4m5 5H4"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M20 7H4m11 5H4m5 5H4"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M3.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
        opacity=".4"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 7H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 12H4"
        opacity=".7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 17H4"
        opacity=".4"
      />
    </>
  ),
};

export function ListLinesLongToShort({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListLinesLongToShort = ListLinesLongToShort;
export const ListLinesLongToShortIcon = ListLinesLongToShort;
