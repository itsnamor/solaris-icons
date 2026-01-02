import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m15 9 4-4M5 19l4-4m0-6L5 5m14 14-4-4"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M19.582 18.52A9.96 9.96 0 0 0 22 12a9.96 9.96 0 0 0-2.418-6.52l-4.273 4.272c.436.64.691 1.414.691 2.248s-.255 1.608-.691 2.248zm-1.062 1.062A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.52-2.418l4.272-4.273c.64.436 1.414.691 2.248.691s1.608-.255 2.248-.691zM4.418 18.52l4.273-4.272A4 4 0 0 1 8 12c0-.834.255-1.607.691-2.248L4.418 5.479A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.418 6.52M12 8c-.834 0-1.607.255-2.248.691L5.479 4.418A9.96 9.96 0 0 1 12 2a9.96 9.96 0 0 1 6.52 2.418l-4.272 4.273A4 4 0 0 0 12 8"/>
	),
	broken: (
		<><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m15 9 4-4M5 19l4-4m0-6L5 5m14 14-4-4"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9.412 2.339a9.95 9.95 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.247-1.43 5.335-6.912 8.5-12.247 7.071S.912 14.747 2.34 9.412a9.95 9.95 0 0 1 2.586-4.484"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12c0-2.284.828-4.375 2.2-5.989l3.203 3.202A4.73 4.73 0 0 0 7.25 12a4.73 4.73 0 0 0 .903 2.787L4.95 17.989A9.2 9.2 0 0 1 2.75 12m6.463-3.847L6.011 4.95A9.2 9.2 0 0 1 12 2.75c2.284 0 4.375.828 5.989 2.2l-3.203 3.203A4.73 4.73 0 0 0 12 7.25a4.73 4.73 0 0 0-2.787.903M6.011 19.05A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-3.203-3.203A4.73 4.73 0 0 1 12 16.75a4.73 4.73 0 0 1-2.787-.903zm9.836-4.264 3.203 3.203A9.2 9.2 0 0 0 21.25 12a9.2 9.2 0 0 0-2.2-5.989l-3.203 3.202A4.73 4.73 0 0 1 16.75 12a4.73 4.73 0 0 1-.903 2.787M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="m5.48 19.582 4.272-4.273a4 4 0 0 1-1.06-1.06L4.417 18.52q.492.57 1.061 1.06M4.418 5.479l4.273 4.273a4 4 0 0 1 1.06-1.06L5.48 4.417q-.57.492-1.06 1.061m9.828 3.213 4.273-4.273q.57.492 1.06 1.061L15.31 9.752a4 4 0 0 0-1.06-1.06m5.332 9.828-4.273-4.272a4 4 0 0 1-1.06 1.06l4.272 4.273q.57-.49 1.06-1.06"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m15 9 4-4M5 19l4-4m0-6L5 5m14 14-4-4" opacity=".5"/>
		</>
	),
};

export function Lifebuoy({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconLifebuoy = Lifebuoy;
export const LifebuoyIcon = Lifebuoy;
