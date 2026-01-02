import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"/>
		<path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v1h-1v-1m-8 0v1H7v-1"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M20 11.5H4"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 7v2m0 5v2"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v.75h16V10c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172M17 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-13 6V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-.75zm13 1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 10v3c0 3.771 0 5.657 1.172 6.828S8.229 21 12 21s5.657 0 6.828-1.172S20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2 6.343 2 5.172 3.172C4.518 3.825 4.229 4.7 4.102 6"/>
		<path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v1h-1v-1m-8 0v1H7v-1"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 11.5h-5m-11 0h7M17 7v2m0 5v2"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/>
		<path fill="currentColor" fillRule="evenodd" d="M12.056 1.25h-.112c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v3.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.46.459.994.761 1.609.963V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.296c.907.046 1.965.046 3.194.046h.112c1.23 0 2.287 0 3.194-.046V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.678c.615-.202 1.15-.504 1.609-.963.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V9.945c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153M5.702 3.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14s3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289v.75H4.75V10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008M4.75 12.25h14.5V13c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.028.138-2.382.14-4.289.14s-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" fillRule="evenodd" d="M4 11.5V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-1.5zm13 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
		<path fill="currentColor" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1.5H4z" opacity=".5"/>
		<path fill="currentColor" d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"/>
		<path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M17 21v1h-1v-1m-8 0v1H7v-1" opacity=".5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M20 11.5H4" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17 7v2m0 5v2"/>
		</>
	),
};

export function Fridge({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconFridge = Fridge;
export const FridgeIcon = Fridge;
