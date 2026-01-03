import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 6H3m8 10H3m9-5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72 1.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 16H3m9-5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M3 6h10.5M20 6h-2.25"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6M17.5 8.25a.75.75 0 0 1 .75.75v6.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V9a.75.75 0 0 1 .75-.75M2.25 11a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.97 17.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 6H3m8 10H3m9-5H3"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
      />
    </>
  ),
};

export function ListArrowDownSimple({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListArrowDownSimple = ListArrowDownSimple;
export const ListArrowDownSimpleIcon = ListArrowDownSimple;
