import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 4v16l-6-5.5M14 20V4l6 5.5"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M4 13.75a.75.75 0 0 0-.507 1.303l6 5.5A.75.75 0 0 0 10.75 20V4a.75.75 0 0 0-1.5 0v9.75zm16-3.5h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.257-.553l6 5.5A.75.75 0 0 1 20 10.25"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14 20v-2.5m6-8L14 4v10m-10 .5 6 5.5V10m0-6v2.5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.698 3.314a.75.75 0 0 1 .809.133l6 5.5a.75.75 0 0 1-1.014 1.106L14.75 5.705V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .448-.687M10 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.257.553l-6-5.5a.75.75 0 0 1 1.014-1.106l4.743 4.348V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M20 10.25a.75.75 0 0 0 .507-1.303l-6-5.5A.75.75 0 0 0 13.25 4v16a.75.75 0 0 0 1.5 0v-9.75z"
      />
      <path
        fill="currentColor"
        d="M4 13.75h5.25V4a.75.75 0 1 1 1.5 0v16a.75.75 0 0 1-1.257.553l-6-5.5A.75.75 0 0 1 4 13.75"
        opacity=".5"
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
        d="M10 4v16l-6-5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 20V4l6 5.5"
        opacity=".5"
      />
    </>
  ),
};

export function ArrowsUpDownMerge({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowsUpDownMerge = ArrowsUpDownMerge;
export const ArrowsUpDownMergeIcon = ArrowsUpDownMerge;
