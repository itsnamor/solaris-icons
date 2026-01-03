import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
  linear: (
    <>
      <circle
        cx="3"
        cy="3"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2"
      />
    </>
  ),
  bold: (
    <>
      <path
        fill="currentColor"
        d="M12 22c5.523 0 10-4.477 10-10 0-.906-.12-1.784-.346-2.618-.086-.316-.455-.441-.751-.303a4.5 4.5 0 0 1-5.982-5.982c.138-.296.013-.665-.303-.75A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"
      />
      <circle cx="19" cy="5" r="3" fill="currentColor" />
    </>
  ),
  broken: (
    <>
      <circle
        cx="3"
        cy="3"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 2.2a10.05 10.05 0 0 0-7 1.138M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5"
      />
    </>
  ),
  outline: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.38 2.38 0 0 1 1.676.187A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 9.065-11.1.75.75 0 1 1 1.47-.3q.213 1.046.215 2.15c0 5.937-4.813 10.75-10.75 10.75-1.718 0-3.344-.404-4.787-1.122a.9.9 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.9.9 0 0 0-.08-.62A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25q1.104.002 2.15.215a.75.75 0 0 1-.3 1.47A9.3 9.3 0 0 0 12 2.75M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      clipRule="evenodd"
    />
  ),
  "bold-duotone": (
    <>
      <path fill="currentColor" d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path
        fill="currentColor"
        d="M15.235 2.535A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.132-.188-2.22-.535-3.235a4.5 4.5 0 0 1-6.23-6.23"
        opacity=".5"
      />
    </>
  ),
  "line-duotone": (
    <>
      <circle
        cx="3"
        cy="3"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="matrix(-1 0 0 1 22 2)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q-.002-1.03-.2-2"
        opacity=".5"
      />
    </>
  ),
};

export function MessageBadgeRound({ variant = "linear", ...props }: IconProps) {
  return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

MessageBadgeRound.displayName = "IconMessageBadgeRound";

export const IconMessageBadgeRound = MessageBadgeRound;
export const MessageBadgeRoundIcon = MessageBadgeRound;
