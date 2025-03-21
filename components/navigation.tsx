"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

// This component needs to remain client-side due to interactivity
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Get the current base URL to ensure consistent navigation
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`font-bold hover:underline ${isActive("/") ? "text-blue-600" : ""}`}>
              Home
            </Link>
            <Link
              href="/about-us"
              className={`font-bold hover:underline ${isActive("/about-us") ? "text-blue-600" : ""}`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`font-bold hover:underline ${isActive("/services") ? "text-blue-600" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`font-bold hover:underline ${isActive("/contact") ? "text-blue-600" : ""}`}
            >
              Contact
            </Link>
            <Button
              className="bg-blue-600 text-white px-4 py-2 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
              onClick={() => (window.location.href = "/contact")}
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t-2 border-black mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-bold hover:underline px-4 py-2 ${isActive("/") ? "text-blue-600" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`font-bold hover:underline px-4 py-2 ${isActive("/about-us") ? "text-blue-600" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`font-bold hover:underline px-4 py-2 ${isActive("/services") ? "text-blue-600" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`font-bold hover:underline px-4 py-2 ${isActive("/contact") ? "text-blue-600" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-blue-600 text-white mx-4 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => {
                  setIsOpen(false)
                  window.location.href = "/contact"
                }}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

