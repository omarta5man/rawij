'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/motion/magnetic'
import { AnimatedCounter } from '@/components/ui/motion/animated-counter'
import { DeviceStack } from '@/components/ui/motion/device-stack'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

export function Hero() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const sceneRotate = useTransform(scrollYProgress, [0, 1], [0, 5])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-32 pb-20">
      {/* Background image */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src={IMG.hero3dAbstract}
          alt=""
          fill
          className="object-cover opacity-40 dark:opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </motion.div>

      {/* Layered gradient background */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-mesh" />

      {/* Animated 3D floating shapes */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Primary glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            rotateZ: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute top-1/4 w-[32rem] h-[32rem] rounded-full bg-primary/25 blur-[100px]',
            dir === 'rtl' ? '-right-40' : '-left-40'
          )}
        />
        
        {/* Accent glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.35, 0.2],
            rotateZ: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={cn(
            'absolute bottom-1/4 w-[38rem] h-[38rem] rounded-full bg-accent/20 blur-[120px]',
            dir === 'rtl' ? '-left-40' : '-right-40'
          )}
        />

        {/* Floating 3D cubes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotateX: [0, 20, 0],
            rotateY: [0, 360],
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 20, repeat: Infinity, ease: 'linear' }
          }}
          className="absolute top-32 left-[15%] w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 backdrop-blur-sm hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotateZ: [0, 15, 0],
            rotateY: [0, -360],
          }}
          transition={{ 
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            rotateZ: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 25, repeat: Infinity, ease: 'linear' }
          }}
          className="absolute bottom-40 right-[20%] w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 border border-accent/20 backdrop-blur-sm hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        />

        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-[8%] w-8 h-8 rounded-full bg-primary/20 blur-sm hidden lg:block"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy with 3D entrance */}
          <motion.div 
            style={{ y: copyY }} 
            className={cn('lg:col-span-7 text-center lg:text-start', dir === 'rtl' && 'lg:text-right')}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/25 backdrop-blur-md mb-6 shadow-lg shadow-primary/10',
                dir === 'rtl' && 'flex-row-reverse'
              )}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.span>
              <span className="text-sm font-semibold text-primary">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6 leading-[1.05]"
            >
              {t('hero.title')}{' '}
              <span className="relative inline-block">
                <motion.span 
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%]"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  {t('hero.titleHighlight')}
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                  className={cn(
                    'absolute bottom-1 sm:bottom-2 md:bottom-3 h-3 sm:h-3.5 md:h-4 bg-gradient-to-r from-primary/30 to-accent/20 -z-10 left-0 right-0 rounded-full',
                    dir === 'rtl' ? 'origin-right' : 'origin-left'
                  )}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 text-balance leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                'flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4',
                dir === 'rtl' && 'lg:justify-end sm:flex-row-reverse'
              )}
            >
              <Magnetic strength={15} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full text-base px-8 py-6 bg-gradient-to-r from-primary to-primary-deep hover:from-primary/90 hover:to-primary-deep/90 group w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
                >
                  <Link href="/contact" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                    {t('hero.cta.start')}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowIcon className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={10} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-base px-8 py-6 border-2 w-full sm:w-auto bg-background/60 backdrop-blur-md hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                >
                  <Link href="/work">{t('hero.cta.work')}</Link>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Stats with 3D cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={cn(
                'mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0',
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
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ 
                    y: -5, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center lg:text-start p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
                  />
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D device-mockup stack with enhanced parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              y: sceneY, 
              scale: sceneScale,
              rotateY: sceneRotate,
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
            className="lg:col-span-5 relative mx-auto w-full max-w-[36rem]"
          >
            <DeviceStack />
            
            {/* Floating accent elements around device */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 backdrop-blur-sm hidden lg:block"
              style={{ transform: 'translateZ(40px)' }}
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/20 backdrop-blur-sm hidden lg:block"
              style={{ transform: 'translateZ(30px)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with 3D effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-primary/40 flex items-start justify-center p-2 bg-background/30 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
