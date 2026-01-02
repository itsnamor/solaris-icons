import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m18.5 5.5-13 13"/>
		<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a9.96 9.96 0 0 0-2.418-6.52L5.479 19.581A9.96 9.96 0 0 0 12 22m0-20C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.418 6.52L18.521 4.419A9.96 9.96 0 0 0 12 2"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m18.5 5.5-13 13M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12A9.25 9.25 0 0 1 12 2.75c2.284 0 4.376.828 5.99 2.2l-.02.02-13 13-.02.02A9.2 9.2 0 0 1 2.75 12m3.26 7.05A9.25 9.25 0 0 0 19.05 6.01l-.019.02-13 13z" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0 3.905-10.237 0-14.142-10.237-3.905-14.142 0" opacity=".5"/>
		<path fill="currentColor" d="M18.521 4.418 4.418 18.521a10 10 0 0 0 1.06 1.06L19.583 5.48a10 10 0 0 0-1.06-1.06"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m18.5 5.5-13 13" opacity=".5"/>
		<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
};

export function CircleSlash({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleSlash = CircleSlash;
export const CircleSlashIcon = CircleSlash;
