'use client'

// ============================================
// Smooth Scroll Provider
// Wrapper para scroll suave com Lenis
// Alternativa leve que não requer biblioteca externa
// ============================================

import { useEffect, useRef, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scroll nativo para links âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div ref={wrapperRef} className="smooth-scroll-wrapper">
      {children}
    </div>
  )
}

