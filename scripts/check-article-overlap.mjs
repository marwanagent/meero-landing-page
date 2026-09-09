#!/usr/bin/env node
/**
 * Cross-article duplication guard.
 *
 * Eight ICP articles that share phrasing compete with each other in search and
 * undercut the "built from scratch for one business" claim. This fails if any
 * run of SHINGLE_N consecutive words appears in more than one article.
 *
 * Run: node scripts/check-article-overlap.mjs
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/articles";
const SKIP = new Set(["types.ts", "index.ts", "ui.ts"]);
const SHINGLE_N = 8;
const MAX_REPORTED = 12;

const files = readdirSync(DIR).filter((f) => f.endsWith(".ts") && !SKIP.has(f));

/** Pull prose out of string literals, drop identifiers and ISO dates. */
function prose(source) {
  const literals = source.match(/"(?:[^"\\]|\\.)*"/g) ?? [];
  return literals
    .map((s) => s.slice(1, -1))
    .filter((s) => s.includes(" ") && !/^\d{4}-\d{2}-\d{2}$/.test(s))
    .join(" ");
}

function shingles(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set();
  for (let i = 0; i + SHINGLE_N <= words.length; i++) {
    out.add(words.slice(i, i + SHINGLE_N).join(" "));
  }
  return out;
}

const byFile = new Map();
for (const f of files) {
  byFile.set(f, shingles(prose(readFileSync(join(DIR, f), "utf8"))));
}

// Which articles contain each shingle.
const owners = new Map();
for (const [file, set] of byFile) {
  for (const sh of set) {
    if (!owners.has(sh)) owners.set(sh, []);
    owners.get(sh).push(file);
  }
}

const shared = [...owners.entries()].filter(([, fs]) => fs.length > 1);

console.log(`Articles checked: ${files.length}`);
console.log(`Shingle size: ${SHINGLE_N} words`);

// Pairwise overlap, so near-misses are visible even when nothing is identical.
const names = [...byFile.keys()];
let worstPair = { pair: "", pct: 0 };
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const a = byFile.get(names[i]);
    const b = byFile.get(names[j]);
    let common = 0;
    for (const sh of a) if (b.has(sh)) common++;
    const pct = (common / Math.min(a.size, b.size)) * 100;
    if (pct > worstPair.pct) {
      worstPair = { pair: `${names[i]} vs ${names[j]}`, pct };
    }
  }
}
console.log(
  `Highest pairwise overlap: ${worstPair.pct.toFixed(2)}% (${worstPair.pair || "none"})`,
);

if (shared.length === 0) {
  console.log("PASS: no shared phrasing across articles.");
  process.exit(0);
}

console.error(`\nFAIL: ${shared.length} shared ${SHINGLE_N}-word runs found.`);
for (const [sh, fs] of shared.slice(0, MAX_REPORTED)) {
  console.error(`  [${fs.length} files: ${fs.map((f) => f.replace(".ts", "")).join(", ")}]`);
  console.error(`    "${sh}"`);
}
if (shared.length > MAX_REPORTED) {
  console.error(`  ...and ${shared.length - MAX_REPORTED} more.`);
}
process.exit(1);
