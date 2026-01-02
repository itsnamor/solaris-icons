import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2m4.5-1.5 1 .5M16 3.5l.5 1M19 5l1-1"/>
		</>
	),
	bold: (
		<path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006m3.165 4.336a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006M20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m.53-6.97-1.158 1.158a9 9 0 0 0-1.06-1.06L16.47 6.47a.75.75 0 1 1 1.06 1.06"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2m4.5-1.5 1 .5M16 3.5l.5 1M19 5l1-1M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"/>
	),
	outline: (
		<><path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006"/>
		<path fill="currentColor" fillRule="evenodd" d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5M9.5 7.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd"/>
		<path fill="currentColor" d="M19.835 6.83a.75.75 0 1 0-.67 1.34l1 .5a.75.75 0 1 0 .67-1.34zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0" opacity=".6"/>
		<path fill="currentColor" d="M16.67 3.165a.75.75 0 1 0-1.34.67l.5 1a.75.75 0 1 0 1.34-.67zm3.165 3.665a.75.75 0 1 0-.67 1.34l1 .5a.75.75 0 1 0 .67-1.34zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zm-5.223 5.223L17.53 7.53a.75.75 0 0 0-1.06-1.06l-2.223 2.223q.583.478 1.06 1.06"/>
		</>
	),
	"line-duotone": (
		<><circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m19.5 7.5 1 .5M16 3.5l.5 1M19 5l1-1"/>
		</>
	),
};

export function Bomb({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconBomb = Bomb;
export const BombIcon = Bomb;
