import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V9"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 2h4"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-13.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V9"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 2h4M7.5 5.204A9 9 0 1 1 4.204 8.5"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2M12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13M12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity=".5"/>
		<path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"/>
		<path fill="currentColor" fillRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V9"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 2h4"/>
		</>
	),
};

export function Stopwatch({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconStopwatch = Stopwatch;
export const StopwatchIcon = Stopwatch;
