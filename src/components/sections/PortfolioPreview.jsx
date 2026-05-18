import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import SectionLabel from '../ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPreview() {
  const featured = portfolioProjects.filter(p => p.featured);
  return (
    <section className="section-padding py-32 section-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <SectionLabel className="mb-8">Selected Work</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-none">
              Built for<br />
              <em className="text-beige">brands that</em><br />
              charge more.
            </h2>
          </div>
          <Link to="/portfolio" className="cinematic-btn self-start md:self-auto inline-flex">
            <span>All Projects</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
