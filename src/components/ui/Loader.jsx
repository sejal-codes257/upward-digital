import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 border border-electric-blue/40 rotate-45" />
                <div className="absolute inset-2 border border-electric-blue/20 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-electric-blue rounded-full pulse-blue" />
              </div>
              <p className="loader-text text-silver/60">UPWARD DIGITAL</p>
            </motion.div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-4 w-48">
              <div className="w-full h-px bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-royal-blue to-electric-blue"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="font-mono text-xs text-silver/40 tabular-nums">
                {Math.min(Math.floor(progress), 100).toString().padStart(3, '0')}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
