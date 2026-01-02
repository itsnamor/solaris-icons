import "./global.css";

import { RootProvider } from "fumadocs-ui/provider/next";
import { Be_Vietnam_Pro } from "next/font/google";

const fontSans = Be_Vietnam_Pro({
	subsets: ["vietnamese", "latin-ext"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={fontSans.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
