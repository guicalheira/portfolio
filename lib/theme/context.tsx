'use client'

// ============================================
// Tema claro/escuro
// O script em app/layout.tsx aplica a classe antes da pintura;
// aqui apenas lemos esse estado e permitimos alternar.
// Os filhos são sempre renderizados (o site continua sendo pré-renderizado para SEO).
// ============================================

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(next)
      try {
        localStorage.setItem('theme', next)
      } catch {}
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
