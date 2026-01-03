import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 12.9 3.143 3.6L15 7.5m5 .063-8.571 9L11 16"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m2.474-13.581a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.162 0l-2.286-2.8a.75.75 0 0 1 1.162-.948l1.705 2.088 5.133-6.288a.75.75 0 0 1 1.055-.107m4 0a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.21-.064l-.285-.438a.75.75 0 0 1 .88-1.116l5.167-6.33a.75.75 0 0 1 1.055-.107"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        fill="currentColor"
        d="M4.565 12.407a.75.75 0 1 0-1.13.986zM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0zm8.422-8.507a.75.75 0 1 0-1.13-.986zm-5.059 3.514a.75.75 0 0 0 1.13.986zm-.834 3.236a.75.75 0 1 0-1.13-.986zm-6.237-1.35 3.143 3.6 1.13-.986-3.143-3.6zm4.273 3.6 1.964-2.25-1.13-.986-1.964 2.25zm3.928-4.5 1.965-2.25-1.13-.986-1.965 2.25zm1.965-2.25 1.964-2.25-1.13-.986-1.964 2.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20 7.563-4.286 4.5M11 16l.429.563 2.143-2.25"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.578 2.953 7.292-8.353a.75.75 0 0 1 1.058-.072m5.025.085c.3.285.311.76.025 1.06l-8.571 9a.75.75 0 0 1-1.14-.063l-.429-.563a.75.75 0 0 1 1.076-1.032l7.978-8.377a.75.75 0 0 1 1.06-.026"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M18.581 9.474a.75.75 0 1 0-1.162-.948l-5.168 6.33a.749.749 0 0 0-.879 1.116l.286.438a.75.75 0 0 0 1.209.064zm-4 0a.75.75 0 1 0-1.162-.948l-5.133 6.288-1.705-2.088a.75.75 0 0 0-1.162.948l2.286 2.8a.75.75 0 0 0 1.162 0z"
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
        d="m4 12.9 3.143 3.6L15 7.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20 7.563-8.571 9L11 16"
      />
    </>
  ),
};

export function CheckCheck({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CheckCheck.displayName = "IconCheckCheck";

export const IconCheckCheck = CheckCheck;
export const CheckCheckIcon = CheckCheck;
