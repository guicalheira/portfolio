'use client'

// ============================================
// About Section
// Animações de scroll com GSAP + Cards de skills
// ============================================

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n/context'
import { skillCategories, stats } from '@/lib/data/skills'
import { cn } from '@/lib/utils'

// Registra plugin do GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function About() {
  const { locale, t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Animações GSAP com ScrollTrigger
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animação do título - palavras aparecem sequencialmente
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word')
        gsap.fromTo(
          words,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Animação do texto - linha por linha
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Animação dos stats - contagem
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-number')
        statItems.forEach((item) => {
          const target = parseInt(item.getAttribute('data-target') || '0', 10)
          gsap.fromTo(
            item,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              ease: 'power2.out',
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      }

      // Animação das skills
      if (skillsRef.current) {
        const cards = skillsRef.current.querySelectorAll('.skill-card')
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-section overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header da seção */}
        <div className="mb-20">
          <h2
            ref={titleRef}
            className="font-display text-display-lg font-semibold mb-6 overflow-hidden"
          >
            <span className="word inline-block">{t.about.title.split(' ')[0]}</span>{' '}
            <span className="word inline-block text-accent">
              {t.about.title.split(' ')[1] || ''}
            </span>
          </h2>

          <div ref={textRef} className="max-w-3xl">
            <p className="section-subtitle mb-8">{t.about.subtitle}</p>
            <p className="text-body-md text-foreground-muted leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 mb-20 max-w-2xl"
        >
          <div className="text-center md:text-left">
            <span
              className="stat-number font-display text-5xl md:text-6xl font-bold text-accent"
              data-target={stats.experience}
            >
              0
            </span>
            <span className="font-display text-5xl md:text-6xl font-bold text-accent">+</span>
            <p className="text-body-sm text-foreground-muted mt-2">
              {t.about.experience}
            </p>
          </div>
          <div className="text-center md:text-left">
            <span
              className="stat-number font-display text-5xl md:text-6xl font-bold text-foreground"
              data-target={stats.projects}
            >
              0
            </span>
            <span className="font-display text-5xl md:text-6xl font-bold text-foreground">+</span>
            <p className="text-body-sm text-foreground-muted mt-2">
              {t.about.projects}
            </p>
          </div>
          <div className="text-center md:text-left">
            <span
              className="stat-number font-display text-5xl md:text-6xl font-bold text-foreground"
              data-target={stats.clients}
            >
              0
            </span>
            <span className="font-display text-5xl md:text-6xl font-bold text-foreground">+</span>
            <p className="text-body-sm text-foreground-muted mt-2">
              {t.about.clients}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-display text-display-md font-medium mb-10">
            {t.about.skills}
          </h3>

          <div ref={skillsRef} className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name.en}
                className="skill-card glass-card p-6 md:p-8 glow-effect"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-display text-xl font-medium text-foreground mb-6">
                  {category.name[locale]}
                </h4>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      className="flex items-center gap-3 group"
                    >
                      <span className="text-lg transition-transform duration-300 group-hover:scale-125">
                        {skill.icon}
                      </span>
                      <span className="text-body-md text-foreground-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex-1" />
                      <span
                        className={cn(
                          'text-xs px-2 py-0.5 rounded-full',
                          skill.level === 'expert' && 'bg-accent/20 text-accent',
                          skill.level === 'advanced' && 'bg-foreground/10 text-foreground-muted',
                          skill.level === 'intermediate' && 'bg-border text-foreground-subtle'
                        )}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

