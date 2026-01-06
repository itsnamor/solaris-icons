import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15.978 8.715-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0 5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0 4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562 5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15.978 8.715-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0 5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
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
        d="M16.728 6a.75.75 0 0 0-1.5 0v1.023a5.665 5.665 0 0 0-7.3.715c-2.237 2.29-2.237 5.997 0 8.287a5.67 5.67 0 0 0 8.144 0 5.93 5.93 0 0 0 1.634-4.874.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.644a4.17 4.17 0 0 1-5.998 0c-1.668-1.708-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.883-.822h-.558a.75.75 0 0 0 0 1.5h2.651a.75.75 0 0 0 .75-.75z"
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
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5" />
      <path
        fill="currentColor"
        d="M16.402 6.286a.75.75 0 0 0-1.287-.524l-.75.768a5.67 5.67 0 0 0-6.437 1.208c-2.237 2.29-2.237 5.996 0 8.287a5.67 5.67 0 0 0 8.144 0 5.93 5.93 0 0 0 1.634-4.874.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.643a4.17 4.17 0 0 1-5.998 0c-1.668-1.707-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.224-1.089l-.761.78A.75.75 0 0 0 13 9.75h2.652a.75.75 0 0 0 .75-.75z"
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
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15.978 8.715-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0 5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"
      />
    </>
  ),
};

function CircleArrowRotate({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleArrowRotate.displayName = "IconCircleArrowRotate";

export const IconCircleArrowRotate = CircleArrowRotate;
export const CircleArrowRotateIcon = CircleArrowRotate;
