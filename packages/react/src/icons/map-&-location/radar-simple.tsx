import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 12 5.002 6.336c-.43-.347-1.063-.284-1.366.178A10 10 0 0 0 2.34 9.412C.91 14.746 4.077 20.23 9.41 21.659c5.336 1.43 10.819-1.736 12.248-7.07C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"
    />
  ),
  bold: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107.75.75 0 0 1-.252-1.478 6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384"
      clipRule="evenodd"
    />
  ),
  broken: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898 10 10 0 0 0 2.661 9.734"
    />
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.394 3.065a9.22 9.22 0 0 0-6.939.878.75.75 0 0 1-.737-1.306 10.72 10.72 0 0 1 8.064-1.02c5.735 1.536 9.138 7.43 7.602 13.165-1.537 5.735-7.431 9.138-13.166 7.602C3.483 20.847.08 14.953 1.616 9.218A10.7 10.7 0 0 1 3.01 6.103c.574-.876 1.732-.944 2.465-.35l6.998 5.664a.75.75 0 1 1-.944 1.166L4.53 6.919a.23.23 0 0 0-.168-.053.13.13 0 0 0-.099.06 9.2 9.2 0 0 0-1.198 2.68 9.25 9.25 0 1 0 11.33-6.54"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M11.125 6.823a5.248 5.248 0 1 1-3.636 2.49l4.04 3.27a.75.75 0 1 0 .943-1.166L8.274 8.019c-.562-.454-1.466-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 1 0 .25 1.478"
      />
    </>
  ),
  "line-duotone": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 12 5.002 6.336c-.43-.347-1.063-.284-1.366.178A10 10 0 0 0 2.34 9.412C.91 14.746 4.077 20.23 9.41 21.659c5.336 1.43 10.819-1.736 12.248-7.07C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"
    />
  ),
};

function RadarSimple({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

RadarSimple.displayName = "IconRadarSimple";

export const IconRadarSimple = RadarSimple;
export const RadarSimpleIcon = RadarSimple;
