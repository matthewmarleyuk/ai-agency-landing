let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

// Determine if this is a Vercel deployment
const isVercel = process.env.NEXT_PUBLIC_DEPLOYMENT === 'vercel' || process.env.VERCEL;
// Determine if this is a GitHub Pages deployment (for basePath config)
const isGitHubPages = process.env.GITHUB_ACTIONS && !isVercel;
const basePath = isGitHubPages ? '/ai-agency-landing' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use 'export' when not deploying to Vercel
  ...(isVercel ? {} : { output: 'export' }),
  // Add basePath and assetPrefix for GitHub Pages
  ...(isGitHubPages ? { 
    basePath,
    assetPrefix: basePath,
  } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      // Only apply user config's output setting if not on Vercel
      if (key === 'output' && isVercel) {
        continue;
      }
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
