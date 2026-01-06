import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M5 22v-8m0 0V4m0 10 2.47-.494a8.7 8.7 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334 1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361 8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M5 22v-8m0 0 2.47-.494a8.7 8.7 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 1.25a.75.75 0 0 1 .75.75v1.085l1.574-.315a9.43 9.43 0 0 1 5.35.492l.203.081a7.25 7.25 0 0 0 4.45.302 1.95 1.95 0 0 1 2.423 1.892v7.367c0 .988-.673 1.85-1.632 2.09l-.214.053a9.43 9.43 0 0 1-5.788-.393 7.93 7.93 0 0 0-4.498-.413l-1.868.374V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 5 1.25m.75 11.835 1.574-.315a9.43 9.43 0 0 1 5.35.492 7.93 7.93 0 0 0 4.866.33l.215-.054a.654.654 0 0 0 .495-.634V5.537a.45.45 0 0 0-.559-.437 8.75 8.75 0 0 1-5.371-.364l-.204-.082a7.93 7.93 0 0 0-4.498-.413l-1.868.374z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m13.349 3.79-.204-.082a8.7 8.7 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.7 8.7 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.214-.053a1.404 1.404 0 0 0 1.064-1.362V5.287a1.2 1.2 0 0 0-1.49-1.164 8 8 0 0 1-4.911-.334"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M5 22V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m5 14 2.47-.494a8.7 8.7 0 0 1 4.925.452 8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164 8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4"
        opacity=".5"
      />
    </>
  ),
};

function Flag({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Flag.displayName = "IconFlag";

export const IconFlag = Flag;
export const FlagIcon = Flag;
