"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Create the payload
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      message: formData.message,
      submittedAt: new Date().toISOString(),
      source: "Website Contact Form",
    }

    console.log("Sending data to webhook:", payload)

    try {
      // Send data to the webhook
      const response = await fetch("https://hook.eu2.make.com/i8b8xa5bq9xjbowa241m2qrte6xjkdf6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        mode: "cors", // Explicitly set CORS mode
      })

      console.log("Webhook response status:", response.status)

      // Try to get the response body for debugging
      let responseBody
      try {
        responseBody = await response.text()
        console.log("Webhook response body:", responseBody)
      } catch (e) {
        console.log("Could not read response body:", e)
      }

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`)
      }

      // Handle success
      console.log("Form submitted successfully")
      setSubmitStatus("success")
      alert("Thank you for your message! We'll get back to you within 24 hours.")

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")

      // Provide more detailed error message for static deployments
      let errorMessage = "Unknown error"
      if (error instanceof Error) {
        errorMessage = error.message
      }
      
      // Check if it's a network error that might be related to static deployment
      if (errorMessage.includes("Failed to fetch") || errorMessage.includes("NetworkError")) {
        errorMessage = "Network error - this might happen in static deployments. Please try emailing us directly."
      }
      
      alert(
        `There was an issue submitting your message: ${errorMessage}. Please try again or contact us directly at info@agenticadvisory.net.`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yellow-200 transform rotate-45 opacity-20"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div>
          <div
            className="bg-white p-6 rounded-xl border-2 border-black relative"
            style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,1)" }}
          >
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                There was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
                  <p className="font-medium">
                    If you're having trouble submitting the form, you can also email us directly at:
                  </p>
                  <a href="mailto:info@agenticadvisory.net" className="text-blue-600 underline">
                    info@agenticadvisory.net
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact Information and Business Hours */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div
            className="bg-white p-6 rounded-xl border-2 border-black relative"
            style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,1)" }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className="bg-green-500 p-3 rounded-xl mr-4 flex items-center justify-center"
                  style={{ width: "56px", height: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium">Email Us</p>
                  <a href="mailto:info@agenticadvisory.net" className="text-blue-500 hover:underline">
                    info@agenticadvisory.net
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className="bg-yellow-400 p-3 rounded-xl mr-4 flex items-center justify-center"
                  style={{ width: "56px", height: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-medium">Call Us</p>
                  <a href="tel:+447478707581" className="text-blue-500 hover:underline">
                    +44 7478 707 581
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div
            className="bg-white p-6 rounded-xl border-2 border-black relative"
            style={{ boxShadow: "8px 8px 0 0 rgba(0,0,0,1)" }}
          >
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>

            <div className="flex items-center mb-6">
              <div
                className="bg-purple-500 p-3 rounded-xl mr-4 flex items-center justify-center"
                style={{ width: "56px", height: "56px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className="text-lg font-medium">When We're Available</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

