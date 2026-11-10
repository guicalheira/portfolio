import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

// ============================================
// Tipografia
// Instrument Serif: títulos, com itálico para ênfase
// Inter Tight: texto corrido e interface
// JetBrains Mono: metadados, rótulos e índices
// ============================================

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

const description =
  'Desenvolvedor Full Stack. Construo produtos web completos, da interface ao banco de dados — como o PsiMais, um SaaS para psicólogos em produção.'

export const metadata: Metadata = {
  title: 'Guilherme Calheira — Desenvolvedor Full Stack',
  description,
  keywords: ['Guilherme Calheira', 'desenvolvedor full stack', 'React', 'Next.js', 'Vue.js', 'Node.js', 'PsiMais', 'portfólio'],
  authors: [{ name: 'Guilherme Calheira' }],
  creator: 'Guilherme Calheira',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
    title: 'Guilherme Calheira — Desenvolvedor Full Stack',
    description,
    siteName: 'Guilherme Calheira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Calheira — Desenvolvedor Full Stack',
    description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F1EEE7' },
    { media: '(prefers-color-scheme: dark)', color: '#131210' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Aplica o tema e o idioma salvos antes da primeira pintura (evita flash)
const bootScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.classList.add(t);var l=localStorage.getItem('preferred-locale');if(l==='en')d.lang='en';else if(l==='es')d.lang='es'}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
