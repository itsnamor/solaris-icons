import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
  ),
  bold: <circle cx="12" cy="12" r="10" fill="currentColor" />,
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <circle cx="12" cy="12" r="7" fill="currentColor" opacity=".5" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
  ),
};

export function Circle({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircle = Circle;
export const CircleIcon = Circle;
