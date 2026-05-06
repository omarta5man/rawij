'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

export function Hero() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28 pb-16">
      {/* Background — premium hero plate */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMG.heroBgPremium}
          alt=""
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Animated glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute top-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/30 blur-3xl',
            dir === 'rtl' ? '-right-20' : '-left-20'
          )}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={cn(
            'absolute bottom-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-accent/30 blur-3xl',
            dir === 'rtl' ? '-left-20' : '-right-20'
          )}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className={cn('lg:col-span-7 text-center lg:text-start', dir === 'rtl' && 'lg:text-right')}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6',
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance mb-5 sm:mb-6 leading-[1.1]"
            >
              {t('hero.title')}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                  className={cn(
                    'absolute bottom-0 sm:bottom-1 md:bottom-2 h-1.5 sm:h-2 md:h-3 bg-primary/20 -z-10 left-0 right-0',
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
              <Button
                size="lg"
                asChild
                className="rounded-full text-sm sm:text-base px-7 sm:px-8 bg-primary hover:bg-primary/90 group w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                <Link href="/contact" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                  {t('hero.cta.start')}
                  <ArrowIcon className={cn(
                    'w-4 h-4 transition-transform',
                    dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                  )} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-sm sm:text-base px-7 sm:px-8 border-2 w-full sm:w-auto bg-background/50 backdrop-blur"
              >
                <Link href="/work">{t('hero.cta.work')}</Link>
              </Button>
            </motion.div>

            {/* Trust stats */}
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
                { value: '50+', label: t('hero.stats.clients') },
                { value: '120+', label: t('hero.stats.projects') },
                { value: '3x', label: t('hero.stats.growth') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center lg:text-start"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Device showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20"
            >
              <Image
                src={IMG.deviceShowcase}
                alt="Rawij device showcase"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative floaters */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className={cn(
                'hidden md:block absolute -top-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/30 blur-md',
                dir === 'rtl' ? '-left-6' : '-right-6'
              )}
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={cn(
                'hidden md:block absolute -bottom-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-accent/40 to-primary/20 blur-md',
                dir === 'rtl' ? '-right-6' : '-left-6'
              )}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
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
