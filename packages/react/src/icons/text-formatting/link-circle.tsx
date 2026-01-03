import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 12a6 6 0 1 1-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 12a6 6 0 1 1 6 6"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5M17.75 12a3.25 3.25 0 0 1-3.25 3.25.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0 3.25 3.25 0 0 1 6.5 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 12a6 6 0 1 1-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M2.75 12C2.75 9.1 5.1 6.75 8 6.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 1 0 14.75 12a.75.75 0 0 0-1.5 0 5.25 5.25 0 1 1-10.5 0"
      />
      <path
        fill="currentColor"
        d="M21.25 12c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 0 0 0 1.5A6.75 6.75 0 1 0 9.25 12a.75.75 0 0 0 1.5 0 5.25 5.25 0 1 1 10.5 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5"
      />
      <path
        fill="currentColor"
        d="M17.75 12a3.25 3.25 0 0 1-3.25 3.25.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0 3.25 3.25 0 0 1 6.5 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 12a6 6 0 1 1-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 12a6 6 0 1 1 6 6"
        opacity=".5"
      />
    </>
  ),
};

export function LinkCircle({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LinkCircle.displayName = "IconLinkCircle";

export const IconLinkCircle = LinkCircle;
export const LinkCircleIcon = LinkCircle;
