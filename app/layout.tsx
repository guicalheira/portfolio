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

// Metadados em inglês: é o que buscadores e prévias de link (Fiverr, LinkedIn, WhatsApp) mostram
const title = 'Guilherme Calheira — Full Stack Developer'
const description =
  'Full stack developer building complete web products, from the interface to the database — like PsiMais, a live SaaS for psychologists. React, Next.js, Vue.js, Node.js.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Guilherme Calheira', 'full stack developer', 'freelance web developer', 'React', 'Next.js', 'Vue.js', 'Node.js', 'PsiMais', 'portfolio'],
  authors: [{ name: 'Guilherme Calheira' }],
  creator: 'Guilherme Calheira',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'es_ES'],
    title,
    description,
    siteName: 'Guilherme Calheira',
  },
  twitter: {
    card: 'summary_large_image',
    title,
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

// Roda antes da primeira pintura:
// 1. aplica o tema salvo (ou o do sistema);
// 2. escolhe o idioma: o salvo pelo visitante > o do navegador (pt/es) > inglês.
//    Se não for inglês, esconde a página até o React trocar os textos (evita piscar em inglês).
//    O timeout garante que a página reapareça mesmo se o JavaScript falhar.
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.classList.add(t)}catch(e){}var l=null;try{l=localStorage.getItem('preferred-locale')}catch(e){}if(l!=='pt'&&l!=='en'&&l!=='es'){l='en';var n=navigator.languages||[navigator.language||''];for(var i=0;i<n.length;i++){var c=String(n[i]).slice(0,2).toLowerCase();if(c==='pt'||c==='es'||c==='en'){l=c;break}}}d.setAttribute('data-locale',l);if(l!=='en'){d.lang=l==='pt'?'pt-BR':'es';d.classList.add('i18n-pending');setTimeout(function(){d.classList.remove('i18n-pending')},1500)}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
