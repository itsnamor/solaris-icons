import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m7.757 7.757 8.486 8.486m-8.486 0 8.486-8.486"
    />
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M15.712 16.773 7.227 8.288a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l8.486 8.484c.29.29.29.771 0 1.061s-.77.29-1.06 0"
      />
      <path
        fill="currentColor"
        d="M7.227 16.773a.755.755 0 0 1 0-1.06l8.485-8.486c.29-.29.771-.29 1.061 0s.29.77 0 1.06l-8.485 8.486a.754.754 0 0 1-1.06 0"
      />
    </>
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m14.828 14.828 1.415 1.415M7.757 7.757l4.002 4.002m-4.002 4.484 8.486-8.486"
    />
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M15.712 16.773 7.227 8.288a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l8.486 8.484c.29.29.29.771 0 1.061s-.77.29-1.06 0"
      />
      <path
        fill="currentColor"
        d="M7.227 16.773a.755.755 0 0 1 0-1.06l8.485-8.486c.29-.29.771-.29 1.061 0s.29.77 0 1.06l-8.485 8.486a.754.754 0 0 1-1.06 0"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M15.712 16.773 7.227 8.288a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l8.486 8.484c.29.29.29.771 0 1.061s-.77.29-1.06 0"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M7.227 16.773a.755.755 0 0 1 0-1.06l8.485-8.486c.29-.29.771-.29 1.061 0s.29.77 0 1.06l-8.485 8.486a.754.754 0 0 1-1.06 0"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.757 7.757 8.486 8.486"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.757 16.243 8.486-8.486"
      />
    </>
  ),
};

function X({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

X.displayName = "IconX";

export const IconX = X;
export const XIcon = X;
