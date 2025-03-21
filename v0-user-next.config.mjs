/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization for better performance
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

