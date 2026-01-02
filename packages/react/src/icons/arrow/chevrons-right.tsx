import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11 19 6-7-6-7"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 19 6-7-6-7"/>
		</>
	),
	bold: (
		<><path fill="currentColor" fillRule="evenodd" d="M10.512 4.43a.75.75 0 0 0-.081 1.058L16.012 12l-5.581 6.512a.75.75 0 1 0 1.138.976l6-7a.75.75 0 0 0 0-.976l-6-7a.75.75 0 0 0-1.057-.081" clipRule="evenodd"/>
		<path fill="currentColor" d="M6.25 5a.75.75 0 0 1 1.32-.488l6 7a.75.75 0 0 1 0 .976l-6 7A.75.75 0 0 1 6.25 19z"/>
		</>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11 19 6-7-1.5-1.75M11 5l2 2.333M7 5l6 7-1.5 1.75M7 19l2-2.333"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M6.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.139-.976L12.012 12 6.43 5.488a.75.75 0 0 1 .082-1.057m4 0a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.139-.976L16.013 12l-5.581-6.512a.75.75 0 0 1 .08-1.057" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M6.25 19a.75.75 0 0 0 1.32.488l6-7a.75.75 0 0 0 0-.976l-6-7A.75.75 0 0 0 6.25 5z" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M10.512 19.57a.75.75 0 0 1-.081-1.058L16.012 12l-5.581-6.512a.75.75 0 1 1 1.139-.976l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.058.082" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11 19 6-7-6-7"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 19 6-7-6-7" opacity=".5"/>
		</>
	),
};

export function ChevronsRight({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconChevronsRight = ChevronsRight;
export const ChevronsRightIcon = ChevronsRight;
