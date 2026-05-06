'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
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
    descEn: 'Complete social media rebrand with daily content creation, resulting in 300% engagement increase and 45% more foot traffic.',
    descAr: 'إعادة بناء كاملة لحضورها الرقمي مع محتوى يومي، رفعت التفاعل 300% وزيادة الزوار 45%.',
    servicesEn: ['Social Media', 'Content', 'Branding'],
    servicesAr: ['سوشيال', 'محتوى', 'هوية'],
    metrics: [
      { labelEn: 'Engagement', labelAr: 'التفاعل', value: '+300%' },
      { labelEn: 'Followers', labelAr: 'المتابعون', value: '+2.5K' },
      { labelEn: 'Foot Traffic', labelAr: 'الزوار', value: '+45%' },
    ],
    image: IMG.dashboard,
  },
  {
    id: 2,
    titleEn: 'Glow Beauty Studio',
    titleAr: 'استوديو جلو',
    categoryEn: 'Brand Identity & Social',
    categoryAr: 'هوية وسوشيال',
    descEn: 'Full brand identity design and Instagram strategy for a luxury beauty salon, establishing a premium market position.',
    descAr: 'تصميم هوية كاملة واستراتيجية إنستغرام لصالون فاخر، رسّخ مكانته في السوق المتميّز.',
    servicesEn: ['Branding', 'Social Media', 'Photography'],
    servicesAr: ['هوية', 'سوشيال', 'تصوير'],
    metrics: [
      { labelEn: 'Brand Recognition', labelAr: 'الوعي بالعلامة', value: '+180%' },
      { labelEn: 'Bookings', labelAr: 'الحجوزات', value: '+60%' },
      { labelEn: 'IG Growth', labelAr: 'نموّ إنستغرام', value: '+4K' },
    ],
    image: IMG.portfolio[1],
  },
  {
    id: 3,
    titleEn: 'TechFlow SaaS',
    titleAr: 'تيك فلو SaaS',
    categoryEn: 'Website Development',
    categoryAr: 'تطوير موقع',
    descEn: 'Modern, conversion-optimized landing page with integrated automation tools, increasing signups by 85%.',
    descAr: 'صفحة هبوط حديثة مُحسّنة للتحويل مع أتمتة مدمجة، زادت التسجيلات 85%.',
    servicesEn: ['Web Design', 'Development', 'Automation'],
    servicesAr: ['تصميم ويب', 'تطوير', 'أتمتة'],
    metrics: [
      { labelEn: 'Conversion', labelAr: 'التحويل', value: '+85%' },
      { labelEn: 'Page Speed', labelAr: 'سرعة الصفحة', value: '95/100' },
      { labelEn: 'Lead Quality', labelAr: 'جودة العملاء', value: '+70%' },
    ],
    image: IMG.portfolio[2],
  },
  {
    id: 4,
    titleEn: 'Urban Threads',
    titleAr: 'أربن ثريدز',
    categoryEn: 'E-commerce & Ads',
    categoryAr: 'متجر وإعلانات',
    descEn: 'E-commerce platform with targeted ad campaigns driving 5x ROI in 90 days and establishing strong online presence.',
    descAr: 'متجر إلكتروني مع حملات مستهدفة حقّقت 5 أضعاف العائد خلال 90 يوماً.',
    servicesEn: ['E-commerce', 'Paid Ads', 'Strategy'],
    servicesAr: ['متجر', 'إعلانات', 'استراتيجية'],
    metrics: [
      { labelEn: 'ROI', labelAr: 'العائد', value: '5x' },
      { labelEn: 'Revenue', labelAr: 'الإيرادات', value: '+320%' },
      { labelEn: 'ROAS', labelAr: 'ROAS', value: '4.8' },
    ],
    image: IMG.portfolio[3],
  },
  {
    id: 5,
    titleEn: 'Bite Street Food',
    titleAr: 'بايت ستريت فود',
    categoryEn: 'Content & Reels',
    categoryAr: 'محتوى وريلز',
    descEn: 'Viral-ready reels and short-form content strategy that transformed a local food truck into a regional sensation.',
    descAr: 'استراتيجية ريلز ومحتوى قصير حوّلت عربة طعام محليّة إلى ظاهرة إقليمية.',
    servicesEn: ['Video', 'Reels', 'Content Strategy'],
    servicesAr: ['فيديو', 'ريلز', 'استراتيجية محتوى'],
    metrics: [
      { labelEn: 'Video Views', labelAr: 'المشاهدات', value: '2M+' },
      { labelEn: 'Viral Reels', labelAr: 'ريلز منتشرة', value: '12' },
      { labelEn: 'Orders', labelAr: 'الطلبات', value: '+200%' },
    ],
    image: IMG.portfolio[4],
  },
  {
    id: 6,
    titleEn: 'Wellness Hub',
    titleAr: 'ويلنس هَب',
    categoryEn: 'Digital Strategy',
    categoryAr: 'استراتيجية رقمية',
    descEn: 'Comprehensive digital transformation including website, content strategy, and automation for a wellness center.',
    descAr: 'تحوّل رقمي شامل يضمّ موقعاً واستراتيجية محتوى وأتمتة لمركز عافية.',
    servicesEn: ['Strategy', 'Web Design', 'Automation'],
    servicesAr: ['استراتيجية', 'تصميم ويب', 'أتمتة'],
    metrics: [
      { labelEn: 'Bookings', labelAr: 'الحجوزات', value: '+150%' },
      { labelEn: 'Retention', labelAr: 'الاحتفاظ', value: '+40%' },
      { labelEn: 'Time Saved', labelAr: 'وقت موفّر', value: '20h/wk' },
    ],
    image: IMG.portfolio[5],
  },
]

export function WorkGrid() {
  const { t, language, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const title = language === 'ar' ? project.titleAr : project.titleEn
            const category = language === 'ar' ? project.categoryAr : project.categoryEn
            const desc = language === 'ar' ? project.descAr : project.descEn
            const services = language === 'ar' ? project.servicesAr : project.servicesEn

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={cn('group', dir === 'rtl' && 'text-right')}
              >
                <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] mb-6 border border-border/60">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/90 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300"
                  >
                    <Button variant="secondary" size="lg" className="rounded-full" asChild>
                      <Link href={`/work`} className={cn('flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                        {t('portfolio.viewCase')}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>

                  <div className={cn(
                    'absolute top-6 w-12 h-12 rounded-full bg-background/90 backdrop-blur flex items-center justify-center',
                    dir === 'rtl' ? 'left-6' : 'right-6'
                  )}>
                    <span className="text-sm font-bold text-primary">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div>
                  <div className={cn('flex items-center justify-between mb-2', dir === 'rtl' && 'flex-row-reverse')}>
                    <span className="text-sm font-medium text-primary">{category}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-muted/30 border border-border">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'ar' ? metric.labelAr : metric.labelEn}
                        </div>
                      </div>
                    ))}
                  </div>

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
      </div>
    </section>
  )
}
