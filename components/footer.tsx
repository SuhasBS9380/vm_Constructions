"use client"

import { Building2, ArrowUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WhatsAppFloat from "./whatsapp-float"

export default function Footer() {
  return (
    <>
      {/* Diagonal Pattern Section */}
      <div className="h-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-repeat"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
            }}
          ></div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-orange-500">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">V M Constructions</h3>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">
                Professional construction services across Karnataka since 1994. Specializing in residential, commercial, infrastructure projects, and interior design solutions.
              </p>

              <div className="text-gray-400 text-sm">
                <p className="mb-2"><span className="text-orange-500 font-semibold">Proprietor:</span> Sujay Naik</p>
                <p className="mb-2"><span className="text-orange-500 font-semibold">GST No:</span> 29CBPPN7413N1ZT</p>
                <p><span className="text-orange-500 font-semibold">State:</span> Karnataka</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="text-orange-500 font-semibold text-sm mb-1">Address:</p>
                  <p className="text-sm leading-relaxed">Daddys Garden Electronic City<br />
                  Bangalore 560100</p>
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-sm mb-1">Phone:</p>
                  <p>+91 9019407040</p>
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-sm mb-1">Email:</p>
                  <p>vmconstructions2025@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Services & Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Slab Reinforcement & Conduit Laying</li>
                <li>• Building Structure/Framework</li>
                <li>• Tiling and Masonry</li>
                <li>• Staircase with Handrails</li>
                <li>• Residential & Commercial Construction</li>
                <li>• Interior Design & Finishing</li>
              </ul>

              <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                <p className="text-orange-500 font-semibold text-sm mb-2">Get Free Quote</p>
                <p className="text-gray-400 text-xs">Contact us for professional construction services across Karnataka</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-2">Copyright ©2025 V M Constructions. All rights reserved.</p>
              <p className="text-xs">Legal Name: SUJAY NAIK | Trade Name: V M CONSTRUCTIONS</p>
              <p className="text-xs">GST: 29CBPPN7413N1ZT | Proprietor: Sujay Naik</p>
            </div>
            <div className="text-gray-400 text-xs text-center md:text-right">
              <p>Professional Construction Services</p>
              <p>Since 1994 | Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full p-0 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </>
  )
}
