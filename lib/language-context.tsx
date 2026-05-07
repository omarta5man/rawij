'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'rtl' | 'ltr'
}

const ar: Record<string, string> = {
  // Navigation
  'nav.home': 'الرئيسية',
  'nav.about': 'من نحن',
  'nav.services': 'خدماتنا',
  'nav.work': 'أعمالنا',
  'nav.contact': 'تواصل معنا',
  'nav.getStarted': 'ابدأ الآن',
  'nav.bookCall': 'احجز مكالمة',
  'nav.pricing': 'الأسعار',

  // Hero
  'hero.badge': 'وكالة رقمية مدعومة بالذكاء الاصطناعي',
  'hero.title': 'انطلق بعلامتك التجارية مع',
  'hero.titleHighlight': 'حلول رقمية ذكية',
  'hero.description': 'نحن في روّج نمزج الإبداع بالذكاء الاصطناعي لنبني محتوى يبيع، وإعلانات تُحقق نتائج، ومواقع تترك أثراً. شريكك الرقمي من فلسطين إلى المنطقة.',
  'hero.cta.start': 'ابدأ مشروعك',
  'hero.cta.work': 'شاهد أعمالنا',
  'hero.stats.clients': 'عميل سعيد',
  'hero.stats.projects': 'مشروع مكتمل',
  'hero.stats.growth': 'متوسط النمو',

  // Services Overview
  'services.badge': 'ماذا نقدّم',
  'services.title': 'حلول رقمية متكاملة',
  'services.subtitle': 'من الفكرة الإبداعية إلى التنفيذ التقني، نتولى كل ما تحتاجه علامتك لتنمو وتتميّز.',

  // Service items (overview + list use these)
  'service.social.title': 'إدارة وسائل التواصل',
  'service.social.desc': 'محتوى يومي يجذب جمهورك ويبني مجتمعاً حول علامتك.',
  'service.ai.title': 'إعلانات وإبداعات بالذكاء الاصطناعي',
  'service.ai.desc': 'إبداعات إعلانية مدفوعة بالبيانات تحقق التحويلات بسرعة.',
  'service.video.title': 'ريلز وفيديوهات قصيرة',
  'service.video.desc': 'محتوى قصير جاهز للانتشار ومُحسّن لأقصى وصول.',
  'service.web.title': 'تصميم المواقع وصفحات الهبوط',
  'service.web.desc': 'مواقع جميلة وسريعة تحوّل الزوار إلى عملاء فعليّين.',
  'service.automation.title': 'الأتمتة وأنظمة المراسلة',
  'service.automation.desc': 'سير عمل ذكي يوفر الوقت ويُوسّع عملك دون إرهاق فريقك.',
  'service.branding.title': 'الهوية البصرية والتوجيه الإبداعي',
  'service.branding.desc': 'هويات تجارية لا تُنسى تجعل علامتك محفورة في الأذهان.',
  'service.strategy.title': 'الاستراتيجية الرقمية',
  'service.strategy.desc': 'خطط رقمية شاملة تتوافق مع أهداف عملك ومؤشّراتك.',
  'service.landing.title': 'صفحات الهبوط',
  'service.landing.desc': 'صفحات هبوط عالية التحويل مصمّمة لتحقيق هدفٍ واحد: المبيعات.',

  // Why Rawij
  'why.badge': 'لماذا روّج',
  'why.title': 'مبنيون لخدمة العلامات الحديثة',
  'why.intro': 'في روّج نجمع بين التميّز الإبداعي وكفاءة الذكاء الاصطناعي لنقدّم حلولاً رقمية تجعل علامتك مستحيلة التجاهل. نحن لا نصنع محتوى فقط، بل نبني تجارب تُحقق نتائج حقيقية.',
  'why.f1.title': 'تنفيذ بسرعة الضوء',
  'why.f1.desc': 'نتحرّك بسرعة دون أن نُساوم على الجودة، ونسلّم في الموعد دائماً.',
  'why.f2.title': 'سير عمل ذكي بالـ AI',
  'why.f2.desc': 'نوظّف أحدث أدوات الذكاء الاصطناعي لإنتاج أذكى وأسرع وأكثر فاعلية.',
  'why.f3.title': 'تركيز على التحويل',
  'why.f3.desc': 'كل تصميم وكل كلمة وكل عنصر مصنوع ليحوّل جمهورك إلى عملاء.',
  'why.f4.title': 'خبرة محلية وإقليمية',
  'why.f4.desc': 'نفهم السوق الفلسطيني والعربي ونُنتج محتوى يلامس الجمهور الحقيقي.',
  'why.poweredByAI': 'مدعوم بالذكاء الاصطناعي',
  'why.poweredByAIDesc': 'سير عمل أذكى، تسليم أسرع، نتائج أفضل',

  // Portfolio
  'portfolio.badge': 'أعمالنا',
  'portfolio.title': 'مشاريع مختارة',
  'portfolio.subtitle': 'نتائج حقيقية لأعمال حقيقية. اطّلع على كيف ساعدنا علاماتنا على النمو.',
  'portfolio.viewAll': 'عرض جميع الأعمال',
  'portfolio.viewProject': 'عرض المشروع',
  'portfolio.viewCase': 'عرض دراسة الحالة',

  // Process
  'process.badge': 'كيف نعمل',
  'process.title': 'منهجيتنا المُجرَّبة',
  'process.subtitle': 'منهج منظَّم يُسلّم نتائج استثنائية في كل مرة.',
  'process.step1.title': 'الاكتشاف',
  'process.step1.desc': 'نتعرّف على عملك وأهدافك وجمهورك لنبني استراتيجية مخصّصة لك.',
  'process.step2.title': 'الاستراتيجية',
  'process.step2.desc': 'نضع خطة شاملة تجمع الإبداع والبيانات ورؤى الذكاء الاصطناعي.',
  'process.step3.title': 'الإبداع',
  'process.step3.desc': 'نُحوّل الرؤية إلى واقع بتصاميم مذهلة ومحتوى مؤثّر.',
  'process.step4.title': 'الإطلاق',
  'process.step4.desc': 'نُطلق المشروع بدعم كامل لضمان انطلاقة سلسة من اليوم الأول.',
  'process.step5.title': 'التحسين',
  'process.step5.desc': 'نُراقب ونُحلّل ونُحسّن الأداء باستمرار لتعظيم العائد على استثمارك.',

  // Testimonials
  'testimonials.badge': 'آراء العملاء',
  'testimonials.title': 'ماذا يقول عملاؤنا',
  'testimonials.subtitle': 'لا تكتفِ بكلامنا. اقرأ ما يقوله أصحاب الأعمال عن تجربتهم مع روّج.',

  // FAQ
  'faq.badge': 'الأسئلة الشائعة',
  'faq.title': 'إجابات على ما يدور في بالك',
  'faq.intro': 'إجابات على أكثر الأسئلة شيوعاً. لم تجد ما تبحث عنه؟ تواصل معنا مباشرةً.',

  // Marquee strip
  'marquee.1': 'محتوى يبيع',
  'marquee.2': 'إعلانات تُحقق نتائج',
  'marquee.3': 'مواقع تترك أثراً',
  'marquee.4': 'هويات لا تُنسى',
  'marquee.5': 'أتمتة تُوفّر الوقت',
  'marquee.6': 'استراتيجية مدعومة بالذكاء الاصطناعي',
  'marquee.7': 'فيديوهات قصيرة جاهزة للانتشار',
  'marquee.8': 'تصاميم بمعايير عالمية',

  // Pricing
  'pricing.badge': 'الباقات',
  'pricing.title': 'اختر الخطة المناسبة لنمو علامتك',
  'pricing.subtitle': 'باقات مرنة تناسب جميع الأعمال، من الشركات الناشئة إلى العلامات الكبرى',
  'pricing.tagline': 'رَوِّج — خلّي متجرك يشتغل لحاله',
  'pricing.popular': 'الأكثر طلباً',
  'pricing.currency': 'شيكل',
  'pricing.perMonth': 'شهرياً',
  'pricing.from': 'ابتداءً من',
  'pricing.starter.name': 'البداية',
  'pricing.starter.subtitle': 'للأعمال الصغيرة التي تحتاج حضوراً رقمياً نظيفاً',
  'pricing.starter.cta': 'ابدأ الآن',
  'pricing.starter.f1': '8 بوست على السوشيال ميديا',
  'pricing.starter.f2': '8 ستوريز',
  'pricing.starter.f3': 'كتابة المحتوى والكابشنز',
  'pricing.starter.f4': 'تقويم محتوى أساسي',
  'pricing.starter.f5': 'تحسين البروفايل',
  'pricing.starter.f6': 'جولة تعديل واحدة',
  'pricing.growth.name': 'النمو',
  'pricing.growth.subtitle': 'للأعمال التي تريد التوسّع والنمو المستمر',
  'pricing.growth.cta': 'اختر النمو',
  'pricing.growth.f1': '12 بوست على السوشيال ميديا',
  'pricing.growth.f2': '4 ريلز / فيديوهات قصيرة',
  'pricing.growth.f3': 'كتابة المحتوى والهاشتاقز',
  'pricing.growth.f4': 'استراتيجية محتوى شهرية',
  'pricing.growth.f5': 'قوالب ردود واتساب/انستغرام',
  'pricing.growth.f6': 'تقرير أداء بسيط',
  'pricing.growth.f7': 'جولتين تعديل',
  'pricing.pro.name': 'الاحتراف',
  'pricing.pro.subtitle': 'للعلامات التي تريد تنفيذاً رقمياً كاملاً',
  'pricing.pro.cta': 'اختر الاحتراف',
  'pricing.pro.f1': '20 بوست على السوشيال ميديا',
  'pricing.pro.f2': '8 ريلز / فيديوهات قصيرة',
  'pricing.pro.f3': 'إبداعات إعلانية',
  'pricing.pro.f4': 'دعم صفحة هبوط / موقع',
  'pricing.pro.f5': 'إعداد الأتمتة',
  'pricing.pro.f6': 'جلسة استراتيجية شهرية',
  'pricing.pro.f7': 'تقرير أداء مفصّل',
  'pricing.pro.f8': 'دعم أولوية',

  // Final CTA
  'cta.badge': 'لنبني معاً',
  'cta.title': 'جاهز لجعل علامتك',
  'cta.titleHighlight': 'مستحيلة التجاهل؟',
  'cta.description': 'لنصنع شيئاً استثنائياً معاً. احجز مكالمة استكشاف مجانية وشاهد كيف يُمكن لروّج تحويل حضورك الرقمي.',
  'cta.start': 'ابدأ مشروعك',
  'cta.viewServices': 'عرض الخدمات',
  'cta.trust': 'انضم إلى عشرات الشركات التي تنمو بالفعل مع روّج',

  // Contact
  'contact.badge': 'تواصل معنا',
  'contact.title': 'لنبني شيئاً',
  'contact.titleHighlight': 'استثنائياً معاً',
  'contact.subtitle': 'جاهز لتحويل حضورك الرقمي؟ تواصل معنا ولنناقش كيف يمكن لروّج مساعدتك في تحقيق أهدافك.',
  'contact.form.title': 'أرسل لنا رسالة',
  'contact.form.subtitle': 'املأ النموذج التالي وسنردّ عليك خلال 24 ساعة.',
  'contact.form.name': 'اسمك',
  'contact.form.namePh': 'مثال: محمد أحمد',
  'contact.form.email': 'البريد الإلكتروني',
  'contact.form.emailPh': 'name@example.com',
  'contact.form.company': 'اسم الشركة (اختياري)',
  'contact.form.companyPh': 'شركتك',
  'contact.form.service': 'الخدمة المطلوبة',
  'contact.form.servicePh': 'اختر خدمة',
  'contact.form.message': 'رسالتك',
  'contact.form.messagePh': 'حدّثنا عن مشروعك وأهدافك...',
  'contact.form.send': 'إرسال الرسالة',
  'contact.form.sending': 'جاري الإرسال...',
  'contact.form.privacy': 'بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا.',
  'contact.form.opt.social': 'إدارة وسائل التواصل',
  'contact.form.opt.content': 'محتوى بالذكاء الاصطناعي',
  'contact.form.opt.video': 'ريلز وفيديوهات قصيرة',
  'contact.form.opt.ads': 'إبداعات الإعلانات المدفوعة',
  'contact.form.opt.website': 'تصميم المواقع',
  'contact.form.opt.automation': 'الأتمتة والمراسلة',
  'contact.form.opt.branding': 'الهوية والعلامة التجارية',
  'contact.form.opt.strategy': 'الاستراتيجية الرقمية',
  'contact.form.opt.other': 'غير ذلك',
  'contact.info.title': 'تواصل معنا',
  'contact.info.email': 'البريد الإلكتروني',
  'contact.info.phone': 'الهاتف / واتساب',
  'contact.info.location': 'الموقع',
  'contact.info.locationValue': 'فلسطين',
  'contact.info.follow': 'تابعنا',
  'contact.info.bookTitle': 'احجز مكالمة استكشاف',
  'contact.info.bookDesc': 'تفضّل الحديث مباشرة؟ احجز مكالمة استشارية مجانية لمدة 30 دقيقة لمناقشة مشروعك.',
  'contact.info.bookCta': 'احجز مكالمة',
  'contact.info.hours': 'ساعات العمل',
  'contact.info.weekdays': 'الأحد - الخميس',
  'contact.info.weekend': 'الجمعة - السبت',
  'contact.info.weekdaysVal': '9:00 صباحاً - 6:00 مساءً',
  'contact.info.weekendVal': 'مغلق',
  'contact.info.timezone': 'بتوقيت فلسطين (GMT+2)',

  // Footer
  'footer.description': 'وكالة رقمية مدعومة بالذكاء الاصطناعي تساعد العلامات على النمو بشكل أسرع وأذكى.',
  'footer.services': 'خدماتنا',
  'footer.company': 'الشركة',
  'footer.legal': 'قانوني',
  'footer.getInTouch': 'تواصل معنا',
  'footer.privacy': 'سياسة الخصوصية',
  'footer.terms': 'شروط الاستخدام',
  'footer.cookies': 'سياسة ملفات تعريف الارتباط',
  'footer.rights': 'جميع الحقوق محفوظة.',

  // About
  'about.badge': 'عن روّج',
  'about.hero.title': 'نُمكّن العلامات بحلول رقمية',
  'about.hero.titleHighlight': 'مدعومة بالذكاء الاصطناعي',
  'about.hero.subtitle': 'وكالة رقمية حديثة من فلسطين، نمزج الإبداع البشري بكفاءة الذكاء الاصطناعي لنساعد الأعمال على النمو أسرع وأذكى.',
  'about.mission.badge': 'مهمتنا',
  'about.mission.title': 'نجعل التميّز في متناول الجميع',
  'about.mission.p1': 'في روّج نؤمن أن كل عمل يستحق حلولاً رقمية بمستوى عالمي. مهمتنا أن نُتيح خدمات إبداعية متميّزة للجميع، عبر دمج أفضل ما في الإبداع البشري بكفاءة الذكاء الاصطناعي.',
  'about.mission.p2': 'لا نبني محتوى ومواقع فقط — نساعد العلامات الفلسطينية والإقليمية على المنافسة على المستوى العالمي، علامةً واحدةً في كل مرة.',
  'about.vision.title': 'رؤيتنا',
  'about.vision.desc': 'أن نكون الوكالة الرقمية الرائدة المدعومة بالذكاء الاصطناعي في المنطقة، معروفة بأعمال إبداعية استثنائية تُحقق نمواً قابلاً للقياس.',
  'about.approach.title': 'منهجنا',
  'about.approach.desc': 'نمزج التفكير الاستراتيجي بالتنفيذ الإبداعي، ونضع أهداف عملك أولاً. كل قرار مبني على البيانات، وكل تصميم يهدف إلى التحويل.',
  'about.values.badge': 'قيمنا',
  'about.values.title': 'ما يحرّكنا',
  'about.values.subtitle': 'هذه المبادئ توجّه كل ما نفعل وكيف نعمل مع عملائنا.',
  'about.values.v1.title': 'السرعة والمرونة',
  'about.values.v1.desc': 'نتحرّك بسرعة ونتأقلم بمرونة، ونسلّم في الموعد دون التضحية بالجودة.',
  'about.values.v2.title': 'شراكة العميل',
  'about.values.v2.desc': 'نجاحك هو نجاحنا. نعمل بتعاون كامل وكأننا امتداد لفريقك.',
  'about.values.v3.title': 'الابتكار أولاً',
  'about.values.v3.desc': 'نتبنّى الذكاء الاصطناعي والتقنيات الناشئة لنبقى في المقدّمة دائماً.',
  'about.values.v4.title': 'الجودة عقيدتنا',
  'about.values.v4.desc': 'لا نُساوم على الجودة. كل بيكسل وكل كلمة وكل تفصيل يهمّنا.',
  'about.team.badge': 'فريقنا',
  'about.team.title': 'خبرة عبر مختلف التخصّصات',
  'about.team.subtitle': 'فريق متخصّص ومُتقن، يعمل بانسجام لتقديم نتائج استثنائية.',
  'about.team.r1.title': 'الاستراتيجية',
  'about.team.r1.desc': 'تخطيط مبني على البيانات ورؤى السوق',
  'about.team.r2.title': 'الإبداع',
  'about.team.r2.desc': 'تصميم بصري وسرد قصصي مؤثّر',
  'about.team.r3.title': 'الأنظمة',
  'about.team.r3.desc': 'تنفيذ تقني وأتمتة محكمة',
  'about.team.r4.title': 'النموّ',
  'about.team.r4.desc': 'تحسين الأداء والتحليلات',

  // Services Page
  'servicesPage.badge': 'خدماتنا',
  'servicesPage.title': 'حلول رقمية تدفع',
  'servicesPage.titleHighlight': 'النموّ',
  'servicesPage.subtitle': 'من المحتوى الإبداعي إلى التنفيذ التقني، نُقدّم خدمات رقمية شاملة مصمّمة على مقاس عملك.',
  'servicesPage.included': 'ما يتضمّنه',
  'servicesPage.idealFor': 'مثالي لـ:',
  'servicesPage.cta': 'ابدأ الآن',

  // Service deliverables (used in services-list)
  'sd.social.idealFor': 'الأعمال التي تسعى لبناء حضور ثابت على وسائل التواصل',
  'sd.ai.idealFor': 'العلامات التي تحتاج محتوى عالي الجودة بكميات كبيرة',
  'sd.ads.idealFor': 'الشركات التي تُدير حملات مدفوعة على السوشيال والبحث',
  'sd.web.idealFor': 'الأعمال التي تحتاج حضوراً احترافياً على الويب',
  'sd.automation.idealFor': 'الأعمال النامية التي تسعى للتوسّع دون زيادة الموظفين',
  'sd.branding.idealFor': 'الأعمال الجديدة أو العلامات التي تبحث عن تجديد',

  // Work
  'workPage.badge': 'أعمالنا',
  'workPage.title': 'مشاريع تُحقق',
  'workPage.titleHighlight': 'نتائج فعليّة',
  'workPage.subtitle': 'أعمال حقيقية لشركات حقيقية. اكتشف كيف ساعدنا العلامات على النمو وتحقيق نتائج قابلة للقياس.',

  // Legal pages
  'legal.lastUpdated': 'آخر تحديث:',
  'legal.privacy.title': 'سياسة الخصوصية',
  'legal.terms.title': 'شروط الاستخدام',
  'legal.cookies.title': 'سياسة ملفات تعريف الارتباط',
  'legal.contactCta': 'إذا كانت لديك أسئلة، تواصل معنا عبر',
}

