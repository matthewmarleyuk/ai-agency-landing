"use client"

import { Button } from "@/components/ui/button"
import { Cpu, Globe, Users, Zap, Code, BarChart3, BrainCircuit, LifeBuoy, Lightbulb, CheckCircle } from "lucide-react"

export default function AboutUsClient() {
  const coreExpertise = [
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Automation",
      description:
        "With over 5,000 hours of automation development experience, our team creates custom solutions that streamline operations and eliminate manual processes.",
      features: [
        "AI-powered document processing and data extraction",
        "Intelligent business processing systems using NLP and ML",
        "Custom automation workflows and integration solutions",
        "Robotic process automation (RPA) implementation",
      ],
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "Web Development",
      description:
        "Our development team has delivered 50+ web applications and platforms, combining cutting-edge technology with intuitive user experience.",
      features: [
        "Full-stack development with React, Node.js, Python, and more",
        "Progressive web applications and cross-platform solutions",
        "Database design, APIs, and scalable microservice architecture",
        "Custom dashboards and data visualization interfaces",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "Workflow Development",
      description:
        "We optimize business processes through intelligent workflow solutions that reduce bottlenecks and improve efficiency.",
      features: [
        "End-to-end workflow mapping and optimization solutions",
        "Cross-departmental process integration and automation",
        "Business process modeling and simulation for optimization",
        "Intelligent task routing and resource allocation systems",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-orange-500",
      title: "Marketing",
      description:
        "Our marketing solutions leverage AI to create data-driven campaigns that deliver higher engagement and measurable results at scale.",
      features: [
        "AI-powered customer segmentation and targeting",
        "Automated content generation and optimization",
        "Personalized content generation at scale",
        "Marketing automation and multichannel campaigns",
      ],
    },
  ]

  const approachSteps = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Strategic First Mindset",
      description:
        "We begin with a thorough analysis of your business needs and goals. Our team works closely with you to understand your vision and how AI can help you achieve it.",
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "Collaborative Process",
      description:
        "We believe that the best solutions come from close collaboration. Our iterative approach ensures that you're involved at every stage and that the final product exceeds your expectations.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "Continuous Innovation",
      description:
        "Our solutions evolve with your business. We provide ongoing support and enhancements to ensure your AI solutions continue to deliver value as your business grows.",
    },
  ]

  const industries = [
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Financial Services",
      description:
        "Automated risk assessment, fraud detection, and personalized customer experiences for banks and financial institutions.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "Healthcare",
      description:
        "Patient data analysis, medical image processing, and operational efficiency solutions for healthcare providers.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality control, and supply chain optimization for manufacturing companies.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "Retail & E-commerce",
      description: "Customer insights, inventory management, and personalized shopping experiences for retailers.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      title: "Professional Services",
      description:
        "Document processing, client management, and workflow automation for law firms, consultancies, and more.",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      color: "bg-red-500",
      title: "Real Estate",
      description: "Property management, market analysis, and lead generation solutions for real estate professionals.",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black mb-4 text-balance text-center">Our Story & Expertise</h1>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-balance text-center">
            Driving business transformation through cutting-edge AI solutions, with deep expertise in automation, web
            development, workflow optimization, and marketing.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left column - Our Story */}
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4 text-balance">Pioneering AI Innovation Since 2019</h2>
              <div className="w-32 h-1 bg-blue-500 mb-6"></div>

              <p className="text-gray-600 mb-6">
                Founded in 2019 by a team of AI researchers, software engineers, and business strategists,
                AgenticAdvisory emerged from a shared vision: to make advanced AI technology accessible and practical
                for businesses of all sizes.
              </p>

              <p className="text-gray-600 mb-6">
                Our journey began with custom automation solutions for enterprise clients, quickly expanding into
                comprehensive AI agent development as we recognized the transformative potential of conversational and
                autonomous AI systems.
              </p>

              <p className="text-gray-600 mb-8">
                Today, we're proud to have helped over 200+ organizations across industries implement AI solutions that
                deliver measurable ROI, enhance customer experiences, and drive operational efficiency.
              </p>

              {/* USPs on a single line */}
              <div className="flex flex-nowrap justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-medium text-sm">200+ Clients</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-medium text-sm">94% Client Retention</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-medium text-sm">45+ Industries Served</span>
                </div>
              </div>
            </div>

            {/* Right column - Image and Mission */}
            <div className="relative">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl rotate-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-white p-6 rounded-xl -rotate-3">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
                      alt="AgenticAdvisory team collaboration"
                      className="rounded-lg shadow-md w-full h-auto"
                      loading="eager"
                      fetchPriority="high"
                      width={800}
                      height={600}
                    />
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                      <p className="text-gray-600">
                        To empower businesses with intelligent AI solutions that amplify human capabilities, drive
                        innovation, and create sustainable competitive advantages.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-yellow-300 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
                <div className="absolute -z-10 -top-8 -left-8 w-16 h-16 bg-blue-300 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-40 right-10 w-56 h-56 bg-green-100 opacity-30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 opacity-30 rounded-full"></div>
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-yellow-100 opacity-30 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-balance">Our Core Expertise</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-balance">
              Our multidisciplinary team brings together expertise across key domains to deliver tailored solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreExpertise.map((expertise, index) => (
              <div key={index} className="relative" style={{ marginBottom: "8px", marginRight: "8px" }}>
                <div
                  className="absolute bg-black rounded-lg w-full h-full"
                  style={{
                    top: "8px",
                    left: "8px",
                    zIndex: 0,
                  }}
                ></div>
                <div className="relative bg-white p-6 rounded-lg border border-black z-10 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${expertise.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                    >
                      {expertise.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{expertise.title}</h3>
                      <p className="text-gray-600 text-sm">{expertise.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {expertise.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-black rounded-full mt-1.5 mr-2"></span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-100 opacity-20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-teal-100 opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-100 opacity-20 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-balance">Our Approach</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-balance">
              We combine deep technical expertise with business acumen to deliver AI solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approachSteps.map((step, index) => (
              <div key={index} className="relative" style={{ marginBottom: "8px", marginRight: "8px" }}>
                <div
                  className="absolute bg-black rounded-lg w-full h-full"
                  style={{
                    top: "8px",
                    left: "8px",
                    zIndex: 0,
                  }}
                ></div>
                <div className="relative bg-white p-6 rounded-lg border border-black z-10 h-full">
                  <div
                    className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 border-2 border-black`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 right-10 w-48 h-48 bg-indigo-200 opacity-20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-teal-200 opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-200 opacity-20 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-balance">Client Testimonials</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-balance">
              Hear what our clients have to say about their experience working with us and the results we've delivered.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white p-8 rounded-xl border-2 border-black relative"
              style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,1)" }}
            >
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
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mx-auto">
                    <img
                      src="/images/maria-rodriguez.png"
                      alt="Maria Rodriguez"
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      width={128}
                      height={128}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=128&width=128&text=MR"
                      }}
                    />
                  </div>
                </div>

                <div className="md:w-3/4 text-left">
                  <p className="text-xl mb-6 font-medium">
                    "The customer service AI agent has reduced our overall response time by 80% and improved customer
                    satisfaction scores by 35%. It's like having our best support agent available 24/7 for customers."
                  </p>
                  <div>
                    <p className="text-xl font-bold">Maria Rodriguez</p>
                    <p className="text-gray-500">Experience Director, Global Retail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-40 left-10 w-56 h-56 bg-purple-100 opacity-30 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-100 opacity-30 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-yellow-100 opacity-30 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-balance">Industries We Serve</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-balance">
              Our solutions are tailored to address the unique challenges and opportunities across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="relative" style={{ marginBottom: "8px", marginRight: "8px" }}>
                <div
                  className="absolute bg-black rounded-lg w-full h-full"
                  style={{
                    top: "8px",
                    left: "8px",
                    zIndex: 0,
                  }}
                ></div>
                <div className="relative bg-white p-6 rounded-lg border border-black z-10 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`${industry.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{industry.title}</h3>
                      <p className="text-gray-600 text-sm">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-bl-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-tr-full opacity-10"></div>
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-green-400 transform rotate-45 opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-black mb-6 text-balance">Ready to transform your business with AI?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-100 font-medium text-balance">
            Let's discuss how our expertise in automation, web development, workflow optimization, and marketing can
            accelerate your business growth.
          </p>
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] transition-all"
            onClick={() => (window.location.href = "https://kzmisusak1xawkd6f9lz.lite.vusercontent.net/contact")}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}

