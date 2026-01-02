import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number | string;
  variant?:
    | "bold-duotone"
    | "bold"
    | "broken"
    | "line-duotone"
    | "linear"
    | "outline";
  color?: string;
  title?: string;
};
