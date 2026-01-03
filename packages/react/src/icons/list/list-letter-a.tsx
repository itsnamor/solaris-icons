import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 7H3m7 5H3m5 5H3"
      />
      <path
        fill="currentColor"
        d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694 4.5-10-1.368-.616-4.5 10zm9-.616-1.636-3.636-1.368.615 1.636 3.637zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 7H3m7 5H3m5 5H3"
      />
      <path
        fill="currentColor"
        d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694 4.5-10-1.368-.616-4.5 10zm9-.616-1.636-3.636-1.368.615 1.636 3.637zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 1 0 1.368.616l1.437-3.194h4.758l1.437 3.194a.75.75 0 0 0 1.368-.616zM16.5 8.828l-1.704 3.786h3.408z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 7H3m7 5H3m5 5H3"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M11.316 16.692a.75.75 0 1 0 1.368.616zM16.5 7l.684-.308a.75.75 0 0 0-1.368 0zm3.816 10.308a.75.75 0 1 0 1.368-.616zm-.952-3.944.684-.308zm-5.728-.75a.75.75 0 0 0 0 1.5zm-.952 4.694 4.5-10-1.368-.616-4.5 10zm9-.616-1.636-3.636-1.368.615 1.636 3.637zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363zm-.684-.442h-5.728v1.5h5.728z"
      />
    </>
  ),
};

export function ListLetterA({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

ListLetterA.displayName = "IconListLetterA";

export const IconListLetterA = ListLetterA;
export const ListLetterAIcon = ListLetterA;
