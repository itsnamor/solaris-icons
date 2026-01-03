import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20a8 8 0 1 1 0-16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12h10m0 0-3-3m3 3-3 3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293a2.25 2.25 0 0 1 0-4.5c.943 0 1.414-.092 1.707-.385S12 8.693 12 7.75V4a8 8 0 0 0-8 8"
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
        d="M10 12h10m0 0-3-3m3 3-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12 3.25a.75.75 0 0 1 0 1.5 7.25 7.25 0 0 0 0 14.5.75.75 0 0 1 0 1.5 8.75 8.75 0 1 1 0-17.5"
      />
      <path
        fill="currentColor"
        d="M16.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H10a.75.75 0 0 1 0-1.5h8.19z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path fill="currentColor" d="M12 20a8 8 0 1 1 0-16z" opacity=".5" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20a8 8 0 1 1 0-16"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12h10m0 0-3-3m3 3-3 3"
      />
    </>
  ),
};

export function ArrowRightFromArc({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowRightFromArc.displayName = "IconArrowRightFromArc";

export const IconArrowRightFromArc = ArrowRightFromArc;
export const ArrowRightFromArcIcon = ArrowRightFromArc;
