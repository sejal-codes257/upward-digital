import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { RevealText, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { testimonials } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

export default function TestimonialsPage() {
  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <SectionLabel text="Client Stories" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,8rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Voices of<br />
            <em className="italic text-gold/60">transformation.</em>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <StaggerItem key={t.id}>
                <div className="glass p-8 h-full group hover:border-electric-blue/20 transition-colors duration-500 border border-white/5">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote className="font-display text-2xl font-light text-silk/90 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-deep-blue border border-electric-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg text-silk/40">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-silk text-sm">{t.name}</p>
                      <p className="font-mono text-xs text-silver/40 tracking-wide">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
