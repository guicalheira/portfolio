'use client'

// ============================================
// Navegação Principal
// Header fixo com blur, links animados e seletor de idioma
// ============================================

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n/context'
import { useTheme } from '@/lib/theme'
import { locales, localeNames, localeFlags } from '@/lib/i18n/locales'
import { cn } from '@/lib/utils'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const

export function Navigation() {
  const { locale, setLocale, t } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Detecta scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detecta seção ativa
      const sections = navItems.map(item => item.key)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha menu mobile ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-border/50'
            : 'py-6 bg-transparent'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-display text-2xl font-semibold text-foreground">
              G
              <span className="text-accent">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </motion.a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={cn(
                  'relative text-body-sm font-medium transition-colors duration-300',
                  activeSection === item.key
                    ? 'text-foreground'
                    : 'text-foreground-muted hover:text-foreground'
                )}
              >
                {t.nav[item.key as keyof typeof t.nav]}
                {activeSection === item.key && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Ações - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Toggle de Tema */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-border-hover bg-background-secondary/50 backdrop-blur-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {/* Sol */}
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute text-accent"
                initial={false}
                animate={{
                  scale: theme === 'dark' ? 0 : 1,
                  rotate: theme === 'dark' ? -90 : 0,
                  opacity: theme === 'dark' ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </motion.svg>

              {/* Lua */}
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute text-accent"
                initial={false}
                animate={{
                  scale: theme === 'dark' ? 1 : 0,
                  rotate: theme === 'dark' ? 0 : 90,
                  opacity: theme === 'dark' ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </motion.svg>
            </motion.button>

            {/* Seletor de Idioma */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:border-border-hover transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-body-sm text-foreground-muted">
                  {locale.toUpperCase()}
                </span>
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 py-2 bg-background-secondary border border-border rounded-xl shadow-2xl overflow-hidden min-w-[160px]"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc)
                          setIsLangOpen(false)
                        }}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                          locale === loc
                            ? 'bg-accent/10 text-accent'
                            : 'text-foreground-muted hover:bg-border/30 hover:text-foreground'
                        )}
                      >
                        <span className="text-lg">{localeFlags[loc]}</span>
                        <span className="text-body-sm">{localeNames[loc]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="btn-primary text-body-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <motion.span
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 6 : 0,
                }}
                className="absolute top-0 left-0 w-full h-0.5 bg-foreground origin-center"
              />
              <motion.span
                animate={{ opacity: isMobileOpen ? 0 : 1 }}
                className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground -translate-y-1/2"
              />
              <motion.span
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -6 : 0,
                }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-background-secondary border-l border-border p-8 pt-24"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'text-2xl font-display font-medium transition-colors',
                      activeSection === item.key
                        ? 'text-accent'
                        : 'text-foreground-muted hover:text-foreground'
                    )}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle Mobile */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-body-sm text-foreground-subtle mb-4">
                  Tema / Theme
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={toggleTheme}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-full border transition-all',
                      theme === 'dark'
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-foreground-muted'
                    )}
                  >
                    <span>🌙</span>
                    <span className="text-body-sm">Dark</span>
                  </button>
                  <button
                    onClick={toggleTheme}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-full border transition-all',
                      theme === 'light'
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-foreground-muted'
                    )}
                  >
                    <span>☀️</span>
                    <span className="text-body-sm">Light</span>
                  </button>
                </div>
              </div>

              {/* Language Selector Mobile */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-body-sm text-foreground-subtle mb-4">
                  Idioma / Language
                </p>
                <div className="flex gap-3 flex-wrap">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setLocale(loc)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-full border transition-all',
                        locale === loc
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border text-foreground-muted hover:border-border-hover'
                      )}
                    >
                      <span>{localeFlags[loc]}</span>
                      <span className="text-body-sm">{loc.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

