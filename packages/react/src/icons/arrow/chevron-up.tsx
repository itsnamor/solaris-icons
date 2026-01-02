import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m19 15-7-6-7 6"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="m12.37 8.165 6.43 6.63c.401.414.158 1.205-.37 1.205H5.57c-.528 0-.771-.79-.37-1.205l6.43-6.63a.5.5 0 0 1 .74 0"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m19 15-7-6-1.75 1.5M5 15l2.333-2"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="m8.303 11.596 3.327-3.431a.5.5 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z"
      />
      <path
        fill="currentColor"
        d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m19 15-7-6-7 6"
    />
  ),
};

export function ChevronUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconChevronUp = ChevronUp;
export const ChevronUpIcon = ChevronUp;
