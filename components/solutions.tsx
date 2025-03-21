"use client"

import { Button } from "@/components/ui/button"
import { Bot, BarChart, Users, ShoppingCart, Shield, Workflow } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Solutions() {
  const router = useRouter()

  const solutions = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "Customer Service Agents",
      description:
        "AI-powered assistants that provide 24/7 support, resolve queries instantly, and escalate complex issues to human agents when necessary.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "Data Analysis Agents",
      description:
        "Transform raw data into actionable insights with AI agents that analyze patterns, generate reports, and provide business intelligence in real-time.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      title: "Lead Generation Agents",
      description:
        "Identify, qualify, and nurture potential customers through personalized outreach, freeing your sales team to focus on closing deals.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      color: "bg-yellow-500",
      title: "Sales Enablement Agents",
      description:
        "Enhance your sales process with AI agents that qualify leads, schedule meetings, prepare sales materials, and follow up with prospects.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      color: "bg-red-500",
      title: "Compliance Agents",
      description:
        "Stay compliant with industry regulations through AI agents that monitor activities, flag potential issues, and generate compliance reports.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      title: "Workflow Automation Agents",
      description:
        "Streamline operations by automating repetitive tasks, managing approvals, and coordinating cross-departmental processes.",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-40 left-10 w-56 h-56 bg-purple-100 opacity-30 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-100 opacity-30 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-yellow-100 opacity-30 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-balance">Solutions We Offer</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto border-b-4 border-black"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium text-balance">
            Our custom AI agents are designed to solve specific business challenges and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                className={`${solution.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 border-2 border-black`}
              >
                {solution.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
              <Button
                variant="outline"
                className="w-full justify-center bg-white text-gray-700 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => router.push("/services")}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => router.push("/services")}
          >
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}

