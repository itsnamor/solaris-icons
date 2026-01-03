import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-1.5m0-9V6"
      />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 12a5.25 5.25 0 0 1 4.5-5.197V7.5a.75.75 0 0 0 1.5 0v-.697a5.251 5.251 0 0 1 0 10.394V16.5a.75.75 0 0 0-1.5 0v.697A5.25 5.25 0 0 1 6.75 12M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
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
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.585 9.413a6 6 0 1 1 0 5.174M12 18v-1.5m0-9V6"
      />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m4.637 3.877a5.251 5.251 0 0 0 0 10.394V16.5a.75.75 0 0 1 1.5 0v.697a5.251 5.251 0 0 0 0-10.394V7.5a.75.75 0 0 1-1.5 0zM5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 7.5V5.29a6.751 6.751 0 0 0 0 13.418V16.5a.75.75 0 0 1 1.5 0v2.209a6.75 6.75 0 0 0 0-13.418V7.5a.75.75 0 0 1-1.5 0M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity=".5"
      />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-1.5m0-9V6"
        opacity=".5"
      />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
    </>
  ),
};

export function Socket({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSocket = Socket;
export const SocketIcon = Socket;
