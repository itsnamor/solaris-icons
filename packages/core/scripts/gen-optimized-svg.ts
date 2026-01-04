import {
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { optimize } from "svgo";

const ORIGINAL_DIR = join(import.meta.dir, "..", "assets", "original");
const OPTIMIZED_DIR = join(import.meta.dir, "..", "assets", "optimized");

function cleanOutputDir() {
	console.log("Cleaning optimized directory...");
	rmSync(OPTIMIZED_DIR, { recursive: true, force: true });
	console.log("✓ Cleaned optimized directory\n");
}

function getAllSvgFiles(dir: string, baseDir: string = dir): string[] {
	const files: string[] = [];
	const entries = readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...getAllSvgFiles(fullPath, baseDir));
		} else if (entry.isFile() && entry.name.endsWith(".svg")) {
			files.push(fullPath);
		}
	}

	return files;
}

async function optimizeSvgFiles() {
	cleanOutputDir();

	const svgFiles = getAllSvgFiles(ORIGINAL_DIR);
	console.log(`Found ${svgFiles.length} SVG files to optimize...`);

	let optimizedCount = 0;
	let failedCount = 0;

	for (const svgFile of svgFiles) {
		try {
			const relPath = relative(ORIGINAL_DIR, svgFile);
			const outputPath = join(OPTIMIZED_DIR, relPath);
			const outputDir = dirname(outputPath);

			// Read the original SVG file
			const svgContent = readFileSync(svgFile, "utf-8");

			// Optimize the SVG
			const result = optimize(svgContent, {
				multipass: true,
				plugins: [
					"preset-default",
					"convertStyleToAttrs",
					// "removeXMLNS",
					{
						name: "convertColors",
						params: { currentColor: true },
					},
					{
						name: "removeAttrs",
						params: {
							attrs: ["svg:width", "svg:height"],
							preserveCurrentColor: false,
						},
					},
					{
						name: "addAttributesToSVGElement",
						params: {
							attributes: [{ width: "1em", height: "1em" }],
						},
					},
				],
			});

			// Create the output directory structure if it doesn't exist
			mkdirSync(outputDir, { recursive: true });

			// Write the optimized SVG
			writeFileSync(outputPath, result.data);
			optimizedCount++;
			console.log(`✓ ${relPath}`);
		} catch (error) {
			console.error(`✗ Error processing ${svgFile}:`, error);
			failedCount++;
		}
	}

	console.log(`\nCompleted! Optimized ${optimizedCount} files.`);
	if (failedCount > 0) {
		console.log(`Failed to optimize ${failedCount} files.`);
	}
}

optimizeSvgFiles().catch(console.error);
