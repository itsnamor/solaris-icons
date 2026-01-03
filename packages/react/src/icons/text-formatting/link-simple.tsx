import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325 4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
    />
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"
      />
      <path
        fill="currentColor"
        d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325 4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37.72-.72A6.1 6.1 0 0 0 20.998 9"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"
      />
      <path
        fill="currentColor"
        d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.325-4.326a.75.75 0 0 1 1.06 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m9.837 14.163 4.326-4.326"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m9.837 5.512.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
        opacity=".5"
      />
    </>
  ),
};

export function LinkSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LinkSimple.displayName = "IconLinkSimple";

export const IconLinkSimple = LinkSimple;
export const LinkSimpleIcon = LinkSimple;
