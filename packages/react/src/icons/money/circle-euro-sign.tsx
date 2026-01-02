import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298.75.75 0 1 0 .75-1.299 6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596.75.75 0 1 0-.751-1.298 5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m5.553-.75a5.3 5.3 0 0 0 0 1.5H10a.75.75 0 0 1 0 1.5H7.255a5.25 5.25 0 0 0 7.37 2.298.75.75 0 1 1 .75 1.299 6.753 6.753 0 0 1-9.741-3.596H5a.75.75 0 0 1 0-1.501h.291a6.8 6.8 0 0 1 0-1.5H5a.75.75 0 0 1 0-1.5h.634a6.753 6.753 0 0 1 9.742-3.597.75.75 0 1 1-.751 1.299 5.25 5.25 0 0 0-7.37 2.298H10a.75.75 0 0 1 0 1.5z" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/>
		<path fill="currentColor" d="M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298.75.75 0 1 0 .75-1.299 6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596.75.75 0 1 0-.751-1.298 5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"/>
		</>
	),
};

export function CircleEuroSign({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleEuroSign = CircleEuroSign;
export const CircleEuroSignIcon = CircleEuroSign;
