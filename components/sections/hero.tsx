'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/motion/magnetic'
import { AnimatedCounter } from '@/components/ui/motion/animated-counter'
import { DeviceStack } from '@/components/ui/motion/device-stack'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-32 pb-20">
      {/* Layered gradient background */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-mesh" />
      <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      {/* Animated glows */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute top-1/4 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-[80px]',
            dir === 'rtl' ? '-right-32' : '-left-32'
          )}
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={cn(
            'absolute bottom-1/4 w-[34rem] h-[34rem] rounded-full bg-accent/25 blur-[90px]',
            dir === 'rtl' ? '-left-32' : '-right-32'
          )}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <motion.div style={{ y: copyY }} className={cn('lg:col-span-7 text-center lg:text-start', dir === 'rtl' && 'lg:text-right')}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6',
                dir === 'rtl' && 'flex-row-reverse'
              )}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 leading-[1.05]"
            >
              {t('hero.title')}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                  className={cn(
                    'absolute bottom-1 sm:bottom-2 md:bottom-3 h-2 sm:h-2.5 md:h-3 bg-primary/20 -z-10 left-0 right-0',
                    dir === 'rtl' ? 'origin-right' : 'origin-left'
                  )}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 text-balance leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                'flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4',
                dir === 'rtl' && 'lg:justify-end sm:flex-row-reverse'
              )}
            >
              <Magnetic strength={12} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full text-sm sm:text-base px-7 sm:px-8 bg-primary hover:bg-primary/90 group w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-shadow"
                >
                  <Link href="/contact" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                    {t('hero.cta.start')}
                    <ArrowIcon className={cn(
                      'w-4 h-4 transition-transform',
                      dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    )} />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={8} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-sm sm:text-base px-7 sm:px-8 border-2 w-full sm:w-auto bg-background/50 backdrop-blur"
                >
                  <Link href="/work">{t('hero.cta.work')}</Link>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={cn(
                'mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0',
                dir === 'rtl' && 'lg:mr-0 lg:ml-auto'
              )}
            >
              {[
                { value: 50, suffix: '+', label: t('hero.stats.clients') },
                { value: 120, suffix: '+', label: t('hero.stats.projects') },
                { value: 3, suffix: 'x', label: t('hero.stats.growth') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center lg:text-start"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
                  />
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D device-mockup stack with scroll-linked parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: sceneY, scale: sceneScale }}
            className="lg:col-span-5 relative mx-auto w-full max-w-[36rem]"
          >
            <DeviceStack />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

