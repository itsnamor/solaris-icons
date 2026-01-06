import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20 7H9a5 5 0 1 0 0 10h7m4-10-3-3m3 3-3 3"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a4.25 4.25 0 0 0 0 8.5h7a.75.75 0 0 1 0 1.5H9a5.75 5.75 0 0 1 0-11.5h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20 7H9a5 5 0 0 0 0 10M20 7l-3-3m3 3-3 3m-1 7h-3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a4.25 4.25 0 0 0 0 8.5h7a.75.75 0 0 1 0 1.5H9a5.75 5.75 0 0 1 0-11.5h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L18.94 7l-2.47-2.47a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.19 6.25H9a5.75 5.75 0 0 0 0 11.5h7a.75.75 0 0 0 0-1.5H9a4.25 4.25 0 0 1 0-8.5h9.19l.75-.75z"
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
        d="m17 4 3 3-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 7H9a5 5 0 1 0 0 10h7"
        opacity=".5"
      />
    </>
  ),
};

function ArrowURightRound({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowURightRound.displayName = "IconArrowURightRound";

export const IconArrowURightRound = ArrowURightRound;
export const ArrowURightRoundIcon = ArrowURightRound;
