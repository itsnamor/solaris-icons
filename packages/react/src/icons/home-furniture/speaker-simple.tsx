import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 6h4"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 10.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
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
        d="M20 12v2c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 6h4"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6M12 10.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 14a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10 6h4"
      />
    </>
  ),
};

export function SpeakerSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSpeakerSimple = SpeakerSimple;
export const SpeakerSimpleIcon = SpeakerSimple;
