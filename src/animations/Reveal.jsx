import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function RevealText({ children, className = '', delay = 0, as = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Tag = motion[as] || motion.div

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </Tag>
  )
}

export function RevealFade({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function RevealSlide({ children, className = '', delay = 0, direction = 'left' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const x = direction === 'left' ? -40 : direction === 'right' ? 40 : 0
  const y = direction === 'up' ? 40 : direction === 'down' ? -40 : 0

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.12 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
      }}
    >
      {children}
    </motion.div>
  )
}

// Section label
export function SectionLabel({ text }) {
  return (
    <RevealFade>
      <div className="flex items-center gap-3 mb-6">
        <span className="line-accent" />
        <span className="font-mono text-xs tracking-widest uppercase text-electric-blue/70">{text}</span>
      </div>
    </RevealFade>
  )
}
