import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.121 15.121 12 13m0 0-2.121-2.121M12 13l2.121-2.121M12 13l-2.121 2.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3.5 4.5 4-2.5m13 2.5-4-2.5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m2.652-11.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 0 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.121 15.121 12 13m0 0-2.121-2.121M12 13l2.121-2.121M12 13l-2.121 2.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3.5 4.5 4-2.5m13 2.5-4-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.5 5.204A9 9 0 1 1 4.204 8.5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13m12.402-2.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M14.651 10.349a.75.75 0 0 1 0 1.06L13.061 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06l1.59 1.59 1.592-1.59a.75.75 0 0 1 1.06 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="13"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.121 15.121 12 13m0 0-2.121-2.121M12 13l2.121-2.121M12 13l-2.121 2.121"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3.5 4.5 4-2.5m13 2.5-4-2.5"
      />
    </>
  ),
};

export function AlarmX({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

AlarmX.displayName = "IconAlarmX";

export const IconAlarmX = AlarmX;
export const AlarmXIcon = AlarmX;
