#!/usr/bin/env node
/**
 * Pre-launch safety net (spec section 9 + definition of done 8).
 *
 * Failure mode handled: placeholder text ("[[") accidentally shipped, which
 * fails the build with the exact offending lines.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const SCAN_DIRS = ["src"];
const SCAN_EXT = new Set([".ts", ".tsx", ".css", ".mdx"]);

/** @param {string} dir */
function collect(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) files.push(...collect(p));
    else if (SCAN_EXT.has(extname(entry))) files.push(p);
  }
  return files;
}

const placeholderHits = [];

for (const dir of SCAN_DIRS) {
  for (const file of collect(dir)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (line.includes("[[")) placeholderHits.push(`${file}:${i + 1}: ${line.trim()}`);
    });
  }
}

if (placeholderHits.length) {
  console.error("FAIL: placeholder text ('[[') found in source:");
  placeholderHits.forEach((h) => console.error("  " + h));
  process.exit(1);
}
console.log("OK: no placeholder violations in source.");
