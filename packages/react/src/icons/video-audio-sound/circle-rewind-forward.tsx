import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m13 8.071 3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.436-14.539a.75.75 0 1 0-.872 1.22l3.222 2.302a1.25 1.25 0 0 1 0 2.034l-3.222 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476zM7.5 15.131V8.87a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m13 8.071 3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.395-3.26a.25.25 0 0 0-.395.203v6.114c0 .203.23.321.395.203l4.28-3.057a.25.25 0 0 0 0-.406zm-1.895.203c0-1.423 1.609-2.251 2.767-1.424l4.28 3.057a1.75 1.75 0 0 1 0 2.848l-4.28 3.057c-1.158.827-2.767 0-2.767-1.424zm5.64-1.307a.75.75 0 0 1 1.046-.175l3.221 2.301a2.75 2.75 0 0 1 0 4.476l-3.221 2.3a.75.75 0 0 1-.872-1.22l3.222-2.3a1.25 1.25 0 0 0 0-2.035l-3.222-2.301a.75.75 0 0 1-.174-1.046" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/>
		<path fill="currentColor" d="M13.437 7.461a.75.75 0 0 0-.872 1.22l3.221 2.302a1.25 1.25 0 0 1 0 2.034l-3.221 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476z"/>
		<path fill="currentColor" d="M7.5 15.132V8.869a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m13 8.071 3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"/>
		</>
	),
};

export function CircleRewindForward({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleRewindForward = CircleRewindForward;
export const CircleRewindForwardIcon = CircleRewindForward;
