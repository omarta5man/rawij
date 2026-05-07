'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Decorative cluster of 3D-feel glass shapes — cube, pyramid, sphere, ring.
 * Use as ambient depth in CTA sections, sub-page heroes, etc.
 * `density` controls how many shapes show up (mobile gets the 'sparse' set).
 */
export function FloatingPrisms({
  className,
  density = 'normal',
}: {
  className?: string
  density?: 'sparse' | 'normal'
}) {
  const showAll = density === 'normal'
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* Big cube top-right */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[8%] right-[6%]"
      >
        <GlassCube size={130} hue="primary" />
      </motion.div>

      {/* Sphere bottom-left */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[10%] left-[4%]"
      >
        <GlassSphere size={84} />
      </motion.div>

      {showAll && (
        <>
          {/* Pyramid mid-right */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-[42%] right-[18%] hidden md:block"
          >
            <GlassPyramid size={86} />
          </motion.div>

          {/* Ring left */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[26%] left-[12%] hidden md:block"
          >
            <GlassRing size={88} />
          </motion.div>
        </>
      )}
    </div>
  )
}

function GlassCube({ size, hue = 'primary' }: { size: number; hue?: 'primary' | 'accent' }) {
  const grad =
    hue === 'primary'
      ? 'from-primary/35 via-accent/25 to-primary/15'
      : 'from-accent/40 via-primary/25 to-accent/15'
  return (
    <motion.div
      animate={{ rotate: [0, 6, -6, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: size, height: size }}
      className="relative"
    >
      <div className={cn(
        'absolute inset-0 rounded-[22%] bg-gradient-to-br backdrop-blur-md border border-white/40 shadow-[0_20px_60px_-20px_rgba(143,188,82,0.5)]',
        grad
      )} />
      <div className="absolute inset-2 rounded-[20%] bg-gradient-to-tr from-white/30 via-transparent to-white/5 mix-blend-overlay" />
      <div className="absolute top-2 left-2 right-1/2 bottom-1/2 rounded-[20%] bg-white/40 blur-md opacity-70" />
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.85, 1.05, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-2xl"
      />
    </motion.div>
  )
}

function GlassPyramid({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_20px_40px_rgba(143,188,82,0.35)]">
        <defs>
          <linearGradient id="pyrGrad-fp" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.95 0.06 128)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="oklch(0.86 0.12 130)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 128)" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="pyrGrad-fp2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="50,8 92,86 8,86" fill="url(#pyrGrad-fp)" stroke="white" strokeOpacity="0.5" strokeWidth="0.6" />
        <polygon points="50,8 92,86 50,86" fill="url(#pyrGrad-fp2)" opacity="0.6" />
      </svg>
    </div>
  )
}

function GlassSphere({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/60 via-primary/30 to-primary/10 backdrop-blur-md border border-white/40 shadow-[0_20px_50px_-12px_rgba(143,188,82,0.4)]" />
      <div className="absolute top-2 left-2 w-1/3 h-1/3 rounded-full bg-white/60 blur-md" />
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-3 rounded-full bg-gradient-to-tr from-primary/60 via-accent/30 to-transparent blur-lg mix-blend-screen"
      />
    </div>
  )
}

function GlassRing({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <div className="absolute inset-0 rounded-full border-[6px] border-primary/40 backdrop-blur" />
      <div className="absolute inset-0 rounded-full border border-white/40" />
      <div className="absolute inset-2 rounded-full border-[3px] border-accent/40" />
    </div>
  )
}
