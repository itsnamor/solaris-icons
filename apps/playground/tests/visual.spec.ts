import { expect, test } from "bun:test";
import { chromium } from "@playwright/test";

import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

test("Visual pixel match test", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ baseURL: "http://localhost:5173" });

  await page.goto("/?view=original");
  await page.waitForSelector("svg", { timeout: 10_000 });
  const originalScreenshot = await page.screenshot({ fullPage: true });

  await page.goto("/?view=optimized");
  await page.waitForSelector("svg", { timeout: 10_000 });
  const optimizedScreenshot = await page.screenshot({ fullPage: true });

  // Compare screenshots using pixelmatch
  const original = PNG.sync.read(originalScreenshot);
  const optimized = PNG.sync.read(optimizedScreenshot);

  const { width, height } = original;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    original.data,
    optimized.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 },
  );

  const totalPixels = width * height;
  const matchPercentage = ((totalPixels - numDiffPixels) / totalPixels) * 100;

  console.log(`Screenshots match: ${matchPercentage.toFixed(5)}%`);
  console.log(`Different pixels: ${numDiffPixels} out of ${totalPixels}`);

  expect(matchPercentage).toBeGreaterThanOrEqual(99.99);
}, { timeout: 60_000 });
