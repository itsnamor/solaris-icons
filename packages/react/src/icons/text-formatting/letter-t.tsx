import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v18m-5 0h10"
    />
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.934 2h8.132c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v17a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21h10"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v5m0 13v-9m-5 9h10"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      d="M7.948 2.25c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243V7.95a.75.75 0 1 0 1.5 0V7c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789s.327-.237.788-.3C6.388 3.753 7.036 3.75 8 3.75h3.25v16.5H7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.25V3.75H16c.964 0 1.612.002 2.095.067.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v.95a.75.75 0 0 0 1.5 0V6.948c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.343-.08-2.242-.08z"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 2h-.066c-.886 0-1.65 0-2.262.082-.655.088-1.284.287-1.793.797-.51.51-.709 1.138-.797 1.793C3 5.284 3 6.048 3 6.934V7.95a1 1 0 1 0 2 0V7c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646s.212-.17.646-.229C6.4 4.002 7.029 4 8 4h8c.971 0 1.599.002 2.061.064.434.059.57.153.646.229s.17.212.229.646C18.998 5.4 19 6.029 19 7v.95a1 1 0 1 0 2 0V6.934c0-.886 0-1.65-.082-2.262-.088-.655-.287-1.284-.797-1.793-.51-.51-1.138-.709-1.793-.797C17.716 2 16.952 2 16.066 2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 4h-2v16h2z" opacity=".5" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 21a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
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
        d="M20 7.95V7c0-1.886 0-2.828-.586-3.414S17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3v18"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 21h10"
      />
    </>
  ),
};

export function LetterT({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

LetterT.displayName = "IconLetterT";

export const IconLetterT = LetterT;
export const LetterTIcon = LetterT;
