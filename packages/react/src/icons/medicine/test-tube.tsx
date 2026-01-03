import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0 7.239-7.271-5.376-5.399-10.75 10.798a3.83 3.83 0 0 0 0 5.399 3.79 3.79 0 0 0 5.375 0zm8-6.506L14.182 3"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      d="M14.87 2.224a.76.76 0 1 0-1.078 1.072l.694.697-6.95 6.98.69.076a2.995 2.995 0 0 1 2.642 2.65c.058.53.395.985.878 1.195l1.967.816 6.22-6.246.768.772a.76.76 0 0 0 1.078-1.072zM4.128 14.396l2.038-2.047 1.892.211a1.475 1.475 0 0 1 1.299 1.306c.118 1.073.802 2 1.792 2.426l1.405.583-2.98 2.992a3.84 3.84 0 0 1-5.446 0 3.88 3.88 0 0 1 0-5.471"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0-3.512 3.527a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4l10.75-10.797 5.376 5.399-1.81 1.818M13 16.355l3-3.014m5-3.492L14.182 3"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.652 2.469a.75.75 0 0 1 1.061.002l6.819 6.849a.75.75 0 0 1-1.064 1.058l-.23-.231L10.02 20.411a4.54 4.54 0 0 1-6.438 0 4.58 4.58 0 0 1 0-6.457l2.682-2.695.01-.01 7.531-7.564-.155-.156a.75.75 0 0 1 .002-1.06m1.212 2.28L8.419 11.22a2.96 2.96 0 0 1 2.345 2.575c.058.522.39.971.867 1.178l1.192.495 6.357-6.385zm-3.185 11.87-.637-.265a2.96 2.96 0 0 1-1.769-2.394 1.455 1.455 0 0 0-1.281-1.289l-.915-.102-2.432 2.443a3.08 3.08 0 0 0 0 4.34 3.04 3.04 0 0 0 4.312 0z"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0l3.746-3.763-1.772-.736a2.36 2.36 0 0 1-1.408-1.906 2.35 2.35 0 0 0-2.074-2.082h-1.51z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.362 2.233a.8.8 0 0 1 1.132.003l7.273 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .002-1.13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0L19.824 9.855z"
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
        d="M21 9.849 14.182 3m.681.685 5.376 5.399L13 16.354l-3.512 3.528a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69"
        opacity=".5"
      />
    </>
  ),
};

export function TestTube({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconTestTube = TestTube;
export const TestTubeIcon = TestTube;
