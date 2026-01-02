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
        d="M8 22h8M5 19h14M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
      />
      <path
        fill="currentColor"
        d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.392m-13.356 0-.393-.393"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 12c0 1.178.302 2.286.833 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.083A6.75 6.75 0 1 0 5.25 12"
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
        d="M8 22h8M5 19h14M2 16h20"
      />
      <path
        fill="currentColor"
        d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.392m-13.356 0-.393-.393M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.98 5.98 0 0 1 6 12c0-.701.12-1.374.341-2"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M12 6.75a5.25 5.25 0 0 0-4.148 8.469h3.398V11.81l-.72.72a.75.75 0 1 1-1.06-1.061l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v3.409h3.398A5.25 5.25 0 0 0 12 6.75m-5.917 8.5a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 12c0 1.178.302 2.286.833 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.083A6.75 6.75 0 1 0 5.25 12"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12.53 9.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v4.94h1.5v-4.94l.72.72a.75.75 0 1 0 1.06-1.06zM4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0"
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
        d="M8 22h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 19h14"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m12 10 .53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.392m-13.356 0-.393-.393"
        opacity=".5"
      />
    </>
  ),
};

export function SunFogArrowUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSunFogArrowUp = SunFogArrowUp;
export const SunFogArrowUpIcon = SunFogArrowUp;
