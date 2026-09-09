import { pageGraph, serializeGraph } from "@/content/schema";

export function StructuredData({ page }: { page: Parameters<typeof pageGraph>[0] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeGraph(pageGraph(page)) }}
    />
  );
}
