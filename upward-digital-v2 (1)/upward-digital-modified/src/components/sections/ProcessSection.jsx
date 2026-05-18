import { motion } from 'framer-motion';
import { processSteps } from '../../data';
import SectionLabel from '../ui/SectionLabel';

export default function ProcessSection() {
  return (
    <section className="section-padding py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionLabel className="mb-8">How We Work</SectionLabel>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-none">
            A process as<br />
            <em className="text-beige">refined</em> as the<br />
            results.
          </h2>
        </div>

        <div className="space-y-px">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group grid grid-cols-12 gap-8 py-10 border-b border-white/5 hover:border-beige/20 transition-all duration-500"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-serif text-3xl text-white/10 group-hover:text-beige/30 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <div className="col-span-5 md:col-span-4">
                <h3 className="font-serif text-2xl text-white group-hover:text-beige transition-colors duration-500">{step.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
              <div className="hidden md:block md:col-span-2 text-right">
                <span className="label-text text-white/20">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
