import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"
      />
      <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m2 7 .813 1.219A4 4 0 0 0 6.14 10H12m10-3-.812 1.219A4 4 0 0 1 17.859 10H16"
      />
      <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m2.624 6.584.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219 1.248.832-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219zM7 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04"
        clipRule="evenodd"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"
        opacity=".5"
      />
      <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
};

function Skateboard({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Skateboard.displayName = "IconSkateboard";

export const IconSkateboard = Skateboard;
export const SkateboardIcon = Skateboard;
