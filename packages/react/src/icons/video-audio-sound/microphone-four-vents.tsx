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
        d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m11-1v1a8 8 0 1 1-16 0v-1m8 9v3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.201a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75"
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
        d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m3 8v3"
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
      d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0zm1.566-.75H9a.75.75 0 0 1 0 1.5H7.75v1.5H9a.75.75 0 0 1 0 1.5H7.816a4.251 4.251 0 0 0 8.368 0H13.5a.75.75 0 0 1 0-1.5h2.75v-1.5H13.5a.75.75 0 0 1 0-1.5h2.684a4.251 4.251 0 0 0-8.368 0M4 9.25a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25"
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
        d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.201a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.75 10.75c0 .414.336.75.75.75h4.201l.049-1.5H13.5a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h4.25L17.701 7H13.5a.75.75 0 0 0-.75.75m-3 0A.75.75 0 0 0 9 7H6.298L6.25 8.5H9a.75.75 0 0 0 .75-.75m0 3A.75.75 0 0 0 9 10H6.25l.048 1.5H9a.75.75 0 0 0 .75-.75"
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
        d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m11-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3"
        opacity=".5"
      />
    </>
  ),
};

function MicrophoneFourVents({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

MicrophoneFourVents.displayName = "IconMicrophoneFourVents";

export const IconMicrophoneFourVents = MicrophoneFourVents;
export const MicrophoneFourVentsIcon = MicrophoneFourVents;
