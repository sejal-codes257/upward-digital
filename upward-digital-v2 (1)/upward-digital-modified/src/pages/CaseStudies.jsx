import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { portfolioProjects } from '../data';

export default function CaseStudies() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">Deep Dives</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-20">
              Case<br /><em className="text-beige">Studies</em>
            </h1>
          </motion.div>
          <div className="space-y-32">
            {portfolioProjects.filter(p => p.featured).map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="label-text text-beige mb-4 block">{project.category}</span>
                  <h2 className="font-serif text-4xl text-white mb-6">{project.title}</h2>
                  <p className="text-white/40 leading-relaxed mb-8">{project.description}</p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[['Industry',project.category],['Year',project.year],['Scope','Full Build']].map(([label,val]) => (
                      <div key={label}>
                        <p className="label-text text-white/20 mb-1">{label}</p>
                        <p className="text-white text-sm">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[['Challenge','Needed to command premium positioning in a crowded market.'],['Solution','Cinematic visual language with seamless conversion architecture.'],['Results','40% increase in qualified inquiries within 60 days of launch.']].map(([label,val]) => (
                      <div key={label} className="flex gap-4 text-sm">
                        <span className="text-beige/60 w-20 flex-shrink-0">{label}</span>
                        <span className="text-white/40">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`aspect-[4/3] bg-dark-blue relative overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70" onError={e=>{e.target.style.display='none'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="font-serif text-9xl text-beige">{String(i+1).padStart(2,'0')}</span>
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
