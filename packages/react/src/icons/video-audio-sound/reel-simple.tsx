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
        d="M12 22h10"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
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
        d="M12 22h10"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
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
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m5.48 18.5A10.75 10.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5zM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0m5.5-5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 22h10"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
    </>
  ),
};

export function ReelSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ReelSimple.displayName = "IconReelSimple";

export const IconReelSimple = ReelSimple;
export const ReelSimpleIcon = ReelSimple;
