'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/motion/magnetic'
import { FloatingPrisms } from '@/components/ui/motion/floating-prisms'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export function FinalCTA() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/10 relative overflow-hidden">
      {/* Floating 3D prism cluster */}
      <FloatingPrisms density="normal" className="opacity-60" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            'absolute -top-32 w-[400px] h-[400px] rounded-full bg-primary/30 blur-3xl',
            dir === 'rtl' ? '-right-32' : '-left-32'
          )}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={cn(
            'absolute -bottom-32 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl',
            dir === 'rtl' ? '-left-32' : '-right-32'
          )}
        />
        
        {/* Floating 3D shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 360],
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 15, repeat: Infinity, ease: 'linear' }
          }}
          className="absolute top-1/4 left-[15%] w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 backdrop-blur-sm hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -360],
            rotateX: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 18, repeat: Infinity, ease: 'linear' }
          }}
          className="absolute bottom-1/3 right-[12%] w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/20 backdrop-blur-sm hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
          style={{ perspective: '1200px' }}
        >
          <motion.div 
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/30 mb-8 backdrop-blur-sm',
              dir === 'rtl' && 'flex-row-reverse'
            )}
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-4 h-4 text-primary" />
            </motion.span>
            <span className="text-sm font-semibold text-primary">{t('cta.badge')}</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 text-balance leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('cta.title')}{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%]"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              {t('cta.titleHighlight')}
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 text-balance leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('cta.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4',
              dir === 'rtl' && 'sm:flex-row-reverse'
            )}
          >
            <Magnetic strength={15} className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  asChild
                  className="rounded-full text-base px-8 py-6 bg-gradient-to-r from-primary to-primary-deep hover:from-primary/90 hover:to-primary-deep/90 group w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
                >
                  <Link href="/contact" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                    {t('cta.start')}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowIcon className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </Magnetic>
            <Magnetic strength={10} className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-base px-8 py-6 border-2 bg-background/60 backdrop-blur-md hover:bg-primary/5 hover:border-primary/50 w-full sm:w-auto transition-all duration-300"
                >
                  <Link href="/services">{t('cta.viewServices')}</Link>
                </Button>
              </motion.div>
            </Magnetic>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            {t('cta.trust')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
