import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { industries } from '../data';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">Our Story</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-16">
              Built for<br /><em className="text-beige">brands that</em><br />refuse ordinary.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <p className="text-white/60 text-lg leading-relaxed mb-6">Upward Digital was founded by Sejal Kanwar with one conviction: the world's most exceptional businesses deserved websites that felt as elevated as their offerings.</p>
              <p className="text-white/40 leading-relaxed mb-6">After years of watching premium hotels, acclaimed restaurants, and distinguished medical practices undermine their positioning with generic, template-built websites, Sejal set out to change the industry standard.</p>
              <p className="text-white/40 leading-relaxed">Today, Upward Digital crafts cinematic, custom-coded digital experiences for discerning clients across the globe — each project a bespoke collaboration that begins with deep brand understanding and ends with a website that commands attention and converts premium clients.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
              <div className="aspect-square bg-dark-blue relative overflow-hidden">
                <img src="/assets/images/team/sejal-kanwar.jpg" alt="Sejal Kanwar" className="w-full h-full object-cover opacity-70" onError={e=>{e.target.style.display='none'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-2xl text-white">Sejal Kanwar</p>
                  <p className="label-text text-beige mt-1">Founder & Creative Director</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <SectionLabel className="mb-12">Our Values</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {[
                { title: 'No Templates. Ever.', body: 'Every project begins with a blank canvas and ends with something that has never existed before.' },
                { title: 'Obsessive Detail.', body: 'From pixel-precise typography to sub-100ms load times — nothing ships without meeting our standard.' },
                { title: 'Partnership, Not Transactions.', body: "We're invested in your long-term success, not just your launch date." },
              ].map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="bg-deep-black p-10"
                >
                  <h3 className="font-serif text-2xl text-white mb-4">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <SectionLabel className="mb-10">Industries We Serve</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {industries.map(ind => (
                <span key={ind} className="border border-white/10 px-5 py-2.5 text-white/40 text-sm hover:border-beige/30 hover:text-beige transition-all duration-300">{ind}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
