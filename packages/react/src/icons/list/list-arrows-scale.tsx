import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 17h7m-7-5h7M4 7h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 4v16m0-16-3 4m3-4 3 4m-3 12 3-4m-3 4-3-4"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 1 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3M3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 17h7m-7-5h7M4 7h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 4v16m0-16-3 4m3-4 3 4m-3 12 3-4m-3 4-3-4"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 1 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3M3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 0 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 17h7m-7-5h7M4 7h7"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 4v16m0-16-3 4m3-4 3 4m-3 12 3-4m-3 4-3-4"
      />
    </>
  ),
};

export function ListArrowsScale({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListArrowsScale = ListArrowsScale;
export const ListArrowsScaleIcon = ListArrowsScale;
