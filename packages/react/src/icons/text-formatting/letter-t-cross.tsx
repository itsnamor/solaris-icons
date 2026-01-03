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
        d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v6m0 12v-6m-5 6h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12h16"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M7.934 2h8.132c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v5a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2M12 14a1 1 0 0 1 1 1v5h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4v-5a1 1 0 0 1 1-1m-8-3a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v6m0 12v-1.5m0-4.5v2m-5 4h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12h16"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      d="M7.948 2.25h8.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V7.95a.75.75 0 0 1-1.5 0V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-3.25V9a.75.75 0 0 1-1.5 0V3.75H8c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3s-.237.327-.3.788C4.753 5.388 4.75 6.036 4.75 7v.95a.75.75 0 1 1-1.5 0V6.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08m4.052 12a.75.75 0 0 1 .75.75v5.25H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h4.25V15a.75.75 0 0 1 .75-.75m-8-3a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M16.066 2c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v16h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4V4H8c-.971 0-1.599.002-2.061.064-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2z"
        opacity=".5"
      />
      <path fill="currentColor" d="M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v18m-5 0h10"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 12h16"
      />
    </>
  ),
};

export function LetterTCross({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconLetterTCross = LetterTCross;
export const LetterTCrossIcon = LetterTCross;
