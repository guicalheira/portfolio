import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Providers } from './providers'
import './globals.css'

// ============================================
// Tipografia (arquivos hospedados no próprio projeto, subconjunto latino)
// Instrument Serif: títulos, com itálico para ênfase
// Inter Tight: texto corrido e interface
// JetBrains Mono: metadados, rótulos e índices
//
// Usamos next/font/local em vez de next/font/google para que o build
// não dependa do Google Fonts (que às vezes quebra o build na Vercel).
// Todas as fontes são licenciadas sob a SIL Open Font License.
// ============================================

const serif = localFont({
  src: [
    { path: './fonts/InstrumentSerif-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/InstrumentSerif-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const sans = localFont({
  src: './fonts/InterTight-Variable.woff2',
  weight: '100 900',
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const mono = localFont({
  src: './fonts/JetBrainsMono-Regular.woff2',
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
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
