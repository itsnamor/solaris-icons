import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H3m8 5H3m9 5H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m14.72 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 11H3m9 5H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H9.5M3 6h2.25"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m14.72 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M16.97 8.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H3m8 5H3m9 5H3" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"/>
		</>
	),
};

export function ListArrowUpSimple({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListArrowUpSimple = ListArrowUpSimple;
export const ListArrowUpSimpleIcon = ListArrowUpSimple;
