# AgenticAdvisory Landing Page

A modern, responsive landing page for AgenticAdvisory, built with Next.js, React, and Tailwind CSS.

## Features

- Fully responsive design optimized for all device sizes
- Modern UI with Tailwind CSS and Shadcn UI components
- Static site generation for optimal performance and SEO
- Interactive components including testimonial sliders and contact form
- Dark/light mode theming support

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Radix UI primitives

## Deployment

This site is configured for deployment to GitHub Pages using GitHub Actions. When you push to the main branch, the site will automatically be built and deployed.

### Manual Deployment

If you want to deploy manually:

1. Build the site:
   ```
   npm run build
   ```

2. The static site will be generated in the `out` directory.

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Contact Form

The contact form on this site is configured to send data to a webhook. In a static deployment environment, make sure to handle network errors gracefully. 