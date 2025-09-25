"use client"

import { Building2, ArrowUp, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import WhatsAppFloat from "./whatsapp-float"

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

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
                Professional construction services across Karnataka since 2023. Specializing in residential, commercial, infrastructure projects, and interior design solutions.
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
                <li>• Civil Works</li>
                <li>• Residential & Commercial Design</li>
                <li>• Residential & Commercial Construction</li>
                <li>• Maintenance and Renovation</li>
                <li>• Interior Works</li>
                <li>• Structural Works</li>
                <li>• MS, SS & Aluminium Works</li>
                <li>• Waterproofing Solutions</li>
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
              <p>Since 2023 | Karnataka, India</p>
              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-end gap-4 mt-3">
                <a 
                  href="https://wa.me/919019407040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a 
                  href="https://www.instagram.com/vm__constructions_?igsh=dG15dmw0OW5qMzVn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
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
