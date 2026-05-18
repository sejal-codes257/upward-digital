import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import SectionLabel from '../components/ui/SectionLabel';
import { portfolioProjects } from '../data';

const categories = ['All', 'Hotel', 'Resort', 'Healthcare', 'Restaurant', 'Architecture', 'Retail'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? portfolioProjects : portfolioProjects.filter(p => p.category === active || p.tags.includes(active));

  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">Selected Work</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-16">
              Our<br /><em className="text-beige">Portfolio</em>
            </h1>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`label-text px-5 py-2.5 border transition-all duration-300 ${active === cat ? 'border-beige text-beige' : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'}`}
              >{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
