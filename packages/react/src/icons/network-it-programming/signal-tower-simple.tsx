import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913m-8.035-1.963A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m16 22-4-12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.5 17.5h-5"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 2.75c-3.446 0-6.25 2.817-6.25 6.305a6.3 6.3 0 0 0 1.795 4.421.75.75 0 0 1-1.074 1.048 7.8 7.8 0 0 1-2.221-5.47C4.25 4.75 7.714 1.25 12 1.25s7.75 3.5 7.75 7.805a7.8 7.8 0 0 1-2.186 5.433.75.75 0 1 1-1.08-1.04 6.3 6.3 0 0 0 1.766-4.393c0-3.488-2.804-6.305-6.25-6.305"
      />
      <path
        fill="currentColor"
        d="M12 5.572c-1.9 0-3.45 1.554-3.45 3.483 0 .946.372 1.801.978 2.429a.75.75 0 0 1-1.08 1.041 5 5 0 0 1-1.398-3.47c0-2.747 2.21-4.983 4.95-4.983s4.95 2.236 4.95 4.983a5 5 0 0 1-1.361 3.432.75.75 0 1 1-1.091-1.03c.59-.625.952-1.47.952-2.402 0-1.93-1.55-3.483-3.45-3.483"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.284 9.775A1.249 1.249 0 0 1 12 7.5a1.25 1.25 0 0 1 .716 2.275l2.49 7.471.011.033 1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484.011-.033zM12 12.372l1.46 4.378h-2.92z"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 4.822c-2.32 0-4.2 1.895-4.2 4.233 0 1.147.453 2.187 1.188 2.95M12 2c3.866 0 7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913M7.008 14A7.06 7.06 0 0 1 5 9.055a7.06 7.06 0 0 1 2.008-4.946m8.035 7.863A4.24 4.24 0 0 0 16.2 9.055c0-.746-.191-1.447-.527-2.055"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m16 22-4-12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.5 17.5h-5"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M5.75 9.055C5.75 5.567 8.554 2.75 12 2.75s6.25 2.817 6.25 6.305a6.3 6.3 0 0 1-1.767 4.393.75.75 0 1 0 1.08 1.04 7.8 7.8 0 0 0 2.187-5.433c0-4.305-3.464-7.805-7.75-7.805s-7.75 3.5-7.75 7.805a7.8 7.8 0 0 0 2.22 5.469.75.75 0 0 0 1.075-1.048A6.3 6.3 0 0 1 5.75 9.055"
      />
      <path
        fill="currentColor"
        d="M8.55 9.055c0-1.93 1.55-3.483 3.45-3.483s3.45 1.554 3.45 3.483c0 .932-.362 1.777-.952 2.402a.75.75 0 1 0 1.09 1.03 5 5 0 0 0 1.362-3.432c0-2.747-2.21-4.983-4.95-4.983S7.05 6.308 7.05 9.055c0 1.348.533 2.573 1.398 3.47a.75.75 0 1 0 1.08-1.041 3.5 3.5 0 0 1-.978-2.43"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 8.75a2 2 0 0 1-1.04 1.755l2.246 6.741.011.033 1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484.011-.033 2.247-6.74A2 2 0 1 1 14 8.75m-2.5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-.96 8h2.92L12 12.372z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.284 9.775A1.249 1.249 0 0 1 12 7.5a1.25 1.25 0 0 1 .716 2.275l2.49 7.471.011.033 1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484.011-.033zM12 12.372l1.46 4.378h-2.92z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2.75c-3.446 0-6.25 2.817-6.25 6.305a6.3 6.3 0 0 0 1.795 4.421.75.75 0 0 1-1.074 1.048 7.8 7.8 0 0 1-2.221-5.47C4.25 4.75 7.714 1.25 12 1.25s7.75 3.5 7.75 7.805a7.8 7.8 0 0 1-2.186 5.433.75.75 0 1 1-1.08-1.04 6.3 6.3 0 0 0 1.766-4.393c0-3.488-2.804-6.305-6.25-6.305"
        opacity=".4"
      />
      <path
        fill="currentColor"
        d="M12 5.572c-1.9 0-3.45 1.554-3.45 3.483 0 .946.372 1.801.977 2.429a.75.75 0 0 1-1.08 1.041 5 5 0 0 1-1.397-3.47c0-2.747 2.21-4.983 4.95-4.983s4.95 2.236 4.95 4.983a5 5 0 0 1-1.362 3.432.75.75 0 1 1-1.09-1.03c.59-.625.952-1.47.952-2.402 0-1.93-1.55-3.483-3.45-3.483"
        opacity=".7"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913"
        opacity=".4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8.988 12.005A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"
        opacity=".7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m16 22-4-12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14.5 17.5h-5"
      />
    </>
  ),
};

export function SignalTowerSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

SignalTowerSimple.displayName = "IconSignalTowerSimple";

export const IconSignalTowerSimple = SignalTowerSimple;
export const SignalTowerSimpleIcon = SignalTowerSimple;
