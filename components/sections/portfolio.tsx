'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, ExternalLink, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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
    externalLink: null,
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
    image: IMG.portfolioShowcase,
    stat: { en: '+60% bookings', ar: '+60% حجوزات' },
    externalLink: null,
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
    image: '/images/portfolio-3.jpg',
    stat: { en: '+85% conversion', ar: '+85% تحويل' },
    externalLink: 'https://v0-gigi-energy-drink-landing-page.vercel.app/',
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
    image: '/images/portfolio-4.jpg',
    stat: { en: '5× ROI', ar: '5× عائد' },
    externalLink: null,
  },
]

export function Portfolio() {
  const { t, language, dir } = useLanguage()
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: 'linear' },
            scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/8 to-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
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
            <span className="text-sm font-semibold text-primary">{t('portfolio.badge')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-balance">
            {t('portfolio.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
          style={{ perspective: '1200px' }}
        >
          {projects.map((project, index) => {
            const title = language === 'ar' ? project.titleAr : project.titleEn
            const category = language === 'ar' ? project.categoryAr : project.categoryEn
            const desc = language === 'ar' ? project.descAr : project.descEn
            const services = language === 'ar' ? project.servicesAr : project.servicesEn

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={cn('group', dir === 'rtl' && 'text-right')}
              >
                {/* Image container with 3D hover */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: -5,
                    z: 50,
                    transition: { duration: 0.4, ease: 'easeOut' }
                  }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] border border-border/60 shadow-2xl shadow-primary/10 group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Shine effect */}
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    {/* Hover overlay with 3D button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-deep/85 to-accent/80 flex items-center justify-center backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button variant="secondary" size="lg" className="rounded-full shadow-2xl" asChild>
                          {project.externalLink ? (
                            <a 
                              href={project.externalLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}
                            >
                              {t('portfolio.viewProject')}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <Link href="/work" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                              {t('portfolio.viewProject')}
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Project number badge */}
                    <motion.div 
                      className={cn(
                        'absolute top-5 w-14 h-14 rounded-full bg-background/95 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/30',
                        dir === 'rtl' ? 'left-5' : 'right-5'
                      )}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <span className="text-lg font-black text-primary">0{project.id}</span>
                    </motion.div>
                  </div>

                  {/* Floating stat card with 3D effect */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className={cn(
                      'absolute -bottom-6 z-10 hidden sm:flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/30 shadow-2xl px-5 py-4',
                      dir === 'rtl' ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6'
                    )}
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <motion.span 
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </motion.span>
                    <span className="text-base font-bold text-foreground whitespace-nowrap">
                      {language === 'ar' ? project.stat.ar : project.stat.en}
                    </span>
                  </motion.div>

                  {/* Floor reflection */}
                  <div aria-hidden className="absolute -bottom-16 left-[8%] right-[8%] h-16 bg-gradient-to-b from-primary/8 to-transparent blur-2xl rounded-[50%] pointer-events-none" />
                </motion.div>

                {/* Content */}
                <div>
                  <div className={cn('flex items-center gap-2 mb-3', dir === 'rtl' && 'justify-end')}>
                    <span className="text-sm font-semibold text-primary">{category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{desc}</p>
                  <div className={cn('flex flex-wrap gap-2', dir === 'rtl' && 'justify-end')}>
                    {services.map((service, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-1.5 text-xs font-semibold rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-foreground transition-colors duration-300"
                      >
                        {service}
                      </motion.span>
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
          className="text-center mt-16 sm:mt-20"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="lg" asChild className="rounded-full border-2 group hover:border-primary hover:bg-primary/5">
              <Link href="/work" className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                {t('portfolio.viewAll')}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowIcon className="w-4 h-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
