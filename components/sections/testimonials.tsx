'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { IMG } from '@/lib/images'

const testimonials = [
  {
    nameEn: 'Sarah Ahmad',
    nameAr: 'سارة أحمد',
    roleEn: 'Founder, Fresh Bites Cafe',
    roleAr: 'مؤسِّسة، مقهى فريش بايتس',
    contentEn: "Rawij transformed our social media presence completely. Our engagement tripled in just two months, and we're seeing real customers walk through our doors because of their content.",
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
    <section className="py-20 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMG.testimonialsBg}
          alt=""
          fill
          className="object-cover opacity-30 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated grid background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
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
            <span className="text-sm font-semibold text-primary">{t('testimonials.badge')}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-balance">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ perspective: '1200px' }}
        >
          {testimonials.map((testimonial, index) => {
            const name = language === 'ar' ? testimonial.nameAr : testimonial.nameEn
            const role = language === 'ar' ? testimonial.roleAr : testimonial.roleEn
            const content = language === 'ar' ? testimonial.contentAr : testimonial.contentEn
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 3,
                  rotateX: -3,
                  transition: { duration: 0.3 }
                }}
                className="group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={cn(
                  'relative h-full p-7 lg:p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 transition-all duration-500',
                  'hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15',
                  dir === 'rtl' && 'text-right'
                )}>
                  {/* Glow effect */}
                  <motion.div 
                    aria-hidden 
                    className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />

                  {/* Quote icon with 3D depth */}
                  <motion.div
                    className={cn(
                      'absolute top-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center',
                      dir === 'rtl' ? 'left-6' : 'right-6'
                    )}
                    style={{ transform: 'translateZ(20px)' }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Quote className={cn(
                      'w-6 h-6 text-primary/50',
                      dir === 'rtl' && 'scale-x-[-1]'
                    )} />
                  </motion.div>

                  {/* Stars */}
                  <div className={cn('flex gap-1 mb-5', dir === 'rtl' && 'justify-end')}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/90 leading-relaxed mb-7 relative">
                    &ldquo;{content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className={cn(
                    'flex items-center gap-4 pt-5 border-t border-border/50',
                    dir === 'rtl' && 'flex-row-reverse'
                  )}>
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center border border-primary/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-xl font-bold text-primary">
                        {name.charAt(0)}
                      </span>
                    </motion.div>
                    <div className={cn(dir === 'rtl' && 'text-right')}>
                      <div className="font-bold text-base">{name}</div>
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
