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
        d="m21 3-9 9m0 0h5.344M12 12V6.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="m18.432 8.75 3.205-3.205C22 7.009 22 9.04 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c2.96 0 4.991 0 6.455.363L15.25 5.568V5a2.25 2.25 0 0 0-4.5 0v6A2.25 2.25 0 0 0 13 13.25h6a2.25 2.25 0 0 0 0-4.5z"
      />
      <path
        fill="currentColor"
        d="M19 11.75a.75.75 0 0 0 0-1.5h-4.19l6.72-6.72a.75.75 0 0 0-1.06-1.06l-6.72 6.72V5a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"
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
        d="m21 3-9 9m0 0h5.344M12 12V6.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m10 10c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5"
      />
      <path
        fill="currentColor"
        d="M21.53 3.53a.75.75 0 0 0-1.06-1.06l-7.72 7.72V6.655a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h5.344a.75.75 0 0 0 0-1.5H13.81z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
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
        d="m21 3-9 9m0 0h5.344M12 12V6.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"
        opacity=".5"
      />
    </>
  ),
};

export function SquareLeftDownIn({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

SquareLeftDownIn.displayName = "IconSquareLeftDownIn";

export const IconSquareLeftDownIn = SquareLeftDownIn;
export const SquareLeftDownInIcon = SquareLeftDownIn;
