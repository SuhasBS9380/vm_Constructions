"use client"

import { useEffect, useState } from "react"
import QuoteFormModal from "./quote-form-modal"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const wrapCharacters = (text: string, delay: number = 0) => {
    return text.split("").map((char, index) => (
      <span 
        key={index} 
        className="inline-block animate-fade-in-up"
        style={{
          animationDelay: `${delay + index * 0.05}s`,
          animationFillMode: 'both'
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('/construction-site-with-multiple-tower-cranes-at-tw.jpg')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white max-w-6xl mx-auto text-center">
          <div className={`mb-6 md:mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-orange-500 text-sm sm:text-base md:text-lg font-medium tracking-wide flex items-center justify-center">
              <span className="w-8 h-0.5 bg-orange-500 mr-3 animate-expand-width"></span>
              Professional Builder
            </span>
          </div>

          <h1 className="hero-main-text text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-8 md:mb-12 leading-tight tracking-tight">
            <div className="block mb-3 sm:mb-4 md:mb-6 overflow-hidden">
              <div className="hero-text-line flex items-center justify-center">
                <span className="animated-dot mr-4"></span>
                {wrapCharacters("WE BUILD YOUR", 0.2)}
                <span className="animated-dot ml-4"></span>
              </div>
            </div>
            <div className="block overflow-hidden">
              <div className="hero-text-line flex items-center justify-center">
                <span className="animated-dot mr-4"></span>
                {wrapCharacters("DREAM HOME", 1.0)}
                <span className="animated-dot ml-4"></span>
              </div>
            </div>
          </h1>

          <div className={`mb-8 md:mb-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-orange-500 text-sm sm:text-base md:text-lg font-medium tracking-wide flex items-center justify-center">
              <span className="w-8 h-0.5 bg-orange-500 mr-3 animate-expand-width animation-delay-1000"></span>
              Our Services
            </span>
          </div>

          <div className={`mb-8 md:mb-12 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="hero-cta-button border-2 border-white text-white px-8 py-4 font-semibold text-lg tracking-wide hover:bg-white hover:text-slate-800 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">GET A QUOTE</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></div>
            </button>
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
