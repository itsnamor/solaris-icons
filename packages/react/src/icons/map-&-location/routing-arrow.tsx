import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path fill="currentColor" d="m20 19 .53.53a.75.75 0 0 0 0-1.06zM8 4.25a.75.75 0 0 0 0 1.5zm10.53 12.22a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zM20 18.25H7.5v1.5H20zm-12.5-5.5h9v-1.5h-9zm9-8.5H8v1.5h8.5zm4.03 14.22-2-2-1.06 1.06 2 2zm-1.06 0-2 2 1.06 1.06 2-2zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25z"/>
		<circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M16.5 4.25a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.855a2 2 0 1 1 0-1.5z"/>
	),
	broken: (
		<><path fill="currentColor" d="m20 19 .53.53a.75.75 0 0 0 0-1.06zM8 4.25a.75.75 0 0 0 0 1.5zm10.53 12.22a.75.75 0 1 0-1.06 1.06zm-1.06 4a.75.75 0 1 0 1.06 1.06zm-3.72-2.22a.75.75 0 0 0 0 1.5zM10 19.75a.75.75 0 0 0 0-1.5zm1-14a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-7.5 8.5h9v-1.5h-9zm13.03 5.72-2-2-1.06 1.06 2 2zm-1.06 0-2 2 1.06 1.06 2-2zm1.28-9.97a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25zm12.5 0h-6.25v1.5H20zm-10 0H7.5v1.5H10zm1-14H8v1.5h3zm5.5 0H15v1.5h1.5z"/>
		<circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M6 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M3.25 5a2.75 2.75 0 0 1 5.396-.75H16.5a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H8.646A2.751 2.751 0 0 1 3.25 5" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M17.47 16.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L18.94 19l-1.47-1.47a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
		<path fill="currentColor" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
		<path fill="currentColor" d="M7.855 5.75a2 2 0 0 0 0-1.5H16.5a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l.75.75-.75.75H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path fill="currentColor" d="M8 4.25a.75.75 0 0 0 0 1.5zm12 14H7.5v1.5H20zm-12.5-5.5h9v-1.5h-9zm9-8.5H8v1.5h8.5zm4.25 4.25a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 17 2 2-2 2"/>
		<circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
};

export function RoutingArrow({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconRoutingArrow = RoutingArrow;
export const RoutingArrowIcon = RoutingArrow;
