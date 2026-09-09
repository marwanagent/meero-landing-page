import { pageGraph, serializeGraph } from "@/content/schema";

import type { Breadcrumb } from "@/content/breadcrumbs";

export function StructuredData({ page, breadcrumbs }: {
  page: Parameters<typeof pageGraph>[0];
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeGraph(pageGraph(page, breadcrumbs)) }}
    />
  );
}
