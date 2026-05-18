import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_COLORS = {
  'bg-dark-blue': ['Hotel','Resort'],
  'bg-charcoal': ['Healthcare','Architecture'],
  'bg-midnight': ['Restaurant','Retail'],
};

export default function ProjectCard({ project, index }) {
  const bgColor = Object.entries(CATEGORY_COLORS).find(([, cats]) =>
    cats.includes(project.category)
  )?.[0] || 'bg-charcoal';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden"
    >
      {/* Image area */}
      <div className={`relative aspect-[4/3] ${bgColor} overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : null}
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Placeholder design when no real image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-24 h-24 border border-beige/40 rounded-full flex items-center justify-center">
            <span className="font-serif text-beige text-2xl">{project.number || (index + 1).toString().padStart(2,'0')}</span>
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="label-text bg-black/60 backdrop-blur-sm px-3 py-1.5 text-beige" style={{fontSize:'0.6rem'}}>
            {project.category}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-8 h-8 border border-beige/40 flex items-center justify-center">
            <ArrowUpRight size={14} className="text-beige" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-xl text-white group-hover:text-beige transition-colors duration-400">
              {project.title}
            </h3>
            <p className="text-white/40 text-xs mt-1">{project.description.substring(0, 60)}...</p>
          </div>
          <span className="text-white/20 text-xs mt-1">{project.year}</span>
        </div>
        <div className="flex gap-2 mt-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs text-beige/50 border border-beige/10 px-2 py-0.5">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
