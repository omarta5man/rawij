'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const { t, dir } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={cn(
        'p-6 sm:p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-xl shadow-primary/5',
        dir === 'rtl' && 'text-right'
      )}>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('contact.form.title')}</h2>
        <p className="text-muted-foreground mb-8">{t('contact.form.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contact.form.name')}</Label>
              <Input
                id="name"
                placeholder={t('contact.form.namePh')}
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.form.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('contact.form.emailPh')}
                required
                className="rounded-xl"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t('contact.form.company')}</Label>
            <Input
              id="company"
              placeholder={t('contact.form.companyPh')}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">{t('contact.form.service')}</Label>
            <Select>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder={t('contact.form.servicePh')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="social">{t('contact.form.opt.social')}</SelectItem>
                <SelectItem value="content">{t('contact.form.opt.content')}</SelectItem>
                <SelectItem value="video">{t('contact.form.opt.video')}</SelectItem>
                <SelectItem value="ads">{t('contact.form.opt.ads')}</SelectItem>
                <SelectItem value="website">{t('contact.form.opt.website')}</SelectItem>
                <SelectItem value="automation">{t('contact.form.opt.automation')}</SelectItem>
                <SelectItem value="branding">{t('contact.form.opt.branding')}</SelectItem>
                <SelectItem value="strategy">{t('contact.form.opt.strategy')}</SelectItem>
                <SelectItem value="other">{t('contact.form.opt.other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.form.message')}</Label>
            <Textarea
              id="message"
              placeholder={t('contact.form.messagePh')}
              rows={6}
              required
              className="rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full rounded-full group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            {isSubmitting ? (
              t('contact.form.sending')
            ) : (
              <span className={cn('inline-flex items-center gap-2', dir === 'rtl' && 'flex-row-reverse')}>
                {t('contact.form.send')}
                <Send className={cn(
                  'w-4 h-4 transition-transform',
                  dir === 'rtl' ? 'group-hover:-translate-x-1 scale-x-[-1]' : 'group-hover:translate-x-1'
                )} />
              </span>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            {t('contact.form.privacy')}
          </p>
        </form>
      </div>
    </motion.div>
  )
}
