import type { NextConfig } from "next";
import { HTML_REDIRECTS } from "./lib/site-urls";

const nextConfig: NextConfig = {
  async redirects() {
    return HTML_REDIRECTS.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
