import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-void relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      {/* Blue glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.span
          className="font-mono text-xs tracking-megawide uppercase text-electric-blue/60 mb-8 block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to Ascend?
        </motion.span>

        <motion.h2
          className="font-display text-[clamp(3rem,8vw,8rem)] font-light text-silk leading-tight mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          Let's build something<br />
          <span className="italic" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(147,197,253,0.5)' }}>
            extraordinary.
          </span>
        </motion.h2>

        <motion.p
          className="text-silver/40 font-sans font-light text-base max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Every great brand begins with a conversation. Tell us your vision — we'll make it cinematic.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Link to="/contact" className="btn-primary">
            Start a Project
          </Link>
          <Link to="/pricing" className="btn-outline inline-flex items-center gap-2">
            View Pricing <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {['Custom Coded', 'No Templates', 'Direct Founder Access', 'Global Clients'].map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-electric-blue/60 rounded-full" />
              <span className="font-mono text-xs tracking-widest uppercase text-silver/40">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
