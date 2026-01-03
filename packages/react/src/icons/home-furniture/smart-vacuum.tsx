import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm1.5 11.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-2"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M9.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.21 15.904A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 .79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a10 10 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16zm-.768 1.459a10.05 10.05 0 0 1-3.08 3.079 2.25 2.25 0 0 0 3.08-3.08m-13.805 3.08a10.05 10.05 0 0 1-3.08-3.08 2.25 2.25 0 0 0 3.08 3.08M12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
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
        d="M15 9a3 3 0 1 0-3 3"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-2M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.64-.367 3.195-1.025 4.586a3.75 3.75 0 0 1-5.14 5.14A10.7 10.7 0 0 1 12 22.75c-1.64 0-3.195-.367-4.586-1.025a3.75 3.75 0 0 1-5.14-5.14A10.7 10.7 0 0 1 1.25 12m2.012 6.263a2.25 2.25 0 0 0 2.475 2.475 10.8 10.8 0 0 1-2.475-2.475m15.002 2.475q.116.012.236.012a2.25 2.25 0 0 0 2.238-2.486 10.8 10.8 0 0 1-2.474 2.474M12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="m16.441 19.427-1 1.118.559.5a3.75 3.75 0 0 0 5.295-5.295l-.5-.56-1.118 1.001zm-8.883 0 1 1.118-.558.5a3.75 3.75 0 0 1-5.295-5.295l.5-.56 1.117 1.001z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 11.75c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10m-13.75-3a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 18v-2"
        opacity=".5"
      />
    </>
  ),
};

export function SmartVacuum({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

SmartVacuum.displayName = "IconSmartVacuum";

export const IconSmartVacuum = SmartVacuum;
export const SmartVacuumIcon = SmartVacuum;
