import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4M7 4V2.5M17 4V2.5"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.5 20.5 22 22M2.5 9h19"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013zM22 12v2.6a5.25 5.25 0 1 0-7.4 7.4H10c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.5 20.5 22 22m-.5-13H10.75M2 9h3.875"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743V14a.75.75 0 0 1-1.5 0v-2c0-.854 0-1.597-.013-2.25H2.763c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.168 6.5h18.336q-.024-.284-.058-.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71q-.034.255-.058.539M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692"
      />
      <path
        fill="currentColor"
        d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172S22 17.771 22 14"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 16.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M15 18.75a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 15 18.75"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 4V2.5M17 4V2.5M2 9h20"
        opacity=".5"
      />
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.5 20.5 22 22"
      />
    </>
  ),
};

function CalendarMagnifier({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CalendarMagnifier.displayName = "IconCalendarMagnifier";

export const IconCalendarMagnifier = CalendarMagnifier;
export const CalendarMagnifierIcon = CalendarMagnifier;
