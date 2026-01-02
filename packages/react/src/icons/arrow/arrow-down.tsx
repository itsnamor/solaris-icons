import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0 0 6-6m-6 6-6-6"/>
	),
	bold: (
		<path fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.5 0v9.25H6a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28h-5.25z"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 20 6-6m-6 6-6-6m6 6V9.5M12 4v2.5"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v9.25h-1.5V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M6 13.25a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28z"/>
		</>
	),
	"line-duotone": (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0 0 6-6m-6 6-6-6"/>
	),
};

export function ArrowDown({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowDown = ArrowDown;
export const ArrowDownIcon = ArrowDown;
