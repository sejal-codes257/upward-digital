import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ParticleField from '../animations/ParticleField'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-void flex items-center justify-center relative overflow-hidden">
      <ParticleField count={30} opacity={0.3} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center px-6">
        {/* Giant 404 */}
        <motion.div
          className="font-display font-light leading-none select-none mb-8"
          style={{
            fontSize: 'clamp(8rem, 25vw, 22rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(147,197,253,0.12)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="line-accent" />
            <span className="font-mono text-xs tracking-megawide uppercase text-electric-blue/50">
              Page Not Found
            </span>
            <span className="line-accent rotate-180" />
          </div>

          <h1 className="font-display text-[clamp(1.8rem,4vw,4rem)] font-light text-silk leading-tight">
            This page doesn't exist.<br />
            <em className="italic text-silver/40">Yet.</em>
          </h1>

          <p className="text-sm text-silver/40 font-sans font-light max-w-xs leading-relaxed">
            The page you're looking for has either moved or never existed. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
