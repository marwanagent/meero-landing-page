# Repository brief

This site uses Next.js App Router, TypeScript, and Tailwind CSS v4. `next.config.ts` sets `output: "export"`; builds emit a static site into `out/`. Changes must work without a server runtime.

All copy lives in `src/content/`. Import it into components instead of writing copy inline. Do not use em dashes or space-hyphen-space punctuation, including in comments and markdown. Do not invent statistics for articles; keep their `claims` arrays empty.

Commands:

- `npm run dev` starts local development.
- `npm run build` runs the placeholder check and exports the site.
- `npm run lint` runs ESLint.
- `node scripts/check-placeholders.mjs` rejects unfinished `[[` placeholders in source files.
- `npm run check:articles` runs `scripts/check-article-overlap.mjs`, rejecting shared runs of eight consecutive words across articles.

Social metadata uses the static `public/og-image.png` asset. Structured data is built from existing content in `src/content/schema.ts` and rendered through `StructuredData`. Keep entity references consistent and omit unsupported facts.
