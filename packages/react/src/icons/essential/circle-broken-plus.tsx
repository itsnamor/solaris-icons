import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M22 12A10 10 0 1 1 12 2m3 10h-3m0 0H9m3 0V9m0 3v3m2.5-12.685c3.514.904 6.28 3.67 7.185 7.185"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535m11.12-2.3A6.75 6.75 0 1 1 12 5.25a.75.75 0 0 1 0 1.5A5.25 5.25 0 1 0 17.25 12a.75.75 0 0 1 1.5 0 6.75 6.75 0 0 1-4.167 6.236m-.288-12.584a.75.75 0 1 0-.591 1.378 6.23 6.23 0 0 1 3.265 3.265.75.75 0 1 0 1.378-.59 7.73 7.73 0 0 0-4.052-4.053M12 9.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M22 12a10 10 0 0 1-18 6m-1.808-4.05A10 10 0 0 1 12 2m3 10h-3m0 0H9m3 0V9m0 3v3m2.5-12.685c3.514.904 6.28 3.67 7.185 7.185"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M9.903 22.543A10.75 10.75 0 0 0 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5 10.75 10.75 0 0 0-2.097 21.293"
      />
      <path
        fill="currentColor"
        d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75m2.687-6.661a.75.75 0 1 0-.374 1.452 9.27 9.27 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.77 10.77 0 0 0-7.724-7.724"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10.683 18.62A6.75 6.75 0 0 0 18.75 12a.75.75 0 0 0-1.5 0A5.25 5.25 0 1 1 12 6.75a.75.75 0 0 0 0-1.5 6.75 6.75 0 0 0-1.317 13.37"
      />
      <path
        fill="currentColor"
        d="M13.31 6.045a.75.75 0 0 1 .986-.393 7.73 7.73 0 0 1 4.052 4.052.75.75 0 0 1-1.378.591 6.23 6.23 0 0 0-3.265-3.265.75.75 0 0 1-.394-.985M12 9.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 1 1 0 1.5h-.75v.75a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12A10 10 0 1 1 12 2"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 12h-3m0 0H9m3 0V9m0 3v3m2.5-12.685c3.514.904 6.28 3.67 7.185 7.185"
      />
    </>
  ),
};

export function CircleBrokenPlus({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleBrokenPlus = CircleBrokenPlus;
export const CircleBrokenPlusIcon = CircleBrokenPlus;
