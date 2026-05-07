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
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, 30, 0]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
            y: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-accent/8 to-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(dir === 'rtl' && 'lg:order-2 text-right')}
          >
            <motion.div 
              className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold text-primary">{t('why.badge')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {t('why.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
              {t('why.intro')}
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      x: dir === 'rtl' ? -8 : 8,
                      transition: { duration: 0.2 }
                    }}
                    className={cn(
                      'flex gap-5 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300',
                      dir === 'rtl' && 'flex-row-reverse text-right'
                    )}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{t(feature.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Visual — 3D AI Creative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn('relative', dir === 'rtl' && 'lg:order-1')}
            style={{ perspective: '1200px' }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main image container with 3D effect */}
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}
                className="relative aspect-square rounded-3xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/25"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={IMG.whyUs3d}
                  alt={t('why.poweredByAI')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />

                {/* Animated overlay grid */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(143,188,82,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(143,188,82,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                  animate={{ 
                    backgroundPosition: ['0px 0px', '40px 40px']
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Floating badge with 3D pop */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={cn(
                    'absolute bottom-6 sm:bottom-8 px-5 py-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-primary/30 shadow-2xl',
                    dir === 'rtl' ? 'right-6 sm:right-8 text-right' : 'left-6 sm:left-8'
                  )}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className={cn('flex items-center gap-3', dir === 'rtl' && 'flex-row-reverse')}>
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Zap className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-base">{t('why.poweredByAI')}</div>
                      <div className="text-xs text-muted-foreground">{t('why.poweredByAIDesc')}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating 3D decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0], 
                  rotate: [0, 10, 0],
                  rotateY: [0, 20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className={cn(
                  'hidden md:block absolute -top-8 w-28 h-28 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 backdrop-blur-sm',
                  dir === 'rtl' ? '-left-8' : '-right-8'
                )}
                style={{ transform: 'translateZ(60px)' }}
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0], 
                  rotate: [0, -8, 0],
                  rotateX: [0, 15, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className={cn(
                  'hidden md:block absolute -bottom-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 backdrop-blur-sm',
                  dir === 'rtl' ? '-right-8' : '-left-8'
                )}
                style={{ transform: 'translateZ(40px)' }}
              />

              {/* Glowing orbs */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 -right-4 w-6 h-6 rounded-full bg-primary blur-md"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/3 -left-4 w-4 h-4 rounded-full bg-accent blur-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
