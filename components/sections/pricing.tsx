'use client'

import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Star, Sparkles, Zap, Crown, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

interface Plan {
  nameKey: string
  subtitleKey: string
  ctaKey: string
  price: number
  accentColor: string
  glowColor: string
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
    accentColor: '#6BA832',
    glowColor: 'rgba(107,168,50,0.25)',
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
    accentColor: '#8FBC52',
    glowColor: 'rgba(143,188,82,0.4)',
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
    accentColor: '#B9D97A',
    glowColor: 'rgba(185,217,122,0.25)',
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

function PricingCard({
  plan,
  index,
  t,
  dir,
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
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(mouseX, [-150, 150], ['0%', '100%'])
  const glowY = useTransform(mouseY, [-150, 150], ['0%', '100%'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group relative h-full', isPopular && 'z-10 lg:-mt-6 lg:mb-6')}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={shouldReduceMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="h-full relative"
      >
        {/* Popular badge — rendered OUTSIDE the overflow-hidden card body so it isn't clipped */}
        {isPopular && (
          <motion.div
            className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 pointer-events-none"
            animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: 'translateX(-50%) translateZ(40px)' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8FBC52] to-[#B9D97A] blur-md opacity-70 rounded-full" />
              <div className="relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#8FBC52] to-[#5A8C28] text-white text-xs font-bold tracking-wide shadow-lg shadow-[#8FBC52]/30">
                <Star className="w-3.5 h-3.5 fill-current" />
                {t('pricing.popular')}
              </div>
            </div>
          </motion.div>
        )}

        {/* Outer ambient glow */}
        <motion.div
          aria-hidden
          animate={shouldReduceMotion ? {} : {
            opacity: isPopular ? [0.5, 0.85, 0.5] : [0, 0.4, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-3 rounded-[2.8rem] blur-2xl -z-10"
          style={{ background: `radial-gradient(ellipse at center, ${plan.glowColor}, transparent 70%)` }}
        />

        {/* Popular border glow */}
        {isPopular && (
          <motion.div
            aria-hidden
            animate={shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-[1.5px] rounded-[2.5rem] -z-10"
            style={{
              background: 'linear-gradient(135deg, #8FBC52, #B9D97A, #3E5F1E, #8FBC52)',
              backgroundSize: '300% 300%',
            }}
          />
        )}

        {/* Card body */}
        <div
          className={cn(
            'relative h-full rounded-[2.4rem] flex flex-col overflow-hidden',
            'border transition-all duration-500',
            isPopular
              ? 'bg-[#0d1a07] border-transparent shadow-[0_30px_80px_-20px_rgba(143,188,82,0.5)]'
              : 'bg-card/70 dark:bg-[#0f150b]/80 border-white/10 hover:border-[#8FBC52]/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_70px_-20px_rgba(143,188,82,0.2)]',
            'backdrop-blur-2xl'
          )}
        >
          {/* Mouse-follow inner glow */}
          {!shouldReduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
              style={{
                background: isHovered
                  ? `radial-gradient(300px circle at ${glowX} ${glowY}, ${plan.glowColor}, transparent 60%)`
                  : 'none',
              }}
            />
          )}

          {/* Top-edge glass shine */}
          <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Subtle dot grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #8FBC52 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Diagonal shimmer beam */}
          <div
            aria-hidden
            className="absolute -inset-full top-0 h-full w-1/3 -z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-12 translate-x-[-200%] group-hover:translate-x-[500%]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }}
          />

          {/* Corner accent blob */}
          <div
            aria-hidden
            className={cn(
              'absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500',
              isPopular ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
            )}
            style={{ background: `radial-gradient(circle, ${plan.accentColor}, transparent 70%)` }}
          />

          {/* Padding container */}
          <div className="relative z-10 p-7 lg:p-9 flex flex-col h-full">
            {/* Icon */}
            <div className="mb-6 mt-2">
              <motion.div
                className={cn(
                  'relative w-14 h-14 rounded-2xl flex items-center justify-center',
                  isPopular
                    ? 'bg-gradient-to-br from-[#8FBC52]/30 to-[#3E5F1E]/40 border border-[#8FBC52]/30'
                    : 'bg-white/5 border border-white/10 group-hover:border-[#8FBC52]/30'
                )}
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{ transform: 'translateZ(20px)' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${plan.glowColor}, transparent 70%)` }}
                />
                <Icon className={cn('w-7 h-7', isPopular ? 'text-[#B9D97A]' : 'text-foreground/60 group-hover:text-[#8FBC52]', 'transition-colors duration-300')} />
              </motion.div>
            </div>

            {/* Name & subtitle */}
            <div className="mb-7" style={{ transform: 'translateZ(12px)' }}>
              <h3 className={cn(
                'text-2xl font-bold mb-1.5 tracking-tight',
                isPopular ? 'text-white' : 'text-foreground'
              )}>
                {t(plan.nameKey)}
              </h3>
              <p className={cn(
                'text-sm leading-relaxed',
                isPopular ? 'text-white/55' : 'text-muted-foreground'
              )}>
                {t(plan.subtitleKey)}
              </p>
            </div>

            {/* Price */}
            <div
              className={cn('mb-7 pb-7 border-b', isPopular ? 'border-white/10' : 'border-white/5')}
              style={{ transform: 'translateZ(18px)' }}
            >
              <p className={cn('text-xs font-semibold uppercase tracking-widest mb-2', isPopular ? 'text-[#B9D97A]/70' : 'text-muted-foreground/60')}>
                {t('pricing.from')}
              </p>
              <div className="flex items-end gap-3" dir="ltr">
                <motion.span
                  className={cn(
                    'text-5xl lg:text-6xl font-black tabular-nums leading-none',
                    isPopular
                      ? 'bg-gradient-to-br from-white via-[#B9D97A] to-[#8FBC52] bg-clip-text text-transparent'
                      : 'text-foreground'
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {plan.price.toLocaleString()}
                </motion.span>
                <div className={cn('flex flex-col text-xs pb-1.5 leading-tight', isPopular ? 'text-white/40' : 'text-muted-foreground/50')}>
                  <span>{t('pricing.currency')}</span>
                  <span>{t('pricing.perMonth')}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3.5 flex-1 mb-8" style={{ transform: 'translateZ(8px)' }}>
              {plan.features.map((feat, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 16 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.06, duration: 0.4 }}
                  className={cn('flex items-start gap-3', dir === 'rtl' && 'flex-row-reverse text-right')}
                >
                  <span
                    className={cn(
                      'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300',
                      isPopular
                        ? 'bg-[#8FBC52]/25 text-[#B9D97A]'
                        : 'bg-[#8FBC52]/10 text-[#8FBC52] group-hover:bg-[#8FBC52]/20'
                    )}
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className={cn('text-sm leading-relaxed', isPopular ? 'text-white/80' : 'text-foreground/75')}>
                    {t(feat)}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              style={{ transform: 'translateZ(28px)' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                asChild
                size="lg"
                className={cn(
                  'relative rounded-full w-full font-bold text-sm h-13 overflow-hidden transition-all duration-500',
                  isPopular
                    ? 'bg-gradient-to-r from-[#8FBC52] to-[#5A8C28] text-white shadow-[0_0_30px_-5px_rgba(143,188,82,0.6)] hover:shadow-[0_0_50px_-5px_rgba(143,188,82,0.8)] hover:from-[#9FCC62] hover:to-[#6BA832] border-0'
                    : 'bg-transparent border border-[#8FBC52]/30 text-foreground hover:bg-[#8FBC52]/10 hover:border-[#8FBC52]/60'
                )}
              >
                <Link
                  href="/contact"
                  className={cn('inline-flex items-center justify-center gap-2.5', dir === 'rtl' && 'flex-row-reverse')}
                >
                  {/* Shine sweep */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                  />
                  <span className="relative">{t(plan.ctaKey)}</span>
                  <motion.span
                    className="relative"
                    animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowIcon className="w-4 h-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Pricing() {
  const { t, dir } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="pricing" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      {/* Deep dark base gradient */}
      <div aria-hidden className="absolute inset-0 -z-30 bg-gradient-to-b from-background via-[#060f03] to-background dark:via-[#060f03]" />

      {/* Large background glows */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <motion.div
          aria-hidden
          animate={shouldReduceMotion ? {} : { rotate: 360, scale: [1, 1.12, 1] }}
          transition={{ rotate: { duration: 60, repeat: Infinity, ease: 'linear' }, scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
          className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, #8FBC52 0%, #3E5F1E 40%, transparent 70%)' }}
        />
        <motion.div
          aria-hidden
          animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #B9D97A, transparent 70%)' }}
        />
        <motion.div
          aria-hidden
          animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #8FBC52, transparent 70%)' }}
        />
      </div>

      {/* Floating background shapes */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -30, 0], rotate: [12, 22, 12] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-[12%] w-24 h-24 rounded-3xl border border-[#8FBC52]/15 bg-[#8FBC52]/5 backdrop-blur-sm"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 24, 0], rotate: [0, -18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-36 left-[8%] w-16 h-16 rounded-full border border-[#B9D97A]/15 bg-[#B9D97A]/5"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 left-[5%] w-4 h-4 rounded-full bg-[#8FBC52]/25 blur-sm"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 right-[6%] w-5 h-5 rounded-full bg-[#B9D97A]/20 blur-sm"
        />

        {/* Horizontal beam line */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scaleX: [0, 1, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8FBC52]/40 to-transparent origin-left"
        />

        {/* Circular ring decorations */}
        <svg className="absolute -left-24 top-1/4 w-72 h-72 opacity-[0.07]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#8FBC52" strokeWidth="1" strokeDasharray="12 6" />
          <circle cx="100" cy="100" r="55" stroke="#B9D97A" strokeWidth="0.5" strokeDasharray="8 4" />
        </svg>
        <svg className="absolute -right-24 bottom-1/4 w-64 h-64 opacity-[0.07]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="70" stroke="#8FBC52" strokeWidth="1" strokeDasharray="10 5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-24 lg:mb-28"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8FBC52]/25 bg-[#8FBC52]/8 backdrop-blur-md mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={shouldReduceMotion ? {} : { rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Shield className="w-4 h-4 text-[#8FBC52]" />
            </motion.span>
            <span className="text-sm font-semibold text-[#8FBC52] tracking-wide">{t('pricing.badge')}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-white leading-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-base sm:text-lg text-white/50 text-balance leading-relaxed max-w-xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Plans grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto items-stretch"
          style={{ perspective: '1600px' }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.nameKey} plan={plan} index={index} t={t} dir={dir} />
          ))}
        </div>

        {/* Tagline footer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 sm:mt-24 flex items-center justify-center"
        >
          <motion.div
            className={cn(
              'inline-flex items-center gap-4 px-8 py-5 rounded-2xl',
              'bg-white/4 backdrop-blur-xl border border-[#8FBC52]/15',
              'shadow-lg shadow-[#8FBC52]/5',
              dir === 'rtl' && 'flex-row-reverse'
            )}
            whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(143,188,82,0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8FBC52]/20 to-[#B9D97A]/10 flex items-center justify-center border border-[#8FBC52]/20"
              animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-5 h-5 text-[#8FBC52]" />
            </motion.span>
            <span className="text-sm sm:text-base font-medium text-white/70">
              {t('pricing.tagline')}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
