import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5 6 7-6 7"/>
	),
	bold: (
		<path fill="currentColor" d="M15.835 11.63 9.205 5.2C8.79 4.799 8 5.042 8 5.57v12.86c0 .528.79.771 1.205.37l6.63-6.43a.5.5 0 0 0 0-.74"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5 2 2.333M9 19l6-7-1.5-1.75"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12 8.431 5.488a.75.75 0 0 1 .08-1.057" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="m12.404 8.303 3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z"/>
		<path fill="currentColor" d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5 6 7-6 7"/>
	),
};

export function ChevronRight({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconChevronRight = ChevronRight;
export const ChevronRightIcon = ChevronRight;
