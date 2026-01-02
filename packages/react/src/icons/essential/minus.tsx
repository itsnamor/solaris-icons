import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 12h12"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16 12h2M6 12h5.66"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  ),
  "bold-duotone": (
    <>
      <rect
        width="13.5"
        height="1.5"
        x="5.25"
        y="11.25"
        fill="currentColor"
        opacity=".5"
        rx=".75"
      />
      <path
        fill="currentColor"
        d="M5.25 12a.75.75 0 0 1 .75-.75h6v1.5H6a.75.75 0 0 1-.75-.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12.55 11.25h-.75v1.5h.75zm5.45 1.5a.75.75 0 0 0 0-1.5zm-5.45 0H18v-1.5h-5.45z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M6 11.25a.75.75 0 0 0 0 1.5zm5.25 1.5H12v-1.5h-.75zm-5.25 0h5.25v-1.5H6z"
      />
    </>
  ),
};

export function Minus({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMinus = Minus;
export const MinusIcon = Minus;
