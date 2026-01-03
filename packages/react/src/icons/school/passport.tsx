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
      <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 19h4"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 8a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 3.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2 9a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
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
        d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 13a3 3 0 1 1 3 3"
      />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 19h4"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.611 1.584a2.75 2.75 0 0 1 3.139 2.722v1.376a3.75 3.75 0 0 1 2 3.318v10A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19V5h.001l-.001-.071c0-.906.666-1.675 1.564-1.803zM5.071 6.75H4.75V19A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V9a2.25 2.25 0 0 0-2.24-2.25zm12.179-1.5H5.067a.321.321 0 0 1-.041-.639l10.797-1.542a1.25 1.25 0 0 1 1.427 1.237z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M9.75 13a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 18.694v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
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
        strokeWidth="1.5"
        d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"
      />
      <circle
        cx="12"
        cy="13"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 19h4"
        opacity=".5"
      />
    </>
  ),
};

export function Passport({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Passport.displayName = "IconPassport";

export const IconPassport = Passport;
export const PassportIcon = Passport;
