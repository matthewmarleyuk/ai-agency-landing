// Get the base URL for the site, handling GitHub Pages path
export const baseUrl = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS 
  ? '/ai-agency-landing' 
  : '';

// Full URL for use in metadata
export const siteUrl = process.env.NODE_ENV === 'production'
  ? 'https://matthewmarleyuk.github.io/ai-agency-landing'
  : 'http://localhost:3000'; 