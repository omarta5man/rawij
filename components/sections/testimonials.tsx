'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    nameEn: 'Sarah Ahmad',
    nameAr: 'سارة أحمد',
    roleEn: 'Founder, Fresh Bites Cafe',
    roleAr: 'مؤسِّسة، مقهى فريش بايتس',
    contentEn: 'Rawij transformed our social media presence completely. Our engagement tripled in just two months, and we’re seeing real customers walk through our doors because of their content.',
    contentAr: 'روّج غيّروا حضورنا الرقمي بالكامل. تفاعل صفحاتنا تضاعف ثلاث مرات خلال شهرين، ونلاحظ عملاء جدد يدخلون يومياً بسبب محتواهم.',
    rating: 5,
  },
  {
    nameEn: 'Omar Khalil',
    nameAr: 'عمر خليل',
    roleEn: 'CEO, TechFlow Solutions',
    roleAr: 'الرئيس التنفيذي، تيك فلو',
    contentEn: 'Working with Rawij was a game-changer. They built us a stunning website and set up automation that saves our team hours every week. Highly professional and creative.',
    contentAr: 'العمل مع روّج كان نقطة تحوّل. بنوا لنا موقعاً مذهلاً وأنظمة أتمتة توفّر على فريقنا ساعات كل أسبوع. احترافيّة وإبداع بمستوى عالٍ.',
    rating: 5,
  },
  {
    nameEn: 'Layla Hassan',
    nameAr: 'ليلى حسن',
    roleEn: 'Owner, Glow Beauty Studio',
    roleAr: 'صاحبة استوديو جلو',
    contentEn: 'The branding and content they created for us is absolutely beautiful. Our clients constantly compliment our Instagram, and bookings have increased significantly.',
    contentAr: 'الهوية والمحتوى اللي صنعوه لنا في غاية الجمال. عميلاتنا يمدحون إنستغرامنا باستمرار، والحجوزات زادت بشكل كبير.',
    rating: 5,
  },
]

export function Testimonials() {
  const { t, language, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const name = language === 'ar' ? testimonial.nameAr : testimonial.nameEn
            const role = language === 'ar' ? testimonial.roleAr : testimonial.roleEn
            const content = language === 'ar' ? testimonial.contentAr : testimonial.contentEn
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className={cn(
                  'relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300',
                  dir === 'rtl' && 'text-right'
                )}>
                  <Quote className={cn(
                    'absolute top-6 w-8 h-8 text-primary/15',
                    dir === 'rtl' ? 'left-6 scale-x-[-1]' : 'right-6'
                  )} />

                  <div className={cn('flex gap-1 mb-4', dir === 'rtl' && 'justify-end')}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                    “{content}”
                  </p>

                  <div className={cn(
                    'flex items-center gap-3 pt-4 border-t border-border',
                    dir === 'rtl' && 'flex-row-reverse'
                  )}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                      <span className="text-lg font-bold text-primary">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <div className={cn(dir === 'rtl' && 'text-right')}>
                      <div className="font-semibold">{name}</div>
                      <div className="text-sm text-muted-foreground">{role}</div>
                    </div>
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
