import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 8v8"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/>
		<path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1q.065.065.14.11c-.23.401-.36.865-.36 1.36s.13.959.36 1.36a1 1 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a1 1 0 0 0 .11-.14c.401.23.865.36 1.36.36s.959-.13 1.36-.36q.045.075.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a1 1 0 0 0-.14-.11c.23-.401.36-.865.36-1.36s-.13-.959-.36-1.36a1 1 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a1 1 0 0 0-.11.14A2.74 2.74 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a1 1 0 0 0-.11-.14z" clipRule="evenodd"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 8v1m0 7v-4"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25m3.47 1.22a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a1 1 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a1 1 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a1 1 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a1 1 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a1 1 0 0 1 .14-.11 2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a1 1 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06M14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M10.47 8.47a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a1 1 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a1 1 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a1 1 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a1 1 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a1 1 0 0 1 .14-.11 2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a1 1 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" clipRule="evenodd"/>
		<path fill="currentColor" d="M7 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 8v8" opacity=".5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m16 10 1-1m-6 6 1-1m0-4-1-1m6 6-1-1" opacity=".5"/>
		</>
	),
};

export function CircleMoneySafe({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCircleMoneySafe = CircleMoneySafe;
export const CircleMoneySafeIcon = CircleMoneySafe;
