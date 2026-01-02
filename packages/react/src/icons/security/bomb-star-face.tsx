import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
	linear: (
		<><circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 16h2"/>
		<path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5"/>
		<ellipse cx="9" cy="12.5" fill="currentColor" rx="1" ry="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/>
		</>
	),
	bold: (
		<><path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/>
		<path fill="currentColor" fillRule="evenodd" d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5" clipRule="evenodd"/>
		<path fill="currentColor" d="m16.767 8.294-.75.75a8.6 8.6 0 0 0-1.06-1.061l.75-.75.76.3z"/>
		</>
	),
	broken: (
		<><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 16h2"/>
		<path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5"/>
		<ellipse cx="9" cy="12.5" fill="currentColor" rx="1" ry="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"/>
		</>
	),
	outline: (
		<><path fill="currentColor" d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5"/>
		<path fill="currentColor" fillRule="evenodd" d="M19.717 2.078c-.436-1.104-1.998-1.104-2.434 0L16.66 3.66l-1.582.623c-1.104.436-1.104 1.998 0 2.434l.82.323-1.119 1.12a8.25 8.25 0 1 0 1.06 1.06l1.12-1.119.324.821c.436 1.104 1.998 1.104 2.434 0l.623-1.582 1.582-.623c1.104-.436 1.104-1.998 0-2.434L20.34 3.66zm-1.693 2.21.476-1.206.476 1.206c.133.337.4.603.736.736l1.206.476-1.206.476c-.337.133-.603.4-.736.736L18.5 7.918l-.476-1.206a1.3 1.3 0 0 0-.736-.736L16.082 5.5l1.206-.476c.337-.133.603-.4.736-.736M2.75 14.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0" clipRule="evenodd"/>
		</>
	),
	"bold-duotone": (
		<><path fill="currentColor" d="M9.5 22a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" opacity=".5"/>
		<path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/>
		<path fill="currentColor" d="m16.477 6.462-2.23 2.23q.582.478 1.06 1.062l2.23-2.231-.21-.535a.56.56 0 0 0-.315-.315z" opacity=".7"/>
		<path fill="currentColor" d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5"/>
		</>
	),
	"line-duotone": (
		<><circle cx="9.5" cy="14.5" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10 16h2" opacity=".5"/>
		<path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5" opacity=".5"/>
		<ellipse cx="9" cy="12.5" fill="currentColor" opacity=".5" rx="1" ry="1.5"/>
		<path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17 7-2 2" opacity=".5"/>
		<path stroke="currentColor" strokeWidth="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"/>
		</>
	),
};

export function BombStarFace({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const IconBombStarFace = BombStarFace;
export const BombStarFaceIcon = BombStarFace;
