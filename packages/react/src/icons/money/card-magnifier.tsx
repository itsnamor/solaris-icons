import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6m-4-6h20"/>
		<circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m20.5 19.5 1 1"/>
		</>
	),
	bold: (
		<><path fill="currentColor" fillRule="evenodd" d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75" clipRule="evenodd"/>
		<path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4m0 16h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"/>
		<path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14 4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6"/>
		<circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m20.5 19.5 1 1M2 10h5m15 0H11"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.09.673.127 1.456.142 2.363a.8.8 0 0 1 .004.23q.009.848.007 1.84V13a.75.75 0 0 1-1.5 0v-1q0-.668-.002-1.25H2.752q-.003.582-.002 1.25c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153m-7.168 6h18.448a16 16 0 0 0-.114-1.54c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.06.445-.094.952-.114 1.539M18 14.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 17a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14.25 17m-9-1a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M10 20h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12c0-.442 0-1.608-.002-2H2.002C2 10.392 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20" opacity=".5"/>
		<path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"/>
		<path fill="currentColor" fillRule="evenodd" d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75" clipRule="evenodd"/>
		<path fill="currentColor" d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 16H6m-4-6h20" opacity=".4"/>
		<circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m20.5 19.5 1 1"/>
		</>
	),
};

export function CardMagnifier({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconCardMagnifier = CardMagnifier;
export const CardMagnifierIcon = CardMagnifier;
