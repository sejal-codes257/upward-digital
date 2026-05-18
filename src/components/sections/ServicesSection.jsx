import { motion } from 'framer-motion';
import { services } from '../../data';
import SectionLabel from '../ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <section className="section-padding py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <SectionLabel className="mb-8">What We Do</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-none">
              Every site is<br />
              <em className="text-beige">hand-built</em><br />
              from scratch.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-white/40 leading-relaxed mb-8">
              No Wix. No Squarespace. No page builders. Every line of code written with intention, every pixel placed with purpose.
            </p>
            <Link to="/services" className="cinematic-btn inline-flex">
              <span>All Services</span>
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-deep-black p-10 group hover:bg-charcoal/30 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl text-white/10 group-hover:text-beige/20 transition-colors duration-500">
                  {service.number}
                </span>
                <ArrowUpRight size={16} className="text-beige/0 group-hover:text-beige/60 transition-all duration-500 mt-2" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-beige transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map(d => (
                  <li key={d} className="flex items-center gap-3 text-xs text-white/25">
                    <div className="w-1 h-1 bg-beige/40 rounded-full" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
