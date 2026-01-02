import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

interface FileStats {
  [extension: string]: number;
}

interface TreeNode {
  name: string;
  isDirectory: boolean;
  fileStats: FileStats;
  children: TreeNode[];
  totalFiles: number;
}

async function buildTree(
  dirPath: string,
  relativePath: string = ""
): Promise<TreeNode> {
  const name = relativePath || dirPath.split("/").pop() || "optimized";
  const node: TreeNode = {
    name,
    isDirectory: true,
    fileStats: {},
    children: [],
    totalFiles: 0,
  };

  try {
    const entries = await readdir(dirPath);

    for (const entry of entries) {
      // Skip hidden files and directories
      if (entry.startsWith(".")) continue;

      const fullPath = join(dirPath, entry);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        const child = await buildTree(fullPath, entry);
        node.children.push(child);
        node.totalFiles += child.totalFiles;

        // Accumulate file stats from children
        for (const [ext, count] of Object.entries(child.fileStats)) {
          node.fileStats[ext] = (node.fileStats[ext] || 0) + count;
        }
      } else {
        // Extract file extension
        const ext = entry.includes(".") ? entry.split(".").pop() || "no-ext" : "no-ext";
        node.fileStats[ext] = (node.fileStats[ext] || 0) + 1;
        node.totalFiles++;
      }
    }

    // Sort children by name
    node.children.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }

  return node;
}

function printTree(node: TreeNode, indent: string = "", isLast: boolean = true): void {
  const prefix = indent + (isLast ? "└── " : "├── ");
  const statStr =
    node.totalFiles > 0
      ? ` (${node.totalFiles} files, ${Object.entries(node.fileStats)
        .map(([ext, count]) => `${count} .${ext}`)
        .join(", ")})`
      : "";

  console.log(prefix + node.name + statStr);

  const nextIndent = indent + (isLast ? "    " : "│   ");
  for (let i = 0; i < node.children.length; i++) {
    const isLastChild = i === node.children.length - 1;
    const subtree = node.children[i]
    subtree && printTree(subtree, nextIndent, isLastChild);
  }
}

async function main() {
  const assetsPath = join(import.meta.dir, "..", "optimized");

  console.log("📊 SVG Assets File Count Statistics\n");
  const tree = await buildTree(assetsPath);
  console.log("```");
  printTree(tree);
  console.log("```");

  // Summary statistics
  console.log(`\n${"=".repeat(50)}`);
  console.log("📈 Summary Statistics:");
  console.log(`Total files: ${tree.totalFiles}`);

  const sortedStats = Object.entries(tree.fileStats)
    .sort((a, b) => b[1] - a[1]);

  for (const [ext, count] of sortedStats) {
    const percentage = ((count / tree.totalFiles) * 100).toFixed(1);
    console.log(`  .${ext}: ${count} files (${percentage}%)`);
  }

  // Category statistics
  console.log(`\n${"=".repeat(50)}`);
  console.log("📂 SVG Files by Category:\n");

  const categoryStats = tree.children
    .map(category => ({
      name: category.name,
      svgCount: category.fileStats.svg || 0,
      iconCount: Math.floor((category.fileStats.svg || 0) / 6),
      totalFiles: category.totalFiles,
    }))
    .filter(cat => cat.svgCount > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalSvgFiles = categoryStats.reduce((sum, cat) => sum + cat.svgCount, 0);
  const totalIcons = categoryStats.reduce((sum, cat) => sum + cat.iconCount, 0);

  // Print table header
  console.log("| Category | Icons | SVG Files | Percentage |");
  console.log("|----------|-------|-----------|------------|");

  // Print table rows
  for (const category of categoryStats) {
    const percentage = ((category.svgCount / totalSvgFiles) * 100).toFixed(1);
    console.log(`| ${category.name.padEnd(40)} | ${String(category.iconCount).padStart(5)} | ${String(category.svgCount).padStart(9)} | ${String(`${percentage}%`).padStart(10)} |`);
  }

  // Print table footer with total
  console.log("|----------|-------|-----------|------------|");
  console.log(`| **Total** | **${totalIcons}** | **${totalSvgFiles}** | **100.0%** |`);
}

main().catch(console.error);
