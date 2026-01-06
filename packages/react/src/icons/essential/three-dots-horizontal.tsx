import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M5 14a2 2 0 1 0-2-2"
      />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21 12a2 2 0 1 1-2-2"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7-1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill="currentColor"
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
};

function ThreeDotsHorizontal({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ThreeDotsHorizontal.displayName = "IconThreeDotsHorizontal";

export const IconThreeDotsHorizontal = ThreeDotsHorizontal;
export const ThreeDotsHorizontalIcon = ThreeDotsHorizontal;
