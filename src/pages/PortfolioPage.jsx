import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../animations/Reveal'
import { portfolioProjects, portfolioCategories } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden bg-ink aspect-[4/3]"
    >
      {/* Placeholder image */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-ink to-void flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3">
            <span className="font-display text-xl text-silver/20">{project.id}</span>
          </div>
          <p className="font-mono text-xs text-silver/15">{project.title}</p>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/70 mb-2">{project.category}</span>
        <h3 className="font-display text-2xl text-silk font-light mb-2">{project.title}</h3>
        <p className="text-sm text-silver/60 font-sans font-light mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono text-silver/40 border border-white/10 px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 glass px-3 py-1">
        <span className="font-mono text-xs text-silver/40">{project.year}</span>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === active)

  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="Selected Work" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Work that<br />
            <span className="italic text-gradient-gold">speaks.</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                  active === cat
                    ? 'border-electric-blue/50 text-ice-blue bg-electric-blue/10'
                    : 'border-white/10 text-silver/40 hover:border-white/25 hover:text-silver/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
