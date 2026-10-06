import process from "node:process";

const CLOSET_URL = process.env.CLOSET_URL ?? "http://localhost:3001";
const STYLING_URL = process.env.STYLING_URL ?? "http://localhost:3002";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      { source: "/closet", destination: `${CLOSET_URL}/closet` },
      { source: "/closet/:path+", destination: `${CLOSET_URL}/closet/:path+` },
      {
        source: "/closet-static/:path+",
        destination: `${CLOSET_URL}/closet-static/:path+`,
      },
      { source: "/styling", destination: `${STYLING_URL}/styling` },
      {
        source: "/styling/:path+",
        destination: `${STYLING_URL}/styling/:path+`,
      },
      {
        source: "/styling-static/:path+",
        destination: `${STYLING_URL}/styling-static/:path+`,
      },
    ];
  },
};

export default nextConfig;
