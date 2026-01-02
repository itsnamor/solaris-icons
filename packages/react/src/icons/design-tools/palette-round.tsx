import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319zM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655"/>
		<path fill="currentColor" fillRule="evenodd" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"/>
		<path fill="currentColor" d="M18 22v-.75zm0-8v.75zm4 4h-.75zm-9 4.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1.5-6.5H18v-1.5h-2.5zM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18zM13 21.25H6v1.5h7zm5 0h-1v1.5h1z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M1.25 6a4.75 4.75 0 0 1 9.5 0v.432l2.033-2.033a4.75 4.75 0 1 1 6.718 6.717l-2.134 2.134H18a4.75 4.75 0 1 1 0 9.5H6A4.75 4.75 0 0 1 1.25 18zm8.214 15.25H18a3.25 3.25 0 0 0 0-6.5h-2.133l-5.978 5.978a5 5 0 0 1-.425.522m1.286-3.504 7.69-7.69a3.25 3.25 0 1 0-4.596-4.597L10.75 8.553zM6 2.75A3.25 3.25 0 0 0 2.75 6v12a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 6 2.75m0 15a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5M4.25 18a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
		<path fill="currentColor" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0" opacity=".4"/>
		<path fill="currentColor" d="m9.248 20.336 3.974-3.975 5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336" opacity=".7"/>
		<path fill="currentColor" d="m13.222 16.362-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"/>
		<path stroke="currentColor" strokeWidth="1.5" d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" opacity=".5"/>
		</>
	),
};

export function PaletteRound({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconPaletteRound = PaletteRound;
export const PaletteRoundIcon = PaletteRound;
