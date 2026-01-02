import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4s0 4 7 4q.525 0 1-.013m6.95-3.937-3.9 3.9"/>
		<circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
		<path fill="currentColor" fillRule="evenodd" d="M18 15.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M16.25 19a1.75 1.75 0 0 1 2.338-1.649l-2.237 2.237A1.8 1.8 0 0 1 16.25 19m1.162 1.649 2.237-2.237q.1.277.101.588a1.75 1.75 0 0 1-2.338 1.649" clipRule="evenodd"/>
		<path fill="currentColor" d="M12 22c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.37 0 4.498.58 5.963 1.5a4.5 4.5 0 0 0-3.392 7.414C13.82 21.97 12.97 22 12 22"/>
		</>
	),
	broken: (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4 0 .345 0 .68.027 1M13 20.987Q12.525 21 12 21c-1.722 0-3.02-.108-4-.305m11.95-3.645-3.9 3.9"/>
		<circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clipRule="evenodd"/>
		<path fill="currentColor" d="M5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073 1.2 0 2.316.184 3.265.497a.75.75 0 1 0 .47-1.424c-1.11-.367-2.386-.573-3.735-.573-2.04 0-3.923.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17v.1c-.001 1.025-.003 2.355 1.147 3.306.567.47 1.355.798 2.405 1.014 1.053.217 2.422.33 4.198.33q.535 0 1.02-.014a.75.75 0 1 0-.041-1.499q-.463.013-.98.013c-1.723 0-2.98-.11-3.895-.299-.918-.189-1.443-.446-1.751-.7-.563-.466-.603-1.08-.603-2.251"/>
		<path fill="currentColor" fillRule="evenodd" d="M18 15.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m.97 1.72-3 3a2.25 2.25 0 0 1 3-3m-1.94 4.06a2.25 2.25 0 0 0 3-3z" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
		<path fill="currentColor" fillRule="evenodd" d="M16.5 15.75a2.75 2.75 0 0 0-2.383 4.123l3.756-3.756a2.74 2.74 0 0 0-1.373-.367m2.42 1.442-3.728 3.728a2.75 2.75 0 0 0 3.728-3.728M12.25 18.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clipRule="evenodd"/>
		<path fill="currentColor" d="M17.996 14.521a4.25 4.25 0 0 0-3.979 7.429Q13.107 22 12 22c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.387 0 4.53.588 5.996 1.521" opacity=".4"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4s0 4 7 4q.525 0 1-.013" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m19.95 17.05-3.9 3.9"/>
		<circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
		</>
	),
};

export function UserCircleSlash({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconUserCircleSlash = UserCircleSlash;
export const UserCircleSlashIcon = UserCircleSlash;
