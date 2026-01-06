import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 20.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="m21.824 13.878-4.112 1.645-.38 4.938a10 10 0 0 0 4.492-6.583m-6.058 7.389.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m-9.098-.806-.379-4.922-4.077-1.482a10 10 0 0 0 4.456 6.404"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192zM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5"
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
        d="M16.5 20.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 0 0-9.245 9.545l.05.02 4.21 1.871 2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14 4.21-1.871.05-.02q.005-.147.005-.295A9.25 9.25 0 0 0 12 2.75m9.026 11.281-3.319 1.476-.368 4.048a9.26 9.26 0 0 0 3.687-5.524m-5.275 6.427.002-.026.45-4.943-2.625-1.05a4.25 4.25 0 0 0-3.156 0l-2.624 1.05.449 4.943.002.026A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 3.751-.792m-9.09-.903-.368-4.048-3.32-1.476a9.26 9.26 0 0 0 3.688 5.524M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M21.998 12.193 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81 2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-.234 10.767.444-5.776-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m6.058-7.389-4.112 1.644-.38 4.94a10 10 0 0 0 4.492-6.584M6.668 20.461 6.29 15.54l-4.077-1.482a10 10 0 0 0 4.456 6.404"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 20.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
    </>
  ),
};

function FaceMask({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

FaceMask.displayName = "IconFaceMask";

export const IconFaceMask = FaceMask;
export const FaceMaskIcon = FaceMask;
