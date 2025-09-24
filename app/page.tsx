import Header from "@/components/header"
import NewHeroSection from "@/components/new-hero-section"
import ComparisonSection from "@/components/comparison-section"
import CostEstimationSection from "@/components/cost-estimation-section"
import HowItWorksSection from "@/components/how-it-works-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewHeroSection />
      <ComparisonSection />
      <CostEstimationSection />
      <HowItWorksSection />
      <ServicesSection />
      <ProjectsSection showAll={false} showSeeMore={true} />
      <Footer />
    </div>
  )
}
