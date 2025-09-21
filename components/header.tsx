"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToFooter = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
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

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          <nav
            className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8 absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-slate-900 lg:bg-transparent p-4 lg:p-0`}
          >
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0 font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0 font-medium"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0 font-medium"
            >
              Services
            </Link>
            <button
              onClick={scrollToFooter}
              className="hover:text-orange-500 transition-colors w-full lg:w-auto text-center lg:text-left py-2 lg:py-0 font-medium bg-transparent border-none cursor-pointer"
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
