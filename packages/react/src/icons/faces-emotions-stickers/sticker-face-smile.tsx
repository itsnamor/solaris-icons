import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17c-1.115 0-2.15-.37-3-1"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="m21.242 13.708-7.534 7.534a3 3 0 0 1-.369.312A2.33 2.33 0 0 1 12 22c0-.552 0-1.049.003-1.5.012-1.834.075-2.911.39-3.812a7 7 0 0 1 4.295-4.295c.9-.315 1.978-.378 3.812-.39C20.951 12 21.448 12 22 12c0 .486-.169.946-.446 1.34a3 3 0 0 1-.312.368"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.706 3.25 8.652 7.629 9.717.454.11.871-.25.871-.717 0-1.702-.001-2.32.152-3.41a5.8 5.8 0 0 1-2.099-.988.75.75 0 1 1 .894-1.204c.463.343.988.595 1.552.732a8.5 8.5 0 0 1 3.494-4.337c-.295-.26-.493-.742-.493-1.293 0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .204-.027.399-.076.576q.132-.051.269-.099c1.367-.478 2.317-.478 4.807-.477.468 0 .828-.417.717-.871C20.652 5.25 16.706 2 12 2M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5"
        clipRule="evenodd"
      />
    </>
  ),
  broken: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10 0 .648-.3 1.25-.758 1.708l-7.534 7.534C13.25 21.7 12.648 22 12 22 6.477 22 2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17c-1.115 0-2.15-.37-3-1"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
      />
    </>
  ),
  outline: (
    <>
      <path
        fill="currentColor"
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 0 0-.75 18.47c.002-1.488.016-2.593.14-3.502a5.8 5.8 0 0 1-2.837-1.116.75.75 0 1 1 .894-1.204 4.3 4.3 0 0 0 2.31.845 7.75 7.75 0 0 1 4.683-4.558c1.147-.401 2.523-.433 4.78-.435A9.25 9.25 0 0 0 12 2.75m9.14 10c-2.257.006-3.336.047-4.204.35a6.25 6.25 0 0 0-3.835 3.836c-.304.868-.345 1.947-.35 4.203zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .543-.053 1.074l-.026.267-9.33 9.33-.267.026q-.53.053-1.074.053C6.063 22.75 1.25 17.937 1.25 12"
        clipRule="evenodd"
      />
    </>
  ),
  "bold-duotone": (
    <>
      <path
        fill="currentColor"
        d="m21.242 13.708-7.534 7.534a3 3 0 0 1-.369.312A2.33 2.33 0 0 1 12 22c0-.552 0-1.049.003-1.5.012-1.834.075-2.911.39-3.812a7 7 0 0 1 4.295-4.295c.9-.315 1.978-.378 3.812-.39C20.951 12 21.448 12 22 12c0 .486-.169.946-.446 1.34a3 3 0 0 1-.312.368"
      />
      <path
        fill="currentColor"
        d="M12 2c5.523 0 10 4.477 10 10-.552 0-1.049 0-1.5.003-1.834.012-2.911.075-3.812.39a7 7 0 0 0-4.295 4.295c-.315.9-.378 1.978-.39 3.812C12 20.951 12 21.448 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5m-6.603 3.553a.75.75 0 0 1 1.05-.155 4.27 4.27 0 0 0 3.133.812q-.102.235-.187.478a5.6 5.6 0 0 0-.25 1.06L12 17.75a5.77 5.77 0 0 1-3.447-1.148.75.75 0 0 1-.156-1.049"
      />
    </>
  ),
  "line-duotone": (
    <>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"
        opacity=".5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 17c-1.115 0-2.15-.37-3-1"
      />
      <ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
      />
    </>
  ),
};

export function StickerFaceSmile({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

StickerFaceSmile.displayName = "IconStickerFaceSmile";

export const IconStickerFaceSmile = StickerFaceSmile;
export const StickerFaceSmileIcon = StickerFaceSmile;
