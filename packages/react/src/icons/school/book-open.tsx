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
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 12h8m-8 3.5h5.5"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m3.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.409 4.087A1 1 0 0 1 5 5h12q.519.001 1 .126v-.82a2 2 0 0 0-2.283-1.98L4.92 3.87a1.07 1.07 0 0 0-.511.218"
      />
    </>
  ),
  broken: (
    <>
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 12h8m-8 3.5h5.5M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.611 1.584a2.75 2.75 0 0 1 3.139 2.722v1.376a3.75 3.75 0 0 1 2 3.318v10A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19V4.929c0-.906.666-1.675 1.564-1.803zM4.75 6.75V19A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19V9A2.25 2.25 0 0 0 17 6.75zm.321-1.5H17.25v-.944a1.25 1.25 0 0 0-1.427-1.238L5.026 4.611a.321.321 0 0 0 .045.639M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4.694v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m3.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
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
      <path
        fill="currentColor"
        d="M18 6v.75h.75V6zm-2.283-3.674-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 12h8m-8 3.5h5.5"
        opacity=".5"
      />
    </>
  ),
};

export function BookOpen({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconBookOpen = BookOpen;
export const BookOpenIcon = BookOpen;
