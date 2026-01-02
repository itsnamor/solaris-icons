import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m12.765 20.416-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65 7.65-7.65m0 0-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65-7.65 7.65"
      />
      <circle
        cx="9.172"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 9.172 12)"
      />
      <circle
        cx="12"
        cy="14.828"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 14.828)"
      />
      <circle
        cx="12"
        cy="9.172"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 9.172)"
      />
      <circle
        cx="14.828"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 14.828 12)"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="m20.91 13.332-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.235 19.885 7.65-7.65-8.12-8.12-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m3.09 10.668 7.578-7.577a5.41 5.41 0 0 0-7.577 7.577"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65 7.65-7.65m-7.65 7.65-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65 7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766 4.59 4.59"
      />
      <circle
        cx="9.172"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 9.172 12)"
      />
      <circle
        cx="12"
        cy="14.828"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 14.828)"
      />
      <circle
        cx="12"
        cy="9.172"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 9.172)"
      />
      <circle
        cx="14.828"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 14.828 12)"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M9.879 11.293a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.054 3.054a6.16 6.16 0 0 1 8.711 0l9.18 9.18a6.16 6.16 0 0 1-8.71 8.712l-9.18-9.18a6.16 6.16 0 0 1 0-8.712m7.078.573a4.66 4.66 0 0 0-6.505 6.505zm1.103 1.018-6.59 6.59 8.12 8.12 6.59-6.59zm9.138 9.223-6.505 6.505a4.66 4.66 0 0 0 6.505-6.505"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m19.885 12.235.53.53q.27.27.494.567l-7.577 7.577a5.5 5.5 0 0 1-.567-.493l-.53-.531zM10.668 3.09q.296.224.567.495l.53.53-7.65 7.65-.53-.53q-.27-.27-.495-.567z"
      />
      <circle
        cx="9.172"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 9.172 12)"
      />
      <circle
        cx="12"
        cy="14.828"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 14.828)"
      />
      <circle
        cx="12"
        cy="9.172"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 9.172)"
      />
      <circle
        cx="14.828"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 14.828 12)"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m12.765 20.416 7.65-7.65m-9.18-9.182-7.65 7.651"
        opacity=".5"
      />
      <circle
        cx="9.172"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 9.172 12)"
      />
      <circle
        cx="12"
        cy="14.828"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 14.828)"
      />
      <circle
        cx="12"
        cy="9.172"
        r="1"
        fill="currentColor"
        transform="rotate(-45 12 9.172)"
      />
      <circle
        cx="14.828"
        cy="12"
        r="1"
        fill="currentColor"
        transform="rotate(-45 14.828 12)"
      />
    </>
  ),
};

export function AdhesiveBandage({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconAdhesiveBandage = AdhesiveBandage;
export const AdhesiveBandageIcon = AdhesiveBandage;
