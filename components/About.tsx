'use client'

import Image from 'next/image'
import { useTranslations } from '@/lib/i18n/context'
import { Reveal } from './Reveal'

export function About() {
  const t = useTranslations()

  const facts = [
    [t.about.education, t.about.educationValue],
    [t.about.base, t.about.baseValue],
    [t.about.focus, t.about.focusValue],
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="page-x py-24 md:py-28">
      <div className="grid grid-cols-12 gap-x-6 border-t border-line pt-4">
        <p className="label col-span-12 flex gap-4 md:col-span-3">
          <span className="text-signal">02</span>
          <span>{t.nav.about}</span>
        </p>

        {/* Declaração principal, alinhada aos títulos das outras seções */}
        <Reveal className="col-span-12 mt-10 md:col-span-9 md:mt-16">
          <h2 id="about-title" className="sr-only">
            {t.about.title}
          </h2>
          <p className="max-w-[30ch] font-serif text-[clamp(1.75rem,1.2rem+2.2vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-balance">
            {t.about.lead}
          </p>
        </Reveal>

        {/* Retrato */}
        <Reveal className="col-span-6 mt-14 sm:col-span-4 md:col-span-3 md:mt-20">
          <figure className="group max-w-[260px] overflow-hidden border border-line bg-paper-2">
            <Image
              src="/img/perfil.png"
              alt={t.about.portraitAlt}
              width={640}
              height={640}
              sizes="(min-width: 768px) 22vw, 50vw"
              className="aspect-[4/5] h-auto w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </figure>
        </Reveal>

        {/* Texto */}
        <Reveal
          delay={0.1}
          className="col-span-12 mt-10 max-w-[60ch] space-y-5 leading-relaxed text-muted md:col-span-5 md:mt-20 lg:col-span-5"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </Reveal>

        {/* Fatos */}
        <Reveal delay={0.15} className="col-span-12 mt-10 md:col-span-4 md:mt-20 lg:col-span-3 lg:col-start-10">
          <p className="label border-t border-line pt-3">{t.about.factsLabel}</p>
          <dl>
            {facts.map(([k, v]) => (
              <div key={k} className="border-b border-line py-3 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
