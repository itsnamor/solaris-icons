import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 12 12)"/>
		<circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 20 14)"/>
		<circle cx="2" cy="2" r="2" stroke="currentColor" strokeWidth="1.5" transform="matrix(-1 0 0 1 6 8)"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 8V5m8 5V5M4 14v5m8 0v-3m8 3v-1M4 5v1"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0m1.25-4a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"/>
	),
	broken: (
		<><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 12 12)"/>
		<circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 20 14)"/>
		<circle cx="2" cy="2" r="2" stroke="currentColor" strokeWidth="1.5" transform="matrix(-1 0 0 1 6 8)"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 12v2.75M4 19v-1.5M20 12V9.25M20 5v1.5M12 19v-5m8 5v-3M4 5v2.667M12 10V7.5M12 5v.5"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75"/>
		<path fill="currentColor" fillRule="evenodd" d="M4 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M5.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m9.5 2a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m10.75.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M20 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" clipRule="evenodd"/>
		<path fill="currentColor" d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
		<path fill="currentColor" d="M12.75 10.145a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm-1.5 3.71a2 2 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0zm8-1.71a2 2 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0zm0 3.71V19a.75.75 0 0 0 1.5 0v-3.145a2 2 0 0 1-1.5 0m-14.5-7.71a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm0 3.71a2 2 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 12 12)"/>
		<circle cx="20" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(180 20 14)"/>
		<circle cx="2" cy="2" r="2" stroke="currentColor" strokeWidth="1.5" transform="matrix(-1 0 0 1 6 8)"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 12V5M4 12v7m8 0v-5m8 5v-3m-8-6V5M4 5v2.667" opacity=".5"/>
		</>
	),
};

export function TuningThree({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconTuningThree = TuningThree;
export const TuningThreeIcon = TuningThree;
