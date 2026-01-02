import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 10h-2m0 0h-2m2 0V8m0 2v2"/>
		</>
	),
	bold: (
		<><circle cx="10" cy="6" r="4" fill="currentColor"/>
		<path fill="currentColor" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 10h-2m0 0h-2m2 0V8m0 2v2"/>
		</>
	),
	broken: (
		<><circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 10h-2m0 0h-2m2 0V8m0 2v2m-1.002 6q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M5.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M10 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M3.975 13.664c1.58-.888 3.711-1.414 6.025-1.414 2.313 0 4.445.526 6.024 1.414 1.556.876 2.726 2.202 2.726 3.836v.102c.001 1.162.003 2.62-1.276 3.662-.63.512-1.51.877-2.7 1.117-1.193.242-2.748.369-4.774.369s-3.58-.127-4.774-.369c-1.19-.24-2.07-.605-2.7-1.117-1.279-1.042-1.277-2.5-1.276-3.662V17.5c0-1.634 1.17-2.96 2.725-3.836m.736 1.308c-1.34.753-1.961 1.677-1.961 2.528 0 1.308.04 2.044.723 2.6.371.302.99.597 2.05.811 1.058.214 2.503.339 4.477.339s3.42-.125 4.476-.339c1.06-.214 1.68-.509 2.05-.81.684-.557.724-1.293.724-2.601 0-.851-.622-1.775-1.961-2.528-1.316-.74-3.184-1.222-5.29-1.222-2.104 0-3.972.482-5.288 1.222" clipRule="evenodd"/>
		<path fill="currentColor" d="M19.75 8a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25z"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
		<path fill="currentColor" d="M14.477 21.92c-.726.053-1.547.08-2.477.08-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987c.237.238.542.365.964.434" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><circle cx="10" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M21 10h-2m0 0h-2m2 0V8m0 2v2"/>
		</>
	),
};

export function UserPlus({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconUserPlus = UserPlus;
export const UserPlusIcon = UserPlus;
