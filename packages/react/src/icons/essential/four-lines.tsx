import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M19 10H5m14 4H5m14-8H5m14 12H5"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M19 18.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zm.75-4.75a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75M19 10.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zM19.75 6a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M19 10h-8m-6 0h2m-2 8h8m6 0h-2m2-4H5m14-8H5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.75 10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0-8a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M19.75 10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0-8a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 10H5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 14H5m14-8H5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 18H5"
      />
    </>
  ),
};

export function FourLines({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconFourLines = FourLines;
export const FourLinesIcon = FourLines;
