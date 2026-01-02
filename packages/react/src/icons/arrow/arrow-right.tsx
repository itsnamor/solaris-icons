import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0-6-6m6 6-6 6"/>
	),
	bold: (
		<path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h2.5M20 12l-6-6m6 6-6 6m6-6H9.5"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z"/>
		</>
	),
	"line-duotone": (
		<><path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 6 6 6-6 6"/>
		</>
	),
};

export function ArrowRight({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowRight = ArrowRight;
export const ArrowRightIcon = ArrowRight;
