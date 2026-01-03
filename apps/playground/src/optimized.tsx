/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: test */
import { startCase } from "lodash-es";

export function Optimized() {
	// Eagerly import all SVGs in the core assets as URLs
	const svgModules = import.meta.glob(
		"../../../packages/core/assets/optimized/**/*.svg",
		{
			// as: "url",
			eager: true,
			import: "default",
			query: "?raw",
		},
	) as Record<string, string>;

	type Catalog = Record<string, Record<string, Record<string, string>>>;
	const catalog: Catalog = {};

	// Build catalog: category -> icon -> style -> url
	for (const [path, url] of Object.entries(svgModules)) {
		const normalized = path.replace(/\\/g, "/");
		const match = normalized.match(/optimized\/(.*?)\/(.*?)\/([^/]+)\.svg$/);

		if (!match) continue;
		const [, category, icon, style] = match;

		catalog[category] ??= {};
		catalog[category][icon] ??= {};
		catalog[category][icon][style] = url;
	}

	const styleOrder = [
		"bold-duotone",
		"bold",
		"broken",
		"line-duotone",
		"linear",
		"outline",
	];

	return (
		<div className="min-h-screen bg-neutral-100 p-4">
			{Object.keys(catalog)
				.sort()
				// .toReversed()
				.map((category) => (
					<div className="mb-6 rounded-lg bg-white p-4 shadow" key={category}>
						<h2 className="mb-4 font-semibold capitalize">
							{category.replace(/-/g, " ")} (
							{Object.keys(catalog[category]).length})
						</h2>

						<div className="flex flex-wrap gap-4">
							{Object.keys(catalog[category])
								.sort()
								.map((icon) => (
									<div
										className="rounded-lg border border-violet-300 border-dashed p-2"
										key={`${category}-${icon}`}
									>
										<h3 className="mb-2 text-sm">
											{startCase(icon).replaceAll(" ", "")}
										</h3>

										<div className="flex gap-2 text-[#1C274C] text-[32px]">
											{styleOrder.map((styleKey) => {
												const src = catalog[category][icon][styleKey];

												return (
													<div
														dangerouslySetInnerHTML={{ __html: src }}
														key={`${icon}-${styleKey}`}
													/>
												);
											})}
										</div>
									</div>
								))}
						</div>
					</div>
				))}
		</div>
	);
}
