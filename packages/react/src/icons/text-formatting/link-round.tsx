import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"/>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z" clipRule="evenodd"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M16 21a6 6 0 0 0 4.472-10M12 21a6 6 0 0 1 0-12h2"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z" clipRule="evenodd"/>
		<path fill="currentColor" d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"/>
		</>
	),
};

export function LinkRound({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconLinkRound = LinkRound;
export const LinkRoundIcon = LinkRound;
