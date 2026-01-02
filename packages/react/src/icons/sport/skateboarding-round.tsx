import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3 17 .608.676A4 4 0 0 0 6.581 19H17.42a4 4 0 0 0 2.973-1.324L21 17"/>
		<circle cx="7" cy="21" r="1" fill="currentColor"/>
		<circle cx="17" cy="21" r="1" fill="currentColor"/>
		<circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 16.5v-2.134a1.85 1.85 0 0 0-.666-1.42l-.996-.831a1.59 1.59 0 0 1-.106-2.347l1.654-1.654a1.067 1.067 0 0 0-.335-1.735 4.27 4.27 0 0 0-3.943.304L8.5 8m2.5 6-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
		<path fill="currentColor" fillRule="evenodd" d="M10.21 6.047a5.02 5.02 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516 3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clipRule="evenodd"/>
		<path fill="currentColor" d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-4.97 5.28a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171.417-.173.736-.493 1.095-.854l.074-.073z"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3 17 .608.676A4 4 0 0 0 6.581 19H10m11-2-.608.676A4 4 0 0 1 17.419 19H14"/>
		<circle cx="7" cy="21" r="1" fill="currentColor"/>
		<circle cx="17" cy="21" r="1" fill="currentColor"/>
		<circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 16.5v-2.134a1.85 1.85 0 0 0-.666-1.42l-.996-.831a1.59 1.59 0 0 1-.106-2.347l1.654-1.654a1.067 1.067 0 0 0-.335-1.735 4.27 4.27 0 0 0-3.943.304L8.5 8m2.5 6-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3"/>
		</>
	),
	outline: (
		<><path fill="currentColor" fillRule="evenodd" d="M2.498 16.443a.75.75 0 0 1 1.06.055l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clipRule="evenodd"/>
		<path fill="currentColor" d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
		<path fill="currentColor" fillRule="evenodd" d="M19 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M16.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-6.04 2.047a5.02 5.02 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516 3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM15.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-4.22 3.47a.75.75 0 0 1 0 1.06l-.621.622-.074.073c-.359.36-.678.68-1.095.854-.418.173-.87.172-1.379.171H7a.75.75 0 0 1 0-1.5h1.257c.675 0 .803-.013.909-.057s.206-.125.682-.602l.622-.621a.75.75 0 0 1 1.06 0" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
		<path fill="currentColor" fillRule="evenodd" d="M10.21 6.047a5.02 5.02 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516 3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clipRule="evenodd"/>
		<path fill="currentColor" d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-4.97 5.28a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171.417-.173.736-.493 1.095-.854l.074-.073z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3 17 .608.676A4 4 0 0 0 6.581 19H17.42a4 4 0 0 0 2.973-1.324L21 17"/>
		<circle cx="7" cy="21" r="1" fill="currentColor" opacity=".5"/>
		<circle cx="17" cy="21" r="1" fill="currentColor" opacity=".5"/>
		<circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 16.5v-2.134a1.85 1.85 0 0 0-.666-1.42l-.996-.831a1.59 1.59 0 0 1-.106-2.347l1.654-1.654a1.067 1.067 0 0 0-.335-1.735 4.27 4.27 0 0 0-3.943.304L8.5 8"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m11 14-.621.621c-.434.434-.65.65-.926.765s-.583.114-1.196.114H7m9.5-5.5h3" opacity=".5"/>
		</>
	),
};

export function SkateboardingRound({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconSkateboardingRound = SkateboardingRound;
export const SkateboardingRoundIcon = SkateboardingRound;
