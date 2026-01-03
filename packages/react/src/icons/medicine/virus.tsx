import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2m10.05 11.05-.55-.55M6 19.05 7.05 18"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle
        cx="19.5"
        cy="4.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 5 2)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(1 0 0 -1 17.05 21.05)"
      />
      <circle
        cx="4.5"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(180 4.5 20.5)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 5.5a1.5 1.5 0 0 1-1.889 1.45l-.63.63a1 1 0 0 1-.073.064 7.1 7.1 0 0 1 1.409 2.867q.09-.01.183-.011a1.5 1.5 0 0 1 0 3h-.138a6.83 6.83 0 0 1-1.837 3.454l1.136 1.147a1.503 1.503 0 0 1 1.889 1.449 1.5 1.5 0 1 1-2.95-.389l-1.13-1.13a1 1 0 0 1-.105-.132 6.8 6.8 0 0 1-1.527.738l-.216.613a2.25 2.25 0 0 1-4.244 0l-.247-.7a7 7 0 0 1-1.4-.712l-1.377 1.41A2 2 0 1 1 5.81 18.17l1.255-1.286a7.14 7.14 0 0 1-1.75-2.909 2 2 0 1 1-.061-3.96A6.85 6.85 0 0 1 6.509 7.57l-.728-.728a2 2 0 1 1 1.06-1.06l.729.727a6.85 6.85 0 0 1 3.68-1.48v-.23a1.5 1.5 0 1 1 1.5 0v.254a7.1 7.1 0 0 1 3.606 1.538 1 1 0 0 1 .064-.071l.63-.631A1.5 1.5 0 1 1 20 5.5M11.75 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-1.25-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2m10.05 11.05-.55-.55M6 19.05 7.05 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.5 13a2 2 0 1 0 2-2"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.56 5.56a1.5 1.5 0 1 1 0-2.12M2 3.5A1.5 1.5 0 1 0 3.5 2"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.05 19.55a1.5 1.5 0 1 0-1.5 1.5M3.44 19.44a1.5 1.5 0 1 1 0 2.12"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 10.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5-4a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M10 8.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 1.25a2.25 2.25 0 0 1 2.03 3.22l1.507 1.506a7.6 7.6 0 0 1 2.94-1.488 2.25 2.25 0 1 1 4.018.052c1.072.3 2.053.823 2.89 1.515l.584-.585a2.25 2.25 0 1 1 1.06 1.06l-.584.585a7.9 7.9 0 0 1 1.44 2.638l.115-.003a2.25 2.25 0 1 1-.05 4.5 7.6 7.6 0 0 1-1.9 3.24l.03.03a2.25 2.25 0 1 1-1.06 1.06l-.13-.13a7.6 7.6 0 0 1-2.382 1.066 2.25 2.25 0 0 1-4.05-.068 7.8 7.8 0 0 1-2.263-1.066.8.8 0 0 1-.115.148l-1.033 1.034a2.25 2.25 0 1 1-1.043-1.078l1.016-1.017.036-.033a7.9 7.9 0 0 1-2.017-3.44 2.25 2.25 0 1 1-.052-4.018 7.6 7.6 0 0 1 1.489-2.941L4.47 5.53a2.25 2.25 0 1 1-.97-4.28m.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m7.864 14.75a6.114 6.114 0 0 0 6.136-6.136v-.052c-.028-3.456-2.856-6.284-6.312-6.312a6.115 6.115 0 0 0-6.188 6.188c.028 3.456 2.856 6.284 6.313 6.312zm7.636-6.957a.75.75 0 0 1 0 1.414zM19.5 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-16 7.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m14.3 8.3a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m-13.3 1.7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M11.25 3.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 12.057A6.865 6.865 0 0 1 12.057 19C8.19 18.969 5.03 15.81 5 11.944A6.865 6.865 0 0 1 11.944 5c3.865.031 7.025 3.19 7.056 7.057m-4.5-1.807a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
        opacity=".5"
      />
      <circle cx="19.5" cy="4.5" r="1.5" fill="currentColor" />
      <path
        fill="currentColor"
        d="m18.05 4.889-1.63 1.63a1 1 0 0 0-.064.072 7.2 7.2 0 0 1 1.053 1.053 1 1 0 0 0 .071-.064l1.631-1.63a1.5 1.5 0 0 1-1.06-1.061"
        opacity=".5"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        fill="currentColor"
        transform="matrix(1 0 0 -1 17.05 21.05)"
      />
      <path
        fill="currentColor"
        d="m9.63 18.55.248.7a2.25 2.25 0 0 0 4.244 0l.216-.613a7.04 7.04 0 0 1-4.708-.087m-4.517-7.92a1.5 1.5 0 1 0 .04 2.72 7.1 7.1 0 0 1-.04-2.72m13.75 2.864a7.1 7.1 0 0 0-.047-2.983q.09-.01.184-.011a1.5 1.5 0 1 1-.137 2.994M13.35 5.153a1.5 1.5 0 1 0-2.72-.04 7.1 7.1 0 0 1 2.72.04"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m17.1 19.161-1.25-1.251a7 7 0 0 0 1.17-.95l1.142 1.142a1.5 1.5 0 0 0-1.06 1.06"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        fill="currentColor"
        transform="matrix(-1 0 0 1 6 2)"
      />
      <path
        fill="currentColor"
        d="M4.781 5.842a2 2 0 0 0 1.06-1.06l1.69 1.688.037.04q-.587.471-1.058 1.058l-.04-.038z"
        opacity=".5"
      />
      <circle
        cx="5"
        cy="20"
        r="2"
        fill="currentColor"
        transform="rotate(180 5 20)"
      />
      <path
        fill="currentColor"
        d="m5.816 18.173 1.269-1.269q.535.536 1.171.95l-1.4 1.4a2 2 0 0 0-1.04-1.08"
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
        d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m18 6-1.05 1.05M5 5l2 2"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m17.05 18.05-.55-.55"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M6 19.05 7.05 18"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        opacity=".5"
      />
      <circle cx="9" cy="13" r="1" fill="currentColor" opacity=".5" />
      <circle
        cx="19.5"
        cy="4.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 5 2)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
        opacity=".5"
      />
      <circle
        cx="1.5"
        cy="1.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(1 0 0 -1 17.05 21.05)"
      />
      <circle
        cx="4.5"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(180 4.5 20.5)"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"
        opacity=".5"
      />
    </>
  ),
};

export function Virus({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

Virus.displayName = "IconVirus";

export const IconVirus = Virus;
export const VirusIcon = Virus;
