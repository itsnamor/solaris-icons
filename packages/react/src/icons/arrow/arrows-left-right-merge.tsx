import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10H4l5.5-6M4 14h16l-5.5 6"/>
	),
	bold: (
		<path fill="currentColor" d="M10.25 4a.75.75 0 0 0-1.303-.507l-5.5 6A.75.75 0 0 0 4 10.75h16a.75.75 0 0 0 0-1.5h-9.75zm3.5 16v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .553 1.257l-5.5 6A.75.75 0 0 1 13.75 20"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 4 4 10h10m6 0h-2.5m-3 10 5.5-6H10m-6 0h2.5"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M10.007 3.447a.75.75 0 0 1 .046 1.06L5.705 9.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.553-1.257l5.5-6a.75.75 0 0 1 1.06-.046m10.68 10.251A.75.75 0 0 0 20 13.25H4a.75.75 0 0 0 0 1.5h14.295l-4.348 4.743a.75.75 0 0 0 1.106 1.014l5.5-6a.75.75 0 0 0 .133-.809" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M10.25 4a.75.75 0 0 0-1.303-.507l-5.5 6A.75.75 0 0 0 4 10.75h16a.75.75 0 0 0 0-1.5h-9.75z"/>
		<path fill="currentColor" d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .553 1.257l-5.5 6A.75.75 0 0 1 13.75 20" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10H4l5.5-6"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 14h16l-5.5 6" opacity=".5"/>
		</>
	),
};

export function ArrowsLeftRightMerge({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconArrowsLeftRightMerge = ArrowsLeftRightMerge;
export const ArrowsLeftRightMergeIcon = ArrowsLeftRightMerge;
