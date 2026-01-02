import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h2.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H17m0-5h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4m0-20v5m0 0h-4a5 5 0 0 0 0 10h4m0 0h2.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H17m0-5v5"/>
	),
	bold: (
		<path fill="currentColor" d="M16.25 2H13C7.477 2 3 6.477 3 12s4.477 10 10 10h3.25v-5H13a5 5 0 0 1 0-10h3.25zm1.5 5h1.75A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2h-1.75zm0 10v5h1.75a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h2.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H17m0-5h-4a10 10 0 0 0-4 .832M17 2v5m0 0h-4a5 5 0 0 0-4 8m8 2h2.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H17m0-5h-4m4 0v5m0 0h-4C7.477 22 3 17.523 3 12c0-2.252.744-4.33 2-6.001"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M13 2.75a9.25 9.25 0 0 0 0 18.5h3.25v-3.5H13a5.75 5.75 0 0 1 0-11.5h3.25v-3.5zm4.75 0v3.5h1.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75zm0 15v3.5h1.75a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75zM2.25 12C2.25 6.063 7.063 1.25 13 1.25h6.5a2.25 2.25 0 0 1 2.25 2.25v2a2.25 2.25 0 0 1-2.25 2.25H13a4.25 4.25 0 0 0 0 8.5h6.5a2.25 2.25 0 0 1 2.25 2.25v2a2.25 2.25 0 0 1-2.25 2.25H13C7.063 22.75 2.25 17.937 2.25 12" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M17 2h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4v-5h-4a5 5 0 0 1 0-10h4z"/>
		<path fill="currentColor" d="M17 7h2.5A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2H17zm0 10v5h2.5a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 18.5v2a1.5 1.5 0 0 1-1.5 1.5H13C7.477 22 3 17.523 3 12S7.477 2 13 2h6.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H13a5 5 0 0 0 0 10h6.5a1.5 1.5 0 0 1 1.5 1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2v5m0 10v5" opacity=".5"/>
		</>
	),
};

export function Magnet({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMagnet = Magnet;
export const MagnetIcon = Magnet;
