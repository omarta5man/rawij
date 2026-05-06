'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Palette, Rocket, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const steps = [
  { icon: Search, titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
  { icon: Lightbulb, titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
  { icon: Palette, titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
  { icon: Rocket, titleKey: 'process.step4.title', descKey: 'process.step4.desc' },
  { icon: TrendingUp, titleKey: 'process.step5.title', descKey: 'process.step5.desc' },
]

export function Process() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('process.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('process.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 mb-4 group hover:bg-primary/20 hover:border-primary/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                    <div className={cn(
                      'absolute -top-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30',
                      dir === 'rtl' ? '-left-2' : '-right-2'
                    )}>
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
