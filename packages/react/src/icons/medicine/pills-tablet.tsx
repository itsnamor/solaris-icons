import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12"/>
	),
	bold: (
		<path fill="currentColor" d="M12.026 9.965a5 5 0 0 0-6.992-6.992zm-1.061 1.061a5 5 0 0 1-6.991-6.992zm10.979 5.224a5 5 0 0 0-9.887 0zm0 1.5h-9.888a5 5 0 0 0 9.888 0"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M12 17c0 1.28.488 2.56 1.464 3.535A4.98 4.98 0 0 0 17 22m-5-5a5 5 0 1 1 10 0m-10 0h10m0 0c0 1.28-.488 2.56-1.465 3.535"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M8 1.25a5.73 5.73 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25m3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917M4.51 4.572l5.917 5.917A4.25 4.25 0 0 1 4.51 4.572m16.556 8.362a5.75 5.75 0 1 0-8.132 8.132 5.75 5.75 0 0 0 8.132-8.132m-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.23 4.23 0 0 1 1.179-2.255m-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M13.465 20.536a5 5 0 1 0 7.07-7.071 5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7" opacity=".5"/>
		<path fill="currentColor" d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.035l6.991 6.991a5 5 0 0 0 1.061-1.06L5.035 2.973a5 5 0 0 0-1.061 1.06"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12" opacity=".5"/>
		</>
	),
};

export function PillsTablet({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconPillsTablet = PillsTablet;
export const PillsTabletIcon = PillsTablet;
