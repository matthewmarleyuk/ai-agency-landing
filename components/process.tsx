export default function Process() {
  const steps = [
    {
      number: "01",
      color: "bg-blue-500",
      title: "Discovery",
      description:
        "We dive deep into your business challenges, workflows, and objectives to understand your unique needs.",
      position: "left",
    },
    {
      number: "02",
      color: "bg-purple-500",
      title: "Design",
      description: "Our team designs a custom AI agent solution tailored to your specific requirements and use cases.",
      position: "right",
    },
    {
      number: "03",
      color: "bg-green-500",
      title: "Development",
      description: "We build your AI agent using cutting-edge technology and industry best practices.",
      position: "left",
    },
    {
      number: "04",
      color: "bg-orange-500",
      title: "Deployment",
      description: "We integrate the AI agent into your existing systems with minimal disruption to your operations.",
      position: "right",
    },
    {
      number: "05",
      color: "bg-red-500",
      title: "Optimization",
      description: "We continuously monitor performance and refine your AI agent to improve outcomes over time.",
      position: "left",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-200 opacity-20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-blue-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-200 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-purple-200 opacity-20 rounded-lg transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-balance">Our Process</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-balance">
            We follow a proven methodology to ensure your AI agent meets your business needs and delivers maximum value.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative mb-24 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

              {/* Card container with positioning */}
              <div className={`flex ${step.position === "left" ? "justify-start" : "justify-end"}`}>
                <div
                  className="relative w-full md:w-5/12"
                  style={{
                    marginBottom: "8px",
                    marginRight: step.position === "left" ? "8px" : "0",
                    marginLeft: step.position === "right" ? "8px" : "0",
                  }}
                >
                  {/* Black shadow box */}
                  <div
                    className="absolute bg-black rounded-lg w-full h-full"
                    style={{
                      top: "8px",
                      left: "8px",
                      zIndex: 0,
                    }}
                  ></div>

                  {/* White card */}
                  <div className="relative bg-white p-6 rounded-lg border border-black z-10">
                    <div
                      className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold mb-4 border border-black ${step.position === "left" ? "ml-auto" : ""}`}
                    >
                      {step.number}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${step.position === "left" ? "text-right" : "text-left"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-gray-600 text-sm ${step.position === "left" ? "text-right" : "text-left"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

