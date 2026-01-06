import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3 21 8-8m0 0H5m6 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m3.518 17.3 3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.947.556 3.763 1.518 5.3"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3 21 8-8m0 0H5m6 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"
      />
      <path
        fill="currentColor"
        d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"
      />
    </>
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
        d="M4.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3 21 8-8m0 0H5m6 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"
        opacity=".5"
      />
    </>
  ),
};

function CircleRightUpIn({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleRightUpIn.displayName = "IconCircleRightUpIn";

export const IconCircleRightUpIn = CircleRightUpIn;
export const CircleRightUpInIcon = CircleRightUpIn;
