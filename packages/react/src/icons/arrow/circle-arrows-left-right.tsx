import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5M8 14.5h8m0 0L13.25 12M16 14.5 13.25 17"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.245-.555a.75.75 0 0 0-1.01 1.11l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 0 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11zm-2.45-4.95a.75.75 0 0 1-.05 1.06L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.06.05" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5M8 14.5h8m0 0L13.25 12M16 14.5 13.25 17"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12" clipRule="evenodd"/>
		<path fill="currentColor" fillRule="evenodd" d="M11.305 6.495a.75.75 0 0 1-.05 1.06L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.06.05" clipRule="evenodd"/>
		<path fill="currentColor" fillRule="evenodd" d="M12.695 11.496a.75.75 0 0 0 .05 1.059l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 0 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11l-2.75-2.5a.75.75 0 0 0-1.06.05" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/>
		<path fill="currentColor" d="M13.755 11.445a.75.75 0 1 0-1.01 1.11l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 1 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11z"/>
		<path fill="currentColor" d="M11.255 7.555a.75.75 0 1 0-1.01-1.11l-2.75 2.5a.75.75 0 0 0 0 1.11l2.75 2.5a.75.75 0 0 0 1.01-1.11L9.94 10.25H16a.75.75 0 0 0 0-1.5H9.94z"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5M8 14.5h8m0 0L13.25 12M16 14.5 13.25 17"/>
		</>
	),
};

export function CircleArrowsLeftRight({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleArrowsLeftRight = CircleArrowsLeftRight;
export const CircleArrowsLeftRightIcon = CircleArrowsLeftRight;
