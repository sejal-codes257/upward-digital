import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data';
import SectionLabel from '../ui/SectionLabel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="section-padding py-32 section-bg-alt">
      <div className="max-w-4xl mx-auto">
        <SectionLabel className="mb-16">Client Words</SectionLabel>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            <blockquote className="font-serif text-3xl md:text-4xl text-white/90 leading-relaxed mb-12 italic">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-beige/20 border border-beige/20 flex items-center justify-center">
                <span className="font-serif text-beige">{t.name[0]}</span>
              </div>
              <div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-white/30 text-sm">{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4 mt-12">
          <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 border border-white/10 hover:border-beige/40 flex items-center justify-center transition-colors">
            <ChevronLeft size={16} className="text-white/40" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-beige' : 'bg-white/20'}`} />
            ))}
          </div>
          <button onClick={() => setIdx(i => (i + 1) % testimonials.length)} className="w-10 h-10 border border-white/10 hover:border-beige/40 flex items-center justify-center transition-colors">
            <ChevronRight size={16} className="text-white/40" />
          </button>
        </div>
      </div>
    </section>
  );
}
