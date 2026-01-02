import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 0 0-6"
      />
      <ellipse
        cx="9"
        cy="17"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="7"
        ry="4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
      />
    </>
  ),
  bold: (
    <>
      <circle cx="9.001" cy="6" r="4" fill="currentColor" />
      <ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4" />
      <path
        fill="currentColor"
        d="M21 17c0 1.657-2.036 3-4.521 3 .732-.8 1.236-1.805 1.236-2.998 0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 0 0-6M5.89 20.584C6.825 20.85 7.882 21 9 21c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4c0 .345.077.68.22 1M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M5.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 2.25a.75.75 0 0 0 0 1.5 2.25 2.25 0 0 1 0 4.5.75.75 0 0 0 0 1.5 3.75 3.75 0 1 0 0-7.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27s3.922.47 5.322 1.27c1.378.788 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27s-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.692 2.428-3.48m.744 1.303C3.267 15.483 2.75 16.28 2.75 17s.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25s3.444-.425 4.578-1.073c1.155-.66 1.672-1.458 1.672-2.177s-.517-1.517-1.672-2.177C12.444 14.175 10.827 13.75 9 13.75s-3.444.425-4.578 1.073"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.16 13.267a.75.75 0 0 0-.32 1.466c.792.173 1.425.472 1.843.814s.567.677.567.953c0 .25-.12.545-.453.854-.335.311-.85.598-1.513.798a.75.75 0 1 0 .432 1.437c.823-.248 1.558-.631 2.102-1.136.546-.507.932-1.174.932-1.953 0-.865-.474-1.588-1.117-2.114-.644-.527-1.51-.908-2.472-1.119"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <circle cx="15" cy="6" r="3" fill="currentColor" opacity=".5" />
      <ellipse cx="16" cy="17" fill="currentColor" opacity=".5" rx="5" ry="3" />
      <circle cx="9.001" cy="6" r="4" fill="currentColor" />
      <ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4" />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12.5 4.341a3 3 0 1 1 0 3.318"
        opacity=".5"
      />
      <ellipse
        cx="9"
        cy="17"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="7"
        ry="4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
        opacity=".5"
      />
    </>
  ),
};

export function Users({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconUsers = Users;
export const UsersIcon = Users;
