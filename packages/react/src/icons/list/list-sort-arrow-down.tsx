import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 16h9m-7-5h7M8 6h5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4v16l3-4"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 16h9m-7-5h7M8 6h5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4v16l3-4"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
		<path fill="currentColor" d="M3.25 16a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"/>
		<path fill="currentColor" d="M5.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" opacity=".7"/>
		<path fill="currentColor" d="M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6" opacity=".4"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 16h9"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 11h7" opacity=".7"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 6h5" opacity=".3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4v16l3-4"/>
		</>
	),
};

export function ListSortArrowDown({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListSortArrowDown = ListSortArrowDown;
export const ListSortArrowDownIcon = ListSortArrowDown;
