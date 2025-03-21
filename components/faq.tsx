export default function Faq() {
  // Static version with all FAQs visible
  const faqs = [
    {
      icon: "purple",
      question: "How long does it take to develop and deploy an AI agent?",
      answer:
        "Depending on complexity, our AI agents typically take 4-12 weeks from initial consultation to full deployment. We can also provide rapid deployment options for standard use cases.",
    },
    {
      icon: "red",
      question: "Do I need technical expertise to use your AI agents?",
      answer:
        "No. We design our agents to be user-friendly for all team members. No coding or technical expertise is required to interact with or manage our AI agents.",
    },
    {
      icon: "yellow",
      question: "How do your AI agents learn and improve over time?",
      answer:
        "Our agents use machine learning to continuously improve based on interactions and feedback. Additionally, our team regularly reviews performance and makes enhancements.",
    },
    {
      icon: "green",
      question: "Can your AI agents integrate with our existing software?",
      answer:
        "Yes. We design our agents to integrate seamlessly with popular business software and can build custom integrations for proprietary systems.",
    },
    {
      icon: "blue",
      question: "How do you ensure data security and privacy?",
      answer:
        "Security is paramount. We implement enterprise-grade encryption, secure authentication protocols, and comply with industry regulations like GDPR, HIPAA, and SOC 2.",
    },
    {
      icon: "indigo",
      question: "What kind of ROI can I expect?",
      answer:
        "Our clients typically see ROI within 3-6 months. This comes from cost savings, increased productivity, improved customer satisfaction, and new revenue opportunities.",
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-10 right-10 w-48 h-48 bg-indigo-200 opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-teal-200 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-200 opacity-20 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-balance">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto border-b-4 border-black"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-4 border-black rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className={`${getIconColor(faq.icon)} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-black`}
                  >
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <span className="font-bold">{faq.question}</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t-4 border-black">
                <p className="text-gray-700 font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

