import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 5)"/>
		<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)"/>
		<circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 19)"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 7a2 2 0 1 0-2-2"/>
		<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 19a2 2 0 1 1-2-2"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M13.25 5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M13.25 12a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m1.5 7a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0M12 17.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
		<path fill="currentColor" d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
};

export function ThreeDotsVertical({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconThreeDotsVertical = ThreeDotsVertical;
export const ThreeDotsVerticalIcon = ThreeDotsVertical;
