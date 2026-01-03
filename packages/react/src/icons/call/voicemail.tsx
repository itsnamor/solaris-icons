import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 16h12"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4 3.889 1.79 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.21 1.741-4 3.89-4C20.258 8 22 9.79 22 12s-1.741 4-3.889 4z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21 11.5A3.5 3.5 0 1 1 17.5 8"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.5 15h11"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5zM6 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m12 6.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
      <path
        fill="currentColor"
        d="M6 16h12a4 4 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.5 15h11"
        opacity=".5"
      />
    </>
  ),
};

export function Voicemail({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Voicemail.displayName = "IconVoicemail";

export const IconVoicemail = Voicemail;
export const VoicemailIcon = Voicemail;
