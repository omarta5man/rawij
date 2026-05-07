'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * Splits text into words and reveals them one by one with a stagger.
 * Use for hero headlines.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  delay?: number
  as?: keyof Pick<JSX.IntrinsicElements, 'span' | 'h1' | 'h2' | 'p'>
}) {
  const words = text.split(' ')
  const Component = motion[Tag] as any
  return (
    <Component
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: '0.6em', filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block whitespace-pre"
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Component>
  )
}
