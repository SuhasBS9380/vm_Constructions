"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToFooter = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close menu after clicking
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside (only on mobile)
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Main Header */}
      <header className="bg-slate-900 text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-orange-500">
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">V M Constructions</h1>
          </div>

          <button 
            className={`lg:hidden text-white relative transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Menu Container */}
          <div 
            className={`fixed top-0 right-0 h-full w-80 lg:hidden z-50 transform transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Menu Background with Blur Effect */}
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"></div>
            
            <nav className="relative h-full flex flex-col items-start gap-2 p-6 pt-6 border-l-2 border-orange-500">
              {/* Close button for mobile */}
              <div className="flex justify-between items-center w-full mb-6">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
            >
              Projects
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
            >
              Services
            </Link>
              <button
                onClick={scrollToFooter}
                className="hover:text-orange-500 transition-colors w-full text-left py-3 font-medium bg-transparent border-b border-slate-700 cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="hover:text-orange-500 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/services" className="hover:text-orange-500 transition-colors font-medium">
              Services
            </Link>
            <button
              onClick={scrollToFooter}
              className="hover:text-orange-500 transition-colors font-medium bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={scrollToFooter}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 font-semibold text-sm lg:text-base"
          >
            CONTACT NOW
          </Button>
        </div>
      </header>
    </>
  )
}
