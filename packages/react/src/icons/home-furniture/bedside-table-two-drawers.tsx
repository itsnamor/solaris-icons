import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 22v-1.5M5 22v-1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 15.5h6m-6-9h6M2 11h20"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.25H2zm6.25-3.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M2 11.75h20V12c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M19 22v-1.5M5 22v-1.5M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M9 15.5h6m-6-9h6M2 11h12m8 0h-4"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.464.464-1.005.768-1.629.97q.02.082.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97-.748-.748-1.08-1.697-1.238-2.869-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153M2.75 11.75V12c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289v-.25zm18.5-1.5H2.75V10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289zm-13-3.75A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11h20v1c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 4.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.172 3.172C2 4.343 2 6.229 2 10v1h20v-1c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9 5.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 22v-1.5M5 22v-1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 15.5h6m-6-9h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 11h20"
        opacity=".4"
      />
    </>
  ),
};

function BedsideTableTwoDrawers({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

BedsideTableTwoDrawers.displayName = "IconBedsideTableTwoDrawers";

export const IconBedsideTableTwoDrawers = BedsideTableTwoDrawers;
export const BedsideTableTwoDrawersIcon = BedsideTableTwoDrawers;
