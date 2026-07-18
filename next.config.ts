import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole marketing page ships as static HTML/CSS/JS.
  // Deployed to Vercel (see spec 7). No server runtime in the critical path.
  output: "export",
  // Required for `output: export`: no on-demand image optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
