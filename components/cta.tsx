"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Cta() {
  const router = useRouter()

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-bl-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-tr-full opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-green-400 transform rotate-45 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-black mb-6 text-balance">Ready to transform your business with AI?</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-300 font-medium text-balance">
          Let's discuss how our custom AI agents can address your specific challenges and unlock new opportunities.
        </p>
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] transition-all"
          onClick={() => router.push("/contact")}
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  )
}

