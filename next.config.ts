import type { NextConfig } from "next";

const rfc1918 = [
  "10.*.*.*",
  "192.168.*.*",
  ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
];

const nextConfig: NextConfig = {
  allowedDevOrigins: [...rfc1918, "*.local"],
};

export default nextConfig;
