import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 22v-6a8 8 0 1 0-16 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1-1.5 1.5M3 6l1.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 19v3"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5m10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zm.845-7.581a.75.75 0 0 1 .977-.414 4.76 4.76 0 0 1 2.623 2.623.75.75 0 0 1-1.39.563 3.26 3.26 0 0 0-1.796-1.796.75.75 0 0 1-.414-.976"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 22v-6a8 8 0 0 0-14.93-4M4 22v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.29 11.5a4 4 0 0 1 2.21 2.21M12 2v3m9 1-1.5 1.5M3 6l1.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 19v3M2 22h12m8 0h-4"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm1.822 8.805a.75.75 0 1 0-.563 1.39c.814.33 1.466.981 1.796 1.796a.75.75 0 1 0 1.39-.563 4.76 4.76 0 0 0-2.623-2.623"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.25A8.75 8.75 0 0 0 3.25 16v5.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V16A8.75 8.75 0 0 0 12 7.25m.75 14h6.5V16a7.25 7.25 0 1 0-14.5 0v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0zm-.75-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M4 16v5.25h16V16a8 8 0 1 0-16 0"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm8.78 3.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06zm11.042 5.335a.75.75 0 1 0-.563 1.39c.814.33 1.466.981 1.795 1.796a.75.75 0 1 0 1.39-.563 4.76 4.76 0 0 0-2.622-2.623M12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5zM4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 22v-6a8 8 0 1 0-16 0v6"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.29 11.5a4 4 0 0 1 2.21 2.21M2 22h20M12 2v3m9 1-1.5 1.5M3 6l1.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 19v3"
        opacity=".5"
      />
    </>
  ),
};

export function SirenRounded({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSirenRounded = SirenRounded;
export const SirenRoundedIcon = SirenRounded;
