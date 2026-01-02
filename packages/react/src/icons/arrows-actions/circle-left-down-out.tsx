import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 14-8 8m0 0h6m-6 0v-6"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"/>
		</>
	),
	bold: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 14-8 8m0 0h6m-6 0v-6"/>
		<path fill="currentColor" fillRule="evenodd" d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75" clipRule="evenodd"/>
		<path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12q.001.9.154 1.755A2.25 2.25 0 0 1 4.25 16v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L7.432 19.75H8a2.25 2.25 0 0 1 2.245 2.096Q11.1 22 12 22"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 14-8 8m0 0h6m-6 0v-6"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"/>
		<path fill="currentColor" d="M8 22.75a.75.75 0 0 0 0-1.5H3.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V16a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 14-8 8m0 0h6m-6 0v-6"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" opacity=".5"/>
		</>
	),
};

export function CircleLeftDownOut({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleLeftDownOut = CircleLeftDownOut;
export const CircleLeftDownOutIcon = CircleLeftDownOut;
