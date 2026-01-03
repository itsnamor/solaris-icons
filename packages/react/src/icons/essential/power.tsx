import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 2v4M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"
    />
  ),
  bold: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v4"
      />
      <path
        fill="currentColor"
        d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
      />
      <path
        fill="currentColor"
        d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21 8.25 8.25 0 0 1 8.792 5.147"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 2v4M8.5 3.706A9 9 0 0 0 3 12c0 2.305.867 4.408 2.292 6M15.5 3.706A9.003 9.003 0 0 1 9 20.488"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
      />
      <path
        fill="currentColor"
        d="M8.792 4.397a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 20.25 8.25 8.25 0 0 1 8.792 4.397"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21 8.25 8.25 0 0 1 8.792 5.147"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v4"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"
      />
    </>
  ),
};

export function Power({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Power.displayName = "IconPower";

export const IconPower = Power;
export const PowerIcon = Power;
