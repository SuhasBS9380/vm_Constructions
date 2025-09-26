"use client"

import { useState, useEffect } from "react"

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const steps = [
    {
      number: 1,
      title: "Raise a",
      subtitle: "Request",
      description: "Submit your construction requirements and get started with your dream home project. Our team will review your needs and provide initial consultation.",
      image: "/1.png",
      detailedDescription: "Begin your construction journey by submitting your project requirements through our easy-to-use platform. Our experts will analyze your needs, budget, and timeline to provide you with the best construction solutions."
    },
    {
      number: 2,
      title: "Meet our",
      subtitle: "Expert",
      description: "Connect with our skilled construction professionals for detailed consultation and project planning.",
      image: "/2.png",
      detailedDescription: "Schedule a meeting with our certified construction experts who will visit your site, understand your vision, and provide professional guidance on design, materials, and construction methodology."
    },
    {
      number: 3,
      title: "Book",
      subtitle: "with us",
      description: "Finalize your project details and book our construction services with transparent pricing.",
      image: "/3.png",
      detailedDescription: "Once you're satisfied with our consultation and quotation, book our services with a simple agreement. We ensure complete transparency in pricing with no hidden costs."
    },
    {
      number: 4,
      title: "Receive",
      subtitle: "Plans",
      description: "Get detailed architectural plans and construction blueprints for your project approval.",
      image: "/4.png",
      detailedDescription: "Our expert architects will create detailed construction plans, 3D visualizations, and technical drawings. You'll receive complete blueprints for approval before construction begins."
    },
    {
      number: 5,
      title: "Track &",
      subtitle: "Transact",
      description: "Monitor construction progress and handle payments through our secure platform and mobile app.",
      image: "/5.png",
      detailedDescription: "Use our advanced tracking system to monitor daily progress, view photos, manage payments, and communicate with the construction team. Complete transparency at every step."
    },
    {
      number: 6,
      title: "Settle",
      subtitle: "in",
      description: "Move into your completed dream home with full quality assurance and warranty.",
      image: "/6.png",
      detailedDescription: "After thorough quality checks and final inspections, receive your completed home with comprehensive warranty coverage. We ensure everything meets the highest standards before handover."
    }
  ]

  // Auto-progression effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep(prev => prev === 6 ? 1 : prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Handle manual step selection
  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const activeStepData = steps.find(step => step.number === activeStep)

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">
            Our house construction steps are simple and easy to understand: 
            <span className="font-semibold"> Plan - Build - Track - Settle in.</span>
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="mb-16">
          {/* Desktop Layout - Full width with connection lines */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-300 z-0"></div>
              
              {/* Steps */}
              <div className="flex justify-between items-center relative z-10 max-w-4xl mx-auto">
                {steps.map((step) => (
                  <div 
                    key={step.number} 
                    className="text-center cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => handleStepClick(step.number)}
                  >
                    {/* Step Number Circle */}
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                      activeStep === step.number 
                        ? 'bg-slate-900 shadow-lg scale-110' 
                        : step.number < activeStep 
                          ? 'bg-slate-700' 
                          : 'bg-gray-400'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Step Content */}
                    <div className="space-y-1 min-w-[80px]">
                      <h3 className={`font-bold text-sm transition-colors font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] ${
                        activeStep === step.number ? 'text-slate-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                      <h4 className={`font-bold text-sm transition-colors font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] ${
                        activeStep === step.number ? 'text-slate-900' : 'text-gray-600'
                      }`}>
                        {step.subtitle}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Grid without sliding */}
          <div className="lg:hidden">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className="text-center cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleStepClick(step.number)}
                >
                  {/* Step Number Circle */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base transition-all duration-500 ${
                    activeStep === step.number 
                      ? 'bg-slate-900 shadow-lg scale-110' 
                      : step.number < activeStep 
                        ? 'bg-slate-700' 
                        : 'bg-gray-400'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Step Content */}
                  <div className="space-y-1">
                    <h3 className={`font-bold text-xs sm:text-sm transition-colors font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] ${
                      activeStep === step.number ? 'text-slate-900' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    <h4 className={`font-bold text-xs sm:text-sm transition-colors font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] ${
                      activeStep === step.number ? 'text-slate-900' : 'text-gray-600'
                    }`}>
                      {step.subtitle}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Display */}
        {activeStepData && (
          <div className="max-w-5xl mx-auto">
            {/* Professional Image Display */}
            <div className="text-center mb-12 px-4">
              <div className="relative inline-block max-w-full">
                {/* Modern Card Container */}
                <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-100 transform hover:scale-105 transition-all duration-500 max-w-full">
                  {/* Image with Professional Frame */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={activeStepData.image}
                      alt={`Step ${activeStepData.number}: ${activeStepData.title} ${activeStepData.subtitle}`}
                      className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover transition-all duration-700 ease-in-out transform hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Professional Badge */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-4 sm:py-2 shadow-lg">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">Step 0{activeStepData.number}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-orange-500 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Professional Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-3xl transform rotate-1 -z-10"></div>
              </div>
            </div>

            {/* Content Section - Enhanced */}
            <div className="text-center space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight">
                  0{activeStepData.number} {activeStepData.title} <span className="text-orange-500">{activeStepData.subtitle}</span>
                </h3>
                
                {/* Professional Description Box */}
                <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-orange-50 rounded-xl p-6 md:p-8 border-l-4 border-orange-500">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif]">
                    {activeStepData.detailedDescription}
                  </p>
                </div>
                
                {/* Professional Indicators */}
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index + 1 === activeStep 
                            ? 'bg-orange-500 scale-125' 
                            : index + 1 < activeStep 
                              ? 'bg-slate-400' 
                              : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
