'use client'

// ============================================
// Footer
// Rodapé minimalista com links e copyright
// ============================================

import { motion } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'

export function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-semibold text-foreground group"
            whileHover={{ scale: 1.05 }}
          >
            G<span className="text-accent">.</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-body-sm text-foreground-muted text-center">
            © {currentYear} Guilherme Calheira. {t.footer.rights}.
          </p>

          {/* Made with */}
          <p className="text-body-sm text-foreground-subtle flex items-center gap-1.5">
            {t.footer.madeWith}{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ♥
            </motion.span>{' '}
            {t.footer.and} Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

