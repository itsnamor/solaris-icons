import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 7v4"
      />
      <path
        fill="currentColor"
        d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.717a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m12.021 12.02a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.717a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m12.021 12.02a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 12a5 5 0 1 0-5 5m0-10v4"
      />
      <path
        fill="currentColor"
        d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.717a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m12.021 12.02a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M6.697 5.283a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M18.718 17.303a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415"
        opacity=".4"
      />
      <path
        fill="currentColor"
        d="M18.718 6.697a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
        opacity=".4"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 7v4"
        opacity=".5"
      />
      <path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fill="currentColor"
        d="M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.197-7.717a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414m12.021 12.02a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415"
        opacity=".5"
      />
    </>
  ),
};

function VolumeKnob({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

VolumeKnob.displayName = "IconVolumeKnob";

export const IconVolumeKnob = VolumeKnob;
export const VolumeKnobIcon = VolumeKnob;
