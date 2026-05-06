'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export default function CookiesPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('legal.cookies.title')}</h1>
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
              <h2>ما هي ملفات تعريف الارتباط؟</h2>
              <p>
                ملفات تعريف الارتباط (Cookies) هي ملفات صغيرة تُخزَّن على جهازك عند زيارة موقعنا.
                تُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة ولتزويد أصحاب الموقع بمعلومات.
              </p>

              <h2>كيف نستخدم الكوكيز</h2>
              <p>نستخدم الكوكيز للأغراض التالية:</p>
              <ul>
                <li><strong>الكوكيز الأساسية:</strong> ضرورية لعمل الموقع بشكل صحيح.</li>
                <li><strong>كوكيز الأداء:</strong> تساعدنا على فهم كيف يستخدم الزوّار موقعنا.</li>
                <li><strong>الكوكيز الوظيفية:</strong> تتذكّر اختياراتك وتفضيلاتك.</li>
                <li><strong>كوكيز التسويق:</strong> تتتبّع نشاطك عبر المواقع.</li>
              </ul>

              <h2>كوكيز الطرف الثالث</h2>
              <p>
                إضافةً إلى الكوكيز الخاصّة بنا، قد نستخدم كوكيز من أطراف ثالثة لإعداد إحصائيات استخدام الموقع
                وعرض الإعلانات على موقعنا وخارجه.
              </p>

              <h2>التحكّم في الكوكيز</h2>
              <p>
                يمكنك التحكّم في الكوكيز أو حذفها كما تشاء. يمكنك حذف جميع الكوكيز الموجودة على جهازك،
                وضبط معظم المتصفّحات لمنعها. لكن قد تضطرّ في هذه الحالة إلى ضبط بعض التفضيلات يدوياً
                في كل مرّة تزور فيها الموقع.
              </p>

              <h2>التزامنا بخصوصيّتك</h2>
              <p>
                نحن نأخذ خصوصيّتك على محمل الجد. إذا كانت لديك أي أسئلة حول استخدامنا للكوكيز،
                {' '}{t('legal.contactCta')} <a href="mailto:hello@rawij.com">hello@rawij.com</a>
              </p>
            </>
          ) : (
            <>
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small files stored on your device when you visit our website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>

              <h2>How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site.</li>
                <li><strong>Functional Cookies:</strong> Remember your choices and preferences.</li>
                <li><strong>Marketing Cookies:</strong> Track your activity across websites.</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may use various third-party cookies to report on website usage statistics and deliver advertisements on and off our site.
              </p>

              <h2>Controlling Cookies</h2>
              <p>
                You can control or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them. If you do, however, you may have to manually adjust some preferences every time you visit our site.
              </p>

              <h2>Our Commitment to Your Privacy</h2>
              <p>
                We take your privacy seriously. {t('legal.contactCta')} <a href="mailto:hello@rawij.com">hello@rawij.com</a>
              </p>
            </>
          )}
        </motion.div>
      </section>
    </div>
  )
}
