import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20 17.6-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  bold: (
    <>
      <path fill="currentColor" d="M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.818 14.112-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894a9.25 9.25 0 1 1 16.858 5.4l-1.833-1.663a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20 17.6-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"
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
      d="m2.83 10.777.428-.374a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281l1.743 1.57A9.25 9.25 0 1 0 2.83 10.777m16.332 7.078-1.887-1.699a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07l-1.46 1.278A9.25 9.25 0 0 0 12 21.25a9.23 9.23 0 0 0 7.162-3.395M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="m11.182 15.362-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894c-.017.013-.05.099-.05.338a9.3 9.3 0 0 0 17.025 5.179l-.117-.118-1.833-1.662a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222"
        opacity=".5"
      />
      <path fill="currentColor" d="M15 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m19.73-2.23c.209.775.32 1.59.32 2.43A9.3 9.3 0 1 1 3.016 9.787C4.008 5.747 7.654 2.75 12 2.75c4.34 0 7.981 2.989 8.98 7.02"
        clipRule="evenodd"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="15"
        cy="9"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m20 17.6-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"
        opacity=".5"
      />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
};

export function CircleImage({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleImage = CircleImage;
export const CircleImageIcon = CircleImage;
