import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m9 15-7 7m0 0h5.857M2 22v-5.857M15 9l7-7m0 0h-5.857M22 2v5.857"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 2h-5.857M22 2v5.857M22 2l-3.5 3.5M15 9l.875-.875M9 15l-7 7m0 0h5.857M2 22v-5.857"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.607 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.857a.75.75 0 1 1 1.5 0v4.046l5.72-5.72a.75.75 0 0 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.393 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.857a.75.75 0 0 1-1.5 0V3.811l-5.72 5.72a.75.75 0 1 1-1.06-1.061l5.72-5.72h-4.047a.75.75 0 0 1-.75-.75"
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
        d="m9 15-7 7m0 0h5.857M2 22v-5.857"
        opacity=".6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 9 7-7m0 0h-5.857M22 2v5.857"
      />
    </>
  ),
};

function ArrowsSubDiagOut({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowsSubDiagOut.displayName = "IconArrowsSubDiagOut";

export const IconArrowsSubDiagOut = ArrowsSubDiagOut;
export const ArrowsSubDiagOutIcon = ArrowsSubDiagOut;
