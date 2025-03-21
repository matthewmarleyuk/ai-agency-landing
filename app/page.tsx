import type { Metadata } from "next"
import Hero from "@/components/hero"
import WhyUs from "@/components/why-us"
import Solutions from "@/components/solutions"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Faq from "@/components/faq"
import Integrations from "@/components/integrations"
import Industries from "@/components/industries"

export const metadata: Metadata = {
  title: "AgenticAdvisory - Intelligent AI Solutions for Business",
  description:
    "Custom AI agents that automate workflows, enhance customer experiences, and drive growth for your business.",
  keywords: "AI agents, business automation, customer service AI, workflow automation, AI solutions",
}

// Mark this page as static
export const dynamic = "force-static"
export const revalidate = 0

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyUs />
      <Solutions />
      <Integrations />
      <Process />
      <Industries />
      <Testimonials />
      <Cta />
      <Faq />
    </main>
  )
}

