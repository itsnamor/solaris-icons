import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20V4m0 0 6 6m-6-6-6 6"/>
	),
	bold: (
		<path fill="currentColor" d="M12.75 20a.75.75 0 0 1-1.5 0v-9.25H6a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28h-5.25z"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12 4-6 6m6-6 6 6m-6-6v10.5m0 5.5v-2.5"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72V20a.75.75 0 0 1-1.5 0V5.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06z" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28z"/>
		</>
	),
	"line-duotone": (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20V4m0 0 6 6m-6-6-6 6"/>
	),
};

export function ArrowUp({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowUp = ArrowUp;
export const ArrowUpIcon = ArrowUp;
