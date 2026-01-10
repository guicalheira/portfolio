'use client'

// ============================================
// Página Principal
// Composição de todas as seções do portfólio
// ============================================

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Navigation,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  SmoothScroll,
} from '@/components'

// Registra plugins do GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  useEffect(() => {
    // Refresh ScrollTrigger após o carregamento
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SmoothScroll>
      {/* Navegação fixa */}
      <Navigation />

      {/* Conteúdo principal */}
      <main>
        {/* Hero - Primeira impressão impactante */}
        <Hero />

        {/* Divisor decorativo */}
        <div className="container-custom">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Sobre mim */}
        <About />

        {/* Divisor decorativo */}
        <div className="container-custom">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Projetos */}
        <Projects />

        {/* Divisor decorativo */}
        <div className="container-custom">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Contato */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  )
}

