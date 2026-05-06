'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/work', label: t('nav.work') },
    { href: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Rawij Logo"
                width={140}
                height={50}
                className="h-10 w-auto sm:h-12 lg:h-14"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden lg:flex items-center gap-6 xl:gap-8",
            dir === 'rtl' && "flex-row-reverse"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  dir === 'rtl' ? "right-0 w-0" : "left-0 w-0"
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full gap-2 text-sm font-medium"
            >
              <Globe size={16} />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </Button>
            
            <Button variant="outline" asChild className="rounded-full text-sm">
              <Link href="/contact">{t('nav.bookCall')}</Link>
            </Button>
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-sm">
              <Link href="/services">{t('nav.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full p-2"
            >
              <Globe size={20} />
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-lg font-medium text-foreground/80 hover:text-primary transition-colors",
                      dir === 'rtl' && "text-right"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Language Toggle in Mobile */}
              <motion.div
                initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="py-2"
              >
                <button
                  onClick={toggleLanguage}
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium text-foreground/80 hover:text-primary transition-colors",
                    dir === 'rtl' && "flex-row-reverse w-full justify-end"
                  )}
                >
                  <Globe size={20} />
                  <span>{language === 'ar' ? 'English' : 'العربية'}</span>
                </button>
              </motion.div>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild className="rounded-full w-full">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.bookCall')}
                  </Link>
                </Button>
                <Button asChild className="rounded-full w-full bg-primary hover:bg-primary/90">
                  <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.getStarted')}
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
