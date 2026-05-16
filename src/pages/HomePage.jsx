import Hero from '../components/sections/Hero'
import FounderSection from '../components/sections/FounderSection'
import ServicesSection from '../components/sections/ServicesSection'
import IndustriesTicker from '../components/sections/IndustriesTicker'
import ProcessSection from '../components/sections/ProcessSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IndustriesTicker />
      <FounderSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
