import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RevealText, RevealFade, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { caseStudies } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="Case Studies" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Results that<br />
            <em className="italic text-ice-blue/60">prove the craft.</em>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {caseStudies.map((study, i) => (
            <RevealFade key={study.id} delay={i * 0.1}>
              <div className="grid md:grid-cols-2 gap-16 items-center pb-20 border-b border-white/5 last:border-0">
                {/* Image */}
                <div className={`relative aspect-video bg-gradient-to-br from-deep-blue to-void overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3">
                        <span className="font-mono text-xs text-silver/20">CASE {study.id}</span>
                      </div>
                      <p className="font-mono text-xs text-silver/15">{study.client}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/60 block mb-4">{study.category}</span>
                  <h2 className="font-display text-4xl font-light text-silk mb-6">{study.client}</h2>

                  <div className="space-y-5 mb-8">
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase text-silver/30 mb-2">The Challenge</h4>
                      <p className="text-sm text-silver/50 font-sans font-light leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase text-silver/30 mb-2">The Solution</h4>
                      <p className="text-sm text-silver/50 font-sans font-light leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map(r => (
                      <div key={r.label} className="border border-white/8 p-4 text-center">
                        <div className="font-display text-2xl font-light text-gradient-blue">{r.metric}</div>
                        <div className="font-mono text-xs text-silver/30 mt-1 tracking-wide">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealFade>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
