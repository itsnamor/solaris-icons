import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.084c0-.72.783-1.68 1.37-2.299a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 21v1m2-18a2 2 0 1 0-4 0"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 8v7.883c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352 2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8m-7 5c1.105 0 2-.933 2-2.083 0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083m-2.75 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.733 3a2 2 0 0 0-3.465 0z" />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 16h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.084c0-.72.783-1.68 1.37-2.299a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 21v1m2-18a2 2 0 1 0-4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0 2.72 2.72 0 0 1-.88-2V12"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.175 8.101a1.61 1.61 0 0 0-2.35 0 9 9 0 0 0-.986 1.215c-.285.43-.589 1.008-.589 1.6 0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9 9 0 0 0-.986-1.215m-1.261 1.032c.029-.03.06-.04.086-.04.027 0 .057.01.086.04.28.294.588.653.823 1.01.254.383.341.646.341.774 0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775.236-.356.545-.715.824-1.009"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0h.405c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v7.935c0 .97-.407 1.897-1.123 2.554a9.77 9.77 0 0 1-5.877 2.551V22a.75.75 0 0 1-1.5 0v-1.012a9.77 9.77 0 0 1-5.877-2.551 3.47 3.47 0 0 1-1.123-2.554V7.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08zm1.646 0a1.248 1.248 0 0 1 2 0zm4 1.5c.964 0 1.612.002 2.095.067.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v7.883c0 .55-.231 1.076-.637 1.448a8.303 8.303 0 0 1-11.226 0 1.97 1.97 0 0 1-.637-1.448V8c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789s.327-.237.788-.3C7.388 4.753 8.036 4.75 9 4.75z"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M18.998 7.25H17a.75.75 0 0 0 0 1.5h2V8q0-.403-.002-.75m.002 3h-2a.75.75 0 0 0 0 1.5h2zm0 3h-2a.75.75 0 0 0 0 1.5h2zM14 4a2 2 0 1 0-4 0zm-2.75 16.236q.75.06 1.5 0v1.014a.75.75 0 0 1-1.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M19 15.883V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586S5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.084c0-.72.783-1.68 1.37-2.299a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 21v1m2-18a2 2 0 1 0-4 0"
        opacity=".5"
      />
    </>
  ),
};

export function IntravenousBagLine({
  variant = "linear",
  ...props
}: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

IntravenousBagLine.displayName = "IconIntravenousBagLine";

export const IconIntravenousBagLine = IntravenousBagLine;
export const IntravenousBagLineIcon = IntravenousBagLine;
