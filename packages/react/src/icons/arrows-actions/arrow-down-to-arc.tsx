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
        d="M12 4v10m0 0 3-3m-3 3-3-3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.748 12c-.448 0-.84.274-1.157.591l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3C7.092 12.274 6.7 12 6.252 12H4a8 8 0 1 0 16 0z"
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
        d="M12 4v10m0 0 3-3m-3 3-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M14.47 10.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4a.75.75 0 0 1 1.5 0v8.19z"
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
        d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06"
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
        d="M12 4v10m0 0 3-3m-3 3-3-3"
      />
    </>
  ),
};

function ArrowDownToArc({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowDownToArc.displayName = "IconArrowDownToArc";

export const IconArrowDownToArc = ArrowDownToArc;
export const ArrowDownToArcIcon = ArrowDownToArc;
