import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h7m0 0-3 3m3-3-3-3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 16V8"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25 0c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75m11.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h7m0 0-3 3m3-3-3-3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 16V8m5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M17 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75M6.25 12c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75"/>
		<path fill="currentColor" fillRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"/>
		<path fill="currentColor" d="M16.25 8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0zM7 12.75a.75.75 0 0 1 0-1.5h5.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h7m0 0-3 3m3-3-3-3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 16V8"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"/>
		</>
	),
};

export function SquareArrowRightToLine({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSquareArrowRightToLine = SquareArrowRightToLine;
export const SquareArrowRightToLineIcon = SquareArrowRightToLine;
