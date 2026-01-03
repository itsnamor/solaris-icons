import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path
        fill="currentColor"
        d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 12V9"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12.11 7.434a4.752 4.752 0 0 1 8.78 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586h-.75v-3a.75.75 0 0 0-1.5 0v3H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.34 8.618a2.251 2.251 0 0 1 4.32 0 .75.75 0 1 0 1.44-.42 3.751 3.751 0 0 0-7.2 0 .75.75 0 0 0 1.44.42"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path
        fill="currentColor"
        d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16s0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20h-1m-.5-8V9"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M16.5 4.75a4.75 4.75 0 0 0-4.391 2.934.75.75 0 1 1-1.386-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.75"
      />
      <path
        fill="currentColor"
        d="M16.5 7.25a2.25 2.25 0 0 0-2.16 1.618.75.75 0 1 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7.25M6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.948 11.25h9.802V9a.75.75 0 0 1 1.5 0v2.25h.802c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08M18 12.75c.964 0 1.612.002 2.095.066.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 4.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.5"
        clipRule="evenodd"
        opacity=".4"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 7a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7"
        clipRule="evenodd"
        opacity=".7"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 15.75c0-1.886 0-2.828.586-3.414S4.114 11.75 6 11.75h12c1.886 0 2.828 0 3.414.586S22 13.864 22 15.75s0 2.828-.586 3.414-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586S2 17.636 2 15.75m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5z" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"
        opacity=".4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.5 12V9"
      />
    </>
  ),
};

export function WifiRouterSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

WifiRouterSimple.displayName = "IconWifiRouterSimple";

export const IconWifiRouterSimple = WifiRouterSimple;
export const WifiRouterSimpleIcon = WifiRouterSimple;
