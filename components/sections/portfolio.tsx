'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, ExternalLink, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TiltCard } from '@/components/ui/motion/tilt-card'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

const projects = [
  {
    id: 1,
    titleEn: 'Fresh Bites Cafe',
    titleAr: 'مقهى فريش بايتس',
    categoryEn: 'Social Media Campaign',
    categoryAr: 'حملة وسائل تواصل',
    descEn: 'Complete social media rebrand with daily content creation, resulting in 300% engagement increase.',
    descAr: 'إعادة بناء كاملة لحضورها على السوشيال مع محتوى يومي، رفع التفاعل بنسبة 300%.',
    servicesEn: ['Social Media', 'Content', 'Branding'],
    servicesAr: ['وسائل تواصل', 'محتوى', 'هوية'],
    image: IMG.dashboard,
    stat: { en: '+300% engagement', ar: '+300% تفاعل' },
  },
  {
    id: 2,
    titleEn: 'Glow Beauty Studio',
    titleAr: 'استوديو جلو للجمال',
    categoryEn: 'Brand Identity',
    categoryAr: 'هوية بصرية',
    descEn: 'Full brand identity design and Instagram strategy for a luxury beauty salon.',
    descAr: 'تصميم هوية كاملة واستراتيجية إنستغرام لصالون جمال راقٍ.',
    servicesEn: ['Branding', 'Social Media', 'Photography'],
    servicesAr: ['هوية', 'سوشيال', 'تصوير'],
    image: IMG.portfolio[1],
    stat: { en: '+60% bookings', ar: '+60% حجوزات' },
  },
  {
    id: 3,
    titleEn: 'TechFlow SaaS',
    titleAr: 'تيك فلو SaaS',
    categoryEn: 'Website Development',
    categoryAr: 'تطوير موقع',
    descEn: 'Modern, conversion-optimized landing page with integrated automation tools.',
    descAr: 'صفحة هبوط حديثة مُحسّنة للتحويل مع أدوات أتمتة مدمجة.',
    servicesEn: ['Web Design', 'Development', 'Automation'],
    servicesAr: ['تصميم ويب', 'تطوير', 'أتمتة'],
    image: IMG.portfolio[2],
    stat: { en: '+85% conversion', ar: '+85% تحويل' },
  },
  {
    id: 4,
    titleEn: 'Urban Threads',
    titleAr: 'أربن ثريدز',
    categoryEn: 'E-commerce & Ads',
    categoryAr: 'متجر وإعلانات',
    descEn: 'E-commerce platform with targeted ad campaigns driving 5x ROI in 90 days.',
    descAr: 'متجر إلكتروني مع حملات إعلانية مستهدفة حقّقت عائداً 5 أضعاف خلال 90 يوماً.',
    servicesEn: ['E-commerce', 'Paid Ads', 'Strategy'],
    servicesAr: ['متجر', 'إعلانات', 'استراتيجية'],
    image: IMG.portfolio[3],
    stat: { en: '5× ROI', ar: '5× عائد' },
  },
]

export function Portfolio() {
  const { t, language, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('portfolio.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('portfolio.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const title = language === 'ar' ? project.titleAr : project.titleEn
            const category = language === 'ar' ? project.categoryAr : project.categoryEn
            const desc = language === 'ar' ? project.descAr : project.descEn
            const services = language === 'ar' ? project.servicesAr : project.servicesEn

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={cn('group', dir === 'rtl' && 'text-right')}
              >
                {/* Case-study stack — perspective container */}
                <div className="relative mb-7 sm:mb-8" style={{ perspective: 1400 }}>
                  <TiltCard intensity={5} glare={false} className="relative">
                    <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] border border-border/60 shadow-[0_20px_50px_-20px_rgba(62,95,30,0.25),0_40px_80px_-30px_rgba(143,188,82,0.2)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(62,95,30,0.35),0_50px_100px_-30px_rgba(143,188,82,0.3)]">
                      <Image
                        src={project.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                      />
                      {/* Glass top edge */}
                      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary-deep/85 via-primary/80 to-accent/70 flex items-center justify-center backdrop-blur-sm"
                      >
                        <Button variant="secondary" size="lg" className="rounded-full shadow-xl" asChild>
                          <Link href="/work" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                            {t('portfolio.viewProject')}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>

                      {/* Project number plaque */}
                      <div className={cn(
                        'absolute top-5 w-12 h-12 rounded-full bg-background/95 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/40',
                        dir === 'rtl' ? 'left-5' : 'right-5'
                      )}>
                        <span className="text-sm font-bold text-primary">0{project.id}</span>
                      </div>
                    </div>
                  </TiltCard>

                  {/* Floating stat card — bottom corner, offset out of frame for depth */}
                  <motion.div
                    aria-hidden
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className={cn(
                      'absolute -bottom-5 z-10 hidden sm:flex items-center gap-2.5 rounded-2xl bg-card/95 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-[0_15px_35px_-10px_rgba(62,95,30,0.3)] px-4 py-3',
                      dir === 'rtl' ? '-right-3 lg:-right-5' : '-left-3 lg:-left-5'
                    )}
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {language === 'ar' ? project.stat.ar : project.stat.en}
                    </span>
                  </motion.div>

                  {/* Soft floor reflection */}
                  <div aria-hidden className="absolute -bottom-12 left-[6%] right-[6%] h-12 bg-gradient-to-b from-primary/10 to-transparent blur-2xl rounded-[50%] pointer-events-none" />
                </div>

                <div>
                  <div className={cn('flex items-center gap-2 mb-2', dir === 'rtl' && 'justify-end')}>
                    <span className="text-sm font-medium text-primary">{category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{desc}</p>
                  <div className={cn('flex flex-wrap gap-2', dir === 'rtl' && 'justify-end')}>
                    {services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button variant="outline" size="lg" asChild className="rounded-full border-2 group">
            <Link href="/work" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
              {t('portfolio.viewAll')}
              <ArrowIcon className={cn(
                'w-4 h-4 transition-transform',
                dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
              )} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
