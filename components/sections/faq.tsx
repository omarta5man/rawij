'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const faqs = [
  {
    qEn: 'What services does Rawij offer?',
    qAr: 'ما الخدمات التي تقدّمها روّج؟',
    aEn: 'We offer a complete range of digital solutions: social media content, AI-powered ads and creatives, reels and short videos, website and landing page design, automation and messaging systems, branding and visual identity, and full digital strategy consulting.',
    aAr: 'نُقدّم مجموعة متكاملة من الحلول الرقمية: محتوى السوشيال ميديا، إعلانات وإبداعات بالذكاء الاصطناعي، ريلز وفيديوهات قصيرة، تصميم مواقع وصفحات هبوط، أنظمة أتمتة ومراسلة، الهوية البصرية، والاستشارات الاستراتيجية الشاملة.',
  },
  {
    qEn: 'How long does a typical project take?',
    qAr: 'كم تستغرق المشاريع عادةً؟',
    aEn: 'Timelines vary by scope. Social media packages take 1–2 weeks to set up, websites range 2–6 weeks, and branding projects 3–4 weeks. We pride ourselves on fast turnaround without compromising quality.',
    aAr: 'تختلف المدد حسب حجم المشروع. باقات السوشيال تأخذ 1-2 أسبوع للإعداد، المواقع 2-6 أسابيع، والهويات 3-4 أسابيع. نفتخر بالتسليم السريع دون التضحية بالجودة.',
  },
  {
    qEn: 'Do you work with businesses outside Palestine?',
    qAr: 'هل تعملون مع شركات خارج فلسطين؟',
    aEn: 'Absolutely. While we’re based in Palestine and have deep regional expertise, we work with clients globally. Our digital-first approach lets us collaborate effectively with businesses anywhere.',
    aAr: 'بالتأكيد. مقرّنا فلسطين ولدينا خبرة إقليمية عميقة، لكنّنا نعمل مع عملاء حول العالم. منهجنا الرقمي يتيح لنا التعاون مع أي عمل في أي مكان.',
  },
  {
    qEn: 'What makes Rawij different from other agencies?',
    qAr: 'ما الذي يميّز روّج عن الوكالات الأخرى؟',
    aEn: 'We combine human creativity with AI-powered efficiency to deliver faster, smarter results. We understand both local and international markets, we move quickly, and we focus obsessively on what matters: engagement, conversions, and growth.',
    aAr: 'نمزج الإبداع البشري بكفاءة الذكاء الاصطناعي لنُقدّم نتائج أسرع وأذكى. نفهم السوقين المحلي والعالمي، نتحرّك بسرعة، ونركّز على ما يهم: التفاعل، التحويلات، والنموّ.',
  },
  {
    qEn: 'How does pricing work?',
    qAr: 'كيف يعمل التسعير لديكم؟',
    aEn: 'We offer flexible pricing: project-based for one-time work, monthly retainers for ongoing services, and custom packages for comprehensive solutions. Contact us for a personalized quote tailored to your goals and budget.',
    aAr: 'نُقدّم تسعيراً مرناً: تسعير بالمشروع للأعمال المنفصلة، باقات شهرية للخدمات المستمرة، وباقات مخصّصة للحلول الشاملة. تواصل معنا للحصول على عرض مفصّل يناسب أهدافك وميزانيتك.',
  },
  {
    qEn: 'Do you offer revisions?',
    qAr: 'هل تتيحون تعديلات على العمل؟',
    aEn: 'Yes! All packages include revisions to ensure you’re completely satisfied. The number depends on your specific package, but we always work collaboratively to get things right.',
    aAr: 'نعم! جميع الباقات تتضمّن تعديلات لضمان رضاك الكامل. عدد التعديلات يعتمد على الباقة، لكنّنا دائماً نعمل بالتعاون معك للوصول إلى النتيجة المثلى.',
  },
  {
    qEn: 'Can you manage our social media accounts?',
    qAr: 'هل يمكنكم إدارة حساباتنا على وسائل التواصل؟',
    aEn: 'Yes, we offer comprehensive social media management: content creation, scheduling, community engagement, analytics reporting, and strategy optimization. We handle everything so you can focus on running your business.',
    aAr: 'نعم، نُقدّم إدارة شاملة لوسائل التواصل: إنشاء المحتوى، الجدولة، التفاعل مع المجتمع، تقارير التحليلات، وتحسين الاستراتيجية. نتولّى كل شيء لتتفرّغ لإدارة عملك.',
  },
  {
    qEn: 'What is your onboarding process?',
    qAr: 'كيف تبدأ رحلتنا معكم؟',
    aEn: 'After you reach out, we schedule a discovery call to understand your needs. Then we send a customized proposal with timeline and pricing. Once approved, we kick off with a strategy session and start executing.',
    aAr: 'بعد تواصلك معنا، نُحدّد مكالمة استكشاف لفهم احتياجاتك. بعدها نُرسل عرضاً مخصّصاً يتضمّن الجدول الزمني والتسعير. عند الموافقة، نبدأ بجلسة استراتيجية ثمّ ننطلق فوراً في التنفيذ.',
  },
]

export function FAQ() {
  const { t, language, dir } = useLanguage()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn('lg:sticky lg:top-24', dir === 'rtl' && 'text-right lg:order-2')}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">{t('faq.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {t('faq.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('faq.intro')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(dir === 'rtl' && 'lg:order-1')}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-5 sm:px-6 bg-card hover:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className={cn(
                      'hover:no-underline py-5',
                      dir === 'rtl' ? 'text-right flex-row-reverse' : 'text-left'
                    )}>
                      <span className="font-semibold text-base">
                        {language === 'ar' ? faq.qAr : faq.qEn}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className={cn(
                      'text-muted-foreground leading-relaxed pb-5',
                      dir === 'rtl' && 'text-right'
                    )}>
                      {language === 'ar' ? faq.aAr : faq.aEn}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
