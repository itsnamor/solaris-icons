import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m18.364 8.05-.707-.707a8 8 0 1 0 2.28 4.658m-1.573-3.95h-4.243m4.243 0V3.807"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M18.258 3.508a.75.75 0 0 1 .463.693v4.243a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1-.53-1.28L14.8 6.31a7.25 7.25 0 1 0 4.393 5.783.75.75 0 0 1 1.488-.187A8.75 8.75 0 1 1 15.93 5.18l1.51-1.51a.75.75 0 0 1 .817-.162"
    />
  ),
  broken: (
    <>
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.729 10.928A8.003 8.003 0 0 1 8.5 20.196M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 18m12.61-9.95h-4.243m4.243 0V3.808"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822.75.75 0 1 1 1.45-.387 8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.873 7.873a7.25 7.25 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727.75.75 0 0 0-1.488.187 7.25 7.25 0 1 1-12.32-4.22"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51-1.13 1.13-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75z"
      />
    </>
  ),
  "line-duotone": (
    <>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clip-path="url(#a)"
      >
        <path d="M19.729 10.928a8 8 0 1 1-2.072-3.585l.707.707" opacity=".5" />
        <path d="M14.121 8.05h4.243V3.808" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
};

export function ArrowRotate({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ArrowRotate.displayName = "IconArrowRotate";

export const IconArrowRotate = ArrowRotate;
export const ArrowRotateIcon = ArrowRotate;
