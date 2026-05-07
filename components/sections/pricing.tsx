'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Star, Sparkles, Zap, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

interface Plan {
  nameKey: string
  subtitleKey: string
  ctaKey: string
  price: number
  features: string[]
  popular?: boolean
  icon: React.ElementType
}

const plans: Plan[] = [
  {
    nameKey: 'pricing.starter.name',
    subtitleKey: 'pricing.starter.subtitle',
    ctaKey: 'pricing.starter.cta',
    price: 800,
    icon: Zap,
    features: [
      'pricing.starter.f1',
      'pricing.starter.f2',
      'pricing.starter.f3',
      'pricing.starter.f4',
      'pricing.starter.f5',
      'pricing.starter.f6',
    ],
  },
  {
    nameKey: 'pricing.growth.name',
    subtitleKey: 'pricing.growth.subtitle',
    ctaKey: 'pricing.growth.cta',
    price: 1500,
    popular: true,
    icon: Sparkles,
    features: [
      'pricing.growth.f1',
      'pricing.growth.f2',
      'pricing.growth.f3',
      'pricing.growth.f4',
      'pricing.growth.f5',
      'pricing.growth.f6',
      'pricing.growth.f7',
    ],
  },
  {
    nameKey: 'pricing.pro.name',
    subtitleKey: 'pricing.pro.subtitle',
    ctaKey: 'pricing.pro.cta',
    price: 3000,
    icon: Crown,
    features: [
      'pricing.pro.f1',
      'pricing.pro.f2',
      'pricing.pro.f3',
      'pricing.pro.f4',
      'pricing.pro.f5',
      'pricing.pro.f6',
      'pricing.pro.f7',
      'pricing.pro.f8',
    ],
  },
]

