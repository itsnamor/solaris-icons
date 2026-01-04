import { readdirSync } from "node:fs";
import { join } from "node:path";
import ollama from "ollama";
import CATEGORIES_MAP from "../json/categories-map.json";
import { svgToPng } from "../utils/svg-to-png";

const OPTIMIZED_DIR = join(import.meta.dir, "..", "assets", "optimized");

const categoryDirs = readdirSync(OPTIMIZED_DIR);

const metadata: Array<{
	icon: string;
	categoryDir: string;
	category: string;
	keywords: string[];
}> = [];

for (const categoryDir of categoryDirs) {
	const iconDirs = readdirSync(join(OPTIMIZED_DIR, categoryDir));
	const category = CATEGORIES_MAP[categoryDir as keyof typeof CATEGORIES_MAP];

	for (const iconDir of iconDirs) {
		metadata.push({
			icon: iconDir,
			categoryDir,
			category,
			keywords: [],
		});
	}
}

console.log(`Total icons processed: ${metadata.length}`);
let count = 0;

const result = await Promise.all(
	metadata.map(async ({ categoryDir, icon, category }) => {
		const svg = await Bun.file(
			join(OPTIMIZED_DIR, categoryDir, icon, "linear.svg"),
		).text();
		const png = await svgToPng(svg);

		await Bun.write(
			join(import.meta.dir, "..", "json", "metadata.json"),
			JSON.stringify(metadata, null, 2),
		);

		const response = await ollama.chat({
			// model: "llava",
			model: " llava-llama3:8b",
			format: "json",
			messages: [
				{
					role: "system",
					content: `You are an expert Metadata Specialist specializing in iconography. Your task is to generate a comprehensive list of highly relevant keywords for an icon. Base your analysis on three pillars: Visual Characteristics (shapes, style, metaphors), Current Name, and Current Category.

Requirements:
- Provide a mix of literal and conceptual keywords.
- Avoid redundant terms already present in the name or category.

Output Format:
- Return keywords as a JSON array of strings. Example: { keywords: ["keyword1", "keyword2", "keyword3"] }
- Ensure all keywords are in lowercase.
- Limit the list to a maximum of 10 keywords and minimum of 3 keywords.`,
				},
				{
					role: "user",
					content: `Name: ${icon}, Category: ${category}`,
					images: [png],
				},
			],
		});

		const { keywords } = JSON.parse(response.message.content);

		count++;
		console.log(
			`Generated: ${categoryDir}/${icon} (${count}/${metadata.length}) ${keywords}`,
		);

		return { icon, category, keywords };
	}),
);

await Bun.write(
	join(import.meta.dir, "..", "json", "metadata.json"),
	JSON.stringify(result, null, 2),
);
console.log("Metadata with keywords generated successfully.");
