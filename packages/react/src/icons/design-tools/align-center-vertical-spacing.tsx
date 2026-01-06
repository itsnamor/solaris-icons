import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 3H2m20 18H2"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 12c0 1.886 0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M22 3H2m20 18h-4M2 21h12M9 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8h-3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m6.698 4.25h8.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H7.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08M5.905 8.817c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h8c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H8c-.964 0-1.612.002-2.095.067M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M4 12c0 1.886 0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 3H2m20 18H2"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"
      />
    </>
  ),
};

function AlignCenterVerticalSpacing({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

AlignCenterVerticalSpacing.displayName = "IconAlignCenterVerticalSpacing";

export const IconAlignCenterVerticalSpacing = AlignCenterVerticalSpacing;
export const AlignCenterVerticalSpacingIcon = AlignCenterVerticalSpacing;
