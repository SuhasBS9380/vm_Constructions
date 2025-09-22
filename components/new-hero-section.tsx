"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import QuoteFormModal from "./quote-form-modal"

export default function NewHeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    location: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsQuoteModalOpen(true)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-start min-h-[80vh]">
          {/* Left - Form */}
          <div className="lg:col-span-3 order-3 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-slate-900 mb-1 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">Book FREE Appointment</h2>
                  <p className="text-sm text-slate-600 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">For Best Quality Construction At Affordable Rates</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="flex gap-1">
                    <div className="flex items-center bg-gray-100 px-2 rounded-md border border-gray-300">
                      <div className="w-5 h-3 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm border border-gray-400"></div>
                      <span className="ml-1 text-sm">+91</span>
                    </div>
                    <Input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number*"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="flex-1 h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Location of your plot*"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors text-sm"
                  >
                    Start Your Construction
                  </Button>

                  <p className="text-xs text-gray-500 text-center leading-tight">
                    By submitting this form, I confirm that I have read and agreed to accept{" "}
                    <span className="text-orange-500 underline cursor-pointer">privacy policy</span>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Center - Text and Image */}
          <div className="lg:col-span-9 space-y-4 order-1 lg:order-2">
            {/* Text Above Image */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-slate-900 leading-tight font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight">
                CONSTRUCT YOUR{" "}
                <span className="text-orange-500">DREAM HOME</span>
              </h1>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="relative max-w-4xl">
                <img
                  src="/heropage.png"
                  alt="Modern residential building showcasing V M Constructions quality"
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  )
}
