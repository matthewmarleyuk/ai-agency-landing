import type { Metadata } from "next"
import AboutUsClient from "./AboutUsClient"

export const metadata: Metadata = {
  title: "About AgenticAdvisory | Our Story & AI Expertise",
  description:
    "Learn about AgenticAdvisory's journey, our mission, and how our team of AI experts is transforming businesses through innovative AI solutions.",
  keywords: "about us, AI agency, AI expertise, company history, AI innovation, AgenticAdvisory team",
}

// Change the dynamic setting to ensure it's properly set for static export
export const dynamic = "force-static"
export const revalidate = 0

export default function AboutUsPage() {
  return <AboutUsClient />
}

