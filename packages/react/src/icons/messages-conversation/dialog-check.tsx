import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 12.9 3.143 3.6L18 7.5"/>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12m-4.546-5.097a.75.75 0 0 1 .143 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907 6.3-8.269a.75.75 0 0 1 1.052-.142" clipRule="evenodd"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 12.9 3.143 3.6 1.964-2.25M18 7.5 14.071 12"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M18.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.578 2.953 7.292-8.353a.75.75 0 0 1 1.058-.072" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"/>
		<path fill="currentColor" d="M17.455 6.903a.75.75 0 0 1 .142 1.052l-6.858 9a.75.75 0 0 1-1.161.038l-3.143-3.6a.75.75 0 1 1 1.13-.986l2.538 2.907 6.3-8.268a.75.75 0 0 1 1.052-.143"/>
		</>
	),
	"line-duotone": (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 12.9 3.143 3.6L18 7.5"/>
	),
};

export function DialogCheck({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconDialogCheck = DialogCheck;
export const DialogCheckIcon = DialogCheck;
