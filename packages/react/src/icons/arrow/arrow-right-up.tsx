import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 18 18 6m0 0H9m9 0v9"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97 3.97 3.97a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28l3.97 3.97z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m6 18 2.5-2.5M18 6H9m9 0v9m0-9-6.5 6.5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97-1.06-1.06z"
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
      d="M6 18 18 6m0 0H9m9 0v9"
    />
  ),
};

function ArrowRightUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowRightUp.displayName = "IconArrowRightUp";

export const IconArrowRightUp = ArrowRightUp;
export const ArrowRightUpIcon = ArrowRightUp;
