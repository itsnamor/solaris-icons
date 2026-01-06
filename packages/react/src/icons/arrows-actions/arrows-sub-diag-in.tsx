import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m2 22 7-7m0 0H3.143M9 15v5.857M22 2l-7 7m0 0h5.857M15 9V3.143"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m2 22 .875-.875M9 15H3.143M9 15v5.857M9 15l-3.5 3.5M22 2l-7 7m0 0h5.857M15 9V3.143"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.393 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v5.857a.75.75 0 1 1-1.5 0v-4.046l-5.72 5.72a.75.75 0 0 1-1.06-1.061l5.72-5.72H3.142a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
        opacity=".6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.607 9a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V3.143a.75.75 0 0 1 1.5 0v4.046l5.72-5.72a.75.75 0 1 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75"
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
        d="m2 22 7-7m0 0H3.143M9 15v5.857"
        opacity=".6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m22 2-7 7m0 0h5.857M15 9V3.143"
      />
    </>
  ),
};

function ArrowsSubDiagIn({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowsSubDiagIn.displayName = "IconArrowsSubDiagIn";

export const IconArrowsSubDiagIn = ArrowsSubDiagIn;
export const ArrowsSubDiagInIcon = ArrowsSubDiagIn;
