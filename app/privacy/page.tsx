'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export default function PrivacyPage() {
  const { language, t, dir } = useLanguage()

  return (
    <div className="pt-20 lg:pt-24">
      <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn('max-w-3xl', dir === 'rtl' && 'text-right ml-auto')}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('legal.privacy.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('legal.lastUpdated')} {new Date().toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'max-w-3xl prose prose-lg dark:prose-invert',
            dir === 'rtl' && 'mr-auto ml-0 text-right'
          )}
        >
          {language === 'ar' ? (
            <>
              <h2>مقدّمة</h2>
              <p>
                تُشغّل روّج (&quot;نحن&quot;، &quot;لنا&quot;، &quot;الشركة&quot;) موقع روّج. تُوضّح هذه الصفحة سياساتنا فيما يخصّ جمع
                البيانات الشخصية واستخدامها والإفصاح عنها عند استخدامك لخدماتنا، إلى جانب الخيارات المتاحة لك.
              </p>

              <h2>جمع المعلومات واستخدامها</h2>
              <p>نجمع أنواعاً مختلفة من المعلومات لأغراض متعدّدة بهدف تقديم خدماتنا وتحسينها.</p>

              <h3>أنواع البيانات التي نجمعها</h3>
              <ul>
                <li>بيانات شخصية: البريد الإلكتروني، الاسم، رقم الهاتف، إلخ.</li>
                <li>بيانات الاستخدام: معلومات حول كيفية تفاعلك مع خدماتنا.</li>
                <li>بيانات تقنية: نوع المتصفّح، عنوان IP، نظام التشغيل، إلخ.</li>
              </ul>

              <h2>استخدام البيانات</h2>
              <p>تستخدم روّج البيانات التي تُجمع لأغراض متعدّدة:</p>
              <ul>
                <li>لتقديم خدماتنا والمحافظة عليها.</li>
                <li>لإعلامك بالتغييرات في خدماتنا.</li>
                <li>للسماح لك بالمشاركة في الميزات التفاعلية.</li>
                <li>لتقديم الدعم وخدمة العملاء.</li>
                <li>لجمع تحليلات قيّمة تُساعدنا في تحسين خدماتنا.</li>
                <li>لمراقبة استخدام الخدمة.</li>
              </ul>

              <h2>أمن البيانات</h2>
              <p>
                أمان بياناتك يهمّنا، لكن لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة 100%. نسعى لاستخدام
                وسائل مقبولة تجارياً لحماية بياناتك الشخصية، لكن لا يمكننا ضمان أمنها المطلق.
              </p>

              <h2>تواصل معنا</h2>
              <p>
                {t('legal.contactCta')} <a href="mailto:hello@rawij.com">hello@rawij.com</a>
              </p>
            </>
          ) : (
            <>
              <h2>Introduction</h2>
              <p>
                Rawij (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) operates the Rawij website. This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you use our service, and the choices you have associated with that data.
              </p>

              <h2>Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our service.
              </p>

              <h3>Types of Data Collected</h3>
              <ul>
                <li>Personal Data: Email address, name, phone number, etc.</li>
                <li>Usage Data: Information about how you interact with our service.</li>
                <li>Technical Data: Browser type, IP address, operating system, etc.</li>
              </ul>

              <h2>Use of Data</h2>
              <p>Rawij uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our service.</li>
                <li>To notify you about changes to our service.</li>
                <li>To allow you to participate in interactive features.</li>
                <li>To provide customer care and support.</li>
                <li>To gather analysis or valuable information so we can improve our service.</li>
                <li>To monitor the usage of our service.</li>
              </ul>

              <h2>Security of Data</h2>
              <p>
                The security of your data is important to us, but no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>

              <h2>Contact Us</h2>
              <p>
                {t('legal.contactCta')} <a href="mailto:hello@rawij.com">hello@rawij.com</a>
              </p>
            </>
          )}
        </motion.div>
      </section>
    </div>
  )
}
