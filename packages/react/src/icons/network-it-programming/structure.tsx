import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 19h8M8 5h8m3 11V8M5 16V8"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.907 4.256a3.001 3.001 0 1 0-3.651 3.651A1 1 0 0 0 4.25 8v8q0 .048.006.093a3.001 3.001 0 1 0 3.651 3.651q.045.006.093.006h8a1 1 0 0 0 .093-.006 3.001 3.001 0 1 0 3.651-3.651A1 1 0 0 0 19.75 16V8a1 1 0 0 0-.006-.093 3.001 3.001 0 1 0-3.651-3.651A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006M5.744 7.907q.006.045.006.093v8a1 1 0 0 1-.006.093 3 3 0 0 1 2.163 2.163A1 1 0 0 1 8 18.25h8a1 1 0 0 1 .093.006 3 3 0 0 1 2.163-2.163A1 1 0 0 1 18.25 16V8q0-.048.006-.093a3 3 0 0 1-2.163-2.163A1 1 0 0 1 16 5.75H8a1 1 0 0 1-.093-.006 3 3 0 0 1-2.163 2.163"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 5h8m3 11v-3m0-5v1m-3 10h-3m-3 0H8m-3-3V8"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25 8.675A3.751 3.751 0 1 1 8.675 4.25h6.65a3.751 3.751 0 1 1 4.425 4.425v6.65a3.751 3.751 0 1 1-4.425 4.425h-6.65a3.751 3.751 0 1 1-4.425-4.425zM2.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m3 10.325v-6.65A3.75 3.75 0 0 0 8.675 5.75h6.65a3.76 3.76 0 0 0 2.925 2.925v6.65a3.76 3.76 0 0 0-2.925 2.925h-6.65a3.76 3.76 0 0 0-2.925-2.925M5 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M21.25 5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m-4.5 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
      <path
        fill="currentColor"
        d="M16.093 4.256A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006 3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006 3 3 0 0 1 0-1.488M19 8q.386 0 .744-.093.006.045.006.093v8a1 1 0 0 1-.006.093 3 3 0 0 0-1.488 0A1 1 0 0 1 18.25 16V8q0-.048.006-.093.358.091.744.093m-2.907 10.256A1 1 0 0 0 16 18.25H8a1 1 0 0 0-.093.006 3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006 3 3 0 0 1 0-1.488M5 8q-.386 0-.744-.093A1 1 0 0 0 4.25 8v8q0 .048.006.093a3 3 0 0 1 1.488 0A1 1 0 0 0 5.75 16V8a1 1 0 0 0-.006-.093Q5.386 7.998 5 8"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 19h8M8 5h8m3 11V8M5 16V8"
        opacity=".5"
      />
    </>
  ),
};

export function Structure({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Structure.displayName = "IconStructure";

export const IconStructure = Structure;
export const StructureIcon = Structure;
