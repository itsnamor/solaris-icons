import "./global.css";

import { Be_Vietnam_Pro } from "next/font/google";
import { Provider } from "$/components/provider";

const fontSans = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={fontSans.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
