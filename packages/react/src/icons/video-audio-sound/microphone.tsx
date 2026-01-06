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
        d="M13 8h4m-4 3h4m3-1v1a8 8 0 1 1-16 0v-1m8 9v3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.452.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.75 5.75 0 0 0 12 2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9"
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
        d="M13 8h4m-4 3h4m-5 8v3"
      />
      <path
        fill="currentColor"
        d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm10.762 7.344a.75.75 0 1 0 .728 1.312zM19.25 10v1h1.5v-1zm-14.5 1v-1h-1.5v1zM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75zM19.25 11a7.25 7.25 0 0 1-3.738 6.344l.728 1.312A8.75 8.75 0 0 0 20.75 11z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0zM12 3.75A4.25 4.25 0 0 0 7.75 8v3a4.25 4.25 0 0 0 8.434.75H13a.75.75 0 0 1 0-1.5h3.25v-1.5H13a.75.75 0 0 1 0-1.5h3.184A4.25 4.25 0 0 0 12 3.75m-8 5.5a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25"
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
        d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.452.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.75 5.75 0 0 0 12 2"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.25 10.75c0 .414.336.75.75.75h4.701l.049-1.5H13a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h4.75L17.701 7H13a.75.75 0 0 0-.75.75"
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
        d="M13 8h4m-4 3h4m3-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
        opacity=".5"
      />
    </>
  ),
};

function Microphone({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Microphone.displayName = "IconMicrophone";

export const IconMicrophone = Microphone;
export const MicrophoneIcon = Microphone;
