'use client'

import { useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, BarChart3, MessageSquare, Sparkles } from 'lucide-react'
import { IMG } from '@/lib/images'
import { cn } from '@/lib/utils'

/**
 * Premium 3D device-mockup composition for the hero.
 * Featured dashboard card + 3 floating UI sub-cards stacked in perspective.
 * Tracks mouse for subtle parallax depth.
 *
 * `collapseProgress` (optional MotionValue 0→1): when supplied, the small
 * floating mini-cards fade & scale away while the dashboard card grows —
 * used by the hero scroll cinematic.
 */
export function DeviceStack({
  className,
  collapseProgress,
}: {
  className?: string
  collapseProgress?: MotionValue<number>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 })

  const tiltY = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const driftX = useTransform(sx, [-0.5, 0.5], [-12, 12])
  const driftY = useTransform(sy, [-0.5, 0.5], [-8, 8])
  const driftXAlt = useTransform(sx, [-0.5, 0.5], [10, -10])
  const driftYAlt = useTransform(sy, [-0.5, 0.5], [6, -6])

  // Scroll-driven collapse curves
  // Phase A (0 → 15%): nothing happens, hero is static
  // Phase B (15% → 50%): mini cards gradually fade + drift outward + blur
  //                      dashboard grows toward 1.2× and gains green glow
  // Phase C (50% → 100%): everything holds — composition is locked
  const fallbackProgress = useMotionValue(0)
  const progress = collapseProgress ?? fallbackProgress

  const miniOpacity   = useTransform(progress, [0, 0.15, 0.50, 1], [1, 1, 0, 0])
  const miniScale     = useTransform(progress, [0, 0.15, 0.50, 1], [1, 1, 0.55, 0.55])
  const miniBlur      = useTransform(progress, [0, 0.15, 0.50, 1], [0, 0, 10, 10])
  const miniBlurFilter= useTransform(miniBlur, (v) => `blur(${v}px)`)

  // Mini-card escape vectors (start drifting at 15%, reach final position at 50%)
  const driftFar1X = useTransform(progress, [0, 0.15, 0.50, 1], [0, 0,  90,  90])
  const driftFar2X = useTransform(progress, [0, 0.15, 0.50, 1], [0, 0, -90, -90])
  const driftFar1Y = useTransform(progress, [0, 0.15, 0.50, 1], [0, 0, -45, -45])
  const driftFar2Y = useTransform(progress, [0, 0.15, 0.50, 1], [0, 0,  45,  45])

  // Dashboard grows from 1 → 1.2 by 50%, then holds
  const dashScale  = useTransform(progress, [0, 0.50, 1], [1, 1.2, 1.2])
  const dashGlow   = useTransform(progress, [0, 0.50, 1], [0, 1, 1])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn('relative w-full aspect-[5/4]', className)}
      style={{ perspective: 1200 }}
    >
      {/* Soft floor / shadow */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 -translate-x-1/2 bottom-[6%] w-[78%] h-12 rounded-[50%] bg-gradient-to-r from-primary/15 via-accent/30 to-primary/15 blur-2xl"
      />

      {/* Featured card — Dashboard (scales up on scroll) */}
      <motion.div
        style={{ scale: dashScale, transformStyle: 'preserve-3d' }}
        className="absolute inset-x-[10%] top-[12%] bottom-[18%] rounded-[1.75rem] z-20"
      >
        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full rounded-[1.75rem] overflow-hidden border border-white/40 dark:border-white/10 shadow-[0_40px_80px_-20px_rgba(62,95,30,0.35),0_20px_40px_-12px_rgba(143,188,82,0.25)] bg-card"
        >
          <Image
            src={IMG.dashboard}
            alt="Rawij dashboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/20 pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          {/* Scroll-driven inner glow as it grows */}
          <motion.div
            aria-hidden
            style={{ opacity: dashGlow }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Floating mini-card 1 — Conversion ring */}
      <motion.div
        style={{ opacity: miniOpacity, scale: miniScale, x: driftFar1X, y: driftFar1Y, filter: miniBlurFilter }}
        className="absolute top-[6%] right-[2%] w-[34%] sm:w-[30%] z-30"
      >
      <motion.div
        style={{ x: driftX, y: driftY }}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl bg-card/95 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(62,95,30,0.3)] p-3.5 sm:p-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">Conversion</span>
        </div>
        <div className="flex items-center gap-2.5">
          <RingPercent value={87} />
          <div>
            <div className="text-xl sm:text-2xl font-bold text-foreground tabular-nums">87%</div>
            <div className="text-[10px] sm:text-xs text-primary font-medium">+12.4%</div>
          </div>
        </div>
      </motion.div>
      </motion.div>

      {/* Floating mini-card 2 — Audience bar chart */}
      <motion.div
        style={{ opacity: miniOpacity, scale: miniScale, x: driftFar2X, y: driftFar2Y, filter: miniBlurFilter }}
        className="absolute bottom-[10%] left-[1%] w-[38%] sm:w-[34%] z-30"
      >
      <motion.div
        style={{ x: driftXAlt, y: driftYAlt }}
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="rounded-2xl bg-card/95 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(62,95,30,0.3)] p-3.5 sm:p-4"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">Audience</span>
        </div>
        <div className="flex items-end gap-1.5 h-12 mb-2">
          {[40, 65, 50, 80, 95, 70, 88].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'flex-1 rounded-sm',
                i === 4 ? 'bg-primary' : 'bg-primary/40'
              )}
            />
          ))}
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base sm:text-lg font-bold text-foreground tabular-nums">12.4K</span>
          <span className="text-[10px] sm:text-xs text-primary font-medium">+24%</span>
        </div>
      </motion.div>
      </motion.div>

      {/* Floating mini-card 3 — Live AI message */}
      <motion.div
        style={{ opacity: miniOpacity, scale: miniScale, x: driftFar2X, y: driftFar2Y, filter: miniBlurFilter }}
        className="absolute top-[36%] left-[-3%] w-[40%] sm:w-[36%] hidden md:block z-30"
      >
      <motion.div
        style={{ x: driftX, y: driftYAlt }}
        animate={{ rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="rounded-2xl bg-card/95 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(62,95,30,0.3)] p-3 sm:p-3.5"
      >
        <div className="flex items-start gap-2.5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] sm:text-xs font-semibold text-foreground">Rawij AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Generated 12 reel ideas optimized for Friday peak hours.
            </p>
          </div>
        </div>
      </motion.div>
      </motion.div>

      {/* Floating mini-card 4 — Reply ping */}
      <motion.div
        style={{ opacity: miniOpacity, scale: miniScale, x: driftFar2X, y: driftFar1Y, filter: miniBlurFilter }}
        className="absolute top-[2%] left-[8%] sm:left-[12%] z-30"
      >
      <motion.div
        style={{ x: driftXAlt, y: driftY }}
        animate={{ rotate: [1, -1.5, 1] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="rounded-full bg-card/95 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_15px_40px_-10px_rgba(62,95,30,0.3)] py-2 px-3 sm:px-3.5 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
          <MessageSquare className="w-3 h-3 text-primary" />
        </div>
        <span className="text-[10px] sm:text-xs font-medium text-foreground whitespace-nowrap">+38 DMs handled</span>
      </motion.div>
      </motion.div>

      {/* Decorative glass shapes */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[8%] right-[6%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/15 backdrop-blur-md border border-white/40 shadow-[0_15px_40px_-12px_rgba(143,188,82,0.5)]"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-[24%] right-[14%] w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-accent/60 to-primary/20 backdrop-blur-md border border-white/40 shadow-[0_15px_30px_-10px_rgba(143,188,82,0.5)]"
      />
    </div>
  )
}

function RingPercent({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 16
  const dash = (value / 100) * circumference
  return (
    <svg viewBox="0 0 40 40" className="w-11 h-11 sm:w-12 sm:h-12 -rotate-90">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="4" />
      <motion.circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke="oklch(0.78 0.16 128)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: circumference - dash }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}
