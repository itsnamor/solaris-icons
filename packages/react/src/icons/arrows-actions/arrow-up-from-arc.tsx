import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12a8 8 0 1 0 16 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 14V4m0 0 3 3m-3-3L9 7"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.845 7.905a.75.75 0 0 0 1.06 0l1.72-1.72v8.19a.75.75 0 0 0 1.5 0v-8.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.375 20.375a8 8 0 0 0 8-8h-3.75c-.943 0-1.414 0-1.707.293s-.293.764-.293 1.707a2.25 2.25 0 0 1-4.5 0c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293h-3.75a8 8 0 0 0 8 8"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 14V4m0 0 3 3m-3-3L9 7"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M14.47 7.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V5.81z"
      />
      <path
        fill="currentColor"
        d="M20.75 12a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0 .75.75 0 0 0-1.5 0 8.75 8.75 0 1 0 17.5 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.53 7.53a.75.75 0 0 1-1.06 0l-1.72-1.72V14a.75.75 0 0 1-1.5 0V5.81L9.53 7.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06"
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
        d="M4 12a8 8 0 1 0 16 0"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 14V4m0 0 3 3m-3-3L9 7"
      />
    </>
  ),
};

export function ArrowUpFromArc({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowUpFromArc = ArrowUpFromArc;
export const ArrowUpFromArcIcon = ArrowUpFromArc;
