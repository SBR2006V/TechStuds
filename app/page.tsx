import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { LimitationsSection } from "@/components/limitations-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ArchitectureSection />
        <FeaturesSection />
        <ComparisonSection />
        <LimitationsSection />
      </main>
      <Footer />
    </>
  )
}
