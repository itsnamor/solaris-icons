import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle
        cx="11.5"
        cy="11.5"
        r="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 18.5 22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M11.157 8.024c.399 0 .723.324.723.723v1.687h1.686a.723.723 0 0 1 0 1.446H11.88v1.686a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.445h1.687V8.747c0-.4.323-.723.723-.723"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M18.5 18.5 22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25M11.5 8.25a.75.75 0 0 1 .75.75v1.75H14a.75.75 0 0 1 0 1.5h-1.75V14a.75.75 0 0 1-1.5 0v-1.75H9a.75.75 0 0 1 0-1.5h1.75V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.157 8.024c.399 0 .722.324.722.723v1.687h1.687a.723.723 0 1 1 0 1.446H11.88v1.687a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.446h1.687V8.747c0-.399.323-.723.723-.723"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m17.1 18.122 3.666 3.667a.723.723 0 0 0 1.023-1.023L18.122 17.1a9 9 0 0 1-1.022 1.022"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="11.5"
        cy="11.5"
        r="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 18.5 22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"
      />
    </>
  ),
};

export function MagnifierPlus({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

MagnifierPlus.displayName = "IconMagnifierPlus";

export const IconMagnifierPlus = MagnifierPlus;
export const MagnifierPlusIcon = MagnifierPlus;
