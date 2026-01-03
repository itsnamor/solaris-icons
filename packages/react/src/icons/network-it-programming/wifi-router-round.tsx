import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"
      />
      <path
        fill="currentColor"
        d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M16.5 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.385.574A4.75 4.75 0 0 0 16.5 3.5"
      />
      <path
        fill="currentColor"
        d="M16.5 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6"
      />
      <path
        fill="currentColor"
        d="M16.5 8.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 1.531 9.761l1.112 1.853a.75.75 0 0 1-1.286.772l-1.432-2.386h-9.85l-1.432 2.386a.75.75 0 0 1-1.286-.772l1.112-1.853A5 5 0 0 1 2 14.75m2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 10H7a5 5 0 0 0 0 10h10a5 5 0 0 0 4-8"
      />
      <path
        fill="currentColor"
        d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"
      />
      <path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12.109 5.684a4.752 4.752 0 0 1 8.781 0 .75.75 0 1 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.25 15a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 15a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 9.25a5.75 5.75 0 0 0-2.03 11.132l-.64 1.283a.75.75 0 1 0 1.34.67l.805-1.609q.26.024.525.024h10q.265 0 .525-.024l.804 1.61a.75.75 0 1 0 1.342-.671l-.642-1.283A5.752 5.752 0 0 0 17 9.25zM2.75 15A4.25 4.25 0 0 1 7 10.75h10a4.25 4.25 0 0 1 0 8.5H7A4.25 4.25 0 0 1 2.75 15"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.5 5.25a2.25 2.25 0 0 0-2.16 1.618.75.75 0 1 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 5.25"
      />
      <path fill="currentColor" d="M16.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.469 19.511-1.112 1.853a.75.75 0 0 0 1.286.772l1.432-2.386H7a5 5 0 0 1-1.531-.239m11.456.239 1.432 2.386a.75.75 0 0 0 1.286-.772l-1.112-1.853A5 5 0 0 1 17 19.75z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 3.5"
        clipRule="evenodd"
        opacity=".4"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6"
        clipRule="evenodd"
        opacity=".7"
      />
      <path fill="currentColor" d="M17.5 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"
      />
      <path
        fill="currentColor"
        d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 15h6.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.583 5.397a5.502 5.502 0 0 0-10.167 0"
        opacity=".4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"
        opacity=".7"
      />
      <path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </>
  ),
};

export function WifiRouterRound({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

WifiRouterRound.displayName = "IconWifiRouterRound";

export const IconWifiRouterRound = WifiRouterRound;
export const WifiRouterRoundIcon = WifiRouterRound;
