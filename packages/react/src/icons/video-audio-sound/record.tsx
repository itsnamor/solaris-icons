import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 12V2.458A10.02 10.02 0 0 1 21.542 9"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M11.631 10.488a1.881 1.881 0 1 1 0 3.762 1.881 1.881 0 0 1 0-3.762"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2.487-18.716a.75.75 0 0 0-.975.716v5.56a3.381 3.381 0 1 0 1.5 2.81V5.093a8.05 8.05 0 0 1 4.273 4.868.75.75 0 1 0 1.43-.45 9.54 9.54 0 0 0-6.228-6.228"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-1.822.487-3.53 1.338-5M11 2.05a9.9 9.9 0 0 0-4 1.288"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 12V2.458A10.02 10.02 0 0 1 21.542 9"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.746 1.975a.75.75 0 0 1-.672.82 9.251 9.251 0 1 0 10.13 10.13.75.75 0 1 1 1.493.15c-.54 5.432-5.122 9.675-10.697 9.675-5.937 0-10.75-4.813-10.75-10.75 0-5.575 4.243-10.158 9.676-10.697a.75.75 0 0 1 .82.672m2.81-.122a.75.75 0 0 1 .669-.111 10.77 10.77 0 0 1 7.033 7.033.75.75 0 1 1-1.431.45A9.28 9.28 0 0 0 15.75 3.54V12a3.75 3.75 0 1 1-1.5-3V2.458a.75.75 0 0 1 .306-.605M14.25 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
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
        fillRule="evenodd"
        d="M13.818 3.395a.75.75 0 0 1 .669-.11 9.54 9.54 0 0 1 6.228 6.228.75.75 0 1 1-1.43.45 8.05 8.05 0 0 0-4.273-4.87v7.276a3.381 3.381 0 1 1-1.5-2.81V4a.75.75 0 0 1 .306-.605"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 2.458A10.02 10.02 0 0 1 21.542 9M15 12V2.456"
      />
    </>
  ),
};

export function Record({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconRecord = Record;
export const RecordIcon = Record;
