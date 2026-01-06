import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 8 6 22m9-14 3 14m-1-5H7"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.755 2.308A4 4 0 0 0 5.46 6.733l.017.14a1 1 0 0 0 .992.879h1.764L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752h1.764a1 1 0 0 0 .993-.88l.017-.139a4 4 0 0 0-3.295-4.425l-.373-.064a17 17 0 0 0-5.745 0zm5.495 5.444h-4.5a1 1 0 0 1-.016.157l-1.735 8.093h8.002l-1.734-8.093a1 1 0 0 1-.017-.157"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 8 6 22m9-14 .75 3.5M18 22l-1.5-7m0 2h-9"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.936 2.995a17.8 17.8 0 0 0-5.872 0l-.398.066c-1.857.312-3.113 1.987-2.89 3.784l.018.145c.017.136.14.26.313.26h11.786a.31.31 0 0 0 .313-.26l.018-.145.744.093-.744-.093c.223-1.797-1.033-3.472-2.89-3.784zm.992 5.755h1.965c.905 0 1.689-.664 1.802-1.575l-.745-.092.745.092.018-.145c.325-2.621-1.508-5.008-4.131-5.448l-.398-.067a19.3 19.3 0 0 0-6.369 0l-.397.067c-2.623.44-4.456 2.827-4.13 5.448l.017.145A1.81 1.81 0 0 0 6.107 8.75h1.965l-1.67 7.798a.75.75 0 0 0-.133.619l-1.002 4.676a.75.75 0 1 0 1.466.314l.945-4.407h8.644l.945 4.407a.75.75 0 0 0 1.466-.314l-1.002-4.676a.75.75 0 0 0-.132-.619zm-1.534 0H9.606L8 16.25h8.002z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.46 6.733a4 4 0 0 1 3.295-4.425l.373-.064a17 17 0 0 1 5.745 0l.373.064a4 4 0 0 1 3.295 4.425l-.017.14a1 1 0 0 1-.993.879H6.469a1 1 0 0 1-.992-.88z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.233 7.752 5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752H14.25q0 .078.017.157L16 16.002H7.999l1.735-8.093a1 1 0 0 0 .016-.157z"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 8 6 22m9-14 3 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 17h-9"
        opacity=".5"
      />
    </>
  ),
};

function BarChair({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

BarChair.displayName = "IconBarChair";

export const IconBarChair = BarChair;
export const BarChairIcon = BarChair;
