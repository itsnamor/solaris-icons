import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m13 11 9-9m0 0h-5.344M22 2v5.344"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10q-.001-.9-.154-1.755A2.25 2.25 0 0 1 19 8.75v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182L15.818 5h-.568a2.25 2.25 0 0 1-2.245-2.096q-.856-.153-1.755-.154"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m13 11 9-9m0 0h-5.344M22 2v5.344"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M21.25 12A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0"
      />
      <path
        fill="currentColor"
        d="M12.47 10.47a.75.75 0 1 0 1.06 1.06l7.72-7.72v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0 0 1.5h3.533z"
      />
    </>
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
        fillRule="evenodd"
        d="M12.47 11.53a.75.75 0 0 1 0-1.06l7.72-7.72h-3.534a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V3.81l-7.72 7.72a.75.75 0 0 1-1.06 0"
        clipRule="evenodd"
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
        d="m13 11 9-9m0 0h-5.344M22 2v5.344"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        opacity=".5"
      />
    </>
  ),
};

function CircleRightUpOut({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleRightUpOut.displayName = "IconCircleRightUpOut";

export const IconCircleRightUpOut = CircleRightUpOut;
export const CircleRightUpOutIcon = CircleRightUpOut;
