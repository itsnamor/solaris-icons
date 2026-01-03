import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 9h6m-3 6V9"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 20h12m0-16H6m14 14V6M4 6v12"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.86 3.263A2 2 0 1 0 3.263 5.86 1 1 0 0 0 3.25 6v12q0 .072.013.14a2 2 0 1 0 2.597 2.597 1 1 0 0 0 .14.013h12a1 1 0 0 0 .14-.013 2 2 0 1 0 2.597-2.597 1 1 0 0 0 .013-.14V6a1 1 0 0 0-.013-.14 2 2 0 1 0-2.597-2.597A1 1 0 0 0 18 3.25H6a1 1 0 0 0-.14.013M4.737 5.86A1 1 0 0 1 4.75 6v12a1 1 0 0 1-.013.14c.512.203.92.611 1.123 1.123A1 1 0 0 1 6 19.25h12q.072 0 .14.013c.203-.512.611-.92 1.123-1.123a1 1 0 0 1-.013-.14V6q0-.072.013-.14a2 2 0 0 1-1.123-1.123 1 1 0 0 1-.14.013H6a1 1 0 0 1-.14-.013c-.203.512-.611.92-1.123 1.123"
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
        d="M9 9h6m-3 6V9"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18 4H6m14 14v-6m0-6v2m-2 12h-6m-6 0h2M4 6v12"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M9 8.25a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0V9.75H15a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 6.646A2.751 2.751 0 1 1 6.646 3.25h10.708a2.751 2.751 0 1 1 3.396 3.396v10.708a2.751 2.751 0 1 1-3.396 3.396H6.646a2.751 2.751 0 1 1-3.396-3.396zM4 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m.75 14.604V6.646A2.76 2.76 0 0 0 6.646 4.75h10.708c.259.916.98 1.637 1.896 1.896v10.708a2.76 2.76 0 0 0-1.896 1.896H6.646a2.76 2.76 0 0 0-1.896-1.896M4 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M21.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-2.5 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        fill="currentColor"
        d="M4.75 5.855a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0zM5.855 4.75h12.29a2 2 0 0 1 0-1.5H5.855a2 2 0 0 1 0 1.5M19.25 5.855a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0zM18.145 19.25H5.855a2 2 0 0 1 0 1.5h12.29a2 2 0 0 1 0-1.5"
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
        d="M9 9h6m-3 6V9"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 20h12m0-16H6m14 14V6M4 6v12"
        opacity=".5"
      />
    </>
  ),
};

export function FrameT({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

FrameT.displayName = "IconFrameT";

export const IconFrameT = FrameT;
export const FrameTIcon = FrameT;
