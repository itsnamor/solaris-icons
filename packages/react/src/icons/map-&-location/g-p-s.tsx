import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 12h2m16 0h2M12 4V2m0 20v-2"/>
		</>
	),
	bold: (
		<><path fill="currentColor" fillRule="evenodd" d="M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V19.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H19.41a7.444 7.444 0 0 0-6.712-6.712V2.698a.698.698 0 0 0-1.396 0V4.59a7.444 7.444 0 0 0-6.712 6.712H2.698A.7.7 0 0 0 2 12m6.512 0a3.488 3.488 0 1 1 6.976 0 3.488 3.488 0 0 1-6.976 0" clipRule="evenodd"/>
		<path fill="currentColor" d="M9.907 12a2.093 2.093 0 1 1 4.186 0 2.093 2.093 0 0 1-4.186 0"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5M2 12h2m16 0h2M12 4V2m0 20v-2"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 5.07A8 8 0 1 1 5.07 8"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1.282a8.75 8.75 0 0 1 7.968 7.968H22a.75.75 0 0 1 0 1.5h-1.282a8.75 8.75 0 0 1-7.968 7.968V22a.75.75 0 0 1-1.5 0v-1.282a8.75 8.75 0 0 1-7.968-7.968H2a.75.75 0 0 1 0-1.5h1.282a8.75 8.75 0 0 1 7.968-7.968V2a.75.75 0 0 1 .75-.75m0 3.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5m0 5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".5"/>
		<path fill="currentColor" d="M12 8.512a3.488 3.488 0 1 0 0 6.976 3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zm7.215 10.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zm-8.715 7.215a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 12h2m16 0h2M12 4V2m0 20v-2" opacity=".5"/>
		</>
	),
};

export function GPS({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconGPS = GPS;
export const GPSIcon = GPS;
