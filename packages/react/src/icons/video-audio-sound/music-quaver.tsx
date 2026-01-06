import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 18V2"
      />
      <circle cx="9" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 8a6 6 0 0 1-6-6"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 12V2"
      />
      <circle cx="9" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 8a6 6 0 0 1-6-6"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5 6.74 6.74 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2zm-1.5 16a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M9 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 1.25a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 12.25 2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.25 14.536V2c0 1.607.562 3.084 1.5 4.243V18a4.74 4.74 0 0 0-1.5-3.464"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 18V2"
        opacity=".5"
      />
      <circle cx="9" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 8a6 6 0 0 1-6-6"
      />
    </>
  ),
};

function MusicQuaver({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

MusicQuaver.displayName = "IconMusicQuaver";

export const IconMusicQuaver = MusicQuaver;
export const MusicQuaverIcon = MusicQuaver;
