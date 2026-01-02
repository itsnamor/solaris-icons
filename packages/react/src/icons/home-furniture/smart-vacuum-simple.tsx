import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.52 19.332A9.96 9.96 0 0 1 12 21.75a9.96 9.96 0 0 1-6.52-2.418L2.53 22.28a.75.75 0 0 1-1.06-1.06l2.948-2.95A9.96 9.96 0 0 1 2 11.75c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.418 6.52l2.948 2.95a.75.75 0 1 1-1.06 1.06zM8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 0-3 3m0 6v-2M2 22l2.5-2.5M22 22l-2.5-2.5"
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
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 2.699-.994 5.165-2.637 7.053l2.417 2.417a.75.75 0 1 1-1.06 1.06l-2.417-2.417A10.7 10.7 0 0 1 12 22.75c-2.699 0-5.165-.994-7.053-2.637L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.417-2.417A10.7 10.7 0 0 1 1.25 12M12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.06 19-3.53 3.53a.75.75 0 0 1-1.06-1.06L5 17.94zm11.88 0 3.53 3.53a.75.75 0 1 0 1.06-1.06L19 17.94z"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9.75 8.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10M8.25 8.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5"
        opacity=".5"
      />
    </>
  ),
};

export function SmartVacuumSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSmartVacuumSimple = SmartVacuumSimple;
export const SmartVacuumSimpleIcon = SmartVacuumSimple;
