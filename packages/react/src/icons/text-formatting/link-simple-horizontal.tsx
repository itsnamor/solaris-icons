import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M9 12h6m-6 6H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1"
    />
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"
      />
      <path
        fill="currentColor"
        d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M9 12h6m-6 6H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 6 6m-7 6h1a5.97 5.97 0 0 0 3.318-1"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"
      />
      <path
        fill="currentColor"
        d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5zm7-1.5a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 18H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1"
        opacity=".5"
      />
    </>
  ),
};

function LinkSimpleHorizontal({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LinkSimpleHorizontal.displayName = "IconLinkSimpleHorizontal";

export const IconLinkSimpleHorizontal = LinkSimpleHorizontal;
export const LinkSimpleHorizontalIcon = LinkSimpleHorizontal;
