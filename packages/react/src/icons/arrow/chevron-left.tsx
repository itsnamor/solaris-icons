import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m15 5-6 7 6 7"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="m8.165 11.63 6.63-6.43C15.21 4.799 16 5.042 16 5.57v12.86c0 .528-.79.771-1.205.37l-6.63-6.43a.5.5 0 0 1 0-.74"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m15 19-6-7 1.5-1.75M15 5l-2 2.333"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11.596 8.303 8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z"
      />
      <path
        fill="currentColor"
        d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z"
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
      d="m15 5-6 7 6 7"
    />
  ),
};

function ChevronLeft({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ChevronLeft.displayName = "IconChevronLeft";

export const IconChevronLeft = ChevronLeft;
export const ChevronLeftIcon = ChevronLeft;
