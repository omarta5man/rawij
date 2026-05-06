'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageSquare, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: MessageSquare, href: 'https://wa.me/', label: 'WhatsApp' },
]

export function ContactInfo() {
  const { t, dir } = useLanguage()

  const contactDetails = [
    { icon: Mail, labelKey: 'contact.info.email', value: 'hello@rawij.co', href: 'mailto:hello@rawij.co', ltr: true },
    { icon: Phone, labelKey: 'contact.info.phone', value: '+970 XX XXX XXXX', href: 'tel:+970XXXXXXXX', ltr: true },
    { icon: MapPin, labelKey: 'contact.info.location', value: t('contact.info.locationValue'), href: null, ltr: false },
  ] as const

  return (
    <motion.div
      initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={cn('space-y-8', dir === 'rtl' && 'text-right')}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: dir === 'rtl' ? -4 : 4 }}
                className={cn(
                  'flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors',
                  dir === 'rtl' && 'flex-row-reverse text-right'
                )}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t(detail.labelKey)}</div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                      dir={detail.ltr ? 'ltr' : undefined}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="font-medium text-foreground">{detail.value}</div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">{t('contact.info.follow')}</h3>
        <div className={cn('flex gap-3', dir === 'rtl' && 'justify-end')}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.a>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -4 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold mb-2">{t('contact.info.bookTitle')}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {t('contact.info.bookDesc')}
        </p>
        <Link
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline',
            dir === 'rtl' && 'flex-row-reverse'
          )}
        >
          {t('contact.info.bookCta')} {dir === 'rtl' ? '←' : '→'}
        </Link>
      </motion.div>

      <div className="p-6 rounded-2xl bg-muted/30 border border-border">
        <h3 className="text-lg font-bold mb-3">{t('contact.info.hours')}</h3>
        <div className="space-y-2 text-sm">
          <div className={cn('flex justify-between', dir === 'rtl' && 'flex-row-reverse')}>
            <span className="text-muted-foreground">{t('contact.info.weekdays')}</span>
            <span className="font-medium" dir="ltr">{t('contact.info.weekdaysVal')}</span>
          </div>
          <div className={cn('flex justify-between', dir === 'rtl' && 'flex-row-reverse')}>
            <span className="text-muted-foreground">{t('contact.info.weekend')}</span>
            <span className="font-medium">{t('contact.info.weekendVal')}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">{t('contact.info.timezone')}</p>
        </div>
      </div>
    </motion.div>
  )
}
