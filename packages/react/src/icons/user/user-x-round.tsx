import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15.584 20.437C14.536 20.794 13.31 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.608 0 4.883.815 6.088 2.024M20 17.5l-2 2m0-2 2 2"
      />
    </>
  ),
  bold: (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.47 16.97a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 1 1 1.06 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.314 15.272a2.251 2.251 0 0 0-2.33 3.228 2.26 2.26 0 0 0-.08 1.821c-1.115.43-2.458.68-3.904.68-3.866 0-7-1.79-7-4s3.134-4 7-4c2.782 0 5.185.928 6.314 2.27"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20 17.5-2 2m0-2 2 2M12 13c2.608 0 4.883.815 6.088 2.024m-2.504 5.413C14.536 20.794 13.31 21 12 21c-3.866 0-7-1.79-7-4 0-1.36 1.187-2.56 3-3.283"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M12 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.422 14.823C6.267 15.483 5.75 16.28 5.75 17s.517 1.517 1.672 2.177c1.134.648 2.751 1.073 4.578 1.073 1.234 0 2.377-.194 3.342-.523a.75.75 0 1 1 .484 1.42c-1.132.386-2.44.603-3.826.603-2.04 0-3.922-.47-5.322-1.27C5.3 19.692 4.25 18.49 4.25 17s1.05-2.692 2.428-3.48c1.4-.8 3.283-1.27 5.322-1.27 2.73 0 5.227.848 6.619 2.245a.75.75 0 0 1-1.063 1.058c-1.017-1.02-3.07-1.803-5.556-1.803-1.827 0-3.444.425-4.578 1.073"
      />
      <path
        fill="currentColor"
        d="M18.53 16.97a.75.75 0 1 0-1.06 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l.47-.47.47.47a.75.75 0 1 0 1.06-1.06l-.47-.47.47-.47a.75.75 0 1 0-1.06-1.06l-.47.47z"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m-1.143-5.468a.583.583 0 1 0-.825.825l1.143 1.143-1.143 1.143a.583.583 0 1 0 .825.825l1.143-1.143 1.143 1.143a.583.583 0 1 0 .825-.825L17.325 18.5l1.143-1.143a.583.583 0 1 0-.825-.825L16.5 17.675z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443Q12.605 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15.584 20.437C14.536 20.794 13.31 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.608 0 4.883.815 6.088 2.024"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20 17.5-2 2m0-2 2 2"
      />
    </>
  ),
};

function UserXRound({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

UserXRound.displayName = "IconUserXRound";

export const IconUserXRound = UserXRound;
export const UserXRoundIcon = UserXRound;
