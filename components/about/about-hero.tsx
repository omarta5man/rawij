'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export function AboutHero() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-32 pb-16">
      {/* Soft mesh background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/10 to-background" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute top-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl',
            dir === 'rtl' ? '-left-20' : '-right-20'
          )}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-sm font-medium text-primary">{t('about.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.15]"
          >
            {t('about.hero.title')}{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('about.hero.titleHighlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
