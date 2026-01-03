import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17v-6"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        fill="currentColor"
        transform="matrix(1 0 0 -1 11 9)"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17v-6"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        fill="currentColor"
        transform="matrix(1 0 0 -1 11 9)"
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
        d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
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
        d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
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
        strokeWidth="1.5"
        d="M12 17v-6"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        fill="currentColor"
        transform="matrix(1 0 0 -1 11 9)"
      />
    </>
  ),
};

export function CircleILowercase({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleILowercase = CircleILowercase;
export const CircleILowercaseIcon = CircleILowercase;
