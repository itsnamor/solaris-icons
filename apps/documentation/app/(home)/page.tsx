import { IconsExplorer } from "$/components/icons-explorer";
import { MetaData } from "fumadocs-core/source";
import { Suspense } from "react";

export default function HomePage() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<IconsExplorer />
			</Suspense>
		</div>
	);
}

export const metadata: MetaData = {
	title: "Icons Explorer - Solaris Icons",
	description:
		"Explore the wide variety of icons available in the Solaris Icons library.",
};
