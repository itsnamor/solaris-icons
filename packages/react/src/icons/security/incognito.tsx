import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 11h20M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"/>
		</>
	),
	bold: (
		<path fill="currentColor" fillRule="evenodd" d="m4.614 8.545-.426 1.705H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.187l-.427-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635-.814.636-1.087 1.727-1.632 3.91M6.5 21a3.5 3.5 0 0 0 3.384-2.604l1.11-.555a2.25 2.25 0 0 1 2.012 0l1.11.555A3.501 3.501 0 0 0 21 17.5a3.5 3.5 0 0 0-6.91-.794l-.413-.206a3.75 3.75 0 0 0-3.354 0l-.413.206A3.501 3.501 0 0 0 3 17.5 3.5 3.5 0 0 0 6.5 21" clipRule="evenodd"/>
	),
	broken: (
		<><path stroke="currentColor" strokeWidth="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91.76-.593 1.79-.632 3.754-.635m10 7-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91-.76-.593-1.79-.632-3.754-.635"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"/>
		</>
	),
	outline: (
		<path fill="currentColor" fillRule="evenodd" d="M10.388 3.25h3.224c1.085 0 1.966 0 2.675.085.74.088 1.374.276 1.928.71.555.432.892 1.002 1.157 1.698.254.667.467 1.522.73 2.574l.484 1.933H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.414l.484-1.933c.263-1.052.476-1.907.73-2.574.266-.696.602-1.266 1.157-1.699.554-.433 1.189-.62 1.928-.71.709-.084 1.59-.084 2.675-.084m-5.427 7h14.078l-.38-1.523c-.278-1.11-.47-1.877-.69-2.45-.21-.555-.418-.848-.677-1.05s-.594-.332-1.183-.403c-.61-.073-1.4-.074-2.544-.074h-3.13c-1.144 0-1.935.001-2.544.074-.59.07-.924.2-1.183.403-.26.202-.466.495-.678 1.05-.218.573-.411 1.34-.689 2.45zm1.539 4.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M2.25 17.5a4.25 4.25 0 0 1 8.35-1.125 3.75 3.75 0 0 1 2.8 0 4.252 4.252 0 0 1 8.35 1.125 4.25 4.25 0 0 1-8.474.477l-.27-.135a2.25 2.25 0 0 0-2.012 0l-.27.135A4.25 4.25 0 0 1 2.25 17.5m15.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd"/>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M21 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
		<path fill="currentColor" fillRule="evenodd" d="M1.25 10A.75.75 0 0 1 2 9.25h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
		<path fill="currentColor" d="m4.188 9.25.426-1.705c.545-2.183.818-3.274 1.632-3.91C7.06 3 8.185 3 10.435 3h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91l.427 1.705z" opacity=".5"/>
		<path fill="currentColor" d="M10 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
		<path fill="currentColor" d="M9.884 17.397a3.5 3.5 0 0 0 .026-1.69l.413-.207a3.75 3.75 0 0 1 3.354 0l.413.206a3.5 3.5 0 0 0 .026 1.69l-1.11-.555a2.25 2.25 0 0 0-2.012 0z" opacity=".5"/>
		</>
	),
	"line-duotone": (
		<><path stroke="currentColor" strokeWidth="1.5" d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 11h20"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m4 11 .614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11" opacity=".5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33" opacity=".5"/>
		</>
	),
};

export function Incognito({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconIncognito = Incognito;
export const IncognitoIcon = Incognito;
