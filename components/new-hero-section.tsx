"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewHeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    location: ""
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = ["/hero1.png", "/hero2.png"]

  // Auto-slide functionality for hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const subject = "New Construction Inquiry from Website"
    const body = `
New Construction Inquiry Details:

Full Name: ${formData.fullName}
Mobile Number: +91 ${formData.mobile}
Location: ${formData.location}

This inquiry was submitted through the V M Constructions website.

Please contact the customer at the provided mobile number for further discussion.

Best regards,
V M Constructions Website
    `
    
    // Create mailto link
    const mailtoLink = `mailto:vmconstructions2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message (optional)
    alert("Thank you for your inquiry! Your default email client will open to send the details to V M Constructions.")
    
    // Reset form
    setFormData({
      fullName: "",
      mobile: "",
      location: ""
    })
  }

  return (
    <>
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
      `}</style>
      
      <section className="relative min-h-screen overflow-hidden py-8 sm:py-12 px-4">
      {/* Background Images with Sliding Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Professional Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-start min-h-[80vh]">
          {/* Left - Text and Image */}
          <div className="lg:col-span-9 space-y-4 order-1 lg:order-1">
            {/* Animated Text Section */}
            <div className="text-center relative">
              {/* Animated decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Animated dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-40 animation-delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse opacity-50 animation-delay-500"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-30 animation-delay-700"></div>
                
                {/* Animated lines */}
                <div className="absolute top-1/2 left-0 w-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse opacity-60"></div>
                <div className="absolute top-1/2 right-0 w-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse opacity-60 animation-delay-300"></div>
              </div>

              {/* Main heading with enhanced styling */}
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white leading-tight font-['Inter',_'Roboto',_'Helvetica_Neue',_sans-serif] tracking-tight drop-shadow-2xl">
                  <span className="inline-block animate-fade-in-up">CONSTRUCT</span>{" "}
                  <span className="inline-block animate-fade-in-up animation-delay-200">YOUR</span>{" "}
                  <span className="inline-block text-orange-400 animate-fade-in-up animation-delay-400 relative">
                    DREAM HOME
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 animate-scale-x origin-left animation-delay-800"></div>
                  </span>
                </h1>
                
                {/* Decorative line under main text */}
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Subtitle with animation */}
              <div className="relative mt-6">
                <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-lg animate-fade-in-up animation-delay-600">
                  <span className="relative">
                    Professional Construction Services Across Karnataka
                    {/* Animated dots after text */}
                    <span className="inline-flex ml-2">
                      <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce animation-delay-1000"></span>
                      <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce animation-delay-1200 ml-1"></span>
                      <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce animation-delay-1400 ml-1"></span>
                    </span>
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3 order-2 lg:order-2">
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
        </div>
      </div>

    </section>
    </>
  )
}
