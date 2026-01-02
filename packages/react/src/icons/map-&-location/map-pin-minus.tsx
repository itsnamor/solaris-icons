import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 10h6"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2m-3.75 8A.75.75 0 0 1 9 9.25h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	broken: (
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 10h6M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"/>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25s8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.928 4.095-5.103 5.112a4.2 4.2 0 0 1-3.562 0c-2.175-1.017-3.913-2.92-5.103-5.112-1.192-2.194-1.866-4.734-1.866-7.099M12 2.75c-3.992 0-7.25 3.297-7.25 7.393 0 2.097.603 4.392 1.684 6.383 1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469 1.081-1.99 1.684-4.286 1.684-6.383 0-4.096-3.258-7.393-7.25-7.393M8.25 10A.75.75 0 0 1 9 9.25h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"/>
		<path fill="currentColor" d="M9 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 10h6"/>
		</>
	),
};

export function MapPinMinus({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconMapPinMinus = MapPinMinus;
export const MapPinMinusIcon = MapPinMinus;
