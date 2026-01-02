import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 16.959h7m-13-10H2m0 10h2m18-10h-2"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6m5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5.5 2.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zm6 10a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m20.75-10.75a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"/>
	),
	broken: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 7H6M3 7H2m11 10h5m3 0h1M2 17h4M22 7h-4"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M14.5 9.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M5.75 17a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0m3.75 2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" clipRule="evenodd"/>
		<path fill="currentColor" d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zm-7.75 10.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6m5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>
		<path fill="currentColor" d="M17.166 7.709a3 3 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5zm-5.81-1.5a3 3 0 0 0-.022 1.5H1.75a.75.75 0 0 1 0-1.5zm-5 10H1.75a.75.75 0 0 0 0 1.5h4.584a3 3 0 0 1 .022-1.5m5.81 1.5h9.584a.75.75 0 0 0 0-1.5h-9.605a3 3 0 0 1 .02 1.5" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 17h9M11 7l-9-.042M2 17h4M22 7h-4" opacity=".5"/>
		</>
	),
};

export function TuningHorizontal({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconTuningHorizontal = TuningHorizontal;
export const TuningHorizontalIcon = TuningHorizontal;
