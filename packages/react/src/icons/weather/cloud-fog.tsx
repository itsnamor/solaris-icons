import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 22h8M5 19h14M2 16h20"
      />
    </>
  ),
  bold: (
    <path
      fill="currentColor"
      d="M6.762 7.647C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353a5.57 5.57 0 0 1-.808 2.897H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.271A4.2 4.2 0 0 1 2 13.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
    />
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12.353c0 1.39-.508 2.663-1.351 3.647M14.38 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 22h8M5 19h6m8 0h-4M2 16h20"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 .532.12 1.035.336 1.485h17.203a4.83 4.83 0 0 0 .961-2.897c0-2.137-1.39-3.962-3.338-4.628a5 5 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.5 6.5 0 0 1 3.024-.305 4.96 4.96 0 0 0-4.682-3.264m6.355 3.721c-.559-2.977-3.197-5.221-6.355-5.221-3.562 0-6.464 2.856-6.464 6.397q0 .582.102 1.135c-2.694.09-4.864 2.278-4.864 4.983 0 .577.1 1.132.282 1.649A.749.749 0 0 0 2 16.75h20a.75.75 0 0 0 .05-1.498c.447-.87.7-1.856.7-2.9 0-2.643-1.619-4.904-3.919-5.88M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M2 15.249a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
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
        d="M14.381 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 22h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 19h14"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 16h20"
      />
    </>
  ),
};

export function CloudFog({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

CloudFog.displayName = "IconCloudFog";

export const IconCloudFog = CloudFog;
export const CloudFogIcon = CloudFog;
