import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle
        cx="14.5"
        cy="4.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.977v-2.62a1.5 1.5 0 0 0-2.091-1.379L8.342 10.95a1.5 1.5 0 0 0-.456 2.452L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.164"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.503 9.207a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.713 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.848 1.372a.75.75 0 1 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848c.104-.187.159-.397.159-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.455 1.053a.75.75 0 0 0-.229 1.226l.615.599a.75.75 0 0 1-1.048 1.074l-.614-.599a2.25 2.25 0 0 1 .685-3.679zm6.056 4.846a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481z"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <circle
        cx="14.5"
        cy="4.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.164M8.5 14l-.614-.599a1.5 1.5 0 0 1 .456-2.452l2.456-1.053a1.5 1.5 0 0 1 2.09 1.379v2.62a2 2 0 0 1-.254.977l-.678 1.212"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M11.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-.748 4.707a2.25 2.25 0 0 1 3.137 2.068v2.62c0 .47-.12.933-.35 1.343l-2.713 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.848 1.372a.75.75 0 1 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848c.104-.187.159-.397.159-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.455 1.053a.75.75 0 0 0-.229 1.226l.615.599a.75.75 0 0 1-1.048 1.074l-.614-.599a2.25 2.25 0 0 1 .685-3.679zm6.057 4.846a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.559 14.054a2.75 2.75 0 0 1 3.191 2.714V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.503 9.207a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.712 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.849 1.372a.75.75 0 0 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848a1.25 1.25 0 0 0 .16-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.456 1.053a.75.75 0 0 0-.228 1.226l.614.6a.75.75 0 0 1-1.047 1.073l-.614-.599a2.25 2.25 0 0 1 .684-3.679z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="14.5"
        cy="4.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.977v-2.62a1.5 1.5 0 0 0-2.091-1.379L8.342 10.95a1.5 1.5 0 0 0-.456 2.452L8.5 14"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165"
      />
    </>
  ),
};

export function Stretching({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Stretching.displayName = "IconStretching";

export const IconStretching = Stretching;
export const StretchingIcon = Stretching;
