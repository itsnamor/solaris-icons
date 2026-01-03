import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"
      />
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.285 3.262a2.253 2.253 0 0 0-2.483 2.096 2.25 2.25 0 0 0-.724 2.96c.194.352.482.653.845.863l1.732 1a2.25 2.25 0 0 0 3.357-1.662 2.25 2.25 0 0 0 3.113.894l.976-.563A10 10 0 0 1 21 13c0 5.523-4.477 10-10 10S1 18.523 1 13 5.477 3 11 3q1.18.002 2.285.262m-7.839 7.99a.75.75 0 0 1 .612.246c.464.518.964.752 1.442.752.297 0 .604-.09.904-.284q.275-.175.538-.468a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248s-1.889-.505-2.558-1.248a.75.75 0 0 1 .504-1.25m7.612.246a.75.75 0 1 0-1.116 1.004c.67.743 1.548 1.248 2.558 1.248s1.889-.505 2.558-1.248a.75.75 0 0 0-1.116-1.004c-.465.518-.965.752-1.442.752s-.977-.234-1.442-.752M12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
        d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"
      />
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"
      />
    </>
  ),
  outline: (
    <>
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.92 1.405a.75.75 0 0 1 .268.79l-.995 3.714 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715-1.896 1.095a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 .832.055M12 2.75A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25a.75.75 0 0 1 0 1.5m1.398 2.375a.75.75 0 0 1 1.025-.275l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 0 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264-.164-.094a.75.75 0 0 1-.275-1.025m-7.4 5.317a.75.75 0 0 1 1.06.056c.464.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m7 0a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M11 23c5.523 0 10-4.477 10-10S16.523 3 11 3 1 7.477 1 13s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2m.999-6.558a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06m-5.94.057A.75.75 0 1 0 4.942 12.5c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.464.517-.965.752-1.442.752s-.977-.235-1.442-.751"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1m3 0c.567.63 1.256 1 2 1s1.433-.37 2-1"
      />
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 4 3.464-2L19 7.464l3.464-2m-8.416.036 1.732 1-2.732.732 1.732 1"
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

export function FaceSleeping({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

FaceSleeping.displayName = "IconFaceSleeping";

export const IconFaceSleeping = FaceSleeping;
export const FaceSleepingIcon = FaceSleeping;
