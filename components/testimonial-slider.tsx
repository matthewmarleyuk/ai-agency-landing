"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "James Robertson",
      role: "CTO at TechVision",
      company: "TechVision",
      quote:
        "The AI agents developed by this agency have revolutionized our customer service. Response times improved by 80%, and customer satisfaction ratings are at an all-time high.",
      image: "/images/testimonials/4.png",
    },
    {
      name: "Maria Rodriguez",
      role: "VP of Marketing",
      company: "GlobalBrand",
      quote:
        "Implementing this agency's AI solutions doubled our lead conversion rates and reduced customer acquisition costs by 40%. Their understanding of marketing needs is exceptional.",
      image: "/images/testimonials/1.png",
    },
    {
      name: "David Chen",
      role: "Operations Director",
      company: "LogisticsPro",
      quote:
        "Their predictive AI models have optimized our supply chain beyond expectations. We've seen a 35% reduction in logistics costs and near-perfect inventory forecasting.",
      image: "/images/testimonials/2.png",
    },
    {
      name: "Sarah Johnson",
      role: "Healthcare Administrator",
      company: "MedLife Solutions",
      quote:
        "Patient care has transformed since implementing their AI assistants. Our staff now focuses on critical care while routine tasks are handled seamlessly by their intelligent systems.",
      image: "/images/testimonials/3.png",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    target.onerror = null // Prevent infinite error loops
    target.src = `/placeholder.svg?height=128&width=128&text=${testimonials[currentTestimonial].name.substring(0, 2)}`
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="bg-white p-8 rounded-xl border-2 border-black relative"
        style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,1)" }}
      >
        {/* Quote mark in top left */}
        <div className="absolute -top-5 -left-5 bg-black text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 pt-4">
          {/* Profile image */}
          <div className="md:w-1/4 flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mx-auto">
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Testimonial content */}
          <div className="md:w-3/4 text-left">
            <p className="text-xl mb-6 font-medium">"{testimonials[currentTestimonial].quote}"</p>
            <div>
              <p className="text-xl font-bold">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-500">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</p>
            </div>
          </div>
        </div>

        {/* Navigation dots and arrows */}
        <div className="flex justify-center mt-8 items-center">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 mr-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 mx-1 rounded-full ${index === currentTestimonial ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 ml-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

