import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m6 6 12 12m0 0V9m0 9H9"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97 3.97-3.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28l3.97-3.97z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18 18H9m9 0V9m0 9-6.5-6.5M6 6l2.5 2.5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0l10.72 10.72V9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h7.19L5.47 6.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.47 8.47a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97-1.06 1.06z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M6.53 5.47a.75.75 0 0 0-1.06 1.06zM5.47 6.53l12 12 1.06-1.06-12-12z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 9v9H9"
      />
    </>
  ),
};

export function ArrowRightDown({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowRightDown.displayName = "IconArrowRightDown";

export const IconArrowRightDown = ArrowRightDown;
export const ArrowRightDownIcon = ArrowRightDown;
