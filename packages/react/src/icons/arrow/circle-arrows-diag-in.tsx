import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.5 4 7.378 8V7.5m3.5 12.378L9.878 12v4.5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M12 22C6.477 22 2 17.523 2 12a9.98 9.98 0 0 1 3.676-7.747l7.652 8.257a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 0 0-1.5 0v2.588l-6.21-6.702A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10a9.98 9.98 0 0 1-3.68 7.75l-7.9-8.268A.75.75 0 0 0 9.129 12v4.5a.75.75 0 0 0 1.5 0v-2.63l6.447 6.748A9.95 9.95 0 0 1 12 22"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.5 4 7.378 8V7.5m3.5 12.378L9.878 12v4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.207 4.788A9.25 9.25 0 0 0 16.525 20.07l-5.897-6.194V16.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 1.294-.517l7.363 7.735A9.25 9.25 0 0 0 7.462 3.938l5.666 6.143V7.5a.75.75 0 0 1 1.5 0V12a.75.75 0 0 1-1.3.508zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M2 12c0 5.523 4.477 10 10 10a9.95 9.95 0 0 0 5.075-1.382l.007-.004q.654-.386 1.238-.864A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10a9.95 9.95 0 0 0-6.324 2.253A9.98 9.98 0 0 0 2 12"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M13.129 7.5v2.588L6.917 3.387q-.654.388-1.241.867l7.653 8.256a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 1 0-1.5 0m-2.709 3.982A.75.75 0 0 0 9.13 12v4.5a.75.75 0 0 0 1.5 0v-2.629l6.446 6.748q.658-.39 1.245-.869z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.5 4 7.378 8V7.5m3.5 12.378L9.878 12v4.5"
      />
    </>
  ),
};

export function CircleArrowsDiagIn({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleArrowsDiagIn.displayName = "IconCircleArrowsDiagIn";

export const IconCircleArrowsDiagIn = CircleArrowsDiagIn;
export const CircleArrowsDiagInIcon = CircleArrowsDiagIn;
