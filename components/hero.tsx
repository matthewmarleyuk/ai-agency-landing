"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, Code } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  return (
    <section className="pt-40 pb-32 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-pink-200 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center bg-orange-500 text-white px-3 py-1 text-sm rounded-full border-2 border-black mb-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                stroke="black"
                fill="none"
                className="mr-2"
              >
                <circle cx="34.52" cy="11.43" r="5.82" />
                <circle cx="53.63" cy="31.6" r="5.82" />
                <circle cx="34.52" cy="50.57" r="5.82" />
                <circle cx="15.16" cy="42.03" r="5.82" />
                <circle cx="15.16" cy="19.27" r="5.82" />
                <circle cx="34.51" cy="29.27" r="4.7" />
                <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
                <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
                <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
                <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
                <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
                <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
                <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
                <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
                <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
              </svg>
              AI-Powered Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 text-balance">
              Intelligent AI Agents That Transform Your Business
            </h1>
            <p className="text-lg mb-8 text-gray-600 font-medium text-balance">
              Custom AI solutions that automate workflows, enhance customer experiences, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => router.push("/contact")}
              >
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black text-gray-700 px-6 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => router.push("/services")}
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* New AI Agent Console design */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl rotate-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-white p-6 rounded-xl -rotate-3 border-2 border-black">
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-blue-600 h-8 w-8 mr-3" />
                    <h3 className="text-xl font-bold">AI Agent Console</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-black">
                      <div className="flex items-start gap-3">
                        {/* Replaced MessageSquareCode with a combination of MessageSquare and Code */}
                        <div className="relative">
                          <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                          <Code className="h-3 w-3 text-blue-600 absolute -bottom-1 -right-1" />
                        </div>
                        <div>
                          <p className="font-medium">AI Agent:</p>
                          <p className="text-sm text-gray-700">
                            I've analyzed your Q2 financial data and identified 3 areas for potential cost savings.
                            Would you like to see the complete report?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center border-2 border-black">
                          <div className="w-4 h-4 bg-green-500 rounded-full border border-black"></div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-green-300 to-green-500 rounded-full w-3/4 border border-black"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center border-2 border-black">
                          <div className="w-4 h-4 bg-blue-500 rounded-full border border-black"></div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full w-2/3 border border-black"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center border-2 border-black">
                          <div className="w-4 h-4 bg-purple-500 rounded-full border border-black"></div>
                        </div>
                        <div className="h-2 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full w-1/2 border border-black"></div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full border border-black">
                        Running
                      </div>
                      <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full border border-black">
                        Connected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

