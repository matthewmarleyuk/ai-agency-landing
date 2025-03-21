"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-white py-12 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="3"
                  stroke="black"
                  fill="none"
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
              </div>
              <span className="text-lg font-bold">AgenticAdvisory</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm font-medium">
              Custom AI solutions that transform your business operations and drive growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Customer Service Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Data Analysis Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Lead Generation Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Sales Enablement Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Compliance Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-medium">
              <li>14 Whittaker Avenue</li>
              <li>Glasgow, G75 9QA</li>
              <li>info@aiagents.com</li>
              <li>07478707581</li>
            </ul>
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              onClick={() => router.push("/contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="border-t-4 border-black mt-12 pt-6 text-center text-sm text-gray-600 font-medium">
          <p>&copy; {new Date().getFullYear()} AgenticAdvisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

