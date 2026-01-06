import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.959 9V2m-10 13v7m10 0v-2m-10-18v2"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75M7 12.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m10-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zm10.75 7.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 13v5m0 3v1m10-11V6m0-3V2m0 20v-4M7 2v4"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 5.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M9.25 9.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M17 18.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m2.25-3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zm10.75 7.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M13.752 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-10-5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
      />
      <path
        fill="currentColor"
        d="M7.462 6.584a3 3 0 0 0-1.5.021V2a.75.75 0 0 1 1.5 0zm-1.5 5.81a3 3 0 0 0 1.5.021V22a.75.75 0 0 1-1.5 0zm10 5V22a.75.75 0 0 0 1.5 0v-4.585a3 3 0 0 1-1.5-.021m1.5-5.81V2a.75.75 0 0 0-1.5 0v9.605a3 3 0 0 1 1.5-.021"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10 5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m17 11 .041-9M7 2v4m0 7v9m10 0v-4"
        opacity=".5"
      />
    </>
  ),
};

function Tuning({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Tuning.displayName = "IconTuning";

export const IconTuning = Tuning;
export const TuningIcon = Tuning;
