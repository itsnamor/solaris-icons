import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12h3m14 0h3M12 22v-3m0-14V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12h4m-2 2v-4"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.248 2A10.03 10.03 0 0 0 2 11.248h2.98a.752.752 0 1 1 0 1.504H2A10.03 10.03 0 0 0 11.248 22v-2.98a.752.752 0 0 1 1.504 0V22A10.03 10.03 0 0 0 22 12.752h-2.98a.752.752 0 0 1 0-1.504H22A10.03 10.03 0 0 0 12.752 2v2.98a.752.752 0 1 1-1.504 0zM9.242 12c0-.415.337-.752.752-.752h1.254V9.994a.752.752 0 1 1 1.504 0v1.254h1.254a.752.752 0 0 1 0 1.504h-1.254v1.254a.752.752 0 0 1-1.504 0v-1.254H9.994A.75.75 0 0 1 9.242 12"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12h3m14 0h3M12 22v-3m0-14V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12h4m-2 2v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.75 1.53a9.25 9.25 0 0 0-8.47 8.47H5a.75.75 0 0 1 0 1.5H2.78a9.25 9.25 0 0 0 8.47 8.47V19a.75.75 0 0 1 1.5 0v2.22a9.25 9.25 0 0 0 8.47-8.47H19a.75.75 0 0 1 0-1.5h2.22a9.25 9.25 0 0 0-8.47-8.47V5a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75m-7.222.75a10 10 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5zm10.722 9.222a10 10 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0zm9.222-10.722a10 10 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5zM12.75 2.028V5a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12h3m14 0h3M12 22v-3m0-14V2"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 12h-2m2 0h2m-2 0v2m0-2v-2"
      />
    </>
  ),
};

export function Crosshair({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Crosshair.displayName = "IconCrosshair";

export const IconCrosshair = Crosshair;
export const CrosshairIcon = Crosshair;
