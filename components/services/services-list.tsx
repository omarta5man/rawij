'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Sparkles,
  Video,
  Globe,
  Zap,
  TrendingUp,
  Palette,
  Megaphone,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: MessageSquare,
    titleKey: 'services.socialMedia',
    descKey: 'services.socialMediaDesc',
    title: 'Social Media Management',
    description:
      'Complete social media management from strategy to execution, keeping your brand active and engaging.',
    titleAr: 'إدارة وسائل التواصل',
    descriptionAr: 'إدارة شاملة لوسائل التواصل الاجتماعي من الاستراتيجية إلى التنفيذ، للحفاظ على نشاط علامتك وتفاعلها.',
    image: '/images/service-social.jpg',
    deliverables: [
      { en: 'Content calendar planning', ar: 'تخطيط جدول المحتوى' },
      { en: 'Daily post creation', ar: 'إنشاء المنشورات اليومية' },
      { en: 'Community management', ar: 'إدارة المجتمع' },
      { en: 'Performance analytics', ar: 'تحليلات الأداء' },
      { en: 'Strategy optimization', ar: 'تحسين الاستراتيجية' },
    ],
    idealFor: { en: 'Businesses looking to build consistent social presence', ar: 'الشركات التي تسعى لبناء حضور ثابت على وسائل التواصل' },
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    description:
      'Leverage AI tools combined with human creativity to produce high-quality content faster.',
    titleAr: 'محتوى بالذكاء الاصطناعي',
    descriptionAr: 'استفد من أدوات الذكاء الاصطناعي مع الإبداع البشري لإنتاج محتوى عالي الجودة بشكل أسرع.',
    image: '/images/service-ai.jpg',
    deliverables: [
      { en: 'AI-assisted copywriting', ar: 'كتابة المحتوى بمساعدة AI' },
      { en: 'Automated content generation', ar: 'توليد المحتوى الآلي' },
      { en: 'Brand voice consistency', ar: 'اتساق صوت العلامة التجارية' },
      { en: 'Multi-platform adaptation', ar: 'تكييف متعدد المنصات' },
      { en: 'Quality assurance', ar: 'ضمان الجودة' },
    ],
    idealFor: { en: 'Brands needing high-volume content without compromising quality', ar: 'العلامات التجارية التي تحتاج محتوى بكميات كبيرة دون المساومة على الجودة' },
  },
  {
    icon: Megaphone,
    title: 'Paid Ads Creatives',
    description:
      'Data-driven ad creative that captures attention, communicates value, and drives conversions.',
    titleAr: 'إبداعات الإعلانات المدفوعة',
    descriptionAr: 'إبداعات إعلانية مبنية على البيانات تجذب الانتباه وتوصل القيمة وتدفع التحويلات.',
    image: '/images/service-ads.jpg',
    deliverables: [
      { en: 'Ad concept development', ar: 'تطوير مفهوم الإعلان' },
      { en: 'A/B testing variations', ar: 'اختبارات A/B' },
      { en: 'Platform-specific formats', ar: 'تنسيقات خاصة بكل منصة' },
      { en: 'Performance tracking', ar: 'تتبع الأداء' },
      { en: 'Creative optimization', ar: 'تحسين الإبداع' },
    ],
    idealFor: { en: 'Companies running paid campaigns on social and search', ar: 'الشركات التي تدير حملات مدفوعة على وسائل التواصل والبحث' },
  },
  {
    icon: Globe,
    title: 'Website & Landing Page Design',
    description:
      'Beautiful, fast, and conversion-optimized websites that turn visitors into customers.',
    titleAr: 'تصميم المواقع وصفحات الهبوط',
    descriptionAr: 'مواقع جميلة وسريعة ومحسّنة للتحويل تحوّل الزوار إلى عملاء.',
    image: '/images/service-web.jpg',
    deliverables: [
      { en: 'Custom design', ar: 'تصميم مخصص' },
      { en: 'Responsive development', ar: 'تطوير متجاوب' },
      { en: 'SEO optimization', ar: 'تحسين محركات البحث' },
      { en: 'Speed optimization', ar: 'تحسين السرعة' },
      { en: 'Analytics integration', ar: 'دمج التحليلات' },
    ],
    idealFor: { en: 'Businesses needing a professional web presence', ar: 'الشركات التي تحتاج حضوراً احترافياً على الويب' },
  },
  {
    icon: Zap,
    title: 'Automation & Messaging Systems',
    description:
      'Smart workflows and automated messaging that save time and scale your operations.',
    titleAr: 'الأتمتة وأنظمة المراسلة',
    descriptionAr: 'سير عمل ذكي ومراسلة آلية توفر الوقت وتوسع عملياتك.',
    image: '/images/service-automation.jpg',
    deliverables: [
      { en: 'Workflow automation', ar: 'أتمتة سير العمل' },
      { en: 'Chatbot development', ar: 'تطوير روبوتات الدردشة' },
      { en: 'Email sequences', ar: 'تسلسلات البريد الإلكتروني' },
      { en: 'CRM integration', ar: 'دمج CRM' },
      { en: 'System optimization', ar: 'تحسين النظام' },
    ],
    idealFor: { en: 'Growing businesses looking to scale without adding headcount', ar: 'الشركات النامية التي تسعى للتوسع دون زيادة الموظفين' },
  },
  {
    icon: Palette,
    title: 'Branding & Creative Direction',
    description:
      'Complete brand identity systems that make your business memorable and professional.',
    titleAr: 'الهوية البصرية والتوجيه الإبداعي',
    descriptionAr: 'أنظمة هوية تجارية كاملة تجعل عملك لا يُنسى واحترافي.',
    image: '/images/service-branding.jpg',
    deliverables: [
      { en: 'Logo design', ar: 'تصميم الشعار' },
      { en: 'Brand guidelines', ar: 'إرشادات العلامة التجارية' },
      { en: 'Color & typography systems', ar: 'أنظمة الألوان والخطوط' },
      { en: 'Brand applications', ar: 'تطبيقات العلامة التجارية' },
      { en: 'Style direction', ar: 'التوجيه الأسلوبي' },
    ],
    idealFor: { en: 'New businesses or brands looking for a refresh', ar: 'الشركات الجديدة أو العلامات التجارية التي تبحث عن تجديد' },
  },
]

