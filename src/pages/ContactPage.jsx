import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { RevealText, RevealFade, SectionLabel } from '../animations/Reveal'
import { siteConfig } from '../data/siteData'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main>
      <section className="min-h-[50vh] flex items-end pb-16 bg-void relative overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <SectionLabel text="Let's Talk" />
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,9rem)] font-light text-silk leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Begin your<br />
            <em className="italic text-ice-blue/60">ascent.</em>
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left info */}
            <RevealFade className="md:col-span-2">
              <div className="space-y-12">
                <div>
                  <h3 className="font-display text-2xl font-light text-silk mb-6">Get in touch</h3>
                  <p className="text-sm text-silver/40 font-sans font-light leading-relaxed">
                    Ready to build something extraordinary? Tell us about your project and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-electric-blue/20 flex items-center justify-center group-hover:border-electric-blue/50 transition-colors duration-300">
                      <Mail size={16} className="text-electric-blue/50" />
                    </div>
                    <span className="text-sm text-silver/50 group-hover:text-silk transition-colors duration-300">{siteConfig.email}</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-electric-blue/20 flex items-center justify-center">
                      <Phone size={16} className="text-electric-blue/50" />
                    </div>
                    <span className="text-sm text-silver/50">{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-electric-blue/20 flex items-center justify-center">
                      <MapPin size={16} className="text-electric-blue/50" />
                    </div>
                    <span className="text-sm text-silver/50">{siteConfig.location}</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                  <p className="font-mono text-xs tracking-widest uppercase text-silver/25 mb-4">Typical Response</p>
                  <p className="text-sm text-silver/40 font-sans">Within 24 hours, business days.</p>
                </div>
              </div>
            </RevealFade>

            {/* Right form */}
            <RevealFade delay={0.2} className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-blue p-12 text-center h-full flex flex-col items-center justify-center gap-6"
                >
                  <CheckCircle2 size={48} className="text-electric-blue" />
                  <h3 className="font-display text-3xl font-light text-silk">Message received.</h3>
                  <p className="text-sm text-silver/40 font-sans font-light">We'll be in touch within 24 hours. Looking forward to hearing your vision.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text', required: true },
                      { name: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email', required: true },
                      { name: 'company', label: 'Company / Brand', placeholder: 'Your company', type: 'text' },
                      { name: 'service', label: 'Service Needed', placeholder: 'e.g. Hotel Website', type: 'text' },
                    ].map(field => (
                      <div key={field.name} className={field.name === 'name' || field.name === 'email' ? '' : ''}>
                        <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-ink border border-white/8 focus:border-electric-blue/40 text-silk placeholder:text-silver/20 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-ink border border-white/8 focus:border-electric-blue/40 text-silk font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-ink">Select budget</option>
                      <option value="under-50k" className="bg-ink">Under ₹50,000</option>
                      <option value="50k-1l" className="bg-ink">₹50,000 – ₹1,00,000</option>
                      <option value="1l-2l" className="bg-ink">₹1,00,000 – ₹2,00,000</option>
                      <option value="above-2l" className="bg-ink">Above ₹2,00,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and what makes your brand unique..."
                      rows={5}
                      required
                      className="w-full bg-ink border border-white/8 focus:border-electric-blue/40 text-silk placeholder:text-silver/20 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center gap-3" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </RevealFade>
          </div>
        </div>
      </section>
    </main>
  )
}
