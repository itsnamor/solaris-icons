/** biome-ignore-all lint/a11y/noSvgWithoutTitle: no need */
import type { IconProps } from "./types";

export function Icon({
  ref,
  size = "1em",
  color,
  title,
  children,
  className,
  ...rest
}: Omit<IconProps, "variant">) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={["solaris", className].filter(Boolean).join(" ")}
      {...rest}
      color={color}
    >
      {!!title && <title>{title}</title>}
      {children}
    </svg>
  );
}
