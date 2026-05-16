import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function useParallax(range = [0, 1], output = [-50, 50]) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, range, output)
  return { ref, y }
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}
