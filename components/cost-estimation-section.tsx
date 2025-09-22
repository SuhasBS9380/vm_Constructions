"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import QuoteFormModal from "./quote-form-modal"

export default function CostEstimationSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const pricingTiers = [
    {
      name: "Basic",
      price: "₹ 1900",
      unit: "/sqft (Incl. GST)",
      color: "border-orange-500 bg-orange-50"
    },
    {
      name: "Classic",
      price: "₹ 2030",
      unit: "/sqft (Incl. GST)",
      color: "border-blue-500 bg-blue-50"
    },
    {
      name: "Premium",
      price: "₹ 2350",
      unit: "/sqft (Incl. GST)",
      color: "border-purple-500 bg-purple-50"
    },
    {
      name: "Royale",
      price: "₹ 2585",
      unit: "/sqft (Incl. GST)",
      color: "border-green-500 bg-green-50"
    }
  ]

  const features = [
    {
      icon: (
        <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Guaranteed",
      subtitle: "On Time Delivery"
    },
    {
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15z"/>
        </svg>
      ),
      title: "Zero",
      subtitle: "Cost Overruns"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Features Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">{feature.title}</h3>
              <p className="text-slate-600 text-lg font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <Button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Construction
          </Button>
        </div>

        {/* Cost Estimation */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight">
            Cost Estimation Of
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight">
            Constructing A House In
          </h3>
          
          {/* Location Selector */}
          <div className="inline-block mb-12">
            <select className="bg-white border-2 border-gray-300 rounded-lg px-8 py-4 text-lg font-semibold text-slate-900 focus:outline-none focus:border-orange-500 shadow-sm min-w-[200px]">
              <option>Karnataka</option>
              <option>Bengaluru</option>
              <option>Mysuru</option>
              <option>Mangaluru</option>
              <option>Hubli</option>
            </select>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="space-y-1 max-w-3xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-6 bg-white border-b border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="text-xl font-semibold text-slate-900">{tier.name}</div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">{tier.price}</div>
                <div className="text-sm text-slate-600">{tier.unit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            *Prices may vary based on location, materials, and specific requirements
          </p>
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
