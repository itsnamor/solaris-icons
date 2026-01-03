import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 15V7"
      />
      <circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 10a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.25 15a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 21.273A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.547 3.27l-1.863-1.86a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827zM13 6.25a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 15V7"
      />
      <circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 10a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5M21.8 14q.198-.97.2-2c0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 1.85 18.315.75.75 0 1 1 .3 1.47q-1.046.213-2.15.215C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12q-.002 1.104-.215 2.15a.75.75 0 0 1-1.47-.3A9.25 9.25 0 0 0 12 2.75M13.75 7A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7zm-1.5 8a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m5.22-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M15.75 21.273A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.547 3.27l-1.863-1.86a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 7a.75.75 0 0 0-1.5 0v5.55a2.75 2.75 0 1 0 1.5 2.45v-5c.627.471 1.406.75 2.25.75a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 13.75 7m3.72 7.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 15V7"
      />
      <circle cx="11" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 10a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
    </>
  ),
};

export function CircleQuaverArrowUp({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleQuaverArrowUp.displayName = "IconCircleQuaverArrowUp";

export const IconCircleQuaverArrowUp = CircleQuaverArrowUp;
export const CircleQuaverArrowUpIcon = CircleQuaverArrowUp;
