import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 6H3m18 4H3m8 4H3m8 4H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 14H3m8 4H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M16.97 13.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"/>
		</>
	),
};

export function ListArrowUp({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListArrowUp = ListArrowUp;
export const ListArrowUpIcon = ListArrowUp;
