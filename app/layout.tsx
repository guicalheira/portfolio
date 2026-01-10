import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n/context'
import { ThemeProvider } from '@/lib/theme'
import './globals.css'

// ============================================
// Fontes - Usando Google Fonts como alternativa acessível
// Space Grotesk: Display font moderna e geométrica
// Outfit: Body font limpa e legível
// ============================================

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

// ============================================
// Metadata SEO
// ============================================

export const metadata: Metadata = {
  title: 'Guilherme Calheira | Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack especializado em criar experiências digitais elegantes e performáticas. React, Next.js, Vue.js, Node.js e mais.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'vue.js', 'portfolio', 'web developer', 'guilherme calheira'],
  authors: [{ name: 'Guilherme Calheira' }],
  creator: 'Guilherme Calheira',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
    title: 'Guilherme Calheira | Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em criar experiências digitais elegantes e performáticas.',
    siteName: 'Portfolio Guilherme Calheira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Calheira | Desenvolvedor Full Stack',
    description: 'Desenvolvedor Full Stack especializado em criar experiências digitais elegantes e performáticas.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Script para evitar flash de tema errado no carregamento
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme) {
        document.documentElement.classList.add(theme);
      } else {
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
      }
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  })();
`

// ============================================
// Root Layout
// ============================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${spaceGrotesk.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Script inline para aplicar tema antes do render */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground font-body overflow-x-hidden antialiased">
        <ThemeProvider>
          <I18nProvider>
            {/* Noise overlay global para textura sutil */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]">
              <svg className="w-full h-full">
                <filter id="noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="4"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>
            
            {/* Conteúdo principal */}
            <div className="relative z-10">
              {children}
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
