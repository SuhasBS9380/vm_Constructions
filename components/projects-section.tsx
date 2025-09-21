"use client"

import { Plus, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import QuoteFormModal from "./quote-form-modal"
import Link from "next/link"

interface ProjectsSectionProps {
  showAll?: boolean
  showSeeMore?: boolean
}

export default function ProjectsSection({ showAll = true, showSeeMore = false }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const projects = [
    {
      image: "/modern-residential-building-with-balconies.jpg",
      title: "Modern Residential Complex",
      description: "Contemporary 4-story residential building with modern balconies, glass facade, and premium finishing in Karnataka",
      category: "Residential",
      year: "2023"
    },
    {
      image: "/bridge-construction-work-in-progress.jpg",
      title: "Bridge Infrastructure Development",
      description: "Major concrete bridge construction project with advanced engineering techniques and safety standards",
      category: "Infrastructure",
      year: "2023"
    },
    {
      image: "/residential-building-with-external-staircase.jpg",
      title: "Multi-Story Residential Building",
      description: "Elegant residential complex featuring decorative external staircase with ornamental railings and modern architecture",
      category: "Residential",
      year: "2022"
    },
    {
      image: "/roof-slab-reinforcement-with-steel-bars.jpg",
      title: "Advanced Slab Reinforcement",
      description: "Professional concrete slab reinforcement using high-grade TMT steel bars with precise engineering calculations",
      category: "Structural",
      year: "2023"
    },
    {
      image: "/detailed-slab-reinforcement-structural-work.jpg",
      title: "Structural Framework Construction",
      description: "Detailed reinforcement work showcasing our expertise in structural engineering and quality construction methods",
      category: "Structural",
      year: "2023"
    },
    {
      image: "/bathroom-interior-construction-with-tiling.jpg",
      title: "Premium Bathroom Interior",
      description: "Modern bathroom construction with quality tiling, waterproofing, and contemporary interior finishing work",
      category: "Interior",
      year: "2023"
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 md:mb-16 text-center">
          OUR PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-orange-500 text-sm font-semibold">
                    V M Constructions
                  </span>
                  <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 p-0 rounded-full"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button - Only show on homepage */}
        {showSeeMore && (
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105">
                SEE MORE PROJECTS
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Call to Action - Only show on full projects page */}
        {showAll && (
          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 mb-6">
              Interested in our construction services? Let's discuss your project requirements.
            </p>
            <Button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold"
            >
              GET A QUOTE
            </Button>
          </div>
        )}
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  )
}
