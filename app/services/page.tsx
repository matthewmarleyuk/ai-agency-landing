import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "AI Agent Solutions & Services | AgenticAdvisory",
  description:
    "Explore our comprehensive suite of AI agent solutions designed to transform your business operations, enhance efficiency, and drive growth.",
  keywords: "AI services, business AI solutions, AI agents, customer service AI, data analysis, lead generation",
}

// Change the dynamic setting to ensure it's properly set for static export
export const dynamic = "force-static"
export const revalidate = 0

export default function ServicesPage() {
  return <ServicesPageClient />
}

