import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 9v4h4"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeDasharray="0.5 3.5"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97 9 9 0 0 0-.42.173.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06 9 9 0 0 0-.321.322.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 9v4h4"
      />
      <path
        stroke="currentColor"
        strokeDasharray="0.5 3.5"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 20.662A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97 9 9 0 0 0-.42.173.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06 9 9 0 0 0-.321.322.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.1 2.398a.75.75 0 0 1-.43.97 9 9 0 0 0-.42.173.75.75 0 0 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06q-.165.157-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.091.207-.174.419a.75.75 0 0 1-1.399-.54q.096-.247.202-.488a.75.75 0 0 1 .99-.381"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75"
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 9v4h4"
        opacity=".5"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeDasharray="0.5 3.5"
        strokeLinecap="round"
        strokeWidth="1.5"
        opacity=".5"
      />
    </>
  ),
};

export function ClockDotted({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconClockDotted = ClockDotted;
export const ClockDottedIcon = ClockDotted;
