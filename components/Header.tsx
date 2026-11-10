'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n/context'
import { locales } from '@/lib/i18n/locales'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const sections = ['work', 'about', 'stack', 'contact'] as const

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // Esconde o cabeçalho ao rolar para baixo e mostra ao rolar para cima
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > 240 && y > last)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca a seção visível na navegação
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? null : entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['top', ...sections].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Menu móvel: trava a rolagem e fecha com Esc
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const themeLabel = theme === 'dark' ? t.nav.toLight : t.nav.toDark

  return (
    <>
      <a
        href="#main"
        className="label fixed left-4 top-3 z-[60] -translate-y-20 bg-ink px-3 py-2 text-paper focus:translate-y-0"
      >
        {t.nav.skip}
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out-expo',
          hidden && !open ? '-translate-y-full' : 'translate-y-0',
          scrolled && !open ? 'border-b border-line bg-paper' : 'border-b border-transparent'
        )}
      >
        <div className="page-x flex h-16 items-center justify-between gap-6">
          <a href="#top" aria-label={t.nav.home} className="font-serif text-xl leading-none tracking-tight">
            Guilherme Calheira
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ol className="flex items-center gap-8">
              {sections.map((id, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={active === id ? 'true' : undefined}
                    className={cn(
                      'group flex items-baseline gap-1.5 text-sm transition-colors',
                      active === id ? 'text-ink' : 'text-muted hover:text-ink'
                    )}
                  >
                    <span className={cn('font-mono text-mono-xs', active === id ? 'text-signal' : 'text-muted')}>
                      0{i + 1}
                    </span>
                    <span className="link-draw">{t.nav[id]}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <LocaleSwitch locale={locale} setLocale={setLocale} label={t.nav.language} />
            <ThemeButton onClick={toggleTheme} label={themeLabel} />
          </div>

          <button
            type="button"
            className="label -mr-2 p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-16 md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Principal" className="page-x flex-1 border-t border-line pt-8">
              <ol className="space-y-2">
                {sections.map((id, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-1 font-serif text-[clamp(2.75rem,13vw,4rem)] leading-none"
                    >
                      <span className="font-mono text-mono-sm text-signal">0{i + 1}</span>
                      {t.nav[id]}
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <div className="page-x flex items-center justify-between border-t border-line py-5">
              <LocaleSwitch locale={locale} setLocale={setLocale} label={t.nav.language} />
              <ThemeButton onClick={toggleTheme} label={themeLabel} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LocaleSwitch({
  locale,
  setLocale,
  label,
}: {
  locale: string
  setLocale: (l: (typeof locales)[number]) => void
  label: string
}) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-1 font-mono text-mono-xs uppercase">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-line" aria-hidden>/</span>}
          <button
            type="button"
            lang={l}
            aria-pressed={locale === l}
            onClick={() => setLocale(l)}
            className={cn(
              'px-1 py-2 transition-colors',
              locale === l ? 'text-ink' : 'text-muted hover:text-ink'
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}

// Meia-lua desenhada com dois círculos: preenchido no escuro, contorno no claro
function ThemeButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="group -m-2 grid h-10 w-10 place-items-center text-ink"
    >
      <span className="relative block h-3.5 w-3.5 overflow-hidden rounded-full border border-current">
        <span className="absolute inset-y-0 left-1/2 right-0 bg-current transition-[left] duration-500 ease-out-expo group-hover:left-0 dark:left-0 dark:group-hover:left-1/2" />
      </span>
    </button>
  )
}
