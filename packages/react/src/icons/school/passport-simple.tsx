import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"
      />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 4.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17a3 3 0 1 0-3-3"
      />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 4.306a2.75 2.75 0 0 0-3.139-2.722L4.814 3.126A1.82 1.82 0 0 0 3.25 5v14A3.75 3.75 0 0 0 7 22.75h10A3.75 3.75 0 0 0 20.75 19V9a3.75 3.75 0 0 0-2-3.318zM5.062 6.75H17.01A2.25 2.25 0 0 1 19.25 9v10A2.25 2.25 0 0 1 17 21.25H7A2.25 2.25 0 0 1 4.75 19V6.75zm11.95-1.5h.238v-.944a1.25 1.25 0 0 0-1.427-1.238L5.026 4.611a.321.321 0 0 0 .041.639z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4.694v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m8 4.556a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"
      />
      <circle
        cx="12"
        cy="14"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
    </>
  ),
};

export function PassportSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

PassportSimple.displayName = "IconPassportSimple";

export const IconPassportSimple = PassportSimple;
export const PassportSimpleIcon = PassportSimple;
