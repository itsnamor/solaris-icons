import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 6H3m17 5H3m8 5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 18 3.5-3 3.5 3"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762 3.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138zM2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 11H3m8 5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 18 3.5-3 3.5 3"
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
      d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762 3.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138zM2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M17.012 14.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 6H3m17 5H3m8 5H3"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 18 3.5-3 3.5 3"
      />
    </>
  ),
};

export function ListChevronUpSimple({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ListChevronUpSimple.displayName = "IconListChevronUpSimple";

export const IconListChevronUpSimple = ListChevronUpSimple;
export const ListChevronUpSimpleIcon = ListChevronUpSimple;
