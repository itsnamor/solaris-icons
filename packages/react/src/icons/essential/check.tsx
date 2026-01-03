import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m6.333 12 3.774 3.774 7.56-7.547"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M10.107 16.773a1 1 0 0 1-.707-.293l-3.773-3.773a1.006 1.006 0 0 1 0-1.414 1.006 1.006 0 0 1 1.413 0l3.067 3.067 6.853-6.853a1.006 1.006 0 0 1 1.413 0 1.006 1.006 0 0 1 0 1.413l-7.56 7.56a1 1 0 0 1-.707.293"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m16 9.84 1.493-1.507M6.506 12l3.654 3.667 3.4-3.387"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M10.107 16.773a1 1 0 0 1-.707-.293l-3.773-3.773a1.006 1.006 0 0 1 0-1.414 1.006 1.006 0 0 1 1.413 0l3.067 3.067 6.853-6.853a1.006 1.006 0 0 1 1.413 0 1.006 1.006 0 0 1 0 1.413l-7.56 7.56a1 1 0 0 1-.707.293"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M10.107 16.773a1 1 0 0 1-.707-.293l-3.773-3.773a1.006 1.006 0 0 1 0-1.414 1.006 1.006 0 0 1 1.413 0l3.067 3.067 6.853-6.853a1.006 1.006 0 0 1 1.413 0 1.006 1.006 0 0 1 0 1.413l-7.56 7.56a1 1 0 0 1-.707.293"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9.4 16.48a1 1 0 0 0 1.413 0l7.56-7.56a1.006 1.006 0 0 0 0-1.413 1.006 1.006 0 0 0-1.413 0l-6.853 6.853-1.414 1.413z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m10.167 15.648 7.326-7.315"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m6.506 12 3.65 3.64"
        opacity=".5"
      />
    </>
  ),
};

export function Check({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Check.displayName = "IconCheck";

export const IconCheck = Check;
export const CheckIcon = Check;
