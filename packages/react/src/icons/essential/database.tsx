import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 18V6m16 0v12"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Zm8 2c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 6c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4v-4.026c.502.617 1.215 1.129 2.008 1.525C7.58 16.285 9.7 16.75 12 16.75s4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526z"
      />
      <path
        fill="currentColor"
        d="M12 10.75c2.3 0 4.42-.465 5.992-1.25.793-.397 1.506-.91 2.008-1.526V12c0 .5-1.786 1.591-2.679 2.158-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.5 13.568 4 12.5 4 12V7.974c.502.617 1.215 1.129 2.008 1.525C7.58 10.285 9.7 10.75 12 10.75"
      />
      <path
        fill="currentColor"
        d="M17.321 8.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092c-.515-.202-1.673-.843-2.477-1.879a.8.8 0 0 1-.162-.621c.023-.148.055-.301.096-.396C4.828 3.406 8.086 2 12 2s7.172 1.406 7.864 3.262c.041.095.073.248.096.396a.8.8 0 0 1-.162.621c-.804 1.036-1.962 1.677-2.477 1.879"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 18V6m16 6v6"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 6c0-1.542 1.23-2.736 2.758-3.5C7.58 1.716 9.7 1.25 12 1.25s4.42.465 5.992 1.25c1.528.764 2.758 1.958 2.758 3.5v12c0 1.542-1.23 2.735-2.758 3.5-1.572.785-3.692 1.25-5.992 1.25s-4.42-.465-5.992-1.25C4.48 20.734 3.25 19.541 3.25 18zm1.5 0c0-.667.56-1.474 1.929-2.158C8.002 3.181 9.882 2.75 12 2.75s3.998.43 5.321 1.092C18.69 4.526 19.25 5.332 19.25 6s-.56 1.474-1.929 2.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092C5.31 7.474 4.75 6.668 4.75 6m0 12c0 .667.56 1.474 1.929 2.158 1.323.661 3.203 1.092 5.321 1.092s3.998-.43 5.321-1.092c1.368-.684 1.929-1.49 1.929-2.158v-3.293c-.377.3-.804.565-1.258.792C16.42 16.285 14.3 16.75 12 16.75s-4.42-.465-5.992-1.25a7 7 0 0 1-1.258-.793zm14.5-9.293V12c0 .667-.56 1.474-1.929 2.158-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.31 13.474 4.75 12.668 4.75 12V8.707c.377.3.804.565 1.258.792C7.58 10.285 9.7 10.75 12 10.75s4.42-.465 5.992-1.25a7 7 0 0 0 1.258-.793"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4"
      />
      <path
        fill="currentColor"
        d="M4 12v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M4 6v6c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0 2.21-3.582 4-8 4S4 8.21 4 6"
        opacity=".7"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 18V6m16 0v12"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </>
  ),
};

export function Database({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconDatabase = Database;
export const DatabaseIcon = Database;
