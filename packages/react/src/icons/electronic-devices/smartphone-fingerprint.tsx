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
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 5H9"
      />
      <circle cx="12" cy="19" r="1" stroke="currentColor" />
      <path stroke="currentColor" d="M4 17h16M4 7h16" />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5-5H9"
      />
      <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153M7.71 2.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14s3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14s-3.261.002-4.29.14M8.25 5A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 5M12 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 17a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15 5H9"
        opacity=".5"
      />
      <circle
        cx="12"
        cy="17"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
    </>
  ),
};

export function SmartphoneFingerprint({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSmartphoneFingerprint = SmartphoneFingerprint;
export const SmartphoneFingerprintIcon = SmartphoneFingerprint;
