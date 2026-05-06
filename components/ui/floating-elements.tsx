'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementProps {
  className?: string
  delay?: number
  duration?: number
}

export function FloatingCube({ className, delay = 0, duration = 6 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotateY: [0, 180, 360],
        rotateX: [0, 10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={cn(
        "w-12 h-12 sm:w-16 sm:h-16 relative preserve-3d",
        className
      )}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* Front */}
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg" 
           style={{ transform: 'translateZ(24px)' }} />
      {/* Back */}
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg" 
           style={{ transform: 'translateZ(-24px) rotateY(180deg)' }} />
      {/* Inner glow */}
      <div className="absolute inset-2 bg-gradient-to-br from-primary/40 to-transparent rounded-md" />
    </motion.div>
  )
}

export function FloatingSphere({ className, delay = 0, duration = 8 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={cn(
        "w-16 h-16 sm:w-20 sm:h-20 rounded-full relative",
        className
      )}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20" />
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-primary/20 to-primary/40" />
      <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30" />
    </motion.div>
  )
}

export function FloatingRing({ className, delay = 0, duration = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotateX: [20, 40, 20],
        rotateZ: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={cn(
        "w-20 h-20 sm:w-24 sm:h-24 relative",
        className
      )}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-primary/30" 
           style={{ transform: 'rotateX(60deg)' }} />
      <div className="absolute inset-2 rounded-full border-2 border-accent/20" 
           style={{ transform: 'rotateX(60deg)' }} />
    </motion.div>
  )
}

export function FloatingPyramid({ className, delay = 0, duration = 7 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotateY: [0, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={cn(
        "w-14 h-14 sm:w-16 sm:h-16 relative",
        className
      )}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* Pyramid faces using CSS triangles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-primary/30"
          style={{ filter: 'drop-shadow(0 0 10px rgba(164, 198, 57, 0.3))' }}
        />
      </div>
    </motion.div>
  )
}

export function FloatingDots({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `${i * 20}%`,
            top: `${Math.sin(i) * 30 + 50}%`,
          }}
        />
      ))}
    </div>
  )
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn(
      "absolute inset-0 opacity-[0.03]",
      className
    )}>
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
