'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Sparkles,
  BarChart3,
  MessageCircle,
  Globe2,
  Megaphone,
  Bot,
  Layers3,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

interface Part {
  titleKey: string
  labelKey: string
  icon: React.ElementType
  className: string
  size: string
  delay: number
}

const parts: Part[] = [
  {
    titleKey: 'deconstructed.part.ai.title',
    labelKey: 'deconstructed.part.ai.label',
    icon: Sparkles,
    className: 'left-[38%] top-[34%] z-30',
    size: 'h-28 w-28',
    delay: 0,
  },
  {
    titleKey: 'deconstructed.part.web.title',
    labelKey: 'deconstructed.part.web.label',
    icon: Globe2,
    className: 'left-[5%] top-[12%] z-20',
    size: 'h-36 w-56',
    delay: 0.08,
  },
  {
    titleKey: 'deconstructed.part.content.title',
    labelKey: 'deconstructed.part.content.label',
    icon: Layers3,
    className: 'right-[4%] top-[10%] z-20',
    size: 'h-36 w-48',
    delay: 0.16,
  },
  {
    titleKey: 'deconstructed.part.ads.title',
    labelKey: 'deconstructed.part.ads.label',
    icon: Megaphone,
    className: 'left-[0%] bottom-[18%] z-20',
    size: 'h-32 w-48',
    delay: 0.24,
  },
  {
    titleKey: 'deconstructed.part.automation.title',
    labelKey: 'deconstructed.part.automation.label',
    icon: Bot,
    className: 'right-[2%] bottom-[16%] z-20',
    size: 'h-32 w-52',
    delay: 0.32,
  },
  {
    titleKey: 'deconstructed.part.analytics.title',
    labelKey: 'deconstructed.part.analytics.label',
    icon: BarChart3,
    className: 'left-[32%] bottom-[2%] z-20',
    size: 'h-32 w-56',
    delay: 0.4,
  },
  {
    titleKey: 'deconstructed.part.messages.title',
    labelKey: 'deconstructed.part.messages.label',
    icon: MessageCircle,
    className: 'left-[48%] top-[4%] z-10',
    size: 'h-24 w-44',
    delay: 0.48,
  },
]

const checks = [
  'deconstructed.feat.1',
  'deconstructed.feat.2',
  'deconstructed.feat.3',
  'deconstructed.feat.4',
]

