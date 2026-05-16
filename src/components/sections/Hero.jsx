import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParticleField from '../../animations/ParticleField'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void noise-overlay">
      {/* Particles */}
      <ParticleField count={40} opacity={0.5} />

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse, rgba(10,22,40,0.8) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%)' }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="line-accent" />
          <span className="font-mono text-xs tracking-megawide uppercase text-electric-blue/60">
            Luxury Digital Agency
          </span>
          <span className="line-accent rotate-180" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.9] tracking-tight text-silk"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Where Vision
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.9] tracking-tight italic"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ color: 'transparent', WebkitTextStroke: '1px rgba(147,197,253,0.6)' }}
          >
            Ascends.
          </motion.h1>
        </div>

        {/* Subline */}
        <motion.p
          className="font-sans font-light text-silver/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          Cinematic, custom-coded websites for elite hotels, clinics, restaurants, and brands that refuse to be ordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
        >
          <Link to="/contact" className="btn-primary">
            Begin Your Project
          </Link>
          <Link to="/portfolio" className="btn-outline">
            View Portfolio
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '18+', label: 'Industries' },
            { value: '100%', label: 'Satisfaction' },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-light text-gradient-blue">{stat.value}</span>
              <span className="font-mono text-xs tracking-widest uppercase text-silver/30">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase text-silver/25">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-silver/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
