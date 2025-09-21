import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TeamSection from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* About Hero Section */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/construction-worker-with-surveying-equipment-and-c.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-black mb-6">ABOUT US</h1>

            <div className="flex items-center gap-2 text-orange-500">
              <span className="text-orange-500">HOME</span>
              <span className="text-white">/</span>
              <span className="text-orange-500">ABOUT</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />

      {/* Company Mission & Vision */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">OUR MISSION</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To provide exceptional construction services across Karnataka, delivering quality buildings that stand the test of time. We are committed to using modern construction techniques, premium materials, and skilled craftsmanship to exceed our clients' expectations.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our mission is to build not just structures, but lasting relationships with our clients through transparency, reliability, and unwavering commitment to excellence.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">OUR VISION</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To be Karnataka's most trusted construction company, delivering quality buildings that last for generations.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We aim to build strong relationships with our clients through honest work and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Company Values */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">OUR CORE VALUES</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality</h3>
              <p className="text-slate-600">We never compromise on quality, using only premium materials and proven construction methods.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust</h3>
              <p className="text-slate-600">Building lasting relationships through transparency, honesty, and reliable service delivery.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">Embracing modern construction technologies and sustainable building practices.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">Striving for perfection in every project, from planning to final delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </div>
  )
}
