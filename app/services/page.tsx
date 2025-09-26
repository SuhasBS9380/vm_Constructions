import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"
import AnimatedCursor from "@/components/animated-cursor"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <AnimatedCursor />
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
              With our commitment to quality in Karnataka's construction industry, we deliver excellence in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparency</h3>
              <p className="text-slate-600">Complete project transparency with regular updates</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Timely Execution</h3>
              <p className="text-slate-600">Guaranteed on-time project completion</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Satisfaction</h3>
              <p className="text-slate-600">100% customer satisfaction guarantee</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
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
