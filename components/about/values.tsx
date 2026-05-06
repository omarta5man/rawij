'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Rocket, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const values = [
  { icon: Zap, titleKey: 'about.values.v1.title', descKey: 'about.values.v1.desc' },
  { icon: Users, titleKey: 'about.values.v2.title', descKey: 'about.values.v2.desc' },
  { icon: Rocket, titleKey: 'about.values.v3.title', descKey: 'about.values.v3.desc' },
  { icon: Shield, titleKey: 'about.values.v4.title', descKey: 'about.values.v4.desc' },
]

export function Values() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('about.values.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('about.values.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('about.values.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group text-center"
              >
                <div className="relative p-7 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
