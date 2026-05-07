'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/motion/magnetic'
import { FloatingPrisms } from '@/components/ui/motion/floating-prisms'
import { SectionBackground } from '@/components/ui/section-background'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

export function FinalCTA() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden">
      <SectionBackground src={IMG.bgStageSpotlight} opacity="normal" position="bottom" />
      {/* Floating 3D prism cluster */}
      <FloatingPrisms density="normal" className="opacity-70" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute -top-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/30 blur-3xl',
            dir === 'rtl' ? '-right-20' : '-left-20'
          )}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={cn(
            'absolute -bottom-20 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-accent/30 blur-3xl',
            dir === 'rtl' ? '-left-20' : '-right-20'
          )}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 sm:mb-8',
            dir === 'rtl' && 'flex-row-reverse'
          )}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">{t('cta.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-balance px-4 leading-[1.15]">
            {t('cta.title')}{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('cta.titleHighlight')}
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 text-balance leading-relaxed max-w-2xl mx-auto px-4">
            {t('cta.description')}
          </p>

          <div className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4',
            dir === 'rtl' && 'sm:flex-row-reverse'
          )}>
            <Magnetic strength={14} className="w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="rounded-full text-sm sm:text-base px-7 sm:px-8 bg-primary hover:bg-primary/90 group w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="/contact" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                  {t('cta.start')}
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
                className="rounded-full text-sm sm:text-base px-7 sm:px-8 border-2 bg-background/50 backdrop-blur w-full sm:w-auto"
              >
                <Link href="/services">{t('cta.viewServices')}</Link>
              </Button>
            </Magnetic>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground"
          >
            {t('cta.trust')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
