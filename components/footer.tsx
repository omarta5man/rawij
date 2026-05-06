'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
]

export function Footer() {
  const { t, dir } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { labelKey: 'nav.about', href: '/about' },
      { labelKey: 'nav.services', href: '/services' },
      { labelKey: 'nav.work', href: '/work' },
      { labelKey: 'nav.contact', href: '/contact' },
    ],
    legal: [
      { labelKey: 'footer.privacy', href: '/privacy' },
      { labelKey: 'footer.terms', href: '/terms' },
      { labelKey: 'footer.cookies', href: '/cookies' },
    ],
    services: [
      { labelKey: 'service.social.title', href: '/services' },
      { labelKey: 'service.ai.title', href: '/services' },
      { labelKey: 'service.video.title', href: '/services' },
      { labelKey: 'service.web.title', href: '/services' },
      { labelKey: 'service.automation.title', href: '/services' },
      { labelKey: 'service.branding.title', href: '/services' },
    ],
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className={cn(
          'absolute top-20 w-72 h-72 bg-primary rounded-full filter blur-3xl',
          dir === 'rtl' ? 'left-20' : 'right-20'
        )} />
        <div className={cn(
          'absolute bottom-20 w-72 h-72 bg-accent rounded-full filter blur-3xl',
          dir === 'rtl' ? 'right-20' : 'left-20'
        )} />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'col-span-2 md:col-span-3 lg:col-span-1',
                dir === 'rtl' && 'text-right'
              )}
            >
              <Link href="/" className="inline-block mb-4 sm:mb-6">
                <Image
                  src="/logo.png"
                  alt="Rawij Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-xs sm:text-sm text-background/80 mb-4 sm:mb-6">
                {t('footer.description')}
              </p>
              <div className={cn(
                'flex gap-3 sm:gap-4',
                dir === 'rtl' && 'justify-end'
              )}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-background/10 hover:bg-primary/20 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={dir === 'rtl' ? 'text-right' : ''}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.company')}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map(({ labelKey, href }) => (
                  <li key={labelKey}>
                    <Link
                      href={href}
                      className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                'col-span-2 md:col-span-1 lg:col-span-2',
                dir === 'rtl' && 'text-right'
              )}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.services')}</h4>
              <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                {footerLinks.services.map(({ labelKey, href }, idx) => (
                  <li key={idx}>
                    <Link
                      href={href}
                      className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={dir === 'rtl' ? 'text-right' : ''}
            >
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.getInTouch')}</h4>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:hello@rawij.com"
                  className={cn(
                    'flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70 hover:text-background transition-colors',
                    dir === 'rtl' && 'flex-row-reverse justify-end'
                  )}
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>hello@rawij.com</span>
                </a>
                <a
                  href="tel:+970123456789"
                  className={cn(
                    'flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70 hover:text-background transition-colors',
                    dir === 'rtl' && 'flex-row-reverse justify-end'
                  )}
                >
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span dir="ltr">+970 123 456 789</span>
                </a>
                <div className={cn(
                  'flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-background/70',
                  dir === 'rtl' && 'flex-row-reverse justify-end'
                )}>
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                  <span>{t('contact.info.locationValue')}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-px bg-background/10 mb-6 sm:mb-8" />

          <div className={cn(
            'flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-background/70',
            dir === 'rtl' && 'md:flex-row-reverse'
          )}>
            <p>&copy; {currentYear} Rawij. {t('footer.rights')}</p>
            <div className={cn(
              'flex flex-wrap justify-center gap-4 sm:gap-6',
              dir === 'rtl' && 'flex-row-reverse'
            )}>
              {footerLinks.legal.map(({ labelKey, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-background transition-colors"
                >
                  {t(labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
