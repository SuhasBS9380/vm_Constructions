import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsSection from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Projects Hero Section */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/construction-site-with-multiple-tower-cranes-at-tw.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-black mb-6">PROJECTS</h1>

            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-orange-500">HOME</span>
              <span className="text-white">/</span>
              <span className="text-orange-500">PROJECTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <ProjectsSection />

      <Footer />
    </div>
  )
}
