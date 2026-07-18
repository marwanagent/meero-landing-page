#!/usr/bin/env node
/**
 * Pre-launch safety net (spec section 9 + definition of done 8 & 9).
 *
 * Failure modes handled:
 *  - Placeholder text ("[[") accidentally shipped: fail the build.
 *  - The banned standalone token used for the technology category (hard
 *    constraint, spec section 8): fail the build if it appears as a whole word.
 *
 * Returns a non-zero exit code with the exact offending lines so the caller
 * (the build) can see precisely what to fix, rather than a bare boolean.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const SCAN_DIRS = ["src"];
const SCAN_EXT = new Set([".ts", ".tsx", ".css", ".mdx"]);

// Assembled at runtime so this guard file does not itself contain the token.
const BANNED_WORD = ["A", "I"].join("");
const bannedRe = new RegExp(`\\b${BANNED_WORD}\\b`);

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
const bannedHits = [];

for (const dir of SCAN_DIRS) {
  for (const file of collect(dir)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (line.includes("[[")) placeholderHits.push(`${file}:${i + 1}: ${line.trim()}`);
      if (bannedRe.test(line)) bannedHits.push(`${file}:${i + 1}: ${line.trim()}`);
    });
  }
}

let failed = false;
if (placeholderHits.length) {
  failed = true;
  console.error("FAIL: placeholder text ('[[') found in source:");
  placeholderHits.forEach((h) => console.error("  " + h));
}
if (bannedHits.length) {
  failed = true;
  console.error(`FAIL: banned standalone word "${BANNED_WORD}" found in source:`);
  bannedHits.forEach((h) => console.error("  " + h));
}

if (failed) process.exit(1);
console.log("OK: no placeholder or banned-word violations in source.");
