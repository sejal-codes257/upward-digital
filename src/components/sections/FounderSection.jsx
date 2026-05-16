import { RevealText, RevealFade, RevealSlide, SectionLabel } from '../../animations/Reveal'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FounderSection() {
  return (
    <section className="section-pad bg-obsidian relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <RevealSlide direction="left">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-electric-blue/10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-electric-blue/30" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-electric-blue/30" />

              {/* Placeholder portrait */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-deep-blue to-void overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-royal-blue/40 to-deep-blue mx-auto mb-4 flex items-center justify-center border border-electric-blue/20">
                      <span className="font-display text-4xl text-silk/30">SK</span>
                    </div>
                    <p className="font-mono text-xs text-silver/20 tracking-widest">FOUNDER PORTRAIT</p>
                    <p className="font-mono text-xs text-silver/15 mt-1">Add /assets/images/founder.jpg</p>
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 -right-8 glass-blue px-5 py-3">
                <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/70">Est. 2022</span>
              </div>
            </div>
          </RevealSlide>

          {/* Text side */}
          <div>
            <SectionLabel text="The Founder" />

            <RevealText>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-tight text-silk mb-6">
                Built by someone who <em className="italic text-ice-blue/70">obsesses</em> over digital craft.
              </h2>
            </RevealText>

            <RevealFade delay={0.2}>
              <p className="text-silver/50 font-sans font-light text-base leading-relaxed mb-6">
                I'm <strong className="text-silk font-medium">Sejal Kanwar</strong>, the founder of Upward Digital. I started this agency with one belief: luxury brands deserve websites that match their ambition.
              </p>
              <p className="text-silver/40 font-sans font-light text-sm leading-relaxed mb-8">
                Every project I take on is treated as a signature work — not a deliverable. I don't use templates. I don't cut corners. I code every element by hand and design every screen with cinematic intention.
              </p>
            </RevealFade>

            <RevealFade delay={0.3}>
              <div className="flex flex-col gap-3 mb-10">
                {[
                  'Fully custom-coded — no page builders',
                  'Cinematic motion design as standard',
                  'Direct founder access on every project',
                  'Obsessive attention to premium detail',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-electric-blue rounded-full flex-shrink-0" />
                    <span className="text-sm text-silver/60 font-sans font-light">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                About Sejal
                <ArrowUpRight size={14} />
              </Link>
            </RevealFade>
          </div>
        </div>
      </div>
    </section>
  )
}
