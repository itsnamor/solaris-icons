import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const CORE_OPTIMIZED_PATH = join(import.meta.dir, "../../core/optimized");
const OUTPUT_ICONS_PATH = join(import.meta.dir, "../src/icons");

const VARIANTS = [
  "linear",
  "bold",
  "broken",
  "outline",
  "bold-duotone",
  "line-duotone",
] as const;

type Variant = (typeof VARIANTS)[number];

/**
 * Convert kebab-case to PascalCase (StartCase)
 * e.g., "arrow-down" -> "ArrowDown"
 */
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Extract the inner content of an SVG (everything inside <svg>...</svg>)
 */
function extractSvgContent(svg: string): string {
  const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return match ? (match[1]?.trim() ?? "") : "";
}

/**
 * Convert SVG content to JSX format
 * - Convert attributes like stroke-width to strokeWidth
 * - Handle self-closing tags properly
 */
function svgToJsx(svgContent: string): string {
  // Convert kebab-case attributes to camelCase
  const jsx = svgContent
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/stroke-dasharray/g, "strokeDasharray")
    .replace(/stroke-dashoffset/g, "strokeDashoffset")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit")
    .replace(/stroke-opacity/g, "strokeOpacity")
    .replace(/fill-opacity/g, "fillOpacity");

  return jsx;
}

/**
 * Format JSX element with proper indentation
 */
function formatJsxElement(jsx: string, indent: string = "\t\t"): string {
  // Parse and format each element
  const formatted = jsx
    // Add newlines before each element
    .replace(
      /<(path|circle|rect|line|polyline|polygon|g|ellipse|defs|use|clipPath|mask|stop|linearGradient|radialGradient)/g,
      `\n${indent}<$1`,
    )
    // Format closing tags
    .replace(
      /<\/(g|defs|clipPath|mask|linearGradient|radialGradient)>/g,
      `\n${indent}</$1>`,
    )
    .trim();

  return formatted;
}

/**
 * Generate the component file content
 */
function generateComponentContent(
  componentName: string,
  variants: Record<Variant, string>,
): string {
  const variantEntries = VARIANTS.map((variant) => {
    const content = variants[variant];
    if (!content) return null;

    const formattedContent = formatJsxElement(content);
    const hasMultipleElements =
      (
        content.match(/<(path|circle|rect|line|polyline|polygon|g|ellipse)/g) ||
        []
      ).length > 1;

    // Quote variant keys that contain hyphens
    const variantKey = variant.includes("-") ? `"${variant}"` : variant;

    if (hasMultipleElements) {
      return `\t${variantKey}: (\n\t\t<>${formattedContent}\n\t\t</>\n\t)`;
    }
    return `\t${variantKey}: (\n\t\t${formattedContent}\n\t)`;
  }).filter(Boolean);

  return `import { Icon } from "../../icon";
import type { IconProps } from "../../types";

const VARIANTS = {
${variantEntries.join(",\n")},
};

export function ${componentName}({ variant = "linear", ...props }: IconProps) {
	return <Icon {...props}>{VARIANTS[variant]}</Icon>;
}

export const Icon${componentName} = ${componentName};
export const ${componentName}Icon = ${componentName};
`;
}

/**
 * Process a single icon directory (contains variant SVGs)
 */
async function processIconDir(
  iconDir: string,
  iconName: string,
): Promise<{ componentName: string; content: string } | null> {
  const variants: Record<string, string> = {};

  for (const variant of VARIANTS) {
    const svgPath = join(iconDir, `${variant}.svg`);
    try {
      const svgContent = await readFile(svgPath, "utf-8");
      const innerContent = extractSvgContent(svgContent);
      const jsxContent = svgToJsx(innerContent);
      variants[variant] = jsxContent;
    } catch {
      // Variant doesn't exist, skip
    }
  }

  if (Object.keys(variants).length === 0) {
    return null;
  }

  const componentName = toPascalCase(iconName);
  const content = generateComponentContent(
    componentName,
    variants as Record<Variant, string>,
  );

  return { componentName, content };
}

/**
 * Process a category directory (contains icon directories)
 * Returns array of export statements for main.ts
 */
async function processCategoryDir(
  categoryPath: string,
  categoryName: string,
): Promise<string[]> {
  const outputCategoryPath = join(OUTPUT_ICONS_PATH, categoryName);

  // Create output directory
  await mkdir(outputCategoryPath, { recursive: true });

  // Get all icon directories
  const entries = await readdir(categoryPath, { withFileTypes: true });
  const iconDirs = entries.filter((entry) => entry.isDirectory());

  const exports: string[] = [];

  for (const iconDir of iconDirs) {
    const iconPath = join(categoryPath, iconDir.name);
    const result = await processIconDir(iconPath, iconDir.name);

    if (result) {
      const outputFilePath = join(outputCategoryPath, `${iconDir.name}.tsx`);
      await writeFile(outputFilePath, result.content);
      exports.push(
        `export { ${result.componentName}, Icon${result.componentName}, ${result.componentName}Icon } from "./src/icons/${categoryName}/${iconDir.name}";`,
      );
      console.log(`  ✓ ${iconDir.name}.tsx`);
    }
  }

  return exports;
}

/**
 * Main function to generate all icons
 */
async function main(): Promise<void> {
  console.log("🚀 Starting icon generation...\n");

  // Clean output directory
  console.log("🧹 Cleaning icons directory...");
  await rm(OUTPUT_ICONS_PATH, { recursive: true, force: true });
  console.log("✓ Cleaned icons directory\n");

  // Ensure output directory exists
  await mkdir(OUTPUT_ICONS_PATH, { recursive: true });

  // Get all category directories
  const entries = await readdir(CORE_OPTIMIZED_PATH, { withFileTypes: true });
  const categoryDirs = entries.filter((entry) => entry.isDirectory());

  const allExports: string[] = [];

  for (const categoryDir of categoryDirs) {
    const categoryPath = join(CORE_OPTIMIZED_PATH, categoryDir.name);
    console.log(`📁 Processing category: ${categoryDir.name}`);
    const exports = await processCategoryDir(categoryPath, categoryDir.name);
    allExports.push(...exports);
    console.log("");
  }

  // Create main.ts with all exports
  const mainTsPath = join(import.meta.dir, "../main.ts");
  await writeFile(mainTsPath, `${allExports.join("\n")}\n`);

  console.log("✅ Icon generation complete!");
}

main().catch(console.error);
