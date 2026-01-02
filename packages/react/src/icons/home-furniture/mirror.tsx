import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5ZM5 20h14"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M18.966 8.75C18.615 4.96 15.63 2 12 2S5.385 4.96 5.034 8.75H5a.75.75 0 0 0-.75.75V19c0 .487-.158.96-.45 1.35l-.9 1.2a.75.75 0 0 0 1.2.9l.9-1.2q.18-.239.317-.5h13.366q.138.261.317.5l.9 1.2a.75.75 0 0 0 1.2-.9l-.9-1.2a2.25 2.25 0 0 1-.45-1.35V9.5a.75.75 0 0 0-.785-.75m-.716 4.131C17.096 15.325 14.73 17 12 17s-5.096-1.675-6.25-4.119V19q0 .126-.008.25h12.516a4 4 0 0 1-.008-.25zm-5.856-7.976c.226-.366.756-.506 1.183-.312 1.45.66 2.41 2.143 2.702 3.795.072.41-.257.792-.735.854s-.923-.22-.996-.63c-.242-1.371-1-2.334-1.791-2.693-.427-.194-.59-.648-.363-1.014" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2M6.341 7A9.2 9.2 0 0 0 6 9.5c0 4.142 2.686 7.5 6 7.5s6-3.358 6-7.5S15.314 2 12 2c-1.09 0-2.114.364-2.995 1M5 20h7m7 0h-3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2.75c-2.752 0-5.25 2.857-5.25 6.75s2.498 6.75 5.25 6.75 5.25-2.857 5.25-6.75S14.752 2.75 12 2.75M5.274 8.802C5.56 4.708 8.331 1.25 12 1.25s6.44 3.457 6.726 7.552a.75.75 0 0 1 1.024.698V19c0 .487.158.96.45 1.35l.9 1.2a.75.75 0 1 1-1.2.9l-.9-1.2a4 4 0 0 1-.317-.5H5.317a4 4 0 0 1-.317.5l-.9 1.2a.75.75 0 1 1-1.2-.9l.9-1.2c.292-.39.45-.863.45-1.35V9.5a.75.75 0 0 1 1.024-.698m.476 3.81V19q0 .126-.008.25h12.516a4 4 0 0 1-.008-.25v-6.387c-.984 2.952-3.334 5.137-6.25 5.137s-5.265-2.185-6.25-5.137m6.587-7.707a.75.75 0 0 1 1.014-.312c1.243.66 2.066 2.143 2.316 3.795a.75.75 0 0 1-1.483.224c-.207-1.371-.857-2.333-1.535-2.693a.75.75 0 0 1-.312-1.014" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M5.25 8.75A.75.75 0 0 1 6 9.5V19q0 .126-.008.25h12.516A4 4 0 0 1 18.5 19V9.5a.75.75 0 0 1 1.5 0V19c0 .487.158.96.45 1.35l.9 1.2a.75.75 0 1 1-1.2.9l-.9-1.2a4 4 0 0 1-.317-.5H5.567a4 4 0 0 1-.317.5l-.9 1.2a.75.75 0 1 1-1.2-.9l.9-1.2c.292-.39.45-.863.45-1.35V9.5a.75.75 0 0 1 .75-.75" clipRule="evenodd" opacity=".5"/>
		<path fill="currentColor" fillRule="evenodd" d="M12.25 17c3.866 0 7-3.358 7-7.5s-3.134-7.5-7-7.5-7 3.358-7 7.5 3.134 7.5 7 7.5m1.577-12.407c-.427-.194-.957-.054-1.183.312s-.064.82.363 1.014c.792.36 1.55 1.322 1.791 2.693.073.41.518.692.996.63s.807-.444.735-.854c-.292-1.652-1.252-3.136-2.702-3.795" clipRule="evenodd"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5Z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M5 20h14" opacity=".4"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244" opacity=".5"/>
		</>
	),
};

export function Mirror({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMirror = Mirror;
export const MirrorIcon = Mirror;
