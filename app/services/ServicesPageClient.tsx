"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  BarChart,
  Users,
  ShoppingCart,
  Shield,
  Workflow,
  Code,
  FileSpreadsheet,
  Lightbulb,
} from "lucide-react"

export default function ServicesPageClient() {
  const mainServices = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Customer Service Agents",
      description:
        "AI-powered assistants that provide 24/7 support, resolve queries instantly, and escalate complex issues to human agents when necessary.",
      keyFeatures: [
        "24/7 multilingual support",
        "Instant response times",
        "Seamless integration with existing systems",
        "Sentiment analysis",
        "Personalized interactions",
        "Automated ticket routing",
        "Knowledge base integration",
        "Detailed conversation analytics",
      ],
      useCases: [
        "E-commerce customer service",
        "Technical support",
        "Order status inquiries",
        "Self-service assistance",
        "Appointment scheduling",
        "Return and refund processing",
        "Product recommendations",
        "Feedback collection",
      ],
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "Data Analysis Agents",
      description:
        "Transform raw data into actionable insights with AI agents that analyze patterns, generate reports, and provide business intelligence in real-time.",
      keyFeatures: [
        "Real-time data processing",
        "Pattern recognition",
        "Anomaly detection",
        "Predictive analytics",
        "Automated reporting",
        "Natural language querying",
        "Data visualization",
        "API integration with existing systems",
      ],
      useCases: [
        "Sales performance analysis",
        "Market trend identification",
        "Customer behavior and segmentation",
        "Inventory management",
        "Financial forecasting",
        "Risk assessment",
        "KPI monitoring",
        "Budget optimization",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "Lead Generation Agents",
      description:
        "Identify, qualify, and nurture potential customers through personalized outreach, freeing your sales team to focus on closing deals.",
      keyFeatures: [
        "Automated prospect identification",
        "Lead scoring and qualification",
        "Personalized outreach",
        "Multichannel engagement",
        "Follow-up scheduling",
        "Behavior tracking",
        "Interest detection",
        "Seamless CRM integration",
      ],
      useCases: [
        "B2B prospecting and outreach",
        "Event registration follow-up",
        "Website visitor engagement",
        "Content download follow-up",
        "Prospect data enrichment",
        "Social media lead generation",
        "Email nurturing campaigns",
        "Re-engaging dormant leads",
      ],
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
      title: "Sales Enablement Agents",
      description:
        "Enhance your sales process with AI agents that qualify leads, schedule meetings, prepare sales materials, and follow up with prospects.",
      keyFeatures: [
        "Automated meeting scheduling",
        "Proposal generation",
        "Competitive intelligence",
        "Deal progress tracking",
        "Automated follow-ups",
        "Conversation intelligence",
        "Sales coaching",
        "Performance analytics",
      ],
      useCases: [
        "Complex deal management",
        "Sales pipeline acceleration",
        "Proposal automation",
        "Competitive analysis",
        "Sales training",
        "Meeting preparation",
        "Post-meeting follow-up",
        "Deal progress monitoring",
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      color: "bg-red-500",
      title: "Compliance Agents",
      description:
        "Stay compliant with industry regulations through AI agents that monitor activities, flag potential issues, and generate compliance reports.",
      keyFeatures: [
        "Real-time rule monitoring",
        "Automated compliance checking",
        "Document analysis for regulatory requirements",
        "Risk identification",
        "Audit trail generation",
        "Policy enforcement",
        "Regulatory updates",
        "Exception and violation detection and reports",
      ],
      useCases: [
        "Financial services compliance",
        "Healthcare regulatory checks",
        "Data privacy compliance (GDPR, CCPA)",
        "Anti-money laundering",
        "KYC verification",
        "HR compliance with employment laws",
        "Contract compliance",
        "Industry-specific regulations",
      ],
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      title: "Workflow Automation Agents",
      description:
        "Streamline operations by automating repetitive tasks, managing approvals, and coordinating cross-departmental processes.",
      keyFeatures: [
        "Visual workflow creation",
        "Conditional logic processing",
        "Document routing and approval",
        "Deadline management",
        "Conditional task assignment",
        "Progress tracking and reporting",
        "Process analytics",
        "Integration with business systems",
      ],
      useCases: [
        "Approval processing for documents",
        "Employee onboarding",
        "Expense management",
        "Purchase order processing",
        "Content review and publication",
        "IT service management",
        "Contract management",
        "Customer onboarding and setup",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Custom AI Development",
      description:
        "Bespoke AI solutions built from the ground up to address unique business challenges and opportunities.",
      learnMoreLink: "#",
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
      title: "AI Readiness Assessment",
      description: "An objective evaluation of your organization's preparedness for AI adoption and transformation.",
      learnMoreLink: "#",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "AI Strategy Consulting",
      description: "Expert guidance on developing AI strategy that aligns with your business objectives.",
      learnMoreLink: "#",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-200 rounded-full opacity-20"></div>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yellow-200 transform rotate-45 opacity-20"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="inline-block bg-green-500 text-white px-3 py-1 text-sm rounded-full border-2 border-black mb-4">
            Services
          </div>
          <h1 className="text-4xl font-black mb-4 text-balance">Our AI Agent Solutions</h1>
          <div className="w-20 h-1 bg-black mb-6"></div>
          <p className="text-gray-600 max-w-3xl text-balance">
            We offer a comprehensive suite of AI agent solutions designed to transform every aspect of your business
            operations, enhancing efficiency, customer experience, and driving growth.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-40 right-10 w-56 h-56 bg-green-100 opacity-30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 opacity-30 rounded-full"></div>
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-yellow-100 opacity-30 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${service.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="text-sm font-bold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-xs flex items-start">
                          <span className="inline-block w-2 h-2 bg-black rounded-full mt-1.5 mr-2"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Use Cases</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-xs flex items-start">
                          <span className="inline-block w-2 h-2 bg-black rounded-full mt-1.5 mr-2"></span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    className={`w-full ${service.color} hover:opacity-90 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-100 opacity-20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-teal-100 opacity-20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-100 opacity-20 transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-8 text-center text-balance">Additional Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${service.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={service.learnMoreLink} className="text-sm font-medium text-blue-600 hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 mt-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 text-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-balance">Ready to transform your business with AI?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Our team of AI experts is ready to help you identify the right solutions for your unique business needs.
              </p>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] transition-all"
                onClick={() => (window.location.href = "https://kzmisusak1xawkd6f9lz.lite.vusercontent.net/contact")}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

