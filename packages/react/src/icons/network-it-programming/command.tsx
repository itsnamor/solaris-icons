import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M8 8h8v8H8zm8 8.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M16 8h3a3 3 0 1 0-3-3zH8V5a3 3 0 1 0-3 3h3v8h8zm0 8h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13v3h8V8H8v1"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.25 5A3.75 3.75 0 1 1 19 8.75h-2.25v6.5H19a3.75 3.75 0 1 1-3.75 3.751V16.75h-6.5v2.251a3.75 3.75 0 1 1-3.749-3.75H7.25v-6.5H5.001A3.75 3.75 0 1 1 8.751 5v2.25h6.5zm-8 2.25V5A2.25 2.25 0 1 0 5 7.25zM19 2.75A2.25 2.25 0 0 0 16.75 5v2.25H19a2.25 2.25 0 1 0 0-4.5m-10.25 6v6.5h6.5v-6.5zM21.25 19A2.25 2.25 0 0 0 19 16.75h-2.25V19a2.25 2.25 0 1 0 4.5 0m-18.5 0A2.25 2.25 0 0 1 5 16.75h2.25V19a2.25 2.25 0 1 1-4.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M16 8H8v8h8z" opacity=".5" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 8h8v8H8z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"
      />
    </>
  ),
};

export function Command({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCommand = Command;
export const CommandIcon = Command;
