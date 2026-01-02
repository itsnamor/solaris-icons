import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 12h4m4 0h4m-9 5.196 2-3.464m2-3.464 2-3.464m0 10.392-2-3.464m-2-3.464L9 6.804"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.954-9.25h-3.049a3 3 0 0 1-.803 1.39l1.524 2.64a6 6 0 0 0 2.328-4.03m-3.626 4.782-1.525-2.64a3 3 0 0 1-1.606 0l-1.525 2.64A6 6 0 0 0 12 18c.825 0 1.612-.167 2.328-.468m-5.954-.751 1.524-2.64a3 3 0 0 1-.804-1.391H6.046a6 6 0 0 0 2.328 4.03m9.58-5.531h-3.049a3 3 0 0 0-.803-1.39l1.524-2.64a6 6 0 0 1 2.328 4.03m-3.626-4.782A6 6 0 0 0 12 6c-.825 0-1.612.167-2.328.468l1.525 2.64a3 3 0 0 1 1.606 0zM9.898 9.86 8.374 7.22a6 6 0 0 0-2.328 4.03h3.049c.138-.535.42-1.013.803-1.39" clipRule="evenodd"/>
	),
	broken: (
		<><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 12h4m4 0h4m-9 5.196 2-3.464m2-3.464 2-3.464m0 10.392-2-3.464m-2-3.464L9 6.804M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 17.197A6 6 0 1 1 17.197 15"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m5.553-.75h2.55a2.74 2.74 0 0 1 .675-1.166l-1.276-2.21a5.25 5.25 0 0 0-1.949 3.376m3.248-4.126 1.275 2.21a2.76 2.76 0 0 1 1.348 0l1.275-2.21A5.2 5.2 0 0 0 12 6.75c-.689 0-1.347.133-1.95.374m5.197.75-1.276 2.21c.314.322.549.721.675 1.166h2.55a5.25 5.25 0 0 0-1.95-3.375m1.949 4.876h-2.55a2.74 2.74 0 0 1-.675 1.166l1.276 2.21a5.25 5.25 0 0 0 1.949-3.376m-3.248 4.126-1.275-2.21a2.75 2.75 0 0 1-1.348 0l-1.275 2.21c.602.241 1.26.374 1.949.374s1.347-.133 1.95-.374m-5.197-.75 1.276-2.21a2.75 2.75 0 0 1-.674-1.166h-2.55a5.25 5.25 0 0 0 1.948 3.375m2.634-3.037-.011-.006-.01-.006a1.25 1.25 0 0 1-.005-2.151l.015-.008.015-.01a1.24 1.24 0 0 1 1.217 0l.018.01.017.01a1.25 1.25 0 0 1-.01 2.15l-.007.005-.008.005a1.24 1.24 0 0 1-1.231.001M5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><g fill="currentColor" opacity=".5">
		<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
		<path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clipRule="evenodd"/>
		</g>
		<path fill="currentColor" d="m9.672 17.532 1.525-2.64a3 3 0 0 1-1.299-.751l-1.524 2.64c.397.301.832.555 1.298.75M6.046 12.75h3.048a3 3 0 0 1 0-1.5H6.047a6 6 0 0 0 0 1.5m2.327-5.53 1.524 2.64a3 3 0 0 1 1.299-.751l-1.525-2.64a6 6 0 0 0-1.298.75m4.429 1.89 1.525-2.64c.465.195.901.449 1.298.75l-1.524 2.64a3 3 0 0 0-1.299-.75m2.103 3.641a3 3 0 0 0 0-1.5h3.048a6 6 0 0 1 0 1.5zm-2.103 2.141c.497-.137.942-.4 1.299-.75l1.524 2.64a6 6 0 0 1-1.298.75z"/>
		</>
	),
	"line-duotone": (
		<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 12h4m4 0h4m-9 5.196 2-3.464m2-3.464 2-3.464m0 10.392-2-3.464m-2-3.464L9 6.804" opacity=".5"/>
		</>
	),
};

export function Wheel({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconWheel = Wheel;
export const WheelIcon = Wheel;
