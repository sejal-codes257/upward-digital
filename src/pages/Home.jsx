import Hero from '../components/sections/Hero';
import IndustryMarquee from '../components/sections/Marquee';
import CinematicVideo from '../components/sections/CinematicVideo';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import ProcessSection from '../components/sections/ProcessSection';
import FounderSection from '../components/sections/FounderSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryMarquee />
      <CinematicVideo />
      <ServicesSection />
      <PortfolioPreview />
      <ProcessSection />
      <FounderSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