// Premium 3D Pricing Card component
function PricingCard({ 
  plan, 
  index, 
  t, 
  dir 
}: { 
  plan: Plan
  index: number
  t: (key: string) => string
  dir: string 
}) {
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight
  const isPopular = !!plan.popular
  const shouldReduceMotion = useReducedMotion()
  const Icon = plan.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn(
        'group relative h-full',
        isPopular && 'z-10 lg:-mt-4 lg:mb-4'
      )}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        whileHover={shouldReduceMotion ? {} : { 
          rotateY: dir === 'rtl' ? -3 : 3,
          rotateX: -3,
          z: 30,
          scale: 1.02,
          transition: { duration: 0.4, ease: 'easeOut' }
        }}
        className="h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Multi-layered glow effect for popular */}
        {isPopular && (
          <>
            <motion.div
              aria-hidden
              animate={shouldReduceMotion ? {} : { 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#8FBC52] via-[#B9D97A] to-[#8FBC52] blur-lg -z-10"
            />
            <motion.div
              aria-hidden
              animate={shouldReduceMotion ? {} : { 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#8FBC52]/30 via-transparent to-[#B9D97A]/30 blur-2xl -z-20"
            />
          </>
        )}

        {/* Card container with glassmorphism */}
        <div
          className={cn(
            'relative h-full rounded-[2rem] p-8 lg:p-10 transition-all duration-500 flex flex-col overflow-hidden',
            'backdrop-blur-xl border-2',
            isPopular
              ? 'bg-gradient-to-br from-[#1a2a0f]/95 via-[#1f2f14]/90 to-[#0f1a08]/95 border-[#8FBC52]/60 shadow-[0_0_60px_-15px_rgba(143,188,82,0.4)]'
              : 'bg-card/80 dark:bg-card/60 border-border/50 hover:border-[#8FBC52]/40 hover:shadow-[0_0_40px_-15px_rgba(143,188,82,0.2)]'
          )}
        >
          {/* Animated gradient overlay */}
          <div 
            aria-hidden 
            className={cn(
              'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700',
              'bg-gradient-to-br from-[#8FBC52]/5 via-transparent to-[#B9D97A]/5'
            )}
          />

          {/* Dotted grid pattern */}
          <div 
            aria-hidden 
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Top edge shine */}
          <div 
            aria-hidden 
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Floating corner accents */}
          <motion.div
            aria-hidden
            animate={shouldReduceMotion ? {} : { 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={cn(
              'absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500',
              isPopular 
                ? 'bg-[#8FBC52]/20 opacity-100' 
                : 'bg-[#8FBC52]/10 opacity-0 group-hover:opacity-100'
            )}
          />

          {/* Popular badge with 3D effect */}
          {isPopular && (
            <motion.div 
              className="absolute -top-5 left-1/2 -translate-x-1/2"
              style={{ transform: 'translateX(-50%) translateZ(40px)' }}
              animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8FBC52] to-[#B9D97A] blur-lg opacity-60" />
                <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8FBC52] to-[#3E5F1E] text-white text-sm font-bold shadow-xl">
                  <Star className="w-4 h-4 fill-current" />
                  {t('pricing.popular')}
                </div>
              </div>
            </motion.div>
          )}

          {/* Plan icon */}
          <motion.div
            className={cn(
              'relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
              isPopular 
                ? 'bg-gradient-to-br from-[#8FBC52]/30 to-[#3E5F1E]/30' 
                : 'bg-muted/80 group-hover:bg-[#8FBC52]/10'
            )}
            style={{ transform: 'translateZ(15px)' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className={cn(
              'w-8 h-8 transition-colors',
              isPopular ? 'text-[#B9D97A]' : 'text-foreground/70 group-hover:text-[#8FBC52]'
            )} />
          </motion.div>

          {/* Plan name & subtitle */}
          <div className="mb-8" style={{ transform: 'translateZ(10px)' }}>
            <motion.h3 
              className={cn(
                'text-2xl lg:text-3xl font-bold mb-2',
                isPopular ? 'text-white' : 'text-foreground'
              )}
              whileHover={{ scale: 1.02 }}
            >
              {t(plan.nameKey)}
            </motion.h3>
            <p className={cn(
              'text-sm leading-relaxed',
              isPopular ? 'text-white/70' : 'text-muted-foreground'
            )}>
              {t(plan.subtitleKey)}
            </p>
          </div>

          {/* Price with premium styling */}
          <div 
            className={cn(
              'mb-8 pb-8 border-b',
              isPopular ? 'border-white/10' : 'border-border/40'
            )}
            style={{ transform: 'translateZ(20px)' }}
          >
            <div className={cn(
              'text-sm font-medium mb-2',
              isPopular ? 'text-[#B9D97A]' : 'text-muted-foreground'
            )}>
              {t('pricing.from')}
            </div>
            <motion.div 
              className="flex items-baseline gap-2"
              dir="ltr"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={cn(
                'text-5xl lg:text-6xl font-black tabular-nums tracking-tight',
                isPopular 
                  ? 'bg-gradient-to-br from-white via-[#B9D97A] to-white bg-clip-text text-transparent' 
                  : 'text-foreground'
              )}>
                {plan.price.toLocaleString()}
              </span>
              <div className={cn(
                'flex flex-col text-sm',
                isPopular ? 'text-white/60' : 'text-muted-foreground'
              )}>
                <span>{t('pricing.currency')}</span>
                <span>{t('pricing.perMonth')}</span>
              </div>
            </motion.div>
          </div>

          {/* Features list with consistent height */}
          <ul className="space-y-4 mb-10 flex-1" style={{ transform: 'translateZ(5px)' }}>
            {plan.features.map((feat, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className={cn(
                  'flex items-start gap-3',
                  dir === 'rtl' && 'flex-row-reverse text-right'
                )}
              >
                <motion.span 
                  className={cn(
                    'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300',
                    isPopular 
                      ? 'bg-[#8FBC52]/30 text-[#B9D97A]' 
                      : 'bg-[#8FBC52]/10 text-[#8FBC52] group-hover:bg-[#8FBC52]/20'
                  )}
                  whileHover={{ scale: 1.2 }}
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </motion.span>
                <span className={cn(
                  'text-sm',
                  isPopular ? 'text-white/90' : 'text-foreground/80'
                )}>
                  {t(feat)}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button with premium 3D hover */}
          <motion.div
            style={{ transform: 'translateZ(25px)' }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className={cn(
                'rounded-full w-full font-bold text-base h-14 transition-all duration-500 relative overflow-hidden group/btn',
                isPopular
                  ? 'bg-gradient-to-r from-[#8FBC52] via-[#8FBC52] to-[#3E5F1E] hover:from-[#9FCC62] hover:to-[#4E6F2E] text-white shadow-[0_0_30px_-5px_rgba(143,188,82,0.5)] hover:shadow-[0_0_40px_-5px_rgba(143,188,82,0.7)]'
                  : 'bg-transparent border-2 border-[#8FBC52]/50 text-foreground hover:bg-[#8FBC52] hover:text-white hover:border-[#8FBC52]'
              )}
            >
              <Link href="/contact" className={cn('inline-flex items-center justify-center gap-3', dir === 'rtl' && 'flex-row-reverse')}>
                {/* Button shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">{t(plan.ctaKey)}</span>
                <motion.span
                  animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative"
                >
                  <ArrowIcon className="w-5 h-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Pricing() {
  const { t, dir } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="pricing" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-[#E7F2D5]/5 to-background dark:via-[#1a2a0f]/20" />

      {/* Animated background elements */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large rotating gradient orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            rotate: 360,
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8FBC52]/15 via-[#B9D97A]/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 70, repeat: Infinity, ease: 'linear' },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#B9D97A]/15 via-[#8FBC52]/10 to-transparent blur-3xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[20%] w-20 h-20 rounded-2xl border border-[#8FBC52]/20 rotate-12"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 left-[15%] w-16 h-16 rounded-full border border-[#B9D97A]/20"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 left-[10%] w-3 h-3 rounded-full bg-[#8FBC52]/30"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/4 right-[10%] w-4 h-4 rounded-full bg-[#B9D97A]/30"
        />

        {/* Circular arc decorations */}
        <svg className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#8FBC52" strokeWidth="0.5" strokeDasharray="10 5" />
        </svg>
        <svg className="absolute bottom-1/3 right-1/4 w-48 h-48 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#B9D97A" strokeWidth="0.5" strokeDasharray="8 4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8FBC52]/10 border border-[#8FBC52]/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#8FBC52]" />
            <span className="text-sm font-semibold text-[#8FBC52]">{t('pricing.badge')}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">
            {t('pricing.title')}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground text-balance leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Plans grid - equal height with grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
          style={{ perspective: '1500px' }}
        >
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.nameKey} 
              plan={plan} 
              index={index}
              t={t}
              dir={dir}
            />
          ))}
        </div>

        {/* Tagline with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 flex items-center justify-center"
        >
          <motion.div 
            className={cn(
              'inline-flex items-center gap-4 px-8 py-5 rounded-full',
              'bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-[#8FBC52]/20',
              'shadow-lg shadow-[#8FBC52]/5',
              dir === 'rtl' && 'flex-row-reverse'
            )}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <motion.span 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8FBC52]/20 to-[#B9D97A]/10 flex items-center justify-center"
              animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-6 h-6 text-[#8FBC52]" />
            </motion.span>
            <span className="text-base sm:text-lg font-medium text-foreground/90">
              {t('pricing.tagline')}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
