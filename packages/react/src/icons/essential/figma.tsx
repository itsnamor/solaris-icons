import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12zm0 6.667H8.667a3.333 3.333 0 1 0 0 6.666H12z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.333H12v3.334a3.333 3.333 0 1 1-3.333-3.334Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 8.667H8.667m3.333 0V2H8.667a3.333 3.333 0 1 0 0 6.667m3.333 0v6.666H8.667M12 8.667h3.333m-6.666 0a3.333 3.333 0 0 0 0 6.666m0 0A3.333 3.333 0 1 0 12 18.667m3.333-10a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m0 0a3.333 3.333 0 0 0 0-6.667"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.08 4.08 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496 4.083 4.083 0 0 0-2.359-7.417zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583zM8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167m9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.583a2.583 2.583 0 0 1 2.584 2.583m-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z"
        opacity=".6"
      />
      <path
        fill="currentColor"
        d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z"
        opacity=".4"
      />
      <path
        fill="currentColor"
        d="M18.333 12a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0"
      />
      <path
        fill="currentColor"
        d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334"
        opacity=".2"
      />
      <path
        fill="currentColor"
        d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z"
        opacity=".8"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 8.667H8.667a3.333 3.333 0 1 0 0 6.666H12z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.333H12v3.334a3.333 3.333 0 1 1-3.333-3.334Z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"
      />
    </>
  ),
};

export function Figma({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Figma.displayName = "IconFigma";

export const IconFigma = Figma;
export const FigmaIcon = Figma;
