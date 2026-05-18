import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('ud_inquiries') || '[]');
    saved.push({ ...form, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('ud_inquiries', JSON.stringify(saved));
    setSubmitted(true);
  };

  const inputClass = "w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-beige/50 transition-colors duration-300 text-sm";

  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">Get In Touch</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-20">
              Let's build<br />something<br /><em className="text-beige">remarkable.</em>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              {submitted ? (
                <div className="border border-beige/20 p-12">
                  <p className="font-serif text-3xl text-white mb-4">Thank you.</p>
                  <p className="text-white/40">We'll be in touch within 24 hours to discuss your project. We look forward to working with you.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="label-text block mb-3">Your Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Full name" className={inputClass} />
                    </div>
                    <div>
                      <label className="label-text block mb-3">Email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="label-text block mb-3">Company / Brand</label>
                    <input name="company" value={form.company} onChange={handle} placeholder="Hotel Maison, Dr. Aria Clinic..." className={inputClass} />
                  </div>
                  <div>
                    <label className="label-text block mb-3">Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handle} className={`${inputClass} bg-deep-black cursor-pointer`}>
                      <option value="" className="bg-deep-black">Select a range</option>
                      <option value="2500-5000" className="bg-deep-black">$2,500 – $5,000</option>
                      <option value="5000-10000" className="bg-deep-black">$5,000 – $10,000</option>
                      <option value="10000+" className="bg-deep-black">$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-text block mb-3">Tell Us About Your Project</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={5} required placeholder="What does your business do, who are your ideal clients, and what should your website achieve?" className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="cinematic-btn inline-flex">
                    <span>Send Inquiry</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:pt-8 space-y-12"
            >
              <div>
                <p className="label-text mb-4">Response Time</p>
                <p className="font-serif text-2xl text-white">Within 24 hours</p>
                <p className="text-white/30 text-sm mt-2">We take every project seriously and respond to every inquiry personally.</p>
              </div>
              <div className="beige-line" />
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-beige mt-1" />
                <div>
                  <p className="label-text mb-2">Email</p>
                  <a href="mailto:hello@upwarddigital.co" className="text-white hover:text-beige transition-colors">hello@upwarddigital.co</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-beige mt-1" />
                <div>
                  <p className="label-text mb-2">Based In</p>
                  <p className="text-white/60">India — serving clients globally</p>
                </div>
              </div>
              <div className="beige-line" />
              <div>
                <p className="label-text mb-4">What Happens Next</p>
                <ol className="space-y-4">
                  {['We review your inquiry and research your industry','Discovery call scheduled within 48 hours','Custom proposal delivered within 5 days'].map((step, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-white/40">
                      <span className="font-serif text-beige/60 text-lg leading-none">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
