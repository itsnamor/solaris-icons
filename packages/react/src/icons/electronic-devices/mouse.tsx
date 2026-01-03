import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 9a7.75 7.75 0 1 1 15.5 0v6a7.75 7.75 0 0 1-15.5 0zm7-6.205A6.25 6.25 0 0 0 5.75 9v6a6.25 6.25 0 1 0 12.5 0V9a6.25 6.25 0 0 0-5.5-6.205v3.583a2.25 2.25 0 0 1 1.5 2.122v2a2.25 2.25 0 0 1-4.5 0v-2c0-.98.626-1.813 1.5-2.122zM12 7.75a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M13.75 8.974V6.97c0-.7-.409-1.303-1-1.585V2a7 7 0 0 0-1.5 0v3.385c-.591.282-1 .885-1 1.585v2.004c0 .968.784 1.753 1.75 1.753s1.75-.785 1.75-1.753"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v5"
        opacity=".5"
      />
    </>
  ),
};

export function Mouse({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMouse = Mouse;
export const MouseIcon = Mouse;
