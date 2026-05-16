import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Diamond, Building, Stethoscope, UtensilsCrossed, Compass, Sparkles, Layers, TrendingUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealText, SectionLabel, StaggerContainer, StaggerItem } from '../../animations/Reveal'
import { services } from '../../data/siteData'

const iconMap = { Code2, Diamond, Building, Stethoscope, UtensilsCrossed, Compass, Sparkles, Layers, TrendingUp }

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="section-pad bg-void relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(10,22,40,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <SectionLabel text="What We Build" />
            <RevealText>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-light text-silk leading-tight">
                Services crafted<br />
                <em className="italic text-ice-blue/60">for the elite.</em>
              </h2>
            </RevealText>
          </div>
          <RevealText delay={0.2}>
            <Link to="/services" className="btn-outline inline-flex items-center gap-2 shrink-0">
              All Services <ArrowUpRight size={14} />
            </Link>
          </RevealText>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="relative p-8 bg-void group overflow-hidden"
                  onHoverStart={() => setHovered(service.id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ backgroundColor: 'rgba(10,22,40,0.9)' }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Hover glow */}
                  <AnimatePresence>
                    {hovered === service.id && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(37,99,235,0.1) 0%, transparent 60%)' }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Number */}
                  <span className="absolute top-6 right-6 font-mono text-xs text-silver/15">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 border border-electric-blue/20 flex items-center justify-center group-hover:border-electric-blue/50 transition-colors duration-500">
                      {Icon && <Icon size={20} className="text-electric-blue/60 group-hover:text-electric-blue transition-colors duration-500" />}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-light text-silk mb-3 group-hover:text-ice-blue transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-silver/40 font-sans font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-electric-blue/0 group-hover:text-electric-blue/60 transition-colors duration-500"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
                    <ArrowUpRight size={12} />
                  </motion.div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
