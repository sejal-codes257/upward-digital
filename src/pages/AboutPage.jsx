import { motion } from 'framer-motion'
import { RevealText, RevealFade, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { stats } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-end pb-20 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="About Upward Digital" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            We build the<br />
            <em className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(147,197,253,0.5)' }}>
              digital face
            </em><br />
            of luxury.
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <SectionLabel text="Our Belief" />
            <RevealText>
              <h2 className="font-display text-4xl font-light text-silk leading-tight mb-8">
                A luxury brand deserves a website that matches its ambition.
              </h2>
            </RevealText>
          </div>
          <RevealFade delay={0.3}>
            <div className="space-y-5 pt-6">
              <p className="text-silver/50 font-sans font-light leading-relaxed">
                Upward Digital was founded on a singular conviction: that elite businesses — the kind that obsess over candlelight placement, thread count, and the exact curvature of a doorhandle — deserve websites coded with equal obsession.
              </p>
              <p className="text-silver/40 font-sans font-light leading-relaxed text-sm">
                We don't build with page builders. We don't use templates. Every line of code is handcrafted. Every motion is deliberate. Every typography choice is intentional. Because your brand deserves nothing less.
              </p>
            </div>
          </RevealFade>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-void border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="font-display text-5xl font-light text-gradient-blue mb-2">{stat.value}</div>
                  <div className="font-mono text-xs tracking-widest uppercase text-silver/40">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founder deep dive */}
      <section className="section-pad bg-obsidian">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel text="The Founder" />
          <RevealText>
            <h2 className="font-display text-[clamp(2rem,5vw,5rem)] font-light text-silk mb-12 leading-tight">
              Founded by <em className="italic text-ice-blue/70">Sejal Kanwar</em>
            </h2>
          </RevealText>
          <div className="grid md:grid-cols-3 gap-12">
            <RevealFade>
              <div className="md:col-span-2 space-y-5">
                <p className="text-silver/60 font-sans font-light leading-relaxed">
                  Sejal Kanwar is a self-taught developer and designer with an obsessive eye for cinematic aesthetics. After years of frustration watching premium brands settle for ordinary websites, she founded Upward Digital to offer something different.
                </p>
                <p className="text-silver/40 font-sans font-light leading-relaxed text-sm">
                  Her approach blends editorial design thinking with engineering discipline — she codes every project herself, maintaining direct creative control and a level of craft that agencies simply can't replicate.
                </p>
                <p className="text-silver/40 font-sans font-light leading-relaxed text-sm">
                  When she's not building websites, Sejal studies motion design, cinematic photography, and the psychology of luxury brand perception.
                </p>
              </div>
            </RevealFade>
            <RevealFade delay={0.2}>
              <div className="space-y-4">
                {[
                  { label: 'Specialty', value: 'Luxury Web Experiences' },
                  { label: 'Tech Stack', value: 'React, GSAP, Three.js' },
                  { label: 'Location', value: 'India · Global' },
                  { label: 'Approach', value: 'Founder-Led, No Agency' },
                ].map(item => (
                  <div key={item.label} className="border-b border-white/5 pb-4">
                    <span className="font-mono text-xs text-silver/30 block mb-1">{item.label}</span>
                    <span className="text-sm text-silk font-sans font-light">{item.value}</span>
                  </div>
                ))}
              </div>
            </RevealFade>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
