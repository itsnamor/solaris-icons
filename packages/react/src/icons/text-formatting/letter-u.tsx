import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21h16M4 3v6a8 8 0 1 0 16 0V3"/>
	),
	bold: (
		<path fill="currentColor" d="M5 3a1 1 0 0 0-2 0v6a9 9 0 1 0 18 0V3a1 1 0 1 0-2 0v6A7 7 0 1 1 5 9zM4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21h16M4 3v6a7.99 7.99 0 0 0 3 6.245M20 3v6a8 8 0 0 1-8 8"/>
	),
	outline: (
		<path fill="currentColor" d="M4.75 3a.75.75 0 0 0-1.5 0v6a8.75 8.75 0 1 0 17.5 0V3a.75.75 0 0 0-1.5 0v6a7.25 7.25 0 1 1-14.5 0zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M5 3a1 1 0 0 0-2 0v6a9 9 0 1 0 18 0V3a1 1 0 1 0-2 0v6A7 7 0 1 1 5 9z" opacity=".5"/>
		<path fill="currentColor" d="M4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21h16"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 3v6a8 8 0 1 0 16 0V3" opacity=".5"/>
		</>
	),
};

export function LetterU({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconLetterU = LetterU;
export const LetterUIcon = LetterU;
