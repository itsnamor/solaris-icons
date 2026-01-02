import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 6H3m10 4H3m6 4H3m5 4H3m14-1.5V8"
      />
      <circle
        cx="14.5"
        cy="16.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21 12a4 4 0 0 1-4-4"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 14H3m5 4H3m14-1.5V8"
      />
      <circle
        cx="14.5"
        cy="16.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21 12a4 4 0 0 1-4-4M3 6h7.412M15 6h-1.588M13 10H6.824M3 10h1.324"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75m-.75 9.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0m-14-6.5A.75.75 0 0 1 3 9.25h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 6H3m10 4H3m6 4H3m5 4H3"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 16.5V8"
      />
      <circle
        cx="14.5"
        cy="16.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21 12a4 4 0 0 1-4-4"
      />
    </>
  ),
};

export function ListMusicQuaver({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListMusicQuaver = ListMusicQuaver;
export const ListMusicQuaverIcon = ListMusicQuaver;
