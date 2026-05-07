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
import { TiltCard } from '@/components/ui/motion/tilt-card'
import { SectionBackground } from '@/components/ui/section-background'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

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
      <SectionBackground src={IMG.bgMockupsCorner} opacity="subtle" />

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
              >
                <TiltCard intensity={6} className="h-full">
                  <div className={cn(
                    'group relative h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card/80 backdrop-blur-md border border-border/80 transition-all duration-500',
                    'shadow-[0_2px_8px_-2px_rgba(62,95,30,0.06),0_12px_24px_-12px_rgba(62,95,30,0.08)]',
                    'hover:border-primary/40 hover:shadow-[0_2px_8px_-2px_rgba(143,188,82,0.15),0_24px_50px_-20px_rgba(143,188,82,0.35)]',
                    dir === 'rtl' && 'text-right'
                  )}>
                    {/* Animated gradient border on hover */}
                    <div aria-hidden className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'conic-gradient(from 0deg at 50% 50%, transparent, oklch(0.78 0.16 128 / 0.4), transparent 30%)',
                        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        padding: '1px',
                      }}
                    />
                    {/* Subtle inner gradient on hover */}
                    <div aria-hidden className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/8 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Top shine */}
                    <div aria-hidden className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className={cn(
                        'relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 transition-all duration-500',
                        'bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/15',
                        'group-hover:from-primary/25 group-hover:to-accent/15 group-hover:scale-[1.08]',
                        'shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]',
                        dir === 'rtl' && 'mr-auto'
                      )}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary relative z-10" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
