import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4.5 12 5-5m-5 5 5 5m-5-5h10c1.667 0 5 1 5 5"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.03 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72h8.19c.953 0 2.367.28 3.563 1.141 1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391-.887-.639-1.974-.859-2.687-.859H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4.5 12 5-5m-5 5 5 5m-5-5H11m3.5 0c1.667 0 5 1 5 5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.03 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72h8.19c.953 0 2.367.28 3.563 1.141 1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391-.887-.639-1.974-.859-2.687-.859H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.03 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 1 0 1.06-1.06L5.56 12l4.47-4.47a.75.75 0 0 0 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.31 11.25h8.19c.953 0 2.367.28 3.563 1.141 1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391-.887-.639-1.974-.859-2.687-.859H6.31L5.56 12zm-2.503.463"
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
        d="m9.5 7-5 5 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4.5 12h10c1.667 0 5 1 5 5"
        opacity=".5"
      />
    </>
  ),
};

export function ArrowBendUpLeft({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowBendUpLeft = ArrowBendUpLeft;
export const ArrowBendUpLeftIcon = ArrowBendUpLeft;
