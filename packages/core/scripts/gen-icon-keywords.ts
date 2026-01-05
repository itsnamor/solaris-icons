import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ollama from "ollama";
import CATEGORIES_MAP from "../json/categories-map.json";
import { svgToPng } from "../utils/svg-to-png";

const OPTIMIZED_DIR = join(import.meta.dir, "..", "assets", "optimized");

const categoryDirs = readdirSync(OPTIMIZED_DIR);

async function generateKeywords(
	icon: string,
	category: string,
	png: Uint8Array,
) {
	const response = await ollama.chat({
		model: "llava",
		// model: "llava-llama3:8b",
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

	return keywords as string[];
}

for (const categoryDir of categoryDirs) {
	const iconDirs = readdirSync(join(OPTIMIZED_DIR, categoryDir));
	const category = CATEGORIES_MAP[categoryDir as keyof typeof CATEGORIES_MAP];

	const isExistCategory = existsSync(
		join(import.meta.dir, "..", "json", "metadata", `${categoryDir}.json`),
	);

	if (isExistCategory) {
		console.log(`Skipping ${categoryDir}, metadata already exists.`);
		continue;
	}

	console.log(
		`\n\nGenerating keywords for category: ${category} (${iconDirs.length}) ...`,
	);

	const icons = iconDirs.map((icon) => ({
		icon,
		categoryDir,
		category,
	}));

	const result: Array<{
		icon: string;
		categoryDir: string;
		category: string;
		keywords: string[];
	}> = [];

	let count = 0;

	for (const { icon, category, categoryDir } of icons) {
		const svg = await Bun.file(
			join(OPTIMIZED_DIR, categoryDir, icon, "linear.svg"),
		).text();
		const png = await svgToPng(svg);

		const keywords = await generateKeywords(icon, category, png);
		console.log(
			`(${++count}/${icons.length}) Generated keywords for ${icon}:`,
			keywords,
		);

		result.push({ icon, categoryDir, category, keywords });
	}

	await Bun.write(
		join(import.meta.dir, "..", "json", "metadata", `${categoryDir}.json`),
		JSON.stringify(result, null, 2),
	);
}
