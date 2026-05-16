import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealText, RevealFade, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { pricingPlans } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

export default function PricingPage() {
  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <SectionLabel text="Investment" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,8rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Transparent pricing.<br />
            <em className="italic text-ice-blue/60">Extraordinary results.</em>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <StaggerItem key={plan.id}>
                <div className={`relative flex flex-col h-full p-8 border transition-all duration-500 group ${
                  plan.featured
                    ? 'border-electric-blue/40 bg-deep-blue/30 glow-blue'
                    : 'border-white/8 bg-ink hover:border-white/15'
                }`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-electric-blue text-white font-mono text-xs tracking-widest uppercase px-4 py-1">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <span className="font-mono text-xs tracking-megawide uppercase text-silver/30 block mb-3">{plan.tagline}</span>
                    <h3 className="font-display text-3xl font-light text-silk mb-2">{plan.name}</h3>
                    <p className="text-sm text-silver/40 font-sans font-light">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="font-display text-5xl font-light text-silk">{plan.price}</div>
                    <div className="font-mono text-sm text-silver/30 mt-1">{plan.priceUSD} USD</div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={14} className="text-electric-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-silver/50 font-sans font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealFade delay={0.4}>
            <p className="text-center text-sm text-silver/30 font-sans font-light mt-10">
              All prices are starting prices. Final quote depends on project scope.{' '}
              <Link to="/contact" className="text-electric-blue/60 hover:text-electric-blue underline-offset-4 hover:underline">
                Get a custom quote →
              </Link>
            </p>
          </RevealFade>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-void">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel text="FAQ" />
          <RevealText>
            <h2 className="font-display text-4xl font-light text-silk mb-12">Common questions.</h2>
          </RevealText>
          <div className="space-y-8">
            {[
              { q: 'Do you use templates or page builders?', a: 'Never. Every website is hand-coded from scratch. No WordPress, no Wix, no Squarespace — only clean, custom code.' },
              { q: 'How long does a project take?', a: 'Essential projects: 2-3 weeks. Signature: 4-6 weeks. Prestige: 6-12 weeks. Timelines depend on content readiness and scope.' },
              { q: 'Can I see your work before deciding?', a: 'Absolutely. Visit our portfolio or book a call and we\'ll walk you through recent projects relevant to your industry.' },
              { q: 'Do you offer ongoing maintenance?', a: 'Yes. All packages include post-launch support. We also offer monthly maintenance retainers for updates, performance monitoring, and content changes.' },
            ].map((item, i) => (
              <RevealFade key={i} delay={i * 0.1}>
                <div className="border-b border-white/5 pb-8">
                  <h4 className="font-display text-xl font-light text-silk mb-3">{item.q}</h4>
                  <p className="text-sm text-silver/40 font-sans font-light leading-relaxed">{item.a}</p>
                </div>
              </RevealFade>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
