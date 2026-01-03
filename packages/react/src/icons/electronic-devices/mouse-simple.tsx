import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 5v3"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 9v6a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0m-7-4.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2m-7-6v3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 9a7.75 7.75 0 1 1 15.5 0v6a7.75 7.75 0 0 1-15.5 0zM12 2.75A6.25 6.25 0 0 0 5.75 9v6a6.25 6.25 0 1 0 12.5 0V9A6.25 6.25 0 0 0 12 2.75m0 1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 5v3"
        opacity=".5"
      />
    </>
  ),
};

export function MouseSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMouseSimple = MouseSimple;
export const MouseSimpleIcon = MouseSimple;