export function ServicesList() {
  const { language, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16 sm:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div
                  className={cn(
                    "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                    !isEven && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Content */}
                  <div>
                    <div className={cn(
                      "flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6",
                      dir === 'rtl' && "flex-row-reverse"
                    )}>
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <h2 className={cn(
                        "text-2xl sm:text-3xl md:text-4xl font-bold",
                        dir === 'rtl' && "text-right"
                      )}>
                        {language === 'ar' ? service.titleAr : service.title}
                      </h2>
                    </div>

                    <p className={cn(
                      "text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8",
                      dir === 'rtl' && "text-right"
                    )}>
                      {language === 'ar' ? service.descriptionAr : service.description}
                    </p>

                    <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                      {/* Deliverables */}
                      <div>
                        <h3 className={cn(
                          "text-xs sm:text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-3",
                          dir === 'rtl' && "text-right"
                        )}>
                          {language === 'ar' ? 'ما يتضمنه' : "What's Included"}
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className={cn(
                              "flex items-start gap-2 sm:gap-3",
                              dir === 'rtl' && "flex-row-reverse text-right"
                            )}>
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-muted-foreground">
                                {language === 'ar' ? item.ar : item.en}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal For */}
                      <div className="p-3 sm:p-4 rounded-xl bg-muted/50 border border-border">
                        <p className={cn(
                          "text-xs sm:text-sm",
                          dir === 'rtl' && "text-right"
                        )}>
                          <span className="font-semibold text-foreground">
                            {language === 'ar' ? 'مثالي لـ: ' : 'Ideal for: '}
                          </span>
                          <span className="text-muted-foreground">
                            {language === 'ar' ? service.idealFor.ar : service.idealFor.en}
                          </span>
                        </p>
                      </div>
                    </div>

                    <Button asChild className="rounded-full w-full sm:w-auto">
                      <Link href="/contact">
                        {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                      </Link>
                    </Button>
                  </div>

                  {/* Visual Element with Image */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={language === 'ar' ? service.titleAr : service.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      
                      {/* Floating Icon */}
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Separator */}
                {index < services.length - 1 && (
                  <div className="mt-16 sm:mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
