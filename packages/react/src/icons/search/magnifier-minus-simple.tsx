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
        d="M9 11.5h5m6 8.5 2 2"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723m10.815 7.683a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M9 11.5h5m6 8.5 2 2M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723m10.815 7.683a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022"
        clipRule="evenodd"
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
        d="M9 11.5h5m6 8.5 2 2"
      />
    </>
  ),
};

export function MagnifierMinusSimple({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMagnifierMinusSimple = MagnifierMinusSimple;
export const MagnifierMinusSimpleIcon = MagnifierMinusSimple;
