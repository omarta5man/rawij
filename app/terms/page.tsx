'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export default function TermsPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('legal.terms.title')}</h1>
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
              <h2>1. الموافقة على الشروط</h2>
              <p>
                باستخدامك لموقع روّج وخدماتها، فإنّك توافق على الالتزام بهذه الشروط والأحكام. إذا لم توافق عليها،
                يُرجى عدم استخدام الخدمة.
              </p>

              <h2>2. ترخيص الاستخدام</h2>
              <p>
                يُمنح إذن مؤقّت بتنزيل نسخة واحدة من المواد (المعلومات أو البرامج) المتاحة على موقع روّج
                للاستخدام الشخصي وغير التجاري فقط. هذا منح ترخيص، وليس نقلاً للملكية، ولا يجوز لك بموجبه:
              </p>
              <ul>
                <li>تعديل المواد أو نسخها.</li>
                <li>استخدام المواد لأي غرض تجاري أو عرض عام.</li>
                <li>محاولة الهندسة العكسية لأي برنامج موجود على الموقع.</li>
                <li>إزالة أي إشعارات حقوق ملكية من المواد.</li>
                <li>نقل المواد إلى شخص آخر أو استنساخها على خادم آخر.</li>
              </ul>

              <h2>3. إخلاء المسؤولية</h2>
              <p>
                تُقدَّم المواد على موقع روّج كما هي. لا تُقدّم روّج أي ضمانات صريحة أو ضمنية، وتُخلي مسؤوليتها
                من جميع الضمانات الأخرى بما في ذلك ضمانات القابلية للتسويق أو الملاءمة لغرض معيّن.
              </p>

              <h2>4. حدود المسؤولية</h2>
              <p>
                لا تتحمّل روّج أو مورّدوها أي مسؤولية عن أي أضرار (بما في ذلك على سبيل المثال لا الحصر فقدان
                البيانات أو الأرباح أو توقّف العمل) ناجمة عن استخدام المواد على موقع روّج أو عدم القدرة على
                استخدامها.
              </p>

              <h2>5. دقّة المواد</h2>
              <p>
                قد تتضمّن المواد على موقع روّج أخطاء تقنية أو طباعية أو تصويرية. لا تضمن روّج دقّة أو اكتمال
                أو حداثة أي من المواد على موقعها، ويحقّ لها إجراء تغييرات في أي وقت دون إشعار.
              </p>

              <h2>6. الروابط</h2>
              <p>
                لم تُراجع روّج جميع المواقع المرتبطة بموقعها، وهي ليست مسؤولة عن محتويات أي موقع مرتبط.
                وجود أي رابط لا يعني تأييد روّج للموقع المرتبط، واستخدامك لتلك المواقع يكون على مسؤوليّتك.
              </p>

              <h2>7. التعديلات</h2>
              <p>
                يحقّ لروّج مراجعة هذه الشروط في أي وقت دون إشعار. باستخدامك للموقع، فإنّك توافق على الالتزام
                بالنسخة الحالية من هذه الشروط.
              </p>

              <h2>8. القانون الحاكم</h2>
              <p>
                تخضع هذه الشروط لقوانين فلسطين، وأنت توافق بشكل لا رجعة فيه على الاختصاص الحصري لمحاكمها.
              </p>

              <h2>تواصل معنا</h2>
              <p>
                {t('legal.contactCta')} <a href="mailto:hello@rawij.com">hello@rawij.com</a>
              </p>
            </>
          ) : (
            <>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using the Rawij website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree, please do not use this service.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Rawij&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose or public display.</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                <li>Remove any copyright or proprietary notations from the materials.</li>
                <li>Transfer the materials to another person or mirror them on any other server.</li>
              </ul>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on Rawij&apos;s website are provided on an &apos;as is&apos; basis. Rawij makes no warranties, expressed or implied, and disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall Rawij or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rawij&apos;s website.
              </p>

              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials on Rawij&apos;s website could include technical, typographical, or photographic errors. Rawij does not warrant that any of the materials are accurate, complete, or current, and may make changes at any time without notice.
              </p>

              <h2>6. Links</h2>
              <p>
                Rawij has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. Inclusion of any link does not imply endorsement. Use of any linked website is at your own risk.
              </p>

              <h2>7. Modifications</h2>
              <p>
                Rawij may revise these terms at any time without notice. By using this website, you agree to be bound by the then-current version of these terms.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These terms are governed by the laws of Palestine, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
