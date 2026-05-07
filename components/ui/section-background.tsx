'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Decorative section background image, theme-aware.
 * Applies low opacity in light mode, even lower + dimmed in dark mode.
 * Adds a top + bottom gradient fade so the image blends into surrounding sections.
 */
export function SectionBackground({
  src,
  className,
  opacity = 'normal',
  position = 'cover',
  topFade = true,
  bottomFade = true,
}: {
  src: string
  className?: string
  opacity?: 'subtle' | 'normal' | 'strong'
  position?: 'cover' | 'top' | 'bottom'
  topFade?: boolean
  bottomFade?: boolean
}) {
  const op =
    opacity === 'subtle'
      ? 'opacity-25 dark:opacity-10'
      : opacity === 'strong'
      ? 'opacity-60 dark:opacity-25'
      : 'opacity-40 dark:opacity-15'

  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div className={cn('absolute inset-0', op)}>
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className={cn(
            'object-cover',
            position === 'top' && 'object-top',
            position === 'bottom' && 'object-bottom'
          )}
        />
        {/* Dark mode overlay tint to keep things on-brand */}
        <div className="absolute inset-0 bg-background/40 dark:bg-background/70 mix-blend-normal" />
      </div>
      {topFade && (
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      )}
      {bottomFade && (
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      )}
    </div>
  )
}
