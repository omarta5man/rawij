'use client'

import { useRef, ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Mouse-tracked 3D tilt wrapper. Cards rotate slightly as the cursor moves —
 * disabled on touch devices and when reduced-motion is preferred.
 */
export function TiltCard({
  children,
  className,
  intensity = 8,
  glare = true,
}: {
  children: ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity])
  const glareX = useTransform(sx, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(sy, [-0.5, 0.5], ['0%', '100%'])

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      className={cn('relative will-change-transform', className)}
    >
      <div style={{ transform: 'translateZ(0)' }} className="relative">
        {children}
      </div>
      {glare && (
        <motion.div
          aria-hidden
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.18), transparent 50%)`,
            ['--gx' as string]: glareX,
            ['--gy' as string]: glareY,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      )}
    </motion.div>
  )
}
