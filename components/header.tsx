'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/work', label: t('nav.work') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar')
  const toggleTheme = () => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')
  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark')

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 pointer-events-none">
        <motion.div
          animate={{
            marginTop: isScrolled ? 12 : 16,
            scale: isScrolled ? 0.99 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'pointer-events-auto rounded-full transition-all duration-300',
            isScrolled
              ? 'bg-background/70 backdrop-blur-xl border border-border/60 shadow-lg shadow-primary/5'
              : 'bg-background/40 backdrop-blur-md border border-transparent'
          )}
        >
          <div className="flex items-center justify-between h-14 lg:h-16 px-4 sm:px-5 lg:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="relative">
                <Image
                  src={isDark ? "/logo-white.png" : "/logo.png"}
                  alt="Rawij Logo"
                  width={120}
                  height={40}
                  className="h-7 sm:h-8 lg:h-9 w-auto transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <nav className={cn(
              'hidden lg:flex items-center gap-1',
              dir === 'rtl' && 'flex-row-reverse'
            )}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full p-2 h-9 w-9"
              >
                {mounted && (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? 'moon' : 'sun'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      {isDark ? <Moon size={16} /> : <Sun size={16} />}
                    </motion.span>
                  </AnimatePresence>
                )}
              </Button>

              {/* Language */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="rounded-full gap-1.5 text-xs font-medium h-9 px-3"
              >
                <Globe size={14} />
                <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
              </Button>

              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-sm h-9 px-4 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow">
                <Link href="/contact">{t('nav.bookCall')}</Link>
              </Button>
            </div>

            {/* Mobile right side */}
            <div className="flex lg:hidden items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full p-2 h-9 w-9"
              >
                {mounted && (isDark ? <Moon size={18} /> : <Sun size={18} />)}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="rounded-full p-2 h-9 w-9"
              >
                <Globe size={18} />
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-3 sm:mx-4 mt-2 pointer-events-auto"
          >
            <div className="rounded-3xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-xl shadow-primary/10 overflow-hidden">
              <nav className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: dir === 'rtl' ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block py-2.5 px-3 text-base font-medium rounded-xl text-foreground/85 hover:text-primary hover:bg-primary/10 transition-colors',
                        dir === 'rtl' && 'text-right'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-3 mt-2 border-t border-border/60">
                  <Button asChild className="rounded-full w-full bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.bookCall')}
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
