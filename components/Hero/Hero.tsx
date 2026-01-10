'use client'

// ============================================
// Hero Section
// Animação de entrada impactante com texto + background dinâmico
// ============================================

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'

export function Hero() {
  const t = useTranslations()
  const containerRef = useRef<HTMLElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Parallax no scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Mouse tracking para efeito de glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      }
      containerRef.current.style.setProperty('--mouse-x', `${mouseRef.current.x}%`)
      containerRef.current.style.setProperty('--mouse-y', `${mouseRef.current.y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-subtle"
        />
        <motion.div
          style={{ y }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-subtle animation-delay-500"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 168, 83, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 168, 83, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Mouse glow effect */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 168, 83, 0.15), transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-custom relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-foreground-muted mb-4 flex items-center gap-3"
          >
            <span className="inline-block w-12 h-[1px] bg-accent" />
            {t.hero.greeting}
          </motion.p>

          {/* Name - Letra por letra */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-display text-display-xl font-semibold text-foreground flex flex-wrap"
              initial="hidden"
              animate="visible"
            >
              {t.hero.name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="font-display text-display-lg font-medium">
              <span className="text-foreground-muted">{t.hero.role}</span>{' '}
              <span className="text-gradient">{t.hero.roleHighlight}</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-foreground-muted max-w-2xl mb-12 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta}
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaSecondary}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 7L10 12L17 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="2"
                  y="4"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-body-sm text-foreground-subtle">
          {t.hero.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

