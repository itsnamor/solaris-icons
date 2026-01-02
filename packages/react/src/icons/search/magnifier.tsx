import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle
        cx="11.5"
        cy="11.5"
        r="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 18.5 22 22"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M18.5 18.5 22 22M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m17.1 18.122 3.666 3.667a.723.723 0 0 0 1.023-1.023L18.122 17.1a9 9 0 0 1-1.022 1.022"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="11.5"
        cy="11.5"
        r="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 18.5 22 22"
      />
    </>
  ),
};

export function Magnifier({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMagnifier = Magnifier;
export const MagnifierIcon = Magnifier;
