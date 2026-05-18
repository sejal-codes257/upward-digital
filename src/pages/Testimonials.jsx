import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">What Clients Say</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-20">
              Client<br /><em className="text-beige">Words</em>
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-deep-black p-12 hover:bg-charcoal/20 transition-colors duration-500"
              >
                <div className="flex gap-1 mb-8">{Array(t.rating).fill(0).map((_,j) => <Star key={j} size={12} className="text-beige fill-beige" />)}</div>
                <blockquote className="font-serif text-xl text-white/80 italic leading-relaxed mb-10">"{t.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-beige/10 border border-beige/20 flex items-center justify-center">
                    <span className="font-serif text-beige">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
