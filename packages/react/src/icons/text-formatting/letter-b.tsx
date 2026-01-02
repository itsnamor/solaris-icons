import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeWidth="1.5" d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5zM5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z"/>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M7.609 1A3.61 3.61 0 0 0 4 4.609V19.94A3.06 3.06 0 0 0 7.059 23H14a6 6 0 0 0 2.102-11.621A6 6 0 0 0 12 1zM12 11a4 4 0 0 0 0-8H7.609C6.72 3 6 3.72 6 4.609V11zm-6 2v6.941C6 20.526 6.474 21 7.059 21H14a4 4 0 0 0 0-8z" clipRule="evenodd"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 12h7a5 5 0 0 0 0-10H7.609A2.61 2.61 0 0 0 5 4.609zm0 0h9a5 5 0 0 1 0 10H7.059C5.922 22 5 21.137 5 20m0-8v3.97"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M7.609 1.25A3.36 3.36 0 0 0 4.25 4.609V19.94a2.81 2.81 0 0 0 2.809 2.809H14a5.75 5.75 0 0 0 1.608-11.272A5.75 5.75 0 0 0 12 1.25zm4.391 10a4.25 4.25 0 0 0 0-8.5H7.609A1.86 1.86 0 0 0 5.75 4.609v6.641zm-6.25 1.5v7.191c0 .723.586 1.309 1.309 1.309H14a4.25 4.25 0 0 0 0-8.5z" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M4 4.609A3.61 3.61 0 0 1 7.609 1H12a6 6 0 0 1 0 12H4zM7.609 3C6.72 3 6 3.72 6 4.609V11h6a4 4 0 0 0 0-8z" clipRule="evenodd"/>
		<path fill="currentColor" d="M4 13v6.941C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.621A5.98 5.98 0 0 1 12 12.999h2a4 4 0 0 1 0 8H7.059A1.06 1.06 0 0 1 6 19.942V13z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z" opacity=".5"/>
		</>
	),
};

export function LetterB({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconLetterB = LetterB;
export const LetterBIcon = LetterB;
