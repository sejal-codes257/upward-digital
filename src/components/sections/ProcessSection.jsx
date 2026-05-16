import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealText, SectionLabel } from '../../animations/Reveal'
import { processSteps } from '../../data/siteData'

function ProcessStep({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 group"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Number + Line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 border border-electric-blue/30 flex items-center justify-center group-hover:border-electric-blue/60 transition-colors duration-500">
          <span className="font-mono text-xs text-electric-blue/60">{step.number}</span>
        </div>
        {index < processSteps.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-electric-blue/20 to-transparent min-h-[3rem]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="font-display text-2xl font-light text-silk mb-2 group-hover:text-ice-blue transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-sm text-silver/40 font-sans font-light leading-relaxed max-w-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  return (
    <section className="section-pad bg-void relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider" />
      <div className="absolute top-0 bottom-0 right-0 w-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, rgba(37,99,235,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left: heading */}
          <div className="sticky top-32">
            <SectionLabel text="How It Works" />
            <RevealText>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-light text-silk leading-tight mb-8">
                A process as refined as<br />
                <em className="italic text-ice-blue/60">your brand.</em>
              </h2>
            </RevealText>
            <p className="text-silver/40 font-sans font-light text-sm leading-relaxed max-w-sm">
              Every project follows a deliberate, cinematic process — from first conversation to final launch and beyond.
            </p>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
