import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m9 15 6-6m0 0h-4.5M15 9v4.5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.75 9a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m9 15 6-6m0 0h-4.5M15 9v4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.5-3a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10.5 8.25a.75.75 0 0 0 0 1.5h2.69l-4.72 4.72a.75.75 0 1 0 1.06 1.06l4.72-4.72v2.69a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m9 15 6-6m0 0h-4.5M15 9v4.5"
      />
    </>
  ),
};

export function CircleArrowRightUp({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleArrowRightUp = CircleArrowRightUp;
export const CircleArrowRightUpIcon = CircleArrowRightUp;
