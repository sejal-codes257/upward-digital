import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { services, pricingTiers } from '../data';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">What We Offer</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-20">
              Services<br /><em className="text-beige">built for</em><br />premium.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-32">
            {services.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-deep-black p-12 group hover:bg-charcoal/30 transition-colors duration-500"
              >
                <span className="font-serif text-6xl text-white/8 group-hover:text-beige/15 transition-colors duration-500 block mb-6">{s.number}</span>
                <h2 className="font-serif text-3xl text-white mb-4 group-hover:text-beige transition-colors duration-500">{s.title}</h2>
                <p className="text-white/40 leading-relaxed mb-8">{s.description}</p>
                <ul className="space-y-3">
                  {s.details.map(d => (
                    <li key={d} className="flex items-center gap-3 text-sm text-white/30">
                      <Check size={12} className="text-beige flex-shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Inline Pricing */}
          <div className="mb-12">
            <SectionLabel className="mb-10">Investment</SectionLabel>
            <h2 className="font-serif text-5xl text-white mb-16">Clear, honest<br /><em className="text-beige">pricing.</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div key={tier.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`p-10 relative ${tier.featured ? 'border border-beige/30 bg-dark-blue' : 'border border-white/8 bg-charcoal/20'}`}
              >
                {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-beige px-4 py-1"><span className="text-black text-xs tracking-widest uppercase font-medium">Most Popular</span></div>}
                <p className="label-text mb-4">{tier.name}</p>
                <p className="font-serif text-5xl text-white mb-2">{tier.price}</p>
                <p className="text-white/30 text-sm mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/50">
                      <Check size={12} className="text-beige mt-0.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="cinematic-btn w-full justify-center inline-flex">
                  <span>{tier.cta}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
