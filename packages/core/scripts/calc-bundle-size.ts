import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const ORIGINAL_DIR = join(import.meta.dir, "..", "original");
const OPTIMIZED_DIR = join(import.meta.dir, "..", "optimized");

type BundleStats = {
  totalFiles: number;
  totalBytes: number;
  totalGzipBytes: number;
};

async function collectStats(root: string): Promise<BundleStats> {
  const stack = [root];
  const stats: BundleStats = { totalFiles: 0, totalBytes: 0, totalGzipBytes: 0 };

  while (stack.length) {
    const current = stack.pop();
    if (!current) continue;
    const entries = await readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = join(current, entry.name);

      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".svg")) {
        const fileBuffer = await readFile(fullPath);
        stats.totalFiles += 1;
        stats.totalBytes += fileBuffer.byteLength;
        stats.totalGzipBytes += gzipSync(fileBuffer).byteLength;
      }
    }
  }

  return stats;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"] as const;
  const power = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** power;
  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[power]}`;
}

function formatDelta(optimized: number, original: number): string {
  const saved = original - optimized;
  const pct = original === 0 ? 0 : (saved / original) * 100;
  const direction = saved === 0 ? "0" : saved > 0 ? "↓" : "↑";
  return `${direction} ${formatBytes(Math.abs(saved))} (${pct.toFixed(1)}%)`;
}

function printReport(original: BundleStats, optimized: BundleStats): void {
  const rows = [
    {
      label: "Raw",
      original: original.totalBytes,
      optimized: optimized.totalBytes,
      delta: formatDelta(optimized.totalBytes, original.totalBytes),
    },
    {
      label: "Gzip",
      original: original.totalGzipBytes,
      optimized: optimized.totalGzipBytes,
      delta: formatDelta(optimized.totalGzipBytes, original.totalGzipBytes),
    },
  ];

  console.log("📦 Bundle size comparison (SVG only)\n");
  console.log(`Files: original=${original.totalFiles}, optimized=${optimized.totalFiles}\n`);
  console.log(["Metric", "Original", "Optimized", "Delta"].map((h) => h.padEnd(15)).join(""));
  console.log("-".repeat(60));

  for (const row of rows) {
    const line = [
      row.label.padEnd(15),
      formatBytes(row.original).padEnd(15),
      formatBytes(row.optimized).padEnd(15),
      row.delta.padEnd(15),
    ].join("");
    console.log(line);
  }
}

async function main() {
  const [originalStats, optimizedStats] = await Promise.all([
    collectStats(ORIGINAL_DIR),
    collectStats(OPTIMIZED_DIR),
  ]);

  printReport(originalStats, optimizedStats);
}

main().catch((error) => {
  console.error("Failed to compare bundle sizes:", error);
  process.exitCode = 1;
});
