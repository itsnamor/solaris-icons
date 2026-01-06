import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.5-4.75a.75.75 0 0 1 .555.245l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94l-1.195 1.315a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 .555-.245m-5 0a.75.75 0 0 1 .75.75v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 1.11-1.01L8.75 14.06V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75"
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.495 12.695a.75.75 0 0 1 1.06.05L8.75 14.06V8a.75.75 0 0 1 1.5 0v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 .05-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.496 11.305a.75.75 0 0 0 1.059-.05L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 0 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0l-2.5 2.75a.75.75 0 0 0 .05 1.06"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M11.445 10.246a.75.75 0 1 0 1.11 1.008L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 1 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0z"
      />
      <path
        fill="currentColor"
        d="M7.555 12.746a.75.75 0 1 0-1.11 1.008l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.008L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75"
      />
    </>
  ),
};

function CircleArrowsUpDown({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleArrowsUpDown.displayName = "IconCircleArrowsUpDown";

export const IconCircleArrowsUpDown = CircleArrowsUpDown;
export const CircleArrowsUpDownIcon = CircleArrowsUpDown;
