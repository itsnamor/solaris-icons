import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "$/configs/layout.config";
import { source } from "$/configs/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
	return (
		<DocsLayout tree={source.getPageTree()} {...baseOptions()}>
			{children}
		</DocsLayout>
	);
}
