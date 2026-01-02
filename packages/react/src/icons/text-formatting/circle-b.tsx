import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8zM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823z"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M8.75 11.25H12a2.25 2.25 0 0 0 0-4.5H9.522a.77.77 0 0 0-.772.772zm0 1.5v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5z"/>
		<path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5.25-4.478A2.27 2.27 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927z" clipRule="evenodd"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8zM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M7.25 7.522A2.27 2.27 0 0 1 9.522 5.25H12a3.75 3.75 0 0 1 2.665 6.389A3.75 3.75 0 0 1 13 18.75H9.176a1.926 1.926 0 0 1-1.926-1.927zm1.5 3.728H12a2.25 2.25 0 0 0 0-4.5H9.522a.77.77 0 0 0-.772.772zm0 1.5v4.073c0 .236.19.427.426.427H13a2.25 2.25 0 0 0 0-4.5z" clipRule="evenodd"/>
		<path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M9.522 5.25A2.27 2.27 0 0 0 7.25 7.522v9.301c0 1.064.863 1.927 1.926 1.927H13a3.75 3.75 0 0 0 1.665-7.111A3.75 3.75 0 0 0 12 5.25zm2.478 6H8.75V7.522c0-.426.346-.772.772-.772H12a2.25 2.25 0 0 1 0 4.5m-3.25 5.573V12.75H13a2.25 2.25 0 0 1 0 4.5H9.176a.426.426 0 0 1-.426-.427" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8zM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823z"/>
		</>
	),
};

export function CircleB({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleB = CircleB;
export const CircleBIcon = CircleB;
