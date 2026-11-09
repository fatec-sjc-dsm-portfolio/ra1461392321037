/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages; BASE_PATH is set by scripts/deploy.mjs (e.g. /ra1461392321037)
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  images: { unoptimized: true },
};

export default nextConfig;
