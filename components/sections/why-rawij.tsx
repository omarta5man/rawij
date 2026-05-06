'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Zap, Target, Lightbulb, Globe2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

const features = [
  { icon: Zap, titleKey: 'why.f1.title', descKey: 'why.f1.desc' },
  { icon: Lightbulb, titleKey: 'why.f2.title', descKey: 'why.f2.desc' },
  { icon: Target, titleKey: 'why.f3.title', descKey: 'why.f3.desc' },
  { icon: Globe2, titleKey: 'why.f4.title', descKey: 'why.f4.desc' },
]

export function WhyRawij() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(dir === 'rtl' && 'lg:order-2 text-right')}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">{t('why.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {t('why.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('why.intro')}
            </p>
            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn('flex gap-4', dir === 'rtl' && 'flex-row-reverse text-right')}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{t(feature.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Visual — AI Creative Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn('relative', dir === 'rtl' && 'lg:order-1')}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20"
            >
              <Image
                src={IMG.aiFlow}
                alt={t('why.poweredByAI')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={cn(
                  'absolute bottom-6 sm:bottom-8 px-5 py-4 rounded-2xl bg-background/90 backdrop-blur-md border border-primary/20 shadow-xl',
                  dir === 'rtl' ? 'right-6 sm:right-8 text-right' : 'left-6 sm:left-8'
                )}
              >
                <div className={cn('flex items-center gap-3', dir === 'rtl' && 'flex-row-reverse')}>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">{t('why.poweredByAI')}</div>
                    <div className="text-xs text-muted-foreground">{t('why.poweredByAIDesc')}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className={cn(
                'hidden md:block absolute -top-6 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur',
                dir === 'rtl' ? '-left-6' : '-right-6'
              )}
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={cn(
                'hidden md:block absolute -bottom-6 w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur',
                dir === 'rtl' ? '-right-6' : '-left-6'
              )}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
