import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SectionLabel } from '../animations/Reveal'

const steps = [
  { id: 1, title: 'About You', fields: ['name', 'email', 'company', 'role'] },
  { id: 2, title: 'Your Project', fields: ['projectType', 'industry', 'timeline'] },
  { id: 3, title: 'Vision', fields: ['budget', 'description', 'inspiration'] },
]

export default function InquiryPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', role: '',
    projectType: '', industry: '', timeline: '',
    budget: '', description: '', inspiration: ''
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const next = () => step < 3 ? setStep(s => s + 1) : setSubmitted(true)
  const prev = () => setStep(s => s - 1)

  return (
    <main className="min-h-screen bg-void flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel text="Project Inquiry" />
          <motion.h1
            className="font-display text-5xl font-light text-silk"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tell us your vision.
          </motion.h1>
        </div>

        {/* Progress */}
        {!submitted && (
          <div className="flex items-center gap-3 mb-10 justify-center">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className={`flex items-center gap-2 ${step >= s.id ? 'text-electric-blue' : 'text-silver/20'}`}>
                  <div className={`w-6 h-6 border flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                    step === s.id ? 'border-electric-blue bg-electric-blue/20' :
                    step > s.id ? 'border-electric-blue/50 bg-electric-blue/10' : 'border-white/15'
                  }`}>
                    {step > s.id ? '✓' : s.id}
                  </div>
                  <span className="text-xs font-mono tracking-wide hidden sm:block">{s.title}</span>
                </div>
                {i < steps.length - 1 && <div className={`w-8 h-px ${step > s.id ? 'bg-electric-blue/40' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Form */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-blue p-16 text-center"
          >
            <CheckCircle2 size={56} className="text-electric-blue mx-auto mb-6" />
            <h2 className="font-display text-4xl font-light text-silk mb-4">Thank you, {form.name.split(' ')[0]}.</h2>
            <p className="text-silver/50 font-sans font-light text-sm leading-relaxed">
              Your inquiry has been received. Sejal will personally review it and respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-blue p-8 md:p-12"
          >
            <h3 className="font-display text-2xl font-light text-silk mb-8">
              Step {step}: {steps[step - 1].title}
            </h3>

            <div className="space-y-6">
              {step === 1 && <>
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                <Field label="Company / Brand" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
                <Field label="Your Role" name="role" value={form.role} onChange={handleChange} placeholder="e.g. Founder, Marketing Director" />
              </>}

              {step === 2 && <>
                <SelectField label="Project Type" name="projectType" value={form.projectType} onChange={handleChange}
                  options={['New Website', 'Redesign', 'Landing Page', 'E-Commerce', 'Brand + Website']} />
                <SelectField label="Your Industry" name="industry" value={form.industry} onChange={handleChange}
                  options={['Hotel / Resort', 'Restaurant', 'Healthcare', 'Architecture', 'Fashion / Boutique', 'Salon / Spa', 'Law', 'Other']} />
                <SelectField label="Timeline" name="timeline" value={form.timeline} onChange={handleChange}
                  options={['ASAP (1-2 weeks)', '1 month', '2-3 months', 'Flexible']} />
              </>}

              {step === 3 && <>
                <SelectField label="Budget Range" name="budget" value={form.budget} onChange={handleChange}
                  options={['Under ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹2,00,000', 'Above ₹2,00,000']} />
                <TextareaField label="Describe Your Vision" name="description" value={form.description} onChange={handleChange}
                  placeholder="What do you want your website to feel like? What's the experience you're creating?" />
                <Field label="Inspiration / References (optional)" name="inspiration" value={form.inspiration} onChange={handleChange}
                  placeholder="Any websites you love, or brands that inspire you?" />
              </>}
            </div>

            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <button onClick={prev} className="btn-outline text-sm py-3 px-6">Back</button>
              ) : <div />}
              <button onClick={next} className="btn-primary inline-flex items-center gap-2">
                {step === 3 ? 'Submit Inquiry' : 'Continue'}
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full bg-void border border-white/8 focus:border-electric-blue/40 text-silk placeholder:text-silver/20 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300" />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{label}</label>
      <select name={name} value={value} onChange={onChange}
        className="w-full bg-void border border-white/8 focus:border-electric-blue/40 text-silk font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 appearance-none">
        <option value="" className="bg-void">Select an option</option>
        {options.map(o => <option key={o} value={o} className="bg-void">{o}</option>)}
      </select>
    </div>
  )
}

function TextareaField({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{label}</label>
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={4}
        className="w-full bg-void border border-white/8 focus:border-electric-blue/40 text-silk placeholder:text-silver/20 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none" />
    </div>
  )
}
