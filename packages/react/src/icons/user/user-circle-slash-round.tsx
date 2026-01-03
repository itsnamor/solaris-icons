import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m19.95 16.05-3.9 3.9"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 20.96q-.49.04-1 .04c-3.866 0-7-1.79-7-4s3.134-4 7-4c.88 0 1.724.093 2.5.263"
      />
    </>
  ),
  bold: (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22m2.03 1.28-3 3a2.25 2.25 0 0 0 3-3m-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.327 13.48A5.25 5.25 0 0 0 12.75 18c0 1.07.32 2.064.869 2.893q-.782.107-1.619.108c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.204 0 2.337.174 3.327.48"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m19.95 16.05-3.9 3.9"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 20.96q-.49.04-1 .04c-3.866 0-7-1.79-7-4 0-.345.077-.68.22-1m9.28-2.737c-.776-.17-1.62-.263-2.5-.263-1.074 0-2.09.138-3 .385"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m5.5 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.72.97 3-3a2.25 2.25 0 0 0-3 3M18 20.25a2.24 2.24 0 0 1-.97-.22l3-3A2.25 2.25 0 0 1 18 20.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073.829 0 1.618.088 2.34.245a.75.75 0 1 0 .32-1.465 12.5 12.5 0 0 0-2.66-.28c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27q.54 0 1.061-.043a.75.75 0 1 0-.122-1.495q-.46.038-.939.038c-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22m2.03 1.28-3 3a2.25 2.25 0 0 0 3-3m-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.216 14.332a3.751 3.751 0 0 0-1.97 6.213c-.97.29-2.075.455-3.246.455-3.866 0-7-1.79-7-4s3.134-4 7-4c2.072 0 3.934.515 5.216 1.332"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m19.95 16.05-3.9 3.9"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 20.96q-.49.04-1 .04c-3.866 0-7-1.79-7-4s3.134-4 7-4c.88 0 1.724.093 2.5.263"
        opacity=".5"
      />
    </>
  ),
};

export function UserCircleSlashRound({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

UserCircleSlashRound.displayName = "IconUserCircleSlashRound";

export const IconUserCircleSlashRound = UserCircleSlashRound;
export const UserCircleSlashRoundIcon = UserCircleSlashRound;