const en: Record<string, string> = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.work': 'Work',
  'nav.contact': 'Contact',
  'nav.getStarted': 'Get Started',
  'nav.bookCall': 'Book a Call',
  'nav.pricing': 'Pricing',

  'hero.badge': 'AI-Powered Digital Agency',
  'hero.title': 'Build Your Brand with',
  'hero.titleHighlight': 'AI-Powered Digital Solutions',
  'hero.description': 'At Rawij we blend creativity with AI to ship content that sells, ads that convert, and websites that leave a mark. Your digital partner from Palestine to the region.',
  'hero.cta.start': 'Start Your Project',
  'hero.cta.work': 'View Our Work',
  'hero.stats.clients': 'Happy Clients',
  'hero.stats.projects': 'Projects Delivered',
  'hero.stats.growth': 'Avg. Growth',

  'services.badge': 'What We Do',
  'services.title': 'Complete Digital Solutions',
  'services.subtitle': 'From creative content to technical execution, we handle everything your brand needs to grow and stand out.',

  'service.social.title': 'Social Media Content',
  'service.social.desc': 'Eye-catching posts and strategies that engage your audience and build community.',
  'service.ai.title': 'AI Ads & Creatives',
  'service.ai.desc': 'Data-driven advertising creative that converts, powered by AI insights.',
  'service.video.title': 'Reels & Short Videos',
  'service.video.desc': 'Viral-ready short-form video content optimized for maximum reach.',
  'service.web.title': 'Website Design',
  'service.web.desc': 'Beautiful, fast, conversion-focused websites that represent your brand.',
  'service.automation.title': 'Automation & Messaging',
  'service.automation.desc': 'Smart workflows and messaging systems that save time and scale your business.',
  'service.branding.title': 'Branding & Visual Identity',
  'service.branding.desc': 'Memorable brand identities that make your business unforgettable.',
  'service.strategy.title': 'Digital Strategy',
  'service.strategy.desc': 'Comprehensive digital strategies that align with your business goals.',
  'service.landing.title': 'Landing Pages',
  'service.landing.desc': 'High-converting landing pages designed to turn visitors into customers.',

  'why.badge': 'Why Choose Us',
  'why.title': 'Built for Modern Brands',
  'why.intro': 'Rawij combines creative excellence with AI-powered efficiency to deliver digital solutions that make your brand impossible to ignore. We don’t just create content – we build experiences that drive real results.',
  'why.f1.title': 'Lightning Fast Execution',
  'why.f1.desc': 'We move quickly without compromising quality, delivering on time, every time.',
  'why.f2.title': 'AI-Powered Workflows',
  'why.f2.desc': 'Leveraging cutting-edge AI tools to create smarter, faster, and more effective solutions.',
  'why.f3.title': 'Conversion-Focused',
  'why.f3.desc': 'Every design, every word, every element is crafted to turn audiences into customers.',
  'why.f4.title': 'Local & Regional Expertise',
  'why.f4.desc': 'We understand the Palestinian and regional markets and create content that truly resonates.',
  'why.poweredByAI': 'Powered by AI',
  'why.poweredByAIDesc': 'Smarter workflows, faster delivery, better results',

  'portfolio.badge': 'Our Work',
  'portfolio.title': 'Selected Projects',
  'portfolio.subtitle': 'Real results for real businesses. See how we’ve helped brands grow their digital presence.',
  'portfolio.viewAll': 'View All Projects',
  'portfolio.viewProject': 'View Project',
  'portfolio.viewCase': 'View Case Study',

  'process.badge': 'How We Work',
  'process.title': 'Our Proven Process',
  'process.subtitle': 'A streamlined approach that delivers exceptional results, every time.',
  'process.step1.title': 'Discover',
  'process.step1.desc': 'We learn about your business, goals, and audience to craft a tailored strategy.',
  'process.step2.title': 'Strategy',
  'process.step2.desc': 'Our team builds a comprehensive plan combining creativity, data, and AI insights.',
  'process.step3.title': 'Create',
  'process.step3.desc': 'We bring your vision to life with stunning designs and compelling content.',
  'process.step4.title': 'Launch',
  'process.step4.desc': 'Your project goes live with our full support, ensuring a smooth day one.',
  'process.step5.title': 'Optimize',
  'process.step5.desc': 'We monitor, analyze, and continuously improve performance to maximize ROI.',

  'testimonials.badge': 'Testimonials',
  'testimonials.title': 'What Our Clients Say',
  'testimonials.subtitle': 'Don’t just take our word for it. Here’s what businesses say about working with Rawij.',

  'faq.badge': 'FAQ',
  'faq.title': 'Frequently Asked Questions',
  'faq.intro': 'Got questions? We’ve got answers. If you don’t see what you’re looking for, reach out directly.',

  'marquee.1': 'Content that sells',
  'marquee.2': 'Ads that convert',
  'marquee.3': 'Websites that leave a mark',
  'marquee.4': 'Brands that stick',
  'marquee.5': 'Automation that saves hours',
  'marquee.6': 'AI-powered strategy',
  'marquee.7': 'Reels ready to go viral',
  'marquee.8': 'World-class design standards',

