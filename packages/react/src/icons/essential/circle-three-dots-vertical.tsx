import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        fill="currentColor"
        d="M12 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        fill="currentColor"
        d="M12 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12M12 21.25a9.25 9.25 0 1 1 0-18.5 9.25 9.25 0 0 1 0 18.5"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M13 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
    </>
  ),
};

export function CircleThreeDotsVertical({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CircleThreeDotsVertical.displayName = "IconCircleThreeDotsVertical";

export const IconCircleThreeDotsVertical = CircleThreeDotsVertical;
export const CircleThreeDotsVerticalIcon = CircleThreeDotsVertical;
