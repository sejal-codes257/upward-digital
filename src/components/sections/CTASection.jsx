import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding py-40 bg-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-beige/5 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="label-text mb-8 block">The Next Step</span>
          <h2 className="font-serif text-6xl md:text-8xl text-white leading-none mb-8">
            Your website<br />
            <em className="text-beige">should be your</em><br />
            best salesperson.
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-12 leading-relaxed">
            Let's build a digital experience that positions you as the premium choice — and fills your calendar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/contact" className="cinematic-btn">
              <span>Begin Your Project</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/pricing" className="flex items-center gap-3 text-white/40 hover:text-beige transition-colors duration-500 text-xs tracking-widest uppercase group">
              <span>View Pricing</span>
              <span className="w-6 h-px bg-white/20 group-hover:bg-beige group-hover:w-10 transition-all duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
