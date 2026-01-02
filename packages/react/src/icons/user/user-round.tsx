import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<ellipse cx="12" cy="17" stroke="currentColor" strokeWidth="1.5" rx="7" ry="4"/>
		</>
	),
	bold: (
		<><circle cx="12" cy="6" r="4" fill="currentColor"/>
		<ellipse cx="12" cy="17" fill="currentColor" rx="7" ry="4"/>
		</>
	),
	broken: (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27s3.922-.47 5.322-1.27c1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27M5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073s3.444.425 4.578 1.073c1.155.66 1.672 1.458 1.672 2.177s-.517 1.517-1.672 2.177c-1.134.648-2.751 1.073-4.578 1.073s-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><circle cx="12" cy="6" r="4" fill="currentColor"/>
		<ellipse cx="12" cy="17" fill="currentColor" opacity=".5" rx="7" ry="4"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<ellipse cx="12" cy="17" stroke="currentColor" strokeWidth="1.5" opacity=".5" rx="7" ry="4"/>
		</>
	),
};

export function UserRound({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconUserRound = UserRound;
export const UserRoundIcon = UserRound;
