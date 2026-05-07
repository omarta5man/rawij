'use client'

import { useRef, ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Cursor-tracked spotlight glow. Sits behind content, follows the mouse.
 * Use on hero/CTA backgrounds and pricing card containers.
 */
export function Spotlight({
  children,
  className,
  size = 480,
  color = 'rgba(143, 188, 82, 0.25)',
}: {
  children: ReactNode
  className?: string
  size?: number
  color?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 200, damping: 30 })
  const sy = useSpring(y, { stiffness: 200, damping: 30 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const reset = () => {
    x.set(-1000)
    y.set(-1000)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn('relative overflow-hidden', className)}
    >
      <motion.div
        aria-hidden
        style={{
          x: sx,
          y: sy,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none absolute top-0 left-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
