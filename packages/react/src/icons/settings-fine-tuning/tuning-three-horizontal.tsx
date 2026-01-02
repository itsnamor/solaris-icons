import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 12 12)"
      />
      <circle
        cx="10"
        cy="20"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-90 10 20)"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(0 -1 -1 0 16 6)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16 12h3m-5 8h5M10 4H5m0 8h3m-3 8h1M19 4h-1"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4m5.25-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.5 20H19m-7 0h2.75M6.5 4H5m7 0H9.25M19 12h-5m5-8h-3M5 20h2.667M10 12H7.5m-2 0H5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.75 4a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M14 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-2 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5M10.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M10 22.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5M8.75 20a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
      />
      <path
        fill="currentColor"
        d="M13.855 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71-1.5a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5zm1.71 8a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5zm-3.71 0H5a.75.75 0 0 0 0 1.5h3.145a2 2 0 0 1 0-1.5m7.71-14.5a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71 0a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20h7m0-8h-5m5-8h-3m-4 0H5m5 8H5m0 8h2.667"
        opacity=".5"
      />
    </>
  ),
};

export function TuningThreeHorizontal({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconTuningThreeHorizontal = TuningThreeHorizontal;
export const TuningThreeHorizontalIcon = TuningThreeHorizontal;
