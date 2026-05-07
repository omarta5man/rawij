'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText, Video, Megaphone, MessageSquare, Globe, Sparkles, Star, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TiltCard } from '@/components/ui/motion/tilt-card'
import { SectionBackground } from '@/components/ui/section-background'
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

export function Pricing() {
  const { t, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <SectionBackground src={IMG.bgDashboardSoft} opacity="normal" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('pricing.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('pricing.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const isPopular = !!plan.popular
            return (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={cn(
                  'relative group flex',
                  isPopular && 'md:-translate-y-2'
                )}
              >
                {/* Glow for popular */}
                {isPopular && (
                  <motion.div
                    aria-hidden
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/20 blur-2xl -z-10"
                  />
                )}

                <TiltCard intensity={isPopular ? 6 : 4} className="w-full">
                <div
                  className={cn(
                    'relative w-full rounded-3xl p-7 sm:p-8 backdrop-blur-md border transition-all duration-300 flex flex-col',
                    isPopular
                      ? 'bg-card/90 border-primary/40 shadow-2xl shadow-primary/15'
                      : 'bg-card/70 border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
                  )}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {t('pricing.popular')}
                      </div>
                    </div>
                  )}

                  {/* Plan name */}
                  <div className={cn('text-center mb-6', dir === 'rtl' && 'text-center')}>
                    <h3 className={cn('text-2xl sm:text-3xl font-bold mb-1', isPopular && 'text-primary')}>
                      {t(plan.nameKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
                      {t(plan.subKey)}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-7 pb-7 border-b border-border/60">
                    <div className="flex items-baseline justify-center gap-2" dir="ltr">
                      <span className={cn(
                        'text-5xl sm:text-6xl font-bold tabular-nums',
                        isPopular ? 'text-primary' : 'text-foreground'
                      )}>
                        {plan.price}
                      </span>
                    </div>
                    <div className="mt-1.5 text-sm text-muted-foreground">
                      {t('pricing.currency')} <span className="opacity-60">·</span> {t('pricing.perMonth')}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feat, idx) => {
                      const Icon = feat.icon
                      return (
                        <li
                          key={idx}
                          className={cn(
                            'flex items-center gap-3',
                            dir === 'rtl' && 'flex-row-reverse'
                          )}
                        >
                          <span className={cn(
                            'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
                            isPopular ? 'bg-primary/15 text-primary' : 'bg-muted text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary'
                          )}>
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="text-sm sm:text-base text-foreground/90">
                            {t(feat.key)}
                          </span>
                        </li>
                      )
                    })}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    variant={isPopular ? 'default' : 'outline'}
                    className={cn(
                      'rounded-full w-full group/btn',
                      isPopular
                        ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35'
                        : 'border-2 border-border hover:border-primary hover:text-primary'
                    )}
                  >
                    <Link href="/contact" className={cn('inline-flex items-center justify-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                      {t('pricing.cta')}
                      <ArrowIcon className={cn(
                        'w-4 h-4 transition-transform',
                        dir === 'rtl' ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'
                      )} />
                    </Link>
                  </Button>
                </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex items-center justify-center"
        >
          <div className={cn(
            'inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card/70 backdrop-blur border border-border shadow-sm',
            dir === 'rtl' && 'flex-row-reverse'
          )}>
            <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
              <Store className="w-4.5 h-4.5 text-primary" />
            </span>
            <span className="text-sm sm:text-base font-medium text-foreground/85">
              {t('pricing.tagline')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
