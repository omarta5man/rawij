'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

export function ServicesHero() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-32 pb-16">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30 dark:opacity-15">
        <Image src={IMG.aiFlow} alt="" fill className="object-cover mix-blend-overlay" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute top-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl',
            dir === 'rtl' ? '-right-20' : '-left-20'
          )}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('servicesPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.15]"
          >
            {t('servicesPage.title')}{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('servicesPage.titleHighlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed"
          >
            {t('servicesPage.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
