import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7.599 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815 5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        fill="currentColor"
        d="M5 21.25a.75.75 0 0 1 0 1.5zM8.75 19v.75h-1.5V19zm-.498 1.868a.75.75 0 0 1-1.307-.736zm9.094-19.236a.75.75 0 0 1 1.308.736zM2.75 19A2.25 2.25 0 0 0 5 21.25v1.5A3.75 3.75 0 0 1 1.25 19zm4.5 0A2.25 2.25 0 0 0 5 16.75v-1.5A3.75 3.75 0 0 1 8.75 19zM5 16.75A2.25 2.25 0 0 0 2.75 19h-1.5A3.75 3.75 0 0 1 5 15.25zm1.945 3.382 10.401-18.5 1.308.736-10.402 18.5z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.346 1.632a.75.75 0 0 1 1.308.736L12.86 12.672l2.708 4.815a3.751 3.751 0 1 1 .136 3.303L12 14.202 8.296 20.79a3.75 3.75 0 1 1 .136-3.303l2.708-4.815L5.346 2.368a.75.75 0 0 1 1.308-.736L12 11.142zM5 21.25a2.25 2.25 0 0 0 1.953-1.131l.02-.036A2.25 2.25 0 1 0 5 21.25m14 0a2.25 2.25 0 0 1-1.953-1.131l-.02-.036A2.25 2.25 0 1 1 19 21.25"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M17.346 1.633a.75.75 0 1 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.401 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.599 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
    </>
  ),
};

export function Scissors({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconScissors = Scissors;
export const ScissorsIcon = Scissors;
