import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 12 2-1.5L8 9m8 3-2-1.5L16 9m-1 7-1-1-1 1-1-1-1 1-1-1-1 1"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9 1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 12 2-1.5L8 9m8 3-2-1.5L16 9m-1 7-1-1-1 1-1-1-1 1-1-1-1 1"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12" clipRule="evenodd"/>
		<path fill="currentColor" fillRule="evenodd" d="M7.4 8.55a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9-1.2-.9a.75.75 0 0 1-.15-1.05m9.2 0a.75.75 0 0 0-1.05-.15l-2 1.5a.75.75 0 0 0 0 1.2l2 1.5a.75.75 0 1 0 .9-1.2l-1.2-.9 1.2-.9a.75.75 0 0 0 .15-1.05m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9 1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06"/>
		<path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 12 2-1.5L8 9m8 3-2-1.5L16 9m-1 7-1-1-1 1-1-1-1 1-1-1-1 1"/>
		</>
	),
};

export function FaceConfounded({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconFaceConfounded = FaceConfounded;
export const FaceConfoundedIcon = FaceConfounded;
