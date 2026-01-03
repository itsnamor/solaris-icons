import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 4.5-5 5m5-5 5 5m-5-5v10c0 1.667 1 5 5 5"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v8.19c0 .713.22 1.8.859 2.687.61.848 1.635 1.563 3.391 1.563a.75.75 0 0 1 0 1.5c-2.244 0-3.72-.952-4.609-2.187-.861-1.196-1.141-2.61-1.141-3.563V6.31l-3.72 3.72a.75.75 0 0 1-1.06 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 4.5-5 5m5-5 5 5m-5-5V11m0 3.5c0 1.667 1 5 5 5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v8.19c0 .713.22 1.8.859 2.687.61.848 1.635 1.563 3.391 1.563a.75.75 0 0 1 0 1.5c-2.244 0-3.72-.952-4.609-2.187-.861-1.196-1.141-2.61-1.141-3.563V6.31l-3.72 3.72a.75.75 0 0 1-1.06 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06L12 5.56l-4.47 4.47a.75.75 0 0 1-1.06 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 14.5c0 .953.28 2.367 1.141 3.563.89 1.235 2.365 2.187 4.609 2.187a.75.75 0 0 0 0-1.5c-1.756 0-2.78-.715-3.391-1.563-.639-.887-.859-1.974-.859-2.687V6.31L12 5.56l-.75.75zm.552-10.724"
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
        d="m7 9.5 5-5 5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 4.5v10c0 1.667 1 5 5 5"
        opacity=".5"
      />
    </>
  ),
};

export function ArrowBendLeftUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowBendLeftUp = ArrowBendLeftUp;
export const ArrowBendLeftUpIcon = ArrowBendLeftUp;
