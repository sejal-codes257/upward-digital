import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RevealText, RevealFade, SectionLabel, StaggerContainer, StaggerItem } from '../animations/Reveal'
import { blogPosts } from '../data/siteData'
import CTASection from '../components/sections/CTASection'

function BlogCard({ post, large }) {
  return (
    <div className={`group relative overflow-hidden bg-ink border border-white/5 hover:border-white/10 transition-all duration-500 ${large ? '' : ''}`}>
      {/* Image placeholder */}
      <div className={`bg-gradient-to-br from-deep-blue to-void flex items-center justify-center ${large ? 'aspect-[16/9]' : 'aspect-[16/9]'}`}>
        <div className="text-center p-6">
          <div className="w-12 h-12 border border-electric-blue/20 flex items-center justify-center mx-auto mb-3">
            <span className="font-mono text-xs text-silver/20">{post.id}</span>
          </div>
          <p className="font-mono text-xs text-silver/15">{post.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/60">{post.category}</span>
          <span className="font-mono text-xs text-silver/25">{post.readTime} read</span>
        </div>
        <h3 className="font-display text-xl font-light text-silk group-hover:text-ice-blue transition-colors duration-500 mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-silver/40 font-sans font-light leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-electric-blue/0 group-hover:text-electric-blue/60 transition-all duration-500">
          Read Article <ArrowUpRight size={12} />
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const featured = blogPosts.filter(p => p.featured)
  const regular = blogPosts.filter(p => !p.featured)

  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="Insights" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Thoughts on<br />
            <em className="italic text-ice-blue/60">digital luxury.</em>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <StaggerItem key={post.id}>
                <BlogCard post={post} large={i === 0} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
