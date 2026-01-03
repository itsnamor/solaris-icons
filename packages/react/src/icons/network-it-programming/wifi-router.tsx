import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        fill="currentColor"
        d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 11 3 4m14 7 4-7m-7 11h4m-.833-9.603A5.502 5.502 0 0 0 7 5.397"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.75 4.75 0 0 0-4.39-2.934"
      />
      <path
        fill="currentColor"
        d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6"
      />
      <path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H6c-1.886 0-2.828 0-3.414.586S2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586h-.136l3.787-6.628a.75.75 0 0 0-1.302-.744l-4 7-.22.372H7.88l-.23-.372zM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        fill="currentColor"
        d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 11 3 4m14 7 4-7m-7 11h4m-.833-9.603A5.502 5.502 0 0 0 7 5.397"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15s0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19h-1"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M7.693 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.25 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.628 3.349a.75.75 0 0 1 1.023.279l3.784 6.622h9.13l3.784-6.622a.75.75 0 0 1 1.302.744l-3.359 5.878c.793 0 1.462.007 2.002.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.541-.073 1.21-.08 2.003-.08l-3.36-5.878a.75.75 0 0 1 .28-1.023m14.357 8.401H18c.964 0 1.612.002 2.095.066.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.084 5.25a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42 2.25 2.25 0 0 0-2.16-1.618"
      />
      <path fill="currentColor" d="M12.084 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H7.86l-.209-.372zm16.698 0a.75.75 0 0 1 1.302.744l-3.787 6.628H16.14l.209-.372z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.75 4.75 0 0 0-4.39-2.934"
        clipRule="evenodd"
        opacity=".4"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6"
        clipRule="evenodd"
        opacity=".7"
      />
      <path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 11 3 4m14 7 4-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 15h4"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397"
        opacity=".4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"
        opacity=".7"
      />
      <path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
};

export function WifiRouter({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

WifiRouter.displayName = "IconWifiRouter";

export const IconWifiRouter = WifiRouter;
export const WifiRouterIcon = WifiRouter;
