import { motion } from 'framer-motion'
import { Code2, Diamond, Building, Stethoscope, UtensilsCrossed, Compass, Sparkles, Layers, TrendingUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealText, RevealFade, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { services } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

const iconMap = { Code2, Diamond, Building, Stethoscope, UtensilsCrossed, Compass, Sparkles, Layers, TrendingUp }

export default function ServicesPage() {
  return (
    <main>
      <section className="min-h-[60vh] flex items-end pb-20 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="What We Offer" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Services for<br />
            <em className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(147,197,253,0.5)' }}>
              extraordinary
            </em><br />
            brands.
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <StaggerItem key={service.id}>
                  <div className="p-10 bg-obsidian group hover:bg-deep-blue/20 transition-colors duration-500 h-full">
                    <div className="mb-8">
                      <div className="w-14 h-14 border border-electric-blue/20 group-hover:border-electric-blue/50 flex items-center justify-center transition-colors duration-500 mb-6">
                        {Icon && <Icon size={22} className="text-electric-blue/50 group-hover:text-electric-blue transition-colors duration-500" />}
                      </div>
                      <span className="font-mono text-xs text-silver/25 tracking-widest">{(i+1).toString().padStart(2,'0')}</span>
                    </div>
                    <h3 className="font-display text-2xl font-light text-silk mb-4 group-hover:text-ice-blue transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm text-silver/40 font-sans font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact" className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-electric-blue/0 group-hover:text-electric-blue/60 transition-all duration-500">
                      Enquire <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why custom code? */}
      <section className="section-pad bg-void">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel text="Why Custom Code?" />
          <RevealText>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-light text-silk mb-8">
              Templates are invisible.<br />
              <em className="italic text-ice-blue/70">We make you unforgettable.</em>
            </h2>
          </RevealText>
          <RevealFade delay={0.3}>
            <p className="text-silver/40 font-sans font-light text-base leading-relaxed max-w-2xl mx-auto">
              Every luxury hotel, clinic, and brand we've worked with had one thing in common: they needed a website that reflected the premium reality of their experience — not a template anyone else could have.
            </p>
          </RevealFade>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
