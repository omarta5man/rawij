'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Slim progress bar at the very top of the viewport that tracks page scroll.
 * Place once in layout (above Header) for site-wide effect.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX: scale, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary z-[60] pointer-events-none"
      aria-hidden
    />
  )
}
