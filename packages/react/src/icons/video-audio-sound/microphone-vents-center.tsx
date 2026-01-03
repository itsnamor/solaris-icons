import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 8h2m-3 3h4m6-1v1a8 8 0 1 1-16 0v-1m8 9v3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.5 0v-3A5.75 5.75 0 0 0 12 2m2 9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-.25-3.75a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 11 7h2a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 8h2m-3 3h4"
      />
      <path
        fill="currentColor"
        d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm10.762 7.344a.75.75 0 1 0 .728 1.312zM19.25 10v1h1.5v-1zm-14.5 1v-1h-1.5v1zM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75zM19.25 11a7.25 7.25 0 0 1-3.738 6.344l.728 1.312A8.75 8.75 0 0 0 20.75 11z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 19v3"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0zM12 3.75A4.25 4.25 0 0 0 7.75 8v3a4.25 4.25 0 0 0 8.5 0V8A4.25 4.25 0 0 0 12 3.75M10.25 8a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M4 9.25a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25M9.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.5 0v-3A5.75 5.75 0 0 0 12 2m2 9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-.25-3.75a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 11 7h2a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M14 11.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-1-3A.75.75 0 0 0 13 7h-2a.75.75 0 0 0 0 1.5z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M11 8h2m-3 3h4m6-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
        opacity=".5"
      />
    </>
  ),
};

export function MicrophoneVentsCenter({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

MicrophoneVentsCenter.displayName = "IconMicrophoneVentsCenter";

export const IconMicrophoneVentsCenter = MicrophoneVentsCenter;
export const MicrophoneVentsCenterIcon = MicrophoneVentsCenter;
