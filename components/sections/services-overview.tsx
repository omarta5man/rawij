'use client'

import { motion } from 'framer-motion'
import {
  Palette,
  Megaphone,
  Video,
  Globe,
  Zap,
  MessageSquare,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const services = [
  { icon: MessageSquare, titleKey: 'service.social.title', descKey: 'service.social.desc' },
  { icon: Sparkles, titleKey: 'service.ai.title', descKey: 'service.ai.desc' },
  { icon: Video, titleKey: 'service.video.title', descKey: 'service.video.desc' },
  { icon: Globe, titleKey: 'service.web.title', descKey: 'service.web.desc' },
  { icon: Zap, titleKey: 'service.landing.title', descKey: 'service.landing.desc' },
  { icon: TrendingUp, titleKey: 'service.automation.title', descKey: 'service.automation.desc' },
  { icon: Palette, titleKey: 'service.branding.title', descKey: 'service.branding.desc' },
  { icon: Megaphone, titleKey: 'service.strategy.title', descKey: 'service.strategy.desc' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesOverview() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs sm:text-sm font-medium text-primary">{t('services.badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-balance leading-relaxed px-4">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={cn(
                  'group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300',
                  dir === 'rtl' && 'text-right'
                )}
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={cn(
                    'w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all',
                    dir === 'rtl' && 'mr-auto'
                  )}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
