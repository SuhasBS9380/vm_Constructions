"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Menu, X, Instagram } from "lucide-react"
import { useState } from "react"

const WhatsAppIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

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
      <header className="bg-white shadow-lg border-b border-gray-200 py-3 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="V M Constructions Logo" 
              className="h-12 w-auto md:h-14 object-contain"
            />
          </div>

          <button 
            className={`lg:hidden text-slate-900 relative transition-opacity duration-300 ${
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
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-2 flex-1">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
                >
                  Projects
                </Link>
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-500 transition-colors w-full lg:w-auto text-left py-3 lg:py-0 font-medium border-b border-slate-700 lg:border-none"
                >
                  Services
                </Link>
                <button
                  onClick={scrollToFooter}
                  className="text-white hover:text-orange-500 transition-colors w-full text-left py-3 font-medium bg-transparent border-b border-slate-700 cursor-pointer"
                >
                  Contact
                </button>
              </div>

              {/* Social Media Icons at Bottom */}
              <div className="mt-auto pt-6 w-full">
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-gray-400 text-sm mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/919019407040" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors p-2 rounded-full bg-slate-800 hover:bg-slate-700"
                      title="WhatsApp"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon />
                    </a>
                    <a 
                      href="https://www.instagram.com/vm__constructions_?igsh=dG15dmw0OW5qMzVn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors p-2 rounded-full bg-slate-800 hover:bg-slate-700"
                      title="Instagram"
                      onClick={closeMenu}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-orange-500 transition-colors font-medium">
              Services
            </Link>
            <button
              onClick={scrollToFooter}
              className="text-slate-700 hover:text-orange-500 transition-colors font-medium bg-transparent border-none cursor-pointer"
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
