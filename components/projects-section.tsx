"use client"

import { Plus, Eye, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import QuoteFormModal from "./quote-form-modal"
import Link from "next/link"

interface ProjectsSectionProps {
  showAll?: boolean
  showSeeMore?: boolean
}

export default function ProjectsSection({ showAll = true, showSeeMore = false }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})

  const projects = [
    {
      images: [
        "/construction1.jpg",
        "/construction2.jpg", 
        "/construction3.jpg",
        "/construction4.jpg",
        "/construction5.jpg",
        "/construction6.jpg",
        "/construction7.jpg",
        "/construction8.jpg",
        "/construction9.jpg"
      ],
      title: "Building Home from Scratch",
      description: "Complete residential construction project from foundation to finishing, showcasing our expertise in modern home building with quality materials and craftsmanship",
      category: "Residential",
      year: "2024"
    },
    {
      images: ["/interior1.jpg"],
      title: "Office Interior at Jayanagar",
      description: "Professional office interior design and construction with modern workspace solutions, ergonomic layouts, and contemporary finishing",
      category: "Interior",
      year: "2024"
    },
    {
      images: ["/interior2.jpg", "/interior3.jpg"],
      title: "Office Cafeteria, Jayanagar", 
      description: "Modern office cafeteria design and construction with comfortable seating arrangements, modern kitchen facilities, and aesthetic interior finishing",
      category: "Interior",
      year: "2024"
    },
    {
      images: ["/Modern Residential Complex.jpg"],
      title: "Modern Residential Complex",
      description: "Contemporary 4-story residential building with modern balconies, glass facade, and premium finishing in Karnataka",
      category: "Residential",
      year: "2023"
    },
    {
      images: ["/bridge-construction-work-in-progress.jpg"],
      title: "Government KPWD Project",
      description: "Major government infrastructure bridge construction project with advanced engineering techniques and safety standards under KPWD supervision",
      category: "Infrastructure",
      year: "2024"
    },
    {
      images: ["/roof-slab-reinforcement-with-steel-bars.jpg"],
      title: "Advanced Slab Reinforcement",
      description: "Professional concrete slab reinforcement using high-grade TMT steel bars with precise engineering calculations",
      category: "Structural",
      year: "2023"
    },
    {
      images: ["/bathroom-interior-construction-with-tiling.jpg"],
      title: "Premium Bathroom Interior",
      description: "Modern bathroom construction with quality tiling, waterproofing, and contemporary interior finishing work",
      category: "Interior",
      year: "2025"
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = {...prev}
        projects.forEach((project, projectIndex) => {
          if (project.images.length > 1) {
            newIndex[projectIndex] = ((prev[projectIndex] || 0) + 1) % project.images.length
          }
        })
        return newIndex
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [projects])

  const nextImage = (projectIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
    }))
  }

  const prevImage = (projectIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }))
  }

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 md:mb-16 text-center">
          OUR PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => {
            const currentImg = currentImageIndex[index] || 0
            return (
              <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[currentImg] || "/placeholder.svg"}
                    alt={`${project.title} - Image ${currentImg + 1}`}
                    className="w-full h-48 md:h-64 object-cover transition-all duration-500 ease-in-out"
                  />
                  
                  {/* Image Navigation Controls - Only show if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextImage(index)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imgIndex === currentImg ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Image Counter */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {currentImg + 1}/{project.images.length}
                      </span>
                    </div>
                  )}
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
            )
          })}
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
