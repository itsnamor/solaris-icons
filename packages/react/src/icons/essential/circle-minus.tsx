import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 12H9"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6.25 0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" clipRule="evenodd"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 12H9M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
	),
	outline: (
		<><path fill="currentColor" d="M15 12.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"/>
		<path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" opacity=".5"/>
		<path fill="currentColor" d="M15.75 12a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 12H9"/>
		</>
	),
};

export function CircleMinus({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleMinus = CircleMinus;
export const CircleMinusIcon = CircleMinus;
