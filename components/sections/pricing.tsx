'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, FileText, Video, Megaphone, MessageSquare, Globe, Sparkles, Star, Store, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

interface Plan {
  nameKey: string
  subKey: string
  price: number
  features: { icon: React.ElementType; key: string }[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    nameKey: 'pricing.starter.name',
    subKey: 'pricing.starter.subtitle',
    price: 400,
    features: [
      { icon: FileText, key: 'pricing.starter.f1' },
      { icon: Video, key: 'pricing.starter.f2' },
      { icon: Sparkles, key: 'pricing.starter.f3' },
    ],
  },
  {
    nameKey: 'pricing.growth.name',
    subKey: 'pricing.growth.subtitle',
    price: 800,
    popular: true,
    features: [
      { icon: FileText, key: 'pricing.growth.f1' },
      { icon: Video, key: 'pricing.growth.f2' },
      { icon: Megaphone, key: 'pricing.growth.f3' },
      { icon: MessageSquare, key: 'pricing.growth.f4' },
    ],
  },
  {
    nameKey: 'pricing.pro.name',
    subKey: 'pricing.pro.subtitle',
    price: 1400,
    features: [
      { icon: FileText, key: 'pricing.pro.f1' },
      { icon: Video, key: 'pricing.pro.f2' },
      { icon: Megaphone, key: 'pricing.pro.f3' },
      { icon: MessageSquare, key: 'pricing.pro.f4' },
      { icon: Globe, key: 'pricing.pro.f5' },
    ],
  },
]

// 3D Card component with hover effects
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ 
          rotateY: 5,
          rotateX: -5,
          z: 50,
          transition: { duration: 0.4, ease: 'easeOut' }
        }}
        className="h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow effect for popular */}
        {isPopular && (
          <motion.div
            aria-hidden
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 blur-xl -z-10"
          />
        )}

        <div
          className={cn(
            'relative h-full rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 flex flex-col',
            'transform-gpu',
            isPopular
              ? 'bg-gradient-to-br from-card/95 via-card/90 to-primary/5 border-primary/50 shadow-2xl shadow-primary/20'
              : 'bg-card/80 border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D floating elements */}
          <div 
            aria-hidden 
            className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: 'translateZ(20px)' }}
          />
          
          {/* Popular badge with 3D effect */}
          {isPopular && (
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              style={{ transform: 'translateZ(30px)' }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-lg shadow-primary/40">
                <Star className="w-3.5 h-3.5 fill-current" />
                {t('pricing.popular')}
              </div>
            </motion.div>
          )}

          {/* Plan header */}
          <div className="text-center mb-8" style={{ transform: 'translateZ(10px)' }}>
            <motion.h3 
              className={cn(
                'text-2xl font-bold mb-2',
                isPopular ? 'text-primary' : 'text-foreground'
              )}
              whileHover={{ scale: 1.02 }}
            >
              {t(plan.nameKey)}
            </motion.h3>
            <p className="text-sm text-muted-foreground">
              {t(plan.subKey)}
            </p>
          </div>

          {/* Price with 3D depth */}
          <div 
            className="text-center mb-8 pb-8 border-b border-border/40"
            style={{ transform: 'translateZ(15px)' }}
          >
            <motion.div 
              className="flex items-baseline justify-center gap-1"
              dir="ltr"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={cn(
                'text-6xl font-black tabular-nums tracking-tight',
                isPopular 
                  ? 'bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent' 
                  : 'text-foreground'
              )}>
                {plan.price}
              </span>
            </motion.div>
            <div className="mt-2 text-sm text-muted-foreground">
              {t('pricing.currency')} <span className="opacity-50">/</span> {t('pricing.perMonth')}
            </div>
          </div>

          {/* Features with consistent height */}
          <ul className="space-y-4 mb-8 flex-1" style={{ transform: 'translateZ(5px)' }}>
            {plan.features.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={cn(
                    'flex items-center gap-3',
                    dir === 'rtl' && 'flex-row-reverse'
                  )}
                >
                  <motion.span 
                    className={cn(
                      'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                      isPopular 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted text-foreground/70 group-hover:bg-primary/15 group-hover:text-primary'
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.span>
                  <span className="text-sm text-foreground/85">
                    {t(feat.key)}
                  </span>
                </motion.li>
              )
            })}
          </ul>

          {/* CTA Button with 3D hover */}
          <motion.div
            style={{ transform: 'translateZ(20px)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              variant={isPopular ? 'default' : 'outline'}
              className={cn(
                'rounded-full w-full font-semibold transition-all duration-300',
                isPopular
                  ? 'bg-gradient-to-r from-primary to-primary-deep hover:from-primary/90 hover:to-primary-deep/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40'
                  : 'border-2 border-border hover:border-primary hover:bg-primary/5'
              )}
            >
              <Link href="/contact" className={cn('inline-flex items-center justify-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                {t('pricing.cta')}
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMG.pricing3dBg}
          alt=""
          fill
          className="object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated background elements */}
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
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div 
            className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-primary">{t('pricing.badge')}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-balance">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Plans grid - equal height with grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
          style={{ perspective: '1200px' }}
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

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 flex items-center justify-center"
        >
          <motion.div 
            className={cn(
              'inline-flex items-center gap-3 px-6 py-4 rounded-full bg-card/80 backdrop-blur-md border border-border/60 shadow-lg',
              dir === 'rtl' && 'flex-row-reverse'
            )}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              <Store className="w-5 h-5 text-primary" />
            </span>
            <span className="text-sm sm:text-base font-medium text-foreground/90">
              {t('pricing.tagline')}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
