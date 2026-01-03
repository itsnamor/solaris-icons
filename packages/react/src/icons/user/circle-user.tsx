import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 11.5a8.46 8.46 0 0 0 4.807-1.489c.604-.415.862-1.205.51-1.848C16.59 15.83 15.09 15 12 15s-4.59.83-5.318 2.163c-.351.643-.093 1.433.511 1.848A8.46 8.46 0 0 0 12 20.5"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
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
        fillRule="evenodd"
        d="M8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 0 0-6.558 15.773c.18-.973.535-1.89 1.246-2.628C7.753 14.791 9.454 14.25 12 14.25s4.247.541 5.311 1.645c.712.738 1.066 1.656 1.247 2.629A9.25 9.25 0 0 0 12 2.75m5.194 16.905c-.102-1.212-.365-2.1-.962-2.719-.65-.673-1.853-1.186-4.232-1.186s-3.582.513-4.232 1.186c-.597.62-.86 1.507-.962 2.72A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.194-1.595"
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
        d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15s4.59.83 5.318 2.163c.35.643.093 1.433-.511 1.848M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
        opacity=".5"
      />
    </>
  ),
};

export function CircleUser({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleUser = CircleUser;
export const CircleUserIcon = CircleUser;
