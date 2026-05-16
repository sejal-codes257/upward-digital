import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { RevealText, RevealFade, SectionLabel } from '../../animations/Reveal'
import { portfolioProjects, portfolioCategories } from '../../data/siteData'

// Placeholder image component
function ProjectImage({ src, alt }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-void flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3">
          <span className="font-mono text-xs text-silver/20">IMG</span>
        </div>
        <p className="font-mono text-xs text-silver/15">{alt}</p>
        <p className="font-mono text-xs text-silver/10 mt-1">Add image to /assets/images/</p>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const featured = portfolioProjects.filter(p => p.featured)

  const filtered = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <section className="section-pad bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <SectionLabel text="Selected Work" />
            <RevealText>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-light text-silk leading-tight">
                Crafted with<br />
                <em className="italic text-gold/60">precision.</em>
              </h2>
            </RevealText>
          </div>
          <RevealFade delay={0.2}>
            <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2 shrink-0">
              Full Portfolio <ArrowUpRight size={14} />
            </Link>
          </RevealFade>
        </div>

        {/* Category filter */}
        <RevealFade delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {portfolioCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'border-electric-blue/50 text-ice-blue bg-electric-blue/10'
                    : 'border-white/10 text-silver/40 hover:border-white/25 hover:text-silver/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealFade>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden bg-ink ${
                  i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <ProjectImage src={project.image} alt={project.title} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/70 mb-2">{project.category}</span>
                  <h3 className="font-display text-2xl text-silk font-light mb-2">{project.title}</h3>
                  <p className="text-sm text-silver/60 font-sans font-light mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-silver/40 border border-white/10 px-2 py-1">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Always visible tag */}
                <div className="absolute top-4 left-4 glass px-3 py-1">
                  <span className="font-mono text-xs text-silver/50">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
