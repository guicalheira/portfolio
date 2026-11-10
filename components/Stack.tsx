'use client'

import { useTranslations } from '@/lib/i18n/context'
import { stackLayers } from '@/lib/data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

// As três primeiras camadas formam o caminho de uma requisição
// (interface → servidor → dados) e são ligadas por um traço vertical.
// Linguagens e ferramentas atravessam todas elas e ficam separadas abaixo.
const PRODUCT_LAYERS = 3

export function Stack() {
  const t = useTranslations()

  return (
    <section id="stack" aria-labelledby="stack-title" className="page-x py-24 md:py-28">
      <SectionHeading index="03" label={t.nav.stack} id="stack-title" title={t.stack.title}>
        <p className="mt-6 max-w-[46ch] text-lead text-muted">{t.stack.intro}</p>
      </SectionHeading>

      <div className="mt-16 md:mt-24">
        {stackLayers.map((layer, i) => {
          const isProduct = i < PRODUCT_LAYERS
          return (
            <Reveal key={layer.key} delay={i * 0.06}>
              <div
                className={`group grid grid-cols-12 gap-x-6 gap-y-3 border-line py-7 md:py-9 ${
                  i === PRODUCT_LAYERS ? 'mt-10 border-t border-ink' : 'border-t'
                } ${i === stackLayers.length - 1 ? 'border-b' : ''}`}
              >
                {/* Trilho com nós */}
                <div className="relative col-span-1 hidden md:block" aria-hidden>
                  {isProduct && (
                    <>
                      <span
                        className={`absolute left-[5px] w-px bg-line ${
                          i === 0 ? 'top-3 -bottom-9' : i === PRODUCT_LAYERS - 1 ? '-top-9 h-12' : '-top-9 -bottom-9'
                        }`}
                      />
                      <span className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border border-ink bg-paper transition-colors duration-300 group-hover:bg-signal group-hover:border-signal" />
                    </>
                  )}
                </div>

                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <h3 className="flex items-baseline gap-3">
                    <span className="font-mono text-mono-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base font-medium">{t.stack.layers[layer.key]}</span>
                  </h3>
                  <p className="mt-1 pl-7 text-sm text-muted md:pl-0">{t.stack.layerNotes[layer.key]}</p>
                </div>

                <ul className="col-span-12 flex flex-wrap items-baseline gap-x-2 gap-y-1 pl-7 font-serif text-h3 md:col-span-7 md:pl-0 lg:col-span-8">
                  {layer.items.map((item, j) => (
                    <li key={item} className="flex items-baseline gap-x-2">
                      <span className="transition-colors duration-300 hover:text-signal">{item}</span>
                      {j < layer.items.length - 1 && (
                        <span className="text-line" aria-hidden>
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
