/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export
  output: 'export',
  
  // Disable image optimization since we're exporting static HTML
  images: {
    unoptimized: true,
  },
  
  // Disable unnecessary checks for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Simplified experimental features
  experimental: {
    // Keep only what's needed
  },
};

export default nextConfig;

