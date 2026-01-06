import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5m-8 0a7.46 7.46 0 0 1-5.618-5.472L2 6m14 7c1.71 0 3.15 1.28 3.35 2.98L20 21.5"
      />
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <>
      <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      <path
        fill="currentColor"
        d="M2.728 5.818a.75.75 0 1 0-1.455.364l.382 1.528a8.21 8.21 0 0 0 5.595 5.869v4.473c0 .898 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.595.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08.627-.084 1.194-.27 1.65-.726s.64-1.022.725-1.65c.08-.594.08-1.344.08-2.242v-4.193a2.62 2.62 0 0 1 1.856 2.208l.65 5.52a.75.75 0 0 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25H8.085A6.71 6.71 0 0 1 3.11 7.346z"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13h8c1.71 0 3.15 1.28 3.35 2.98L20 21.5M8 13a7.46 7.46 0 0 1-5.618-5.472L2 6m6 7v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-1"
      />
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.728 5.818a.75.75 0 1 0-1.456.364l.382 1.528a8.21 8.21 0 0 0 5.596 5.869v4.473c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-4.193a2.62 2.62 0 0 1 1.856 2.208l.65 5.52a.75.75 0 1 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25H8.084A6.71 6.71 0 0 1 3.11 7.346zM8.75 18v-4.25h6.5V18c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789s-.327.237-.788.3c-.484.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.818 5.272a.75.75 0 0 1 .91.546l.382 1.528a6.71 6.71 0 0 0 4.974 4.904H16a4.124 4.124 0 0 1 4.095 3.642l.65 5.52a.75.75 0 0 1-1.49.176l-.65-5.521A2.624 2.624 0 0 0 16 13.75H7.918l-.08-.018A8.21 8.21 0 0 1 1.653 7.71l-.382-1.528a.75.75 0 0 1 .546-.91"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 13.75V18c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-4.25z"
        opacity=".5"
      />
      <circle cx="12" cy="6" r="4" fill="currentColor" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20 21.5-.65-5.52C19.15 14.28 17.71 13 16 13H8c-3 0-4.933-2.731-5.618-5.472L2 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5"
        opacity=".5"
      />
      <circle
        cx="12"
        cy="6"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".9"
      />
    </>
  ),
};

function UserHandUp({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

UserHandUp.displayName = "IconUserHandUp";

export const IconUserHandUp = UserHandUp;
export const UserHandUpIcon = UserHandUp;
