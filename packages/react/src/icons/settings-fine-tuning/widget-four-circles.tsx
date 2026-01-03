import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm8-11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m9.5-11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m14.25 6.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1.5-11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m-11 9.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
        clipRule="evenodd"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M21.5 6.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
    </>
  ),
};

export function WidgetFourCircles({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

WidgetFourCircles.displayName = "IconWidgetFourCircles";

export const IconWidgetFourCircles = WidgetFourCircles;
export const WidgetFourCirclesIcon = WidgetFourCircles;
