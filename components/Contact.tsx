'use client'

import { useState } from 'react'
import { useTranslations } from '@/lib/i18n/context'
import { site } from '@/lib/site'
import { Reveal } from './Reveal'

// Seção final em cores invertidas: fecha a página com contraste
// e deixa o e-mail como a ação mais evidente.
export function Contact() {
  const t = useTranslations()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  const channels = [
    { label: 'GitHub', href: site.github, meta: 'github.com/guicalheira', external: true },
    { label: 'LinkedIn', href: site.linkedin, meta: 'in/guicalheira', external: true },
    { label: t.contact.cv, href: site.cv, meta: 'PDF', external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="invert-signal bg-ink text-paper">
      <div className="page-x pb-10 pt-24 md:pt-36">
        <div className="grid grid-cols-12 gap-x-6 border-t border-paper/20 pt-4">
          <p className="col-span-12 flex gap-4 font-mono text-mono-xs uppercase text-paper/60 md:col-span-3">
            <span className="text-signal">04</span>
            <span>{t.nav.contact}</span>
          </p>

          <div className="col-span-12 mt-10 md:col-span-9 md:mt-16">
            <Reveal>
              <h2 id="contact-title" className="max-w-[16ch] font-serif text-h2">
                {t.contact.title}
              </h2>
              <p className="mt-6 max-w-[42ch] text-lead text-paper/70">{t.contact.lead}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14 md:mt-20">
              <a
                href={`mailto:${site.email}`}
                className="link-draw break-all pb-1 font-sans text-[clamp(1.5rem,0.9rem+3vw,3.75rem)] leading-tight tracking-[-0.03em] [background-size:100%_1px] hover:text-signal"
              >
                {site.email}
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copy}
                  className="btn border-paper/30 text-paper hover:border-paper"
                  aria-live="polite"
                >
                  {copied ? t.contact.copied : t.contact.copy}
                  <span aria-hidden>{copied ? '✓' : '⧉'}</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-20">
              <h3 className="font-mono text-mono-xs uppercase text-paper/60">{t.contact.channels}</h3>
              <ul className="mt-3 border-t border-paper/20">
                {channels.map((c) => (
                  <li key={c.label} className="border-b border-paper/20">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4 py-5"
                    >
                      <span className="font-serif text-h3 transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
                        {c.label}
                      </span>
                      <span className="flex items-baseline gap-4 font-mono text-mono-sm text-paper/60">
                        <span className="hidden sm:inline">{c.meta}</span>
                        <span className="text-paper transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" aria-hidden>
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  )
}

function Footer() {
  const t = useTranslations()
  return (
    <footer className="mt-28 flex flex-col gap-4 border-t border-paper/20 pt-5 font-mono text-mono-xs uppercase text-paper/60 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} Guilherme Calheira. {t.footer.rights}
      </p>
      <p className="hidden md:block">{t.footer.credit}</p>
      <a href="#top" className="link-draw self-start text-paper sm:self-auto">
        {t.footer.top} ↑
      </a>
    </footer>
  )
}
