export default function Industries() {
  const industries = [
    { name: "Financial Services", color: "bg-blue-600", rotation: "-2deg" },
    { name: "Healthcare", color: "bg-green-500", rotation: "1deg" },
    { name: "Retail & E-commerce", color: "bg-purple-600", rotation: "-1deg" },
    { name: "Manufacturing", color: "bg-yellow-500", rotation: "2deg" },
    { name: "Legal Services", color: "bg-pink-600", rotation: "-1.5deg" },
    { name: "Real Estate", color: "bg-indigo-600", rotation: "1.5deg" },
    { name: "Insurance", color: "bg-teal-600", rotation: "-1deg" },
    { name: "Travel & Hospitality", color: "bg-orange-500", rotation: "2deg" },
    { name: "Education", color: "bg-cyan-600", rotation: "-2deg" },
    { name: "Telecommunications", color: "bg-amber-600", rotation: "1deg" },
  ]

  // Split industries into two rows
  const topRow = industries.slice(0, 7)
  const bottomRow = industries.slice(7)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-8 text-balance">Industries We Serve</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {topRow.map((industry, index) => (
            <div
              key={index}
              className="relative inline-block"
              style={{
                marginBottom: "8px",
                marginRight: "8px",
                transform: `rotate(${industry.rotation})`,
                transformOrigin: "center",
              }}
            >
              {/* Black shadow box */}
              <div
                className="absolute bg-black rounded-lg w-full h-full"
                style={{
                  top: "4px",
                  left: "4px",
                  zIndex: 0,
                }}
              ></div>

              {/* Colored button */}
              <div
                className={`relative ${industry.color} text-white px-6 py-3 rounded-lg text-sm font-bold z-10 border border-black whitespace-nowrap`}
              >
                {industry.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {bottomRow.map((industry, index) => (
            <div
              key={index}
              className="relative inline-block"
              style={{
                marginBottom: "8px",
                marginRight: "8px",
                transform: `rotate(${industry.rotation})`,
                transformOrigin: "center",
              }}
            >
              {/* Black shadow box */}
              <div
                className="absolute bg-black rounded-lg w-full h-full"
                style={{
                  top: "4px",
                  left: "4px",
                  zIndex: 0,
                }}
              ></div>

              {/* Colored button */}
              <div
                className={`relative ${industry.color} text-white px-6 py-3 rounded-lg text-sm font-bold z-10 border border-black whitespace-nowrap`}
              >
                {industry.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

