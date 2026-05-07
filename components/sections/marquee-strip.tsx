'use client'

import { Sparkles } from 'lucide-react'
import { Marquee } from '@/components/ui/motion/marquee'
import { useLanguage } from '@/lib/language-context'

const keys = ['marquee.1', 'marquee.2', 'marquee.3', 'marquee.4', 'marquee.5', 'marquee.6', 'marquee.7', 'marquee.8']

export function MarqueeStrip() {
  const { t } = useLanguage()

  return (
    <section className="relative py-10 sm:py-14 border-y border-border/60 bg-gradient-to-b from-background via-soft/40 to-background overflow-hidden">
      <Marquee speed={50}>
        {keys.map((k) => (
          <div
            key={k}
            className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/60 hover:text-primary transition-colors"
          >
            <span>{t(k)}</span>
            <Sparkles className="w-5 h-5 text-primary/70" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
