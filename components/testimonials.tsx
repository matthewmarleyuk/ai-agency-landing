"use client"

export default function Testimonials() {
  // Static version with all testimonials visible
  const testimonials = [
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

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-40 w-80 h-80 bg-blue-100 opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-yellow-100 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-100 opacity-20 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-balance">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto border-b-4 border-black"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-gray-800"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>

              <p className="text-lg mb-6 font-medium">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

