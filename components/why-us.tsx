import { Briefcase, Settings, BarChart, Link2, LifeBuoy, Shield } from "lucide-react"

export default function WhyUs() {
  const reasons = [
    {
      icon: "blue",
      lucideIcon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Industry Expertise",
      description:
        "Our team combines AI expertise with deep industry knowledge to create agents that understand your specific business challenges.",
    },
    {
      icon: "purple",
      lucideIcon: <Settings className="w-5 h-5 text-white" />,
      title: "Customized Solutions",
      description:
        "We don't believe in one-size-fits-all. Each AI agent is tailored to your unique workflows and objectives.",
    },
    {
      icon: "green",
      lucideIcon: <BarChart className="w-5 h-5 text-white" />,
      title: "Measurable Results",
      description: "Our AI agents deliver tangible outcomes with clear ROI - from cost savings to revenue growth.",
    },
    {
      icon: "yellow",
      lucideIcon: <Link2 className="w-5 h-5 text-white" />,
      title: "Seamless Integration",
      description: "We build agents that integrate smoothly with your existing systems and tech stack.",
    },
    {
      icon: "red",
      lucideIcon: <LifeBuoy className="w-5 h-5 text-white" />,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at deployment. We provide continuous optimization and support.",
    },
    {
      icon: "indigo",
      lucideIcon: <Shield className="w-5 h-5 text-white" />,
      title: "Ethical AI Development",
      description:
        "We prioritize responsible AI that respects privacy, eliminates bias, and operates with transparency.",
    },
  ]

  const getIconColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      red: "bg-red-500",
      indigo: "bg-indigo-500",
    }
    return colors[color as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section id="why-us" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-200 transform rotate-45 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-balance">Why Work With Us</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto border-b-4 border-black"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 ${getIconColor(reason.icon)} rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                >
                  {reason.lucideIcon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

