import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';

export default function FounderSection() {
  return (
    <section className="section-padding py-32 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SectionLabel className="mb-10">Founded By</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-none mb-8">
              Sejal Kanwar<br />
              <em className="text-beige text-3xl md:text-4xl">Founder & Creative Director</em>
            </h2>
            <p className="text-white/40 leading-relaxed mb-6">
              Upward Digital was built on a single belief: premium businesses deserve websites that match their ambition. No templates. No compromises.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              After years of watching luxury brands undermine their positioning with generic digital experiences, Sejal founded Upward Digital to change that — one custom-coded masterpiece at a time.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[['50+','Projects Delivered'],['12','Industries Served'],['98%','Client Retention']].map(([num,label]) => (
                <div key={label}>
                  <p className="font-serif text-4xl text-beige mb-1">{num}</p>
                  <p className="text-white/30 text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-dark-blue relative overflow-hidden">
              <img
                src="/assets/images/team/sejal-kanwar.jpg"
                alt="Sejal Kanwar — Founder, Upward Digital"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="font-serif text-3xl text-white">Sejal Kanwar</p>
                  <p className="label-text text-beige mt-1">Founder & Creative Director</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-beige/10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-beige/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
