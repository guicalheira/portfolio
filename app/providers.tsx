'use client'

import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from '@/lib/theme'
import { I18nProvider } from '@/lib/i18n/context'

// Respeita "reduzir movimento" do sistema em todas as animações do framer-motion
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </I18nProvider>
    </ThemeProvider>
  )
}
