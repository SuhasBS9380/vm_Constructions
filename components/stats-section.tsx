import { Button } from "@/components/ui/button"

export default function StatsSection() {
  return (
    <section
      className="py-12 md:py-20 px-4 bg-slate-900 text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.9)), url('/construction-site-with-geometric-patterns-and-blue.jpg')`,
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="bg-orange-500 py-8 md:py-12 px-4 md:px-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-xs md:text-sm font-medium tracking-wider uppercase mb-2">MACHINERY</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-6xl font-black">30</span>
                <span className="text-lg md:text-2xl">Equipment</span>
              </div>
            </div>

            <div>
              <div className="text-xs md:text-sm font-medium tracking-wider uppercase mb-2">WORKFORCE</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-6xl font-black">50</span>
                <span className="text-lg md:text-2xl">Workers</span>
              </div>
            </div>

            <div>
              <div className="text-xs md:text-sm font-medium tracking-wider uppercase mb-2">CLIENTS</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-6xl font-black">10+</span>
                <span className="text-lg md:text-2xl">Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
