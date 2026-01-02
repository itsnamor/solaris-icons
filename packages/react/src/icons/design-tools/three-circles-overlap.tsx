import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6.5 10.189a6 6 0 1 0 7.106 3.669"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 20.472a6 6 0 1 0 5.5-10.283"
      />
    </>
  ),
  bold: (
    <>
      <path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" />
      <path
        fill="currentColor"
        d="M5.033 10.783a6 6 0 1 0 8.92 4.46 7.503 7.503 0 0 1-8.92-4.46m10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558 7.53 7.53 0 0 1-3.58 3.91"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 20.283A6 6 0 1 0 17.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M9 2.803A6 6 0 1 1 6.341 6"
      />
      <path
        fill="currentColor"
        d="M8 22v-.75zm-6-6h-.75zm.153 3.375a.75.75 0 1 0 1.299-.75zm4.097 1.576a.75.75 0 0 0-.5 1.415zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16zm-10.5 0a5.25 5.25 0 0 1 3.937-5.085l-.374-1.452A6.75 6.75 0 0 0 1.25 16zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41zm-9.454 4.498A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375zM8 21.25a5.2 5.2 0 0 1-1.75-.299l-.5 1.415A6.7 6.7 0 0 0 8 22.75z"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.8 6.8 0 0 1 5.25 8m.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586 6.75 6.75 0 0 1-7.058-3.529m8.504 3.126c.148.555.226 1.138.226 1.738a6.72 6.72 0 0 1-1.625 4.393 5.25 5.25 0 1 0 4.855-9.258 6.78 6.78 0 0 1-3.456 3.127"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" />
      <path
        fill="currentColor"
        d="M13.58 13.79a6 6 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58"
        opacity=".7"
      />
      <path
        fill="currentColor"
        d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472 6 6 0 1 0 5.58-10.262 6.01 6.01 0 0 1-4 3.58"
        opacity=".4"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M6.5 10.189a6 6 0 1 0 7.106 3.669"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 20.472a6 6 0 1 0 5.5-10.283"
        opacity=".5"
      />
    </>
  ),
};

export function ThreeCirclesOverlap({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconThreeCirclesOverlap = ThreeCirclesOverlap;
export const ThreeCirclesOverlapIcon = ThreeCirclesOverlap;
