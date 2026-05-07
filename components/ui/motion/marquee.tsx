'use client'

import { ReactNode, Children } from 'react'
import { cn } from '@/lib/utils'

/**
 * Infinite horizontal marquee using CSS animation.
 * Pass children — they'll be duplicated and scrolled.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
}: {
  children: ReactNode
  className?: string
  reverse?: boolean
  speed?: number
  pauseOnHover?: boolean
}) {
  const items = Children.toArray(children)
  return (
    <div
      dir="ltr"
      className={cn(
        'group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className
      )}
      style={{ ['--marquee-duration' as string]: `${speed}s` }}
    >
      {[0, 1].map((repeat) => (
        <div
          key={repeat}
          aria-hidden={repeat === 1}
          className={cn(
            'flex shrink-0 items-center gap-8 px-4 animate-marquee whitespace-nowrap',
            reverse && 'animate-marquee-reverse',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
