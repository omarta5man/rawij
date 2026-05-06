'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

export function Mission() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn('relative aspect-square rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10', dir === 'rtl' && 'lg:order-2')}
          >
            <Image src={IMG.dashboard} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-primary/30 backdrop-blur-md flex items-center justify-center border border-primary/30 shadow-2xl"
            >
              <Target className="w-16 h-16 text-primary" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(dir === 'rtl' && 'text-right lg:order-1')}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">{t('about.mission.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {t('about.mission.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              {t('about.mission.p1')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('about.mission.p2')}
            </p>
          </motion.div>
        </div>

        {/* Vision & Approach */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            { icon: Eye, titleKey: 'about.vision.title', descKey: 'about.vision.desc' },
            { icon: Heart, titleKey: 'about.approach.title', descKey: 'about.approach.desc' },
          ].map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={cn(
                  'p-7 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all',
                  dir === 'rtl' && 'text-right'
                )}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t(card.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(card.descKey)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
