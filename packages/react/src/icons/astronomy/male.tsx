import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="10" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M17 1.25a.75.75 0 1 0 0 1.5h3.19l-5.088 5.088a8 8 0 1 0 1.06 1.06l5.088-5.087V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 7.07A8 8 0 1 1 3.07 10"
      />
      <path
        fill="currentColor"
        d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.25 2a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V3.81l-4.555 4.556a8.75 8.75 0 1 1-1.06-1.06l4.554-4.556H17a.75.75 0 0 1-.75-.75M10 6.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <circle cx="10" cy="14" r="8" fill="currentColor" opacity=".5" />
      <path
        fill="currentColor"
        d="M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.58.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="10" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
        opacity=".5"
      />
    </>
  ),
};

function Male({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Male.displayName = "IconMale";

export const IconMale = Male;
export const MaleIcon = Male;
