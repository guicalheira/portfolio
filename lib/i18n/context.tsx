'use client'

// ============================================
// Internacionalização
// O HTML é gerado em inglês (padrão). O script em app/layout.tsx decide o idioma
// do visitante antes da primeira pintura — escolha salva > idioma do navegador > inglês —
// e o registra em <html data-locale>. Aqui aplicamos esse idioma logo na hidratação
// e mostramos a página (classe i18n-pending) só depois da troca, sem piscar.
// ============================================

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState, ReactNode } from 'react'
import { Locale, defaultLocale, locales, translations, Translations } from './locales'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en', es: 'es' }

// useLayoutEffect não roda no servidor; evita o aviso do React durante a pré-renderização
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [ready, setReady] = useState(false)

  // Aplica o idioma detectado antes da pintura
  useIsomorphicLayoutEffect(() => {
    const detected = document.documentElement.dataset.locale as Locale | undefined
    if (detected && locales.includes(detected)) setLocaleState(detected)
    setReady(true)
  }, [])

  // Depois que os textos já estão no idioma certo, mostra a página
  useIsomorphicLayoutEffect(() => {
    if (!ready) return
    const root = document.documentElement
    root.lang = htmlLang[locale]
    root.dataset.locale = locale
    root.classList.remove('i18n-pending')
  }, [ready, locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem('preferred-locale', next)
    } catch {}
  }, [])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}

export function useTranslations() {
  return useI18n().t
}
