import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import TestimonialSlider from "@/components/testimonial-slider"

export const metadata: Metadata = {
  title: "Contact AgenticAdvisory | Book a Consultation",
  description:
    "Get in touch with our AI experts to discuss how our custom AI agents can transform your business operations and drive growth.",
  keywords: "contact, AI consultation, book demo, AI solutions, business transformation",
}

// Mark this page as static
export const dynamic = "force-static"
export const revalidate = 0

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Get in Touch Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yellow-200 transform rotate-45 opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-6 text-balance">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-balance">
            Ready to transform your business with AI? Fill out the form below and our team will get back to you within
            24 hours.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 right-10 w-48 h-48 bg-indigo-200 opacity-20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-teal-200 opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-200 opacity-20 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 text-center text-balance">What Our Clients Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-balance">
            Hear directly from businesses that have transformed their operations with our AI solutions.
          </p>

          <TestimonialSlider />
        </div>
      </section>
    </main>
  )
}

