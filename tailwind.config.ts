import type { Config } from 'tailwindcss'

// ============================================
// Design tokens
// Cores vêm de variáveis CSS (app/globals.css) para alternar claro/escuro.
// ============================================

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // Dispositivos com mouse/trackpad (efeitos de hover que seguem o cursor)
        fine: { raw: '(hover: hover) and (pointer: fine) and (min-width: 768px)' },
      },
      colors: {
        paper: token('paper'),
        'paper-2': token('paper-2'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        signal: token('signal'),
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala tipográfica fluida (razão ~1.333)
        'mono-xs': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        'mono-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.03em' }],
        lead: ['clamp(1.125rem, 0.95rem + 0.6vw, 1.375rem)', { lineHeight: '1.55' }],
        h3: ['clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['clamp(2.25rem, 1.6rem + 2.8vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        h1: ['clamp(3.5rem, 0.25rem + 19vw, 17rem)', { lineHeight: '0.86', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        page: '1440px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
