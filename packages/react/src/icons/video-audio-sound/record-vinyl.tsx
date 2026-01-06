import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.404 16.596a6.5 6.5 0 0 1 0-9.192m9.192 0a6.5 6.5 0 0 1 0 9.192"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142M17.126 6.873a.75.75 0 1 0-1.06 1.061 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.253M9.349 9.348a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304m1.061 1.061a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182M7.934 7.934a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.061 5.75 5.75 0 0 1 0-8.132"
      clipRule="evenodd"
    />
  ),
  broken: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.404 16.596a6.5 6.5 0 0 1 0-9.192m9.192 0A6.47 6.47 0 0 1 18.423 11m-1.827 5.596A6.5 6.5 0 0 0 17.768 15"
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.54 5.46A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46M4.4 4.398C8.597.2 15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0S.2 8.597 4.399 4.4m3.535 2.474a.75.75 0 0 1 0 1.061 5.75 5.75 0 0 0 0 8.132.75.75 0 1 1-1.06 1.06 7.25 7.25 0 0 1 0-10.253.75.75 0 0 1 1.06 0m8.132 0a.75.75 0 0 1 1.06 0 7.25 7.25 0 0 1 0 10.253.75.75 0 1 1-1.06-1.06 5.75 5.75 0 0 0 0-8.132.75.75 0 0 1 0-1.06M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M17.127 6.873a.75.75 0 1 0-1.061 1.061 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.253M7.934 7.934a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.061 5.75 5.75 0 0 1 0-8.132"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.304 3.75 3.75 0 0 1-5.304-5.304m1.061 1.061a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142Z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.404 16.596a6.5 6.5 0 0 1 0-9.192m9.192 0a6.5 6.5 0 0 1 0 9.192"
      />
    </>
  ),
};

function RecordVinyl({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

RecordVinyl.displayName = "IconRecordVinyl";

export const IconRecordVinyl = RecordVinyl;
export const RecordVinylIcon = RecordVinyl;
