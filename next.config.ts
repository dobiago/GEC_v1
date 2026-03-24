import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/operations",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
