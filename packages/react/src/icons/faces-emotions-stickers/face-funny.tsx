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
        d="M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2"
      />
      <ellipse
        cx="14.509"
        cy="9.775"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 14.51 9.775)"
      />
      <ellipse
        cx="8.714"
        cy="11.328"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 8.714 11.328)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.936"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-3.815-6.25a.75.75 0 0 1 .91-.544c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.044 1.077 8.4 8.4 0 0 1-1.15.93l.159.321a1.5 1.5 0 0 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.234c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19-.792.907-.578 1.707.82 1.333 1.354 1.19"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2"
      />
      <ellipse
        cx="14.509"
        cy="9.775"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 14.51 9.775)"
      />
      <ellipse
        cx="8.714"
        cy="11.328"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 8.714 11.328)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.936"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4.928 4.927a9.95 9.95 0 0 1 4.484-2.586C14.746.91 20.23 4.077 21.659 9.41c1.43 5.336-1.736 10.819-7.07 12.248C9.253 23.09 3.77 19.923 2.34 14.59a9.95 9.95 0 0 1-.002-5.177"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M15.475 9.516c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19M9.68 11.069c.214.8-.044 1.564-.578 1.707s-1.14-.39-1.354-1.19.044-1.564.578-1.707 1.14.39 1.354 1.19"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m15.929 1.34a.75.75 0 0 1-.017 1.061q-.256.248-.536.476l.218.445a2.25 2.25 0 1 1-4.04 1.982l-.273-.556a8.9 8.9 0 0 1-3.8-.087.75.75 0 1 1 .364-1.455c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017m-3.174 3.005.146.298a.75.75 0 1 0 1.347-.66l-.127-.259a9 9 0 0 1-1.366.621"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M14.898 11.224c.533-.143.792-.908.578-1.708s-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708s-.82-1.333-1.354-1.19-.792.907-.578 1.708.82 1.333 1.354 1.19m-.917 2.974a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066 1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078 8.4 8.4 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91"
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
        d="M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2"
      />
      <ellipse
        cx="14.509"
        cy="9.775"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 14.51 9.775)"
      />
      <ellipse
        cx="8.714"
        cy="11.328"
        fill="currentColor"
        rx="1"
        ry="1.5"
        transform="rotate(-15 8.714 11.328)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.936"
      />
    </>
  ),
};

export function FaceFunny({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

FaceFunny.displayName = "IconFaceFunny";

export const IconFaceFunny = FaceFunny;
export const FaceFunnyIcon = FaceFunny;
