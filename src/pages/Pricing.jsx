import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { pricingTiers } from '../data';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';

export default function Pricing() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-center mb-20">
            <SectionLabel className="mb-10 justify-center">Investment</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-6">
              Transparent<br /><em className="text-beige">pricing.</em>
            </h1>
            <p className="text-white/40 max-w-xl mx-auto">Every project is a collaborative partnership. These tiers are starting points — your final investment reflects the scope of your vision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pricingTiers.map((tier, i) => (
              <motion.div key={tier.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`p-10 relative ${tier.featured ? 'border border-beige/30 bg-dark-blue' : 'border border-white/8 bg-charcoal/10'}`}
              >
                {tier.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-beige px-4 py-1"><span className="text-black text-xs tracking-widest uppercase font-medium">Signature</span></div>}
                <p className="label-text mb-4">{tier.name}</p>
                <p className="font-serif text-5xl text-white mb-1">{tier.price}</p>
                <div className="beige-line my-6" />
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

          {/* FAQ */}
          <div>
            <SectionLabel className="mb-12">Common Questions</SectionLabel>
            {[
              ['Do you work with international clients?', 'Yes. Our clients are based across the US, UK, Europe, UAE, India, and Southeast Asia. We work entirely remotely via structured discovery calls and collaborative tools.'],
              ['What is your turnaround time?', 'Most Signature projects complete in 6–8 weeks. Rush timelines are available on select projects. Discovery calls allow us to scope your specific timeline accurately.'],
              ['Do you offer payment plans?', 'Yes. All projects begin with a 50% deposit, with the remainder split across key milestones. Custom payment schedules are available for Prestige engagements.'],
              ['Will I own my website completely?', 'Absolutely. Upon final payment, you own 100% of the code, design files, and all associated assets.'],
            ].map(([q, a], i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border-b border-white/5 py-8"
              >
                <h3 className="font-serif text-xl text-white mb-3">{q}</h3>
                <p className="text-white/40 leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
