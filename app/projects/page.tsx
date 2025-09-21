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

      {/* Project Statistics */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              PROJECT ACHIEVEMENTS
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Over 30 years of successful construction projects across Karnataka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Projects Completed</h3>
              <p className="text-slate-600">Successful construction projects delivered</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Residential Projects</h3>
              <p className="text-slate-600">Modern homes and apartment complexes</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">25+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Infrastructure Projects</h3>
              <p className="text-slate-600">Bridges, roads, and public facilities</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">30+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Years Experience</h3>
              <p className="text-slate-600">Trusted construction services since 1994</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              PROJECT CATEGORIES
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We specialize in various types of construction projects across Karnataka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Residential</h3>
              <p className="text-slate-600 text-sm">Homes, apartments, and residential complexes</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌉</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Infrastructure</h3>
              <p className="text-slate-600 text-sm">Bridges, roads, and public infrastructure</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏗️</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Structural</h3>
              <p className="text-slate-600 text-sm">Framework, reinforcement, and structural work</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🛁</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Interior</h3>
              <p className="text-slate-600 text-sm">Interior finishing, tiling, and modern amenities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
