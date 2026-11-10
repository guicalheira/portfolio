'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'
import { site } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1] as const

// Linha de texto que sobe de dentro de uma máscara
function MaskLine({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className ?? ''}`}
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function LocalTime() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: site.timeZone }).format(new Date())
    setTime(format())
    const id = setInterval(() => setTime(format()), 20_000)
    return () => clearInterval(id)
  }, [])
  return <time suppressHydrationWarning>{time ?? '--:--'}</time>
}

export function Hero() {
  const t = useTranslations()

  return (
    <section id="top" aria-labelledby="hero-title" className="page-x flex min-h-[100svh] flex-col pb-6 pt-24 md:pt-28">
      {/* Metadados */}
      <motion.dl
        className="label grid grid-cols-2 gap-y-3 border-t border-line pt-4 md:grid-cols-12 md:gap-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="md:col-span-3">
          <dt className="sr-only">Função</dt>
          <dd className="text-ink">{t.hero.role}</dd>
        </div>
        <div className="text-right md:col-span-3 md:text-left">
          <dt className="sr-only">Local</dt>
          <dd>{t.hero.location}</dd>
        </div>
        <div className="col-span-2 flex gap-2 md:col-span-6 md:justify-end">
          <dt>{t.hero.localTime}</dt>
          <dd className="text-ink">
            <LocalTime /> BRT
          </dd>
        </div>
      </motion.dl>

      {/* Nome */}
      <h1 id="hero-title" className="mt-auto pt-16 font-serif text-h1">
        <MaskLine delay={0.2}>Guilherme</MaskLine>{' '}
        <MaskLine delay={0.32} className="pl-[0.9em] italic md:pl-[1.6em]">
          Calheira<span className="not-italic text-signal">.</span>
        </MaskLine>
      </h1>

      {/* Declaração + CTAs */}
      <motion.div
        className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease }}
      >
        <p className="col-span-12 max-w-[26ch] font-serif text-h3 md:col-span-7 lg:col-span-6 lg:col-start-4">
          {t.hero.statementA} <em className="text-signal">{t.hero.statementEm}</em> {t.hero.statementB}
        </p>
        <div className="col-span-12 flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end lg:col-span-3 lg:col-start-10">
          <a href="#work" className="btn-solid justify-between">
            {t.hero.ctaWork} <span className="arrow arrow-down" aria-hidden>↓</span>
          </a>
          <a href={site.cv} target="_blank" rel="noopener" className="btn-ghost justify-between">
            {t.hero.ctaCv} <span className="arrow arrow-up-right" aria-hidden>↗</span>
          </a>
        </div>
      </motion.div>

      {/* Destaque: produto em produção */}
      <motion.a
        href="#work"
        className="group mt-12 flex items-center justify-between gap-4 border-y border-line py-4 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="label flex shrink-0 items-center gap-2 text-ink">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
              <span className="relative h-2 w-2 rounded-full bg-signal" />
            </span>
            {t.hero.featuredLabel}
          </span>
          <span className="truncate text-sm text-muted transition-colors group-hover:text-ink md:text-base">
            {t.hero.featuredText}
          </span>
        </span>
        <span className="font-mono text-sm transition-transform duration-500 ease-out-expo group-hover:translate-y-1" aria-hidden>
          ↓
        </span>
      </motion.a>
    </section>
  )
}
