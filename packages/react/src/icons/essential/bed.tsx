import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.392V18a.75.75 0 0 0 1.5 0v-2.357c0-1.995 0-2.992-.28-3.794a5 5 0 0 0-3.068-3.068c-.802-.28-1.8-.28-3.794-.28h-.002c-.798 0-1.838 0-2.159.111a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893H2.75z"
      />
      <path
        fill="currentColor"
        d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 6v12m20-2v2m-10-2v-4.643c0-.798 0-1.197.112-1.518a2 2 0 0 1 1.227-1.227c.321-.112.72-.112 1.518-.112 1.995 0 2.992 0 3.794.28a5 5 0 0 1 3.068 3.069M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9.5 11A2.5 2.5 0 1 0 7 13.5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.5V18a.75.75 0 0 0 1.5 0v-2.531c0-1.828 0-2.944-.323-3.868A5.75 5.75 0 0 0 18.9 8.073c-.924-.324-2.04-.323-3.868-.323h-.3c-.673 0-1.195-.001-1.64.154a2.75 2.75 0 0 0-1.687 1.688c-.155.444-.155.966-.154 1.64v4.018h-8.5zm18.5 9.25h-8.5v-3.893c0-.86.01-1.1.07-1.27a1.25 1.25 0 0 1 .767-.767c.17-.06.41-.07 1.27-.07 2.058 0 2.895.01 3.547.239a4.25 4.25 0 0 1 2.608 2.607c.212.608.236 1.38.238 3.154"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 7.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M5.25 11a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5.25a.75.75 0 0 1 .75.75v9.25h19.893v.393l-.001.357v2a.75.75 0 1 1-1.5 0v-1.25H2.75V18a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 2 5.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m15.362-1.651a5 5 0 0 0-3.068-3.068c-.802-.281-1.8-.281-3.794-.281h-.002c-.798 0-1.838 0-2.159.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893h10.643c-.001-1.737-.02-2.654-.28-3.401"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 6v12m20 0v-2.357c0-1.995 0-2.993-.28-3.794a5 5 0 0 0-3.07-3.069c-.8-.28-1.798-.28-3.793-.28-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        opacity=".5"
      />
    </>
  ),
};

export function Bed({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Bed.displayName = "IconBed";

export const IconBed = Bed;
export const BedIcon = Bed;
