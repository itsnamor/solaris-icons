#!/usr/bin/env bun

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { select } from "@clack/prompts";

// Read current package.json
const packagePath = join(import.meta.dir, "..", "package.json");
const pkg = JSON.parse(readFileSync(packagePath, "utf-8"));

const currentVersion = pkg.version;
const [major, minor, patch] = currentVersion.split(".").map(Number);

const bumpType = await select({
  message: `Current version is ${currentVersion}. Select the type of version bump:`,
  options: [
    { value: "patch", label: `Patch (${major}.${minor}.${patch + 1})` },
    { value: "minor", label: `Minor (${major}.${minor + 1}.0)` },
    { value: "major", label: `Major (${major + 1}.0.0)` },
  ],
});

if (typeof bumpType === "symbol") {
  console.log("Version bump cancelled");
  process.exit(0);
}

const newVersion = {
  patch: `${major}.${minor}.${patch + 1}`,
  minor: `${major}.${minor + 1}.0`,
  major: `${major + 1}.0.0`,
}[bumpType];

// Update package.json
pkg.version = newVersion;
writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`);

console.log(`Bumped version from ${currentVersion} to ${newVersion}`);
