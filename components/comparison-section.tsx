"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { useState } from "react"
import QuoteFormModal from "./quote-form-modal"

export default function ComparisonSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const vmConstructionsFeatures = [
    "100% Money Safety Guarantee",
    "Top Quality Assurance with QMS/QAM",
    "Monitor The Progress From Home using App",
    "ZERO Cost Overruns",
    "Guaranteed On Time Delivery"
  ]

  const contractorsIssues = [
    "No Safety of Money & High Risk",
    "Improper quality checks",
    "No App - Have to go to construction site",
    "Costs keep increasing",
    "No guarantee on timely delivery"
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We serve our customers better than others
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* V M Constructions Column */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-orange-200">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-orange-500 pb-2 inline-block">
                V M Constructions
              </h3>
            </div>
            
            <div className="space-y-4">
              {vmConstructionsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-orange-500 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contractors Column */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-gray-400 pb-2 inline-block">
                Other Contractors
              </h3>
            </div>
            
            <div className="space-y-4">
              {contractorsIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gray-400 rounded-full p-1 mt-1 flex-shrink-0">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Experience Tech-Enabled Construction with us
          </h3>
          
          <Button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Construction
          </Button>

          <div className="text-center mt-8">
            <p className="text-slate-700 font-semibold">Karnataka's Only Company with</p>
            <p className="text-orange-500 font-bold text-lg">REGISTERED QUALITY ASSESSMENT</p>
            <p className="text-slate-600">in home construction</p>
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
