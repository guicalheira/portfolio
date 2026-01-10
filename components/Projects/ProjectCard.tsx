'use client'

// ============================================
// Project Card
// Card individual com hover interativo sofisticado
// ============================================

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n/context'
import type { Project } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale, t } = useI18n()
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking para efeito 3D
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl bg-background-secondary border border-border',
          'transition-all duration-500',
          isHovered && 'border-border-hover shadow-2xl shadow-accent/5'
        )}
      >
        {/* Imagem do projeto */}
        <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
          {/* Placeholder gradient enquanto imagem carrega */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background-tertiary" />
          
          {/* Imagem com zoom no hover */}
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 2}
            />
          </motion.div>

          {/* Overlay com gradiente */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.9 : 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Badge do ano/categoria */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-foreground-muted">
              {project.year}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-accent/20 backdrop-blur-sm rounded-full text-accent">
              {project.category}
            </span>
          </div>

          {/* Links que aparecem no hover */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-foreground text-background rounded-full hover:bg-accent transition-colors"
                aria-label="Ver projeto ao vivo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                aria-label="Ver código fonte"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </motion.div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-body-sm text-foreground-muted mb-4 line-clamp-2">
            {project.description[locale]}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-border/50 text-foreground-muted rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs bg-border/50 text-foreground-subtle rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Linha de accent no hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-hover to-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.article>
  )
}

