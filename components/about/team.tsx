'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const roles = [
  { icon: Lightbulb, titleKey: 'about.team.r1.title', descKey: 'about.team.r1.desc' },
  { icon: Palette, titleKey: 'about.team.r2.title', descKey: 'about.team.r2.desc' },
  { icon: Code, titleKey: 'about.team.r3.title', descKey: 'about.team.r3.desc' },
  { icon: TrendingUp, titleKey: 'about.team.r4.title', descKey: 'about.team.r4.desc' },
]

export function Team() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('about.team.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('about.team.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('about.team.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t(role.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(role.descKey)}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
