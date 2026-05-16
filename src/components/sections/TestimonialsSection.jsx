import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { RevealText, SectionLabel } from '../../animations/Reveal'
import { testimonials } from '../../data/siteData'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section className="section-pad bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="font-display text-[20rem] font-light text-white/[0.015] leading-none select-none">"</div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <SectionLabel text="Client Stories" />
        <RevealText>
          <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-light text-silk leading-tight mb-16">
            What our clients say.
          </h2>
        </RevealText>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center gap-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-[clamp(1.4rem,3vw,2.5rem)] font-light text-silk/90 leading-relaxed italic max-w-3xl">
                "{current.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-deep-blue border border-electric-blue/20 flex items-center justify-center">
                  <span className="font-display text-lg text-silk/40">
                    {current.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-sans font-medium text-silk text-sm">{current.name}</p>
                  <p className="font-mono text-xs text-silver/40 tracking-wide">{current.role}, {current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev}
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 transition-colors duration-300 text-silver/40 hover:text-ice-blue">
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-px transition-all duration-300 ${i === active ? 'w-8 bg-electric-blue' : 'w-4 bg-white/20'}`} />
            ))}
          </div>

          <button onClick={next}
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 transition-colors duration-300 text-silver/40 hover:text-ice-blue">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
