import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m19.5 12-5 5m5-5-5-5m5 5h-10c-1.667 0-5-1-5-5"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 6.25a.75.75 0 0 1 .75.75c0 1.756.715 2.78 1.563 3.391.887.639 1.974.859 2.687.859h8.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m19.5 12-5 5m5-5-5-5m5 5H13m-3.5 0c-1.667 0-5-1-5-5"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 6.25a.75.75 0 0 1 .75.75c0 1.756.715 2.78 1.563 3.391.887.639 1.974.859 2.687.859h8.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.97 17.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47a.75.75 0 0 0 0 1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.69 12.75H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 1 1 1.5 0c0 1.756.715 2.78 1.563 3.391.887.639 1.974.859 2.687.859h8.19l.75.75zm2.503-.463"
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
        d="m14.5 17 5-5-5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.5 12h-10c-1.667 0-5-1-5-5"
        opacity=".5"
      />
    </>
  ),
};

function ArrowBendDownRight({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowBendDownRight.displayName = "IconArrowBendDownRight";

export const IconArrowBendDownRight = ArrowBendDownRight;
export const ArrowBendDownRightIcon = ArrowBendDownRight;
