'use client'

// ============================================
// Contexto de Internacionalização
// Gerencia o idioma atual e fornece traduções
// ============================================

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Locale, defaultLocale, translations, Translations } from './locales'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
  initialLocale?: Locale
}

export function I18nProvider({ children, initialLocale = defaultLocale }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    // Salva preferência no localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale)
    }
  }, [])

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

export function useTranslations() {
  const { t } = useI18n()
  return t
}

