import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8">WHO WE ARE</h2>

            <div className="space-y-4 md:space-y-6 text-slate-700">
              <p className="text-base md:text-lg font-semibold leading-relaxed">
                V M Constructions is a trusted construction company based in Karnataka, specializing in comprehensive building solutions across Uttarakannada and surrounding districts. With over three decades of excellence since 2023, we have established ourselves as trusted builders in the region.
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                Our expertise spans from residential buildings to commercial complexes, with notable projects including IB Building construction in Yellapur taluk and various infrastructure developments across Karnataka. We pride ourselves on delivering quality construction with modern techniques, ensuring every project meets the highest standards of safety, durability, and aesthetic appeal.
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                From foundation to finishing, we handle complete construction projects with our skilled team of engineers, architects, and craftsmen. Our commitment to excellence and customer satisfaction has made us the preferred choice for construction projects throughout Karnataka.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 mt-6 md:mt-8 font-semibold text-sm md:text-base">
              READ MORE
            </Button>
          </div>

          {/* Image - Order 1 on mobile, Order 2 on desktop */}
          <div className="relative order-1 lg:order-2">
            <img
              src="/construction-worker-in-workshop-with-tools-and-equ.jpg"
              alt="Construction worker in workshop"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-slate-900 text-white p-4 md:p-6 rounded-lg">
              <div className="text-2xl md:text-4xl font-black text-orange-500">2023</div>
              <div className="text-xs md:text-sm tracking-wider">SINCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