export function RawijDeconstructed() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], ['-10%', '18%'])
  const coreScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.98])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 18])

  const isAnalyticsKey = (key: string) => key === 'deconstructed.part.analytics.title'

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAF3] py-24 sm:py-28 lg:py-36 text-foreground dark:bg-background"
    >
      {/* Light-mode brand background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAF3_44%,#E7F2D5_100%)] dark:hidden"
      />
      {/* Dark-mode background */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-mesh dark:block"
      />

      {/* Soft scroll-driven glow */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute left-1/2 top-1/4 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#8FBC52]/20 blur-3xl dark:bg-primary/15"
      />

      {/* Decorative rings (LTR-only side, mirrored in RTL) */}
      <div
        aria-hidden
        className={cn(
          'absolute top-[-20%] h-[520px] w-[520px] rounded-full border border-[#8FBC52]/10',
          dir === 'rtl' ? 'left-[-10%]' : 'right-[-10%]'
        )}
      />
      <div
        aria-hidden
        className={cn(
          'absolute top-[-12%] h-[390px] w-[390px] rounded-full border border-[#8FBC52]/10',
          dir === 'rtl' ? 'left-[-6%]' : 'right-[-6%]'
        )}
      />

      {/* Dotted grid */}
      <div
        aria-hidden
        className={cn(
          'absolute top-[20%] grid grid-cols-8 gap-3 opacity-20 dark:opacity-10 hidden md:grid',
          dir === 'rtl' ? 'right-[5%]' : 'left-[5%]'
        )}
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#8FBC52]" />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Copy column */}
        <div className={cn(dir === 'rtl' && 'text-right')}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className={cn(
              'mb-5 inline-flex items-center gap-2 rounded-full border border-[#8FBC52]/25 bg-white/70 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-[#3E5F1E] dark:text-primary shadow-sm backdrop-blur-xl',
              dir === 'rtl' && 'flex-row-reverse'
            )}
          >
            <Sparkles className="h-4 w-4" />
            {t('deconstructed.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance"
          >
            {t('deconstructed.title')}{' '}
            <span className="text-[#8FBC52]">
              {t('deconstructed.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-muted-foreground"
          >
            {t('deconstructed.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-8 grid gap-3 text-sm text-[#3E5F1E] dark:text-primary sm:grid-cols-2"
          >
            {checks.map((key) => (
              <div
                key={key}
                className={cn(
                  'flex items-center gap-2',
                  dir === 'rtl' && 'flex-row-reverse text-right'
                )}
              >
                <CheckCircle2 className="h-4 w-4 text-[#8FBC52] flex-shrink-0" />
                <span>{t(key)}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.32 }}
            className={cn(
              'mt-10 flex flex-wrap gap-4',
              dir === 'rtl' && 'flex-row-reverse'
            )}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#8FBC52] hover:bg-[#7FAC45] text-white shadow-xl shadow-[#8FBC52]/25 hover:shadow-2xl hover:shadow-[#8FBC52]/35 transition-all duration-300"
            >
              <Link
                href="/contact"
                className={cn('group inline-flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}
              >
                {t('deconstructed.cta.start')}
                <ArrowIcon
                  className={cn(
                    'h-4 w-4 transition',
                    dir === 'rtl'
                      ? 'group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1'
                  )}
                />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#8FBC52]/25 bg-white/70 dark:bg-white/5 text-foreground hover:border-[#8FBC52]/50 backdrop-blur-xl"
            >
              <Link href="/services">{t('deconstructed.cta.services')}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Deconstructed visual */}
        <div className="relative mx-auto h-[520px] sm:h-[560px] lg:h-[620px] w-full max-w-[680px]">
          {/* Orbit guide rings */}
          <motion.div
            aria-hidden
            style={{ rotate: orbitRotate }}
            className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8FBC52]/15"
          />
          <motion.div
            aria-hidden
            style={{ rotate: orbitRotate }}
            className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8FBC52]/15"
          />

          {/* Connection lines */}
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 680 620"
            fill="none"
          >
            <path
              d="M120 165 C230 245 310 250 340 310 C390 410 500 460 590 400"
              stroke="#8FBC52"
              strokeWidth="1.2"
              strokeDasharray="7 9"
            />
            <path
              d="M560 135 C465 210 410 220 340 310 C260 410 210 455 130 430"
              stroke="#B9D97A"
              strokeWidth="1.2"
              strokeDasharray="6 10"
            />
            <path
              d="M340 120 L340 500"
              stroke="#8FBC52"
              strokeWidth="1"
              strokeOpacity="0.16"
            />
            <path
              d="M120 310 L590 310"
              stroke="#8FBC52"
              strokeWidth="1"
              strokeOpacity="0.16"
            />
          </svg>

          {parts.map((part, index) => {
            const Icon = part.icon
            const isCore = part.titleKey === 'deconstructed.part.ai.title'
            const isAnalytics = isAnalyticsKey(part.titleKey)

            return (
              <motion.div
                key={part.titleKey}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.88,
                  rotate: index % 2 === 0 ? -4 : 4,
                  filter: 'blur(8px)',
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: 'blur(0px)',
                }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{
                  duration: 0.8,
                  delay: part.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  rotate: index % 2 === 0 ? 1.5 : -1.5,
                }}
                className={cn('absolute', part.className, part.size)}
              >
                {isCore ? (
                  <motion.div
                    style={{ scale: coreScale }}
                    className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-white/80 dark:border-white/10 bg-white/55 dark:bg-card/40 shadow-2xl shadow-[#8FBC52]/30 backdrop-blur-2xl"
                  >
                    <div className="absolute inset-[-18px] rounded-[2.4rem] bg-[#8FBC52]/20 blur-2xl" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8FBC52] to-[#B9D97A] text-white shadow-xl shadow-[#8FBC52]/35">
                      <Icon className="h-8 w-8" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="group relative h-full w-full overflow-hidden rounded-[1.7rem] border border-white/80 dark:border-white/10 bg-white/50 dark:bg-card/40 p-5 shadow-xl shadow-[#8FBC52]/15 backdrop-blur-2xl transition">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-[#E7F2D5]/50 dark:from-white/5 dark:via-transparent dark:to-primary/5" />
                    <div
                      className={cn(
                        'absolute -top-12 h-28 w-28 rounded-full bg-[#8FBC52]/15 blur-2xl transition group-hover:bg-[#8FBC52]/25',
                        dir === 'rtl' ? '-left-12' : '-right-12'
                      )}
                    />

                    <div className="relative flex h-full flex-col justify-between">
                      <div
                        className={cn(
                          'flex items-center justify-between',
                          dir === 'rtl' && 'flex-row-reverse'
                        )}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E7F2D5] dark:bg-primary/15 text-[#3E5F1E] dark:text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="h-2 w-12 rounded-full bg-[#8FBC52]/30" />
                      </div>

                      <div className={cn(dir === 'rtl' && 'text-right')}>
                        <div className="mb-2 text-sm font-bold text-foreground">
                          {t(part.titleKey)}
                        </div>
                        <div className="mb-4 text-xs text-muted-foreground">
                          {t(part.labelKey)}
                        </div>

                        {isAnalytics ? (
                          <div className="flex h-12 items-end gap-2">
                            {[35, 56, 42, 74, 60, 90].map((h, i) => (
                              <span
                                key={i}
                                style={{ height: `${h}%` }}
                                className="flex-1 rounded-t-lg bg-gradient-to-t from-[#8FBC52] to-[#B9D97A]/70"
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="h-2 w-full rounded-full bg-[#3E5F1E]/10 dark:bg-primary/15" />
                            <div className="h-2 w-3/4 rounded-full bg-[#3E5F1E]/10 dark:bg-primary/15" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}

          {/* Floating 3D objects */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[28%] top-[28%] h-16 w-16 rounded-2xl bg-gradient-to-br from-[#B9D97A]/80 to-[#8FBC52]/60 shadow-2xl shadow-[#8FBC52]/25 backdrop-blur-xl"
          />

          <motion.div
            aria-hidden
            animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[26%] left-[24%] h-20 w-20"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: 'linear-gradient(135deg, rgba(185,217,122,0.8), rgba(143,188,82,0.35))',
              filter: 'drop-shadow(0 24px 40px rgba(143,188,82,0.22))',
            }}
          />
        </div>
      </div>
    </section>
  )
}
