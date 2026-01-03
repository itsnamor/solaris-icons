import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="15" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048A6.97 6.97 0 0 0 15 16m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.064 12.5A7 7 0 1 0 18 15.326"
      />
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M7.25 9a7.75 7.75 0 1 1 2.824 5.983l-.044.047-2.47 2.47.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.94.94.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.47.47a.75.75 0 0 1-1.06-1.06l1-1 5-5 .047-.044A7.72 7.72 0 0 1 7.25 9M15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.609 14.452a7 7 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 1 0 1.061 1.06l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="15" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="15"
        cy="9"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19"
      />
    </>
  ),
};

export function KeySimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

KeySimple.displayName = "IconKeySimple";

export const IconKeySimple = KeySimple;
export const KeySimpleIcon = KeySimple;
