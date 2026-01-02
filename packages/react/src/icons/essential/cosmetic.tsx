import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M11 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.5 20v-4m0 4h3m-3 0h-3"
      />
      <path
        fill="currentColor"
        d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm-6 .75h6v-1.5H2zM7.25 11v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zm1-2h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8 0a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m4.75 7.21a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 16a5.5 5.5 0 1 1 3.858-1.58"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.5 20v-4m0 4h3m-3 0h-3"
      />
      <path
        fill="currentColor"
        d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm.75 6a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM2 11.75h6v-1.5H2zM2.75 17v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17zm0-6v2h1.5v-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0zm3.5-1.5V5.618a.25.25 0 0 0-.362-.224l-2 1a.25.25 0 0 0-.138.224v3.632zm10.25-6a6.25 6.25 0 0 0-.75 12.455v2.545H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.545A6.251 6.251 0 0 0 16.5 4.25m0 11a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M2 11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M3 11h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8-.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
      />
      <path
        fill="currentColor"
        d="M15.75 15.95v3.55H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.55a5.5 5.5 0 0 1-1.5 0"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M11 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.5 20v-4m0 4h3m-3 0h-3"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm-6 .75h6v-1.5H2zM7.25 11v6h1.5v-6zm-4.5 6v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"
        opacity=".5"
      />
    </>
  ),
};

export function Cosmetic({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCosmetic = Cosmetic;
export const CosmeticIcon = Cosmetic;
