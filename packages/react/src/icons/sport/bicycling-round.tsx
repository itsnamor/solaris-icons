import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48l3.091 1.349a1.89 1.89 0 0 1 .981 2.477L12 18"
      />
    </>
  ),
  bold: (
    <>
      <path fill="currentColor" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719a.9.9 0 0 0 .57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.42 2.42 0 0 1-1.505-.526zM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-.331 4.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719a.9.9 0 0 0 .57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.42 2.42 0 0 1-1.505-.526zM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path fill="currentColor" d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719a.92.92 0 0 0 .571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.4 2.4 0 0 1-1.505-.526z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-12-1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="6"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <circle
        cx="18"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48l3.091 1.349a1.89 1.89 0 0 1 .981 2.477L12 18"
      />
    </>
  ),
};

export function BicyclingRound({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

BicyclingRound.displayName = "IconBicyclingRound";

export const IconBicyclingRound = BicyclingRound;
export const BicyclingRoundIcon = BicyclingRound;
