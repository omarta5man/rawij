'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
import { IMG } from '@/lib/images'

const services = [
  { icon: MessageSquare, titleKey: 'service.social.title', descKey: 'service.social.desc', color: 'from-blue-500/20 to-cyan-500/10' },
  { icon: Sparkles, titleKey: 'service.ai.title', descKey: 'service.ai.desc', color: 'from-purple-500/20 to-pink-500/10' },
  { icon: Video, titleKey: 'service.video.title', descKey: 'service.video.desc', color: 'from-red-500/20 to-orange-500/10' },
  { icon: Globe, titleKey: 'service.web.title', descKey: 'service.web.desc', color: 'from-green-500/20 to-emerald-500/10' },
  { icon: Zap, titleKey: 'service.landing.title', descKey: 'service.landing.desc', color: 'from-yellow-500/20 to-amber-500/10' },
  { icon: TrendingUp, titleKey: 'service.automation.title', descKey: 'service.automation.desc', color: 'from-indigo-500/20 to-violet-500/10' },
  { icon: Palette, titleKey: 'service.branding.title', descKey: 'service.branding.desc', color: 'from-pink-500/20 to-rose-500/10' },
  { icon: Megaphone, titleKey: 'service.strategy.title', descKey: 'service.strategy.desc', color: 'from-teal-500/20 to-cyan-500/10' },
]

export function ServicesOverview() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMG.services3d}
          alt=""
          fill
          className="object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated background elements */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 to-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div 
            className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-primary">{t('services.badge')}</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-balance">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          style={{ perspective: '1200px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: -5,
                  z: 30,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={cn(
                  'relative h-full p-6 sm:p-7 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 transition-all duration-500',
                  'hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15',
                  dir === 'rtl' && 'text-right'
                )}>
                  {/* 3D floating glow */}
                  <motion.div 
                    aria-hidden 
                    className={cn(
                      'absolute -inset-1 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10',
                      service.color
                    )}
                  />

                  {/* Shine effect on hover */}
                  <div aria-hidden className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Inner gradient */}
                  <div aria-hidden className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative" style={{ transform: 'translateZ(20px)' }}>
                    <motion.div 
                      className={cn(
                        'relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500',
                        'bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20',
                        'group-hover:scale-110 group-hover:rotate-3',
                        dir === 'rtl' && 'mr-auto'
                      )}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                      
                      {/* Icon glow */}
                      <motion.div
                        aria-hidden
                        className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    aria-hidden
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
