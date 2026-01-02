import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3.447 16A9 9 0 0 1 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22h-.777A8.47 8.47 0 0 1 6 19.874"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M11.7 6.957a.75.75 0 1 0-.629-1.361c-1.965.908-3.48 2.715-4.171 4.901a.75.75 0 0 0 1.43.453c.577-1.825 1.825-3.278 3.37-3.993"/>
		<path fill="currentColor" fillRule="evenodd" d="M14.386 1.729a6.18 6.18 0 0 0-4.772 0C5.154 3.59 2.25 8.022 2.25 12.929v.264c0 5.262 4.175 9.557 9.362 9.557h.777c5.186 0 9.361-4.295 9.361-9.557v-.265c0-4.906-2.903-9.337-7.364-11.2m-4.194 1.384a4.68 4.68 0 0 1 3.616 0c3.888 1.623 6.442 5.498 6.442 9.815v.265c0 4.466-3.535 8.057-7.861 8.057h-.777c-4.326 0-7.862-3.591-7.862-8.057v-.265c0-4.317 2.554-8.192 6.442-9.815" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928v.265C3 18.057 6.855 22 11.612 22" opacity=".5"/>
		<path fill="currentColor" d="M12.066 5.961a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.691-2.186 2.206-3.993 4.17-4.902a.75.75 0 0 1 .996.366"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"/>
		</>
	),
};

export function Droplet({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconDroplet = Droplet;
export const DropletIcon = Droplet;
