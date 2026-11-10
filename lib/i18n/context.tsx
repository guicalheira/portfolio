'use client'

// ============================================
// Internacionalização
// Mantém o idioma escolhido entre visitas e sincroniza o atributo lang do <html>.
// ============================================

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react'
import { Locale, defaultLocale, locales, translations, Translations } from './locales'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en', es: 'es' }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('preferred-locale') as Locale | null
      if (saved && locales.includes(saved)) setLocaleState(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale]
  }, [locale])

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
