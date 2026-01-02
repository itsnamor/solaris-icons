import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/shared/layout.shared";
import { source } from "@/shared/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
	return (
		<DocsLayout tree={source.pageTree} {...baseOptions()}>
			{children}
		</DocsLayout>
	);
}
