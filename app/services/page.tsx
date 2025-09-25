import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Services Hero Section */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/construction-worker-with-surveying-equipment-and-c.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-black mb-6">SERVICES</h1>

            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-orange-500">HOME</span>
              <span className="text-white">/</span>
              <span className="text-orange-500">SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <ServicesSection />

      {/* Additional Services Information */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              WHY CHOOSE V M CONSTRUCTIONS?
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              With over 30 years of experience in Karnataka's construction industry, we deliver excellence in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">30+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Years Experience</h3>
              <p className="text-slate-600">Trusted construction services since 2023</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Projects Completed</h3>
              <p className="text-slate-600">Successful projects across Karnataka</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Support</h3>
              <p className="text-slate-600">Round-the-clock project support</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Assured</h3>
              <p className="text-slate-600">Premium materials and craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
