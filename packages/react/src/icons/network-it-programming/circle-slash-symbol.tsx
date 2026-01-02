import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13.294 7.17 12 12l-1.294 4.83"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2.018-14.635a.75.75 0 1 0-1.448-.389l-2.589 9.66a.75.75 0 0 0 1.45.388z"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13.294 7.17 12 12l-1.294 4.83"
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
    <>
      <path
        fill="currentColor"
        d="M14.018 7.365a.75.75 0 1 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.45.388z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M14.019 7.365a.75.75 0 0 0-1.449-.389l-2.588 9.66a.75.75 0 1 0 1.449.388z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13.294 7.17 12 12l-1.294 4.83"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
    </>
  ),
};

export function CircleSlashSymbol({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleSlashSymbol = CircleSlashSymbol;
export const CircleSlashSymbolIcon = CircleSlashSymbol;
