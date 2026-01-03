import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 8h9m-7 5h7m-5 5h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20V4l3 4"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.763 3.288a.75.75 0 0 1 .837.262l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .513-.712M3.25 8A.75.75 0 0 1 4 7.25h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 8h9m-7 5h7m-5 5h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20V4l3 4"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.763 3.288a.75.75 0 0 1 .837.262l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .513-.712M13 8.75H4v-1.5h9zm0 5H6v-1.5h7zm0 5H8v-1.5h5z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 20.75a.75.75 0 0 0 .75-.75V6.25l1.65 2.2a.75.75 0 1 0 1.2-.9l-3-4a.75.75 0 0 0-1.35.45v16c0 .414.336.75.75.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 8c0 .414.336.75.75.75h9a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75"
      />
      <path
        fill="currentColor"
        d="M5.25 13c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M7.25 18c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75"
        opacity=".4"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 8h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 13h7"
        opacity=".7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 18h5"
        opacity=".4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20V4l3 4"
      />
    </>
  ),
};

export function ListSortArrowUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ListSortArrowUp.displayName = "IconListSortArrowUp";

export const IconListSortArrowUp = ListSortArrowUp;
export const ListSortArrowUpIcon = ListSortArrowUp;
