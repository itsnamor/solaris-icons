import type { SVGProps } from "react";

export type Variant =
  | "bold-duotone"
  | "bold"
  | "broken"
  | "line-duotone"
  | "linear"
  | "outline";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number | string;
  variant?: Variant;
  color?: string;
  title?: string;
};
