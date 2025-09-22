"use client"

import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }
  const services = [
    {
      image: "/construction-blueprints-and-planning-documents-on-.jpg",
      title: "Slab Reinforcement and Conduit Laying",
      description: "Professional concrete slab reinforcement with electrical conduit installation for modern buildings",
      detailedDescription: "Our slab reinforcement service includes comprehensive concrete strengthening using high-grade steel reinforcement bars (TMT bars) and modern binding techniques. We specialize in electrical conduit laying within concrete slabs, ensuring proper cable management for residential and commercial buildings. Our team uses advanced tools for precise placement of conduits, maintaining structural integrity while providing efficient electrical infrastructure. We follow IS codes and safety standards for all reinforcement work, ensuring long-lasting and durable concrete structures."
    },
    {
      image: "/construction-site-with-multiple-tower-cranes-at-tw.jpg",
      title: "Building Structure/Framework",
      description: "Complete structural framework construction with modern engineering techniques and quality materials",
      detailedDescription: "We provide complete structural framework construction services including foundation work, column construction, beam installation, and roof framework. Our experienced engineers use modern construction techniques with high-quality materials like steel, concrete, and timber. We handle both RCC (Reinforced Cement Concrete) and steel frame structures, ensuring earthquake resistance and load-bearing capacity as per Indian building codes. Our framework services include detailed structural analysis, quality material sourcing, and professional execution with modern machinery."
    },
    {
      image: "/brick-laying-and-masonry-construction-work.jpg",
      title: "Tiling and Masonry in Bathroom",
      description: "Expert bathroom construction with premium tiling, waterproofing, and modern masonry work",
      detailedDescription: "Our bathroom construction service includes complete waterproofing, premium tile installation, and modern masonry work. We use high-quality ceramic, vitrified, and designer tiles with proper waterproof membranes and sealants. Our masonry work includes wall construction, partition walls, and decorative elements. We ensure proper drainage systems, ventilation, and moisture control. All bathroom projects include modern fixtures installation, plumbing integration, and finishing work with attention to aesthetics and functionality."
    },
    {
      image: "/construction-worker-in-workshop-with-tools-and-equ.jpg",
      title: "Staircase with Handrails",
      description: "Custom staircase construction with safety handrails, modern design, and durable materials",
      detailedDescription: "We design and construct custom staircases including straight, curved, and spiral designs using materials like concrete, steel, wood, and marble. Our staircase construction includes proper structural calculations, safety handrail installation, and modern finishing. We provide both indoor and outdoor staircase solutions with anti-slip treatments, proper lighting provisions, and aesthetic designs. All handrails are constructed following safety standards with options in steel, wood, glass, and decorative materials to match your building's architecture."
    },
    {
      image: "/modern-white-residential-building-with-geometric-d.jpg",
      title: "Full Residential & Commercial Building Construction",
      description: "Complete turnkey construction projects for residential and commercial buildings from foundation to interior finishing",
      detailedDescription: "Our turnkey construction service covers everything from site preparation and foundation to complete interior finishing for both residential and commercial projects. This includes architectural planning, structural work, electrical and plumbing systems, flooring, painting, modular kitchen installation, and modern interior design. We handle residential buildings, commercial complexes, office buildings, retail spaces, and institutional projects with modern amenities like elevators, fire safety systems, and smart building features. Our team coordinates all trades including civil, electrical, plumbing, and interior work to deliver ready-to-occupy buildings."
    },
    {
      image: "/interior.jpeg",
      title: "Interior Design & Finishing",
      description: "Professional interior design services with modern aesthetics, space planning, and premium finishing materials",
      detailedDescription: "Our interior design service provides comprehensive space planning, modern aesthetic design, and premium finishing for residential and commercial spaces. We offer complete interior solutions including modular kitchens, wardrobes, false ceilings, designer lighting, flooring options (marble, tiles, wooden), wall treatments, and furniture selection. Our design team creates functional and beautiful interiors with attention to space optimization, color coordination, and modern trends. We handle everything from concept design to execution, including electrical planning for lighting, smart home integration, and custom furniture manufacturing."
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 md:mb-16 text-center">
          OUR SERVICES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Expandable detailed description */}
                {expandedService === index && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Detailed Service Information:</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-sm md:text-base">
                    {expandedService === index ? "Show Less" : "Read More"}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => toggleService(index)}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-7 h-7 md:w-8 md:h-8 p-0 rounded-full transition-all duration-200"
                  >
                    {expandedService === index ? (
                      <Minus className="w-3 h-3 md:w-4 md:h-4" />
                    ) : (
                      <Plus className="w-3 h-3 md:w-4 md:h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
