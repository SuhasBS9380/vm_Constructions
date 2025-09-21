import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection showAll={false} showSeeMore={true} />
      <TeamSection />
      <Footer />
    </div>
  )
}