'pricing.badge': 'Plans',
  'pricing.title': 'Choose the plan that fits your growth',
  'pricing.subtitle': 'Flexible packages for all businesses, from startups to established brands',
  'pricing.tagline': 'Rawij — let your store work for you',
  'pricing.popular': 'Most Popular',
  'pricing.currency': 'ILS',
  'pricing.perMonth': '/ month',
  'pricing.from': 'From',
  'pricing.starter.name': 'Starter',
  'pricing.starter.subtitle': 'For small businesses that need a clean digital presence',
  'pricing.starter.cta': 'Start Small',
  'pricing.starter.f1': '8 social media posts',
  'pricing.starter.f2': '8 stories',
  'pricing.starter.f3': 'Captions and copywriting',
  'pricing.starter.f4': 'Basic content calendar',
  'pricing.starter.f5': 'Profile optimization',
  'pricing.starter.f6': '1 revision round',
  'pricing.growth.name': 'Growth',
  'pricing.growth.subtitle': 'For brands that want to scale and grow continuously',
  'pricing.growth.cta': 'Choose Growth',
  'pricing.growth.f1': '12 social media posts',
  'pricing.growth.f2': '4 reels / short videos',
  'pricing.growth.f3': 'Captions and hashtags',
  'pricing.growth.f4': 'Monthly content strategy',
  'pricing.growth.f5': 'WhatsApp / Instagram reply templates',
  'pricing.growth.f6': 'Simple performance report',
  'pricing.growth.f7': '2 revision rounds',
  'pricing.pro.name': 'Premium',
  'pricing.pro.subtitle': 'For brands that want full digital execution',
  'pricing.pro.cta': 'Go Premium',
  'pricing.pro.f1': '20 social media posts',
  'pricing.pro.f2': '8 reels / short videos',
  'pricing.pro.f3': 'Ad creatives',
  'pricing.pro.f4': 'Landing page / website support',
  'pricing.pro.f5': 'Automation setup',
  'pricing.pro.f6': 'Monthly strategy session',
  'pricing.pro.f7': 'Detailed performance report',
  'pricing.pro.f8': 'Priority support',

  'cta.badge': 'Let’s Build Together',
  'cta.title': 'Ready to Make Your Brand',
  'cta.titleHighlight': 'Impossible to Ignore?',
  'cta.description': 'Let’s create something extraordinary together. Book a free discovery call and see how Rawij can transform your digital presence.',
  'cta.start': 'Start a Project',
  'cta.viewServices': 'View Services',
  'cta.trust': 'Join dozens of businesses already growing with Rawij',

  'contact.badge': 'Get In Touch',
  'contact.title': 'Let’s Build Something',
  'contact.titleHighlight': 'Amazing Together',
  'contact.subtitle': 'Ready to transform your digital presence? Get in touch and let’s discuss how Rawij can help you achieve your goals.',
  'contact.form.title': 'Send Us a Message',
  'contact.form.subtitle': 'Fill out the form below and we’ll get back to you within 24 hours.',
  'contact.form.name': 'Your Name',
  'contact.form.namePh': 'e.g. John Doe',
  'contact.form.email': 'Email Address',
  'contact.form.emailPh': 'name@example.com',
  'contact.form.company': 'Company Name (Optional)',
  'contact.form.companyPh': 'Your Company',
  'contact.form.service': 'Service Needed',
  'contact.form.servicePh': 'Select a service',
  'contact.form.message': 'Your Message',
  'contact.form.messagePh': 'Tell us about your project and goals...',
  'contact.form.send': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.privacy': 'By submitting this form, you agree to our Privacy Policy.',
  'contact.form.opt.social': 'Social Media Management',
  'contact.form.opt.content': 'AI Content Creation',
  'contact.form.opt.video': 'Reels & Short Videos',
  'contact.form.opt.ads': 'Paid Ads Creatives',
  'contact.form.opt.website': 'Website Design',
  'contact.form.opt.automation': 'Automation & Messaging',
  'contact.form.opt.branding': 'Branding & Identity',
  'contact.form.opt.strategy': 'Digital Strategy',
  'contact.form.opt.other': 'Other',
  'contact.info.title': 'Get In Touch',
  'contact.info.email': 'Email',
  'contact.info.phone': 'Phone / WhatsApp',
  'contact.info.location': 'Location',
  'contact.info.locationValue': 'Palestine',
  'contact.info.follow': 'Follow Us',
  'contact.info.bookTitle': 'Book a Discovery Call',
  'contact.info.bookDesc': 'Prefer to talk? Schedule a free 30-minute consultation to discuss your project.',
  'contact.info.bookCta': 'Schedule a Call',
  'contact.info.hours': 'Business Hours',
  'contact.info.weekdays': 'Sunday - Thursday',
  'contact.info.weekend': 'Friday - Saturday',
  'contact.info.weekdaysVal': '9:00 AM - 6:00 PM',
  'contact.info.weekendVal': 'Closed',
  'contact.info.timezone': 'Palestine Time (GMT+2)',

  'footer.description': 'AI-powered digital agency helping brands grow faster and smarter.',
  'footer.services': 'Services',
  'footer.company': 'Company',
  'footer.legal': 'Legal',
  'footer.getInTouch': 'Get In Touch',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.cookies': 'Cookie Policy',
  'footer.rights': 'All rights reserved.',

  'about.badge': 'About Rawij',
  'about.hero.title': 'Empowering Brands with',
  'about.hero.titleHighlight': 'AI-Powered Digital Solutions',
  'about.hero.subtitle': 'A modern digital agency based in Palestine, blending human creativity with AI-powered efficiency to help businesses grow faster and smarter.',
  'about.mission.badge': 'Our Mission',
  'about.mission.title': 'Making Excellence Accessible',
  'about.mission.p1': 'At Rawij, we believe every business deserves world-class digital solutions. Our mission is to democratize access to premium creative services by combining the best of human creativity with AI-powered efficiency.',
  'about.mission.p2': 'We’re not just building content and websites – we’re helping Palestinian and regional businesses compete on a global stage, one brand at a time.',
  'about.vision.title': 'Our Vision',
  'about.vision.desc': 'To become the leading AI-powered digital agency in the region, known for delivering exceptional creative work that drives measurable business growth.',
  'about.approach.title': 'Our Approach',
  'about.approach.desc': 'We blend strategic thinking with creative execution, always putting your business goals first. Every decision is data-informed, every design is conversion-focused.',
  'about.values.badge': 'Our Values',
  'about.values.title': 'What Drives Us',
  'about.values.subtitle': 'These core principles guide everything we do and how we work with our clients.',
  'about.values.v1.title': 'Speed & Agility',
  'about.values.v1.desc': 'We move fast and adapt quickly, delivering on time without sacrificing quality.',
  'about.values.v2.title': 'Client Partnership',
  'about.values.v2.desc': 'Your success is our success. We work as a true extension of your team.',
  'about.values.v3.title': 'Innovation First',
  'about.values.v3.desc': 'We embrace AI and emerging technologies to stay ahead and deliver cutting-edge solutions.',
  'about.values.v4.title': 'Quality Obsessed',
  'about.values.v4.desc': 'We never compromise on quality. Every pixel, every word, every detail matters.',
  'about.team.badge': 'Our Team',
  'about.team.title': 'Expertise Across Disciplines',
  'about.team.subtitle': 'A lean, specialized team working together to deliver exceptional results.',
  'about.team.r1.title': 'Strategy',
  'about.team.r1.desc': 'Data-driven planning and market insights',
  'about.team.r2.title': 'Creative',
  'about.team.r2.desc': 'Visual design and compelling storytelling',
  'about.team.r3.title': 'Systems',
  'about.team.r3.desc': 'Technical implementation and automation',
  'about.team.r4.title': 'Growth',
  'about.team.r4.desc': 'Performance optimization and analytics',

  'servicesPage.badge': 'Our Services',
  'servicesPage.title': 'Digital Solutions That',
  'servicesPage.titleHighlight': 'Drive Growth',
  'servicesPage.subtitle': 'From creative content to technical implementation, we provide comprehensive digital services tailored to your business needs.',
  'servicesPage.included': 'What’s Included',
  'servicesPage.idealFor': 'Ideal for:',
  'servicesPage.cta': 'Get Started',

  'sd.social.idealFor': 'Businesses looking to build a consistent social presence',
  'sd.ai.idealFor': 'Brands needing high-volume content without compromising quality',
  'sd.ads.idealFor': 'Companies running paid campaigns on social and search',
  'sd.web.idealFor': 'Businesses needing a professional web presence',
  'sd.automation.idealFor': 'Growing businesses looking to scale without adding headcount',
  'sd.branding.idealFor': 'New businesses or brands looking for a refresh',

  'workPage.badge': 'Our Portfolio',
  'workPage.title': 'Projects That',
  'workPage.titleHighlight': 'Drive Results',
  'workPage.subtitle': 'Real work for real businesses. Explore how we’ve helped brands grow their digital presence and achieve measurable results.',

  'legal.lastUpdated': 'Last updated:',
  'legal.privacy.title': 'Privacy Policy',
  'legal.terms.title': 'Terms of Service',
  'legal.cookies.title': 'Cookie Policy',
  'legal.contactCta': 'If you have any questions, contact us at',
}

const translations: Record<Language, Record<string, string>> = { ar, en }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')

  useEffect(() => {
    const saved = (typeof window !== 'undefined' ? localStorage.getItem('rawij-language') : null) as Language | null
    if (saved === 'ar' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('rawij-language', lang)
    }
  }

  const t = (key: string): string => translations[language][key] ?? key
  const dir: 'rtl' | 'ltr' = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
