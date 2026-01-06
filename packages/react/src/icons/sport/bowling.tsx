import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="12"
        cy="7"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 12 7)"
      />
      <circle
        cx="12"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 12 12)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <circle
        cx="12"
        cy="7"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 12 7)"
      />
      <circle
        cx="12"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 12 12)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 6.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M9.75 7a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8 8.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4-2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="12"
        cy="7"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
        transform="rotate(-90 12 7)"
      />
      <circle
        cx="12"
        cy="12"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
        transform="rotate(-90 12 12)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        opacity=".5"
      />
    </>
  ),
};

function Bowling({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Bowling.displayName = "IconBowling";

export const IconBowling = Bowling;
export const BowlingIcon = Bowling;
