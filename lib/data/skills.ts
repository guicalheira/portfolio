// ============================================
// Skills e Tecnologias
// Baseado no perfil: https://github.com/guicalheira
// Organizadas por categoria
// ============================================

export interface Skill {
  name: string
  icon: string // Emoji ou código para ícone
  level: 'expert' | 'advanced' | 'intermediate'
}

export interface SkillCategory {
  name: {
    pt: string
    en: string
    es: string
  }
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: {
      pt: 'Frontend',
      en: 'Frontend',
      es: 'Frontend',
    },
    skills: [
      { name: 'React', icon: '⚛️', level: 'expert' },
      { name: 'Next.js', icon: '▲', level: 'advanced' },
      { name: 'Vue.js', icon: '💚', level: 'advanced' },
      { name: 'TypeScript', icon: '📘', level: 'advanced' },
      { name: 'Tailwind CSS', icon: '🎨', level: 'expert' },
      { name: 'HTML/CSS', icon: '🌐', level: 'expert' },
    ],
  },
  {
    name: {
      pt: 'Backend',
      en: 'Backend',
      es: 'Backend',
    },
    skills: [
      { name: 'Node.js', icon: '🟢', level: 'advanced' },
      { name: 'Python', icon: '🐍', level: 'advanced' },
      { name: 'C#', icon: '💜', level: 'intermediate' },
      { name: 'MongoDB', icon: '🍃', level: 'intermediate' },
      { name: 'Firebase', icon: '🔥', level: 'advanced' },
      { name: 'REST APIs', icon: '🔗', level: 'expert' },
    ],
  },
  {
    name: {
      pt: 'Ferramentas',
      en: 'Tools',
      es: 'Herramientas',
    },
    skills: [
      { name: 'Git', icon: '📦', level: 'expert' },
      { name: 'Redux', icon: '🔄', level: 'intermediate' },
      { name: 'VS Code', icon: '💻', level: 'expert' },
    ],
  },
]

// Stats para exibição
export const stats = {
  experience: 3,
  projects: 12, // Baseado nos repos do GitHub
  clients: 10,
}
