import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: {
    default: "AgenticAdvisory - Intelligent AI Solutions for Business",
    template: "%s | AgenticAdvisory",
  },
  description: "Custom AI solutions that automate workflows, enhance customer experiences, and drive growth.",
  keywords: ["AI agents", "business automation", "AI solutions", "workflow automation", "customer service AI"],
  authors: [{ name: "AgenticAdvisory" }],
  creator: "AgenticAdvisory",
  publisher: "AgenticAdvisory",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agenticadvisory.com/",
    siteName: "AgenticAdvisory",
    title: "AgenticAdvisory - Intelligent AI Solutions for Business",
    description: "Custom AI solutions that automate workflows, enhance customer experiences, and drive growth.",
    images: [
      {
        url: "/favicon.svg",
        width: 64,
        height: 64,
        alt: "AgenticAdvisory Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticAdvisory - Intelligent AI Solutions for Business",
    description: "Custom AI solutions that automate workflows, enhance customer experiences, and drive growth.",
    images: ["/favicon.svg"],
  },
  // Add cache control headers
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
    generator: 'v0.dev'
}

// Generate a unique build ID to help with cache busting
const buildId = Date.now().toString()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`/favicon.svg?v=${buildId}`} />
        {/* Add meta tags for cache control */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}