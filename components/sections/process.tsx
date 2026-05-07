'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Palette, Rocket, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const steps = [
  { icon: Search, titleKey: 'process.step1.title', descKey: 'process.step1.desc', color: 'from-blue-500/20 to-cyan-500/10' },
  { icon: Lightbulb, titleKey: 'process.step2.title', descKey: 'process.step2.desc', color: 'from-yellow-500/20 to-amber-500/10' },
  { icon: Palette, titleKey: 'process.step3.title', descKey: 'process.step3.desc', color: 'from-pink-500/20 to-rose-500/10' },
  { icon: Rocket, titleKey: 'process.step4.title', descKey: 'process.step4.desc', color: 'from-purple-500/20 to-violet-500/10' },
  { icon: TrendingUp, titleKey: 'process.step5.title', descKey: 'process.step5.desc', color: 'from-green-500/20 to-emerald-500/10' },
]

export function Process() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background animations */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/8 to-primary/5 blur-3xl"
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
            <span className="text-sm font-semibold text-primary">{t('process.badge')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-balance">
            {t('process.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto" style={{ perspective: '1200px' }}>
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ originX: 0 }}
            />
            {/* Animated dot traveling along the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
              animate={{ left: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative text-center group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    aria-hidden
                    className={cn(
                      'absolute -inset-2 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10',
                      step.color
                    )}
                  />

                  {/* Icon container with 3D effect */}
                  <motion.div 
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-border/60 mb-5 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <Icon className="w-9 h-9 text-primary" />
                    
                    {/* Step number badge */}
                    <motion.div 
                      className={cn(
                        'absolute -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40',
                        dir === 'rtl' ? '-left-3' : '-right-3'
                      )}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Animated ring */}
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-3xl border-2 border-primary/30 opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.15, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.descKey)}
                  </p>

                  {/* Connecting arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden sm:block lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-primary/50 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
