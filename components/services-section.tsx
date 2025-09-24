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
      image: "/Civil Works.png",
      title: "Civil Works",
      description: "Comprehensive civil engineering solutions for all types of construction projects with modern techniques and quality materials",
      detailedDescription: "Our civil works encompass all aspects of construction including site preparation, excavation, foundation work, concrete structures, and infrastructure development. We handle residential, commercial, and industrial projects with expertise in soil analysis, structural design, and construction management. Our team ensures compliance with building codes and safety standards while delivering durable and cost-effective solutions."
    },
    {
      image: "/Design Projects.png",
      title: "Design of Residential and Commercial Projects",
      description: "Professional architectural and engineering design services for residential and commercial buildings",
      detailedDescription: "We provide comprehensive design services including architectural planning, structural design, MEP (Mechanical, Electrical, Plumbing) design, and 3D visualization. Our design team creates innovative and functional spaces that meet client requirements while ensuring compliance with local building regulations. We use advanced CAD software and BIM technology for precise and detailed project planning."
    },
    {
      image: "/Construction Projects.png",
      title: "Construction of Residential and Commercial Projects",
      description: "Complete construction services for residential homes, apartments, offices, and commercial complexes",
      detailedDescription: "Our construction services cover the entire building process from foundation to finishing. We specialize in residential houses, apartment complexes, office buildings, retail spaces, and industrial facilities. Our experienced team ensures quality construction using modern techniques, premium materials, and adherence to project timelines and budgets."
    },
    {
      image: "/Maintenance & Renovation.png",
      title: "Maintenance and Renovation",
      description: "Professional building maintenance and renovation services to enhance and preserve your property",
      detailedDescription: "We offer comprehensive maintenance and renovation services including structural repairs, facade restoration, interior upgrades, and system maintenance. Our team handles both preventive maintenance and major renovations, ensuring your property remains in excellent condition while adding value and functionality to existing structures."
    },
    {
      image: "/Interior Works.png",
      title: "Interior Works",
      description: "Complete interior solutions including design, execution, and finishing for residential and commercial spaces",
      detailedDescription: "Our interior works include space planning, false ceilings, flooring, wall treatments, modular kitchens, wardrobes, lighting design, and furniture installation. We create functional and aesthetically pleasing interiors using quality materials and modern design principles to transform spaces into beautiful and practical environments."
    },
    {
      image: "/Structural Works.png",
      title: "Structural Works",
      description: "Specialized structural engineering and construction services for safe and durable building frameworks",
      detailedDescription: "We provide structural engineering services including foundation design, RCC work, steel structures, and seismic-resistant construction. Our structural works ensure building safety and longevity through proper load calculations, quality materials, and adherence to structural engineering standards and building codes."
    },
    {
      image: "/Pre-fabricated Buildings.png",
      title: "Pre-fabricated Buildings",
      description: "Modern pre-fabricated construction solutions for quick and efficient building assembly",
      detailedDescription: "Our pre-fabricated building solutions offer fast construction, cost-effectiveness, and quality control. We design and manufacture pre-fab structures for warehouses, offices, residential units, and industrial facilities. These buildings provide excellent durability, energy efficiency, and can be customized to meet specific requirements."
    },
    {
      image: "/MS (Mild Steel) Works.png",
      title: "MS (Mild Steel) Works",
      description: "Professional mild steel fabrication and installation services for structural and architectural applications",
      detailedDescription: "We specialize in mild steel fabrication including structural steelwork, staircases, railings, gates, grills, and architectural metalwork. Our MS works are executed with precision welding, proper finishing, and anti-corrosion treatments to ensure durability and aesthetic appeal in both functional and decorative applications."
    },
    {
      image: "/SS (Stainless Steel) Works.png",
      title: "SS (Stainless Steel) Works",
      description: "High-quality stainless steel fabrication for durable and corrosion-resistant installations",
      detailedDescription: "Our stainless steel works include kitchen equipment, handrails, balustrades, cladding, and decorative elements. We use various grades of stainless steel to provide corrosion resistance, hygiene, and aesthetic appeal. All SS works are executed with precision cutting, welding, and finishing techniques for long-lasting performance."
    },
    {
      image: "/Aluminium Works .png",
      title: "Aluminium Works",
      description: "Modern aluminium fabrication services for windows, doors, facades, and architectural elements",
      detailedDescription: "We provide comprehensive aluminium works including windows, doors, curtain walls, facades, and structural glazing. Our aluminium solutions offer lightweight construction, corrosion resistance, and excellent thermal performance. We use high-quality aluminium profiles and modern fabrication techniques for precise installation and finishing."
    },
    {
      image: "/Waterproofing Works.png",
      title: "Waterproofing Works",
      description: "Professional waterproofing solutions to protect buildings from water damage and moisture infiltration",
      detailedDescription: "We offer comprehensive waterproofing services including roof waterproofing, basement waterproofing, bathroom waterproofing, and external wall treatments. Our solutions use advanced waterproofing membranes, sealants, and protective coatings to ensure long-term protection against water damage and structural deterioration."
    },
    {
      image: "/Waterproofing Works.png",
      title: "All Types of Waterproofing Solutions",
      description: "Complete range of waterproofing systems and solutions for various construction applications",
      detailedDescription: "Our waterproofing solutions cover all types of applications including liquid membranes, sheet membranes, crystalline waterproofing, injection grouting, and protective coatings. We provide customized waterproofing systems for roofs, basements, swimming pools, water tanks, and industrial structures with guaranteed performance and durability."
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
