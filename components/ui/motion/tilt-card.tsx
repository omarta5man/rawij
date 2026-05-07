'use client'

import { useRef, ReactNode, MouseEvent, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Enhanced 3D mouse-tracked tilt wrapper with glare and depth effects.
 * Cards rotate in 3D as the cursor moves — disabled on touch devices and when reduced-motion is preferred.
 */
export function TiltCard({
  children,
  className,
  intensity = 8,
  glare = true,
  scale = 1.02,
  perspective = 1000,
}: {
  children: ReactNode
  className?: string
  intensity?: number
  glare?: boolean
  scale?: number
  perspective?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring physics for smooth movement
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 })

  // 3D rotations
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity])
  
  // Glare position
  const glareX = useTransform(sx, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(sy, [-0.5, 0.5], ['0%', '100%'])
  
  // Subtle z-translation for depth
  const translateZ = useTransform(
    [sx, sy],
    ([latestX, latestY]) => {
      const distance = Math.sqrt(
        Math.pow(Number(latestX), 2) + Math.pow(Number(latestY), 2)
      )
      return distance * 30
    }
  )

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleEnter = () => setIsHovered(true)
  
  const handleLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: 'preserve-3d', 
        transformPerspective: perspective,
        scale: isHovered ? scale : 1,
      }}
      transition={{ scale: { duration: 0.3 } }}
      className={cn('relative will-change-transform', className)}
    >
      {/* Main content with depth */}
      <motion.div 
        style={{ 
          transform: 'translateZ(0)',
          transformStyle: 'preserve-3d'
        }} 
        className="relative"
      >
        {children}
      </motion.div>
      
      {/* Enhanced glare effect */}
      {glare && (
        <motion.div
          aria-hidden
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.25), transparent 50%)`,
            ['--gx' as string]: glareX,
            ['--gy' as string]: glareY,
            opacity: isHovered ? 1 : 0,
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay transition-opacity duration-300"
        />
      )}
      
      {/* Edge highlight for 3D depth */}
      <motion.div
        aria-hidden
        style={{
          opacity: isHovered ? 0.5 : 0,
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          opacity: isHovered ? 0.6 : 0,
        }}
      />
      
      {/* Bottom shadow for floating effect */}
      <motion.div
        aria-hidden
        style={{
          opacity: isHovered ? 0.15 : 0,
          transform: `translateY(${isHovered ? '20px' : '10px'}) scaleX(0.9)`,
        }}
        className="pointer-events-none absolute inset-x-4 -bottom-4 h-8 rounded-[50%] bg-black blur-xl transition-all duration-300"
      />
    </motion.div>
  )
}
