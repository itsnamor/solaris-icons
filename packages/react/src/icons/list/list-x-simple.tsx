import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H3m8 5H3m8 5H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 16 5-5m0 5-5-5"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22-.53a.75.75 0 0 1 1.06 0l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 6h10.5M20 6h-2.25M11 16H3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 16 5-5m0 5-5-5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M11 11H7m-4 0h1.2"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22-.53a.75.75 0 0 1 1.06 0l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" d="M14.47 10.47a.75.75 0 0 1 1.06 0l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 0-1.06"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 6H3m8 5H3m8 5H3" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 16 5-5m0 5-5-5"/>
		</>
	),
};

export function ListXSimple({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconListXSimple = ListXSimple;
export const ListXSimpleIcon = ListXSimple;
