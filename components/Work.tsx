'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useI18n } from '@/lib/i18n/context'
import { featuredProject as psi, projects } from '@/lib/data/projects'
import { site } from '@/lib/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Work() {
  const { t } = useI18n()

  return (
    <section id="work" aria-labelledby="work-title" className="page-x pb-12 pt-24 md:pb-16 md:pt-28">
      <SectionHeading index="01" label={t.nav.work} id="work-title" title={t.work.title} />
      <Featured />
      <ProjectIndex />
      <Reveal className="mt-10 flex justify-end">
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          {t.work.github} <span className="arrow arrow-up-right" aria-hidden>↗</span>
        </a>
      </Reveal>
    </section>
  )
}

// ============================================
// Estudo de caso: PsiMais
// ============================================

function Featured() {
  const { t, locale } = useI18n()

  return (
    <article aria-labelledby="psimais-title" className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-24">
      <Reveal className="col-span-12 lg:col-span-8">
        <a
          href={psi.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.work.visit}
          className="group block overflow-hidden border border-line bg-paper-2"
        >
          <Image
            src={psi.image}
            alt={t.work.psiAlt}
            width={1600}
            height={911}
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="h-auto w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.025]"
            priority={false}
          />
        </a>
      </Reveal>

      <Reveal delay={0.1} className="col-span-12 flex flex-col lg:col-span-4">
        <p className="label flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-ink">{t.work.kind}</span>
          <span aria-hidden>·</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            {t.work.status}
          </span>
          <span aria-hidden>·</span>
          <span>{t.work.role}</span>
        </p>

        <h3 id="psimais-title" className="mt-5 font-serif text-h2">
          {psi.title}
        </h3>
        <p className="mt-5 text-pretty leading-relaxed text-muted">{psi.description[locale]}</p>

        <h4 className="label mt-10">{t.work.modulesLabel}</h4>
        <ol className="mt-3 border-t border-line">
          {psi.modules.map((m, i) => (
            <li key={m.pt} className="flex gap-4 border-b border-line py-2.5 text-sm">
              <span className="font-mono text-mono-xs leading-5 text-muted">{String(i + 1).padStart(2, '0')}</span>
              {m[locale]}
            </li>
          ))}
        </ol>

        <p className="label mt-6">
          {t.work.stackLabel}: <span className="text-ink">{psi.technologies.join(' · ')}</span>
        </p>

        <a href={psi.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-solid mt-8 justify-between self-start">
          {t.work.visit} <span className="arrow arrow-up-right" aria-hidden>↗</span>
        </a>
      </Reveal>
    </article>
  )
}

// ============================================
// Índice de projetos
// No desktop, a prévia segue o cursor; no celular, aparece na própria linha.
// ============================================

function ProjectIndex() {
  const { t, locale } = useI18n()
  const [hovered, setHovered] = useState<number | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 })

  return (
    <div className="mt-28 md:mt-40">
      <Reveal>
        <h3 className="label flex justify-between border-b border-ink pb-3">
          <span>{t.work.othersTitle}</span>
          <span aria-hidden>({String(projects.length).padStart(2, '0')})</span>
        </h3>
      </Reveal>

      <ul
        onMouseMove={(e) => {
          x.set(e.clientX)
          y.set(e.clientY)
        }}
        onMouseLeave={() => setHovered(null)}
      >
        {projects.map((p, i) => {
          const primary = p.liveUrl ?? p.repoUrl
          return (
            <Reveal as="li" key={p.id} delay={i * 0.05}>
              <article
                onMouseEnter={() => setHovered(i)}
                className="group grid grid-cols-12 gap-x-6 gap-y-3 border-b border-line py-7 md:py-9"
              >
                <span className="col-span-2 font-mono text-mono-sm text-muted md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-10 md:col-span-6 lg:col-span-5">
                  <h4 className="font-serif text-h3">
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-2"
                    >
                      {p.title}
                      <span className="ml-2 inline-block text-[0.6em] text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </h4>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">{p.description[locale]}</p>
                </div>

                <div className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto lg:col-span-4">
                  <p className="label text-ink">{p.category[locale]}</p>
                  <p className="label mt-1">{p.technologies.join(' · ')}</p>
                </div>

                <div className="col-span-10 col-start-3 flex items-start gap-5 md:col-span-2 md:col-start-auto md:flex-col md:items-end md:gap-1">
                  <span className="label hidden md:block">{p.year}</span>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="label link-draw text-ink">
                      {t.work.live} ↗
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="label link-draw text-ink">
                      {t.work.code} ↗
                    </a>
                  )}
                </div>

                {/* Miniatura no celular */}
                <div className="col-span-10 col-start-3 overflow-hidden border border-line md:hidden">
                  <Image src={p.image} alt="" width={800} height={500} sizes="80vw" className="aspect-[16/10] h-auto w-full object-cover object-top" />
                </div>
              </article>
            </Reveal>
          )
        })}
      </ul>

      {/* Prévia flutuante (desktop, ponteiro fino) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden fine:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key="preview"
              className="-translate-x-1/2 -translate-y-[115%] overflow-hidden border border-line bg-paper-2 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.35)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[16/10] w-[340px]">
                {projects.map((p, i) => (
                  <Image
                    key={p.id}
                    src={p.image}
                    alt=""
                    fill
                    sizes="340px"
                    className={`object-cover object-top transition-opacity duration-300 ${hovered === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
