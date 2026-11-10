// ============================================
// Projetos
// `featured` (PsiMais) ganha um estudo de caso em destaque;
// os demais aparecem no índice de projetos.
// ============================================

import type { Locale } from '@/lib/i18n/locales'

type Localized = Record<Locale, string>

export interface Project {
  id: string
  title: string
  description: Localized
  image: string
  technologies: string[]
  liveUrl?: string
  repoUrl?: string
  year: string
  category: Localized
}

export interface FeaturedProject extends Project {
  liveUrl: string
  modules: Localized[]
}

// Estudo de caso em destaque — informações conforme o site oficial (psimais.com)
export const featuredProject: FeaturedProject = {
  id: 'psimais',
  title: 'PsiMais',
  description: {
    pt: 'Plataforma SaaS para psicólogos organizarem a rotina clínica em um só lugar. Reúne cadastro de pacientes, agenda, prontuários e finanças, com assinatura mensal e período de teste — um produto real, em produção.',
    en: 'A SaaS platform that lets psychologists run their clinical routine in one place. It brings together patient records, scheduling, clinical notes and finances, sold as a monthly subscription with a free trial — a real product, live in production.',
    es: 'Plataforma SaaS para que psicólogos organicen su rutina clínica en un solo lugar. Reúne pacientes, agenda, historias clínicas y finanzas, con suscripción mensual y período de prueba — un producto real, en producción.',
  },
  image: '/img/projects/psimais.jpg',
  technologies: ['React', 'Google Calendar API'],
  liveUrl: 'https://www.psimais.com/',
  year: '',
  category: { pt: 'SaaS', en: 'SaaS', es: 'SaaS' },
  modules: [
    { pt: 'Gestão de pacientes', en: 'Patient management', es: 'Gestión de pacientes' },
    { pt: 'Agendamento de consultas', en: 'Appointment scheduling', es: 'Agenda de consultas' },
    { pt: 'Prontuários criptografados', en: 'Encrypted clinical records', es: 'Historias clínicas cifradas' },
    { pt: 'Gestão financeira', en: 'Financial management', es: 'Gestión financiera' },
    { pt: 'Sincronização com Google Agenda', en: 'Google Calendar sync', es: 'Sincronización con Google Calendar' },
    { pt: 'Link público de agendamento', en: 'Public booking link', es: 'Enlace público de reservas' },
  ],
}

export const projects: Project[] = [
  {
    id: 'natucoop',
    title: 'Natucoop',
    description: {
      pt: 'E-commerce de produtos naturais, com catálogo, vitrine e uma experiência de compra focada em simplicidade e confiança.',
      en: 'Natural products e-commerce with a catalog, storefront and a buying experience focused on simplicity and trust.',
      es: 'E-commerce de productos naturales con catálogo, vitrina y una experiencia de compra enfocada en simplicidad y confianza.',
    },
    image: '/img/projects/natucoop.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://www.natucoop.com.br',
    year: '2024',
    category: { pt: 'E-commerce', en: 'E-commerce', es: 'E-commerce' },
  },
  {
    id: 'musicante',
    title: 'Musicante',
    description: {
      pt: 'Site de votação para um festival de música, com navegação por participantes, etapas do evento e um fluxo claro para o público votar.',
      en: 'Voting website for a music festival, with participant browsing, event stages and a clear flow for the public to vote.',
      es: 'Sitio de votación para un festival de música, con navegación por participantes, etapas del evento y un flujo claro para que el público vote.',
    },
    image: '/img/projects/musicante.jpg',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://www.musicantesudoeste.com.br',
    year: '2024',
    category: { pt: 'Plataforma de votação', en: 'Voting platform', es: 'Plataforma de votación' },
  },
  {
    id: 'my-money',
    title: 'MyMoney',
    description: {
      pt: 'Controle financeiro pessoal com dashboard, totais de créditos e débitos e ciclos de pagamento.',
      en: 'Personal finance tracker with a dashboard, credit and debit totals, and payment cycles.',
      es: 'Control financiero personal con panel, totales de créditos y débitos y ciclos de pago.',
    },
    image: '/img/MyMoney.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    repoUrl: 'https://github.com/guicalheira',
    year: '2024',
    category: { pt: 'Aplicação web', en: 'Web app', es: 'Aplicación web' },
  },
  {
    id: 'lista-tarefas',
    title: 'Lista de Tarefas',
    description: {
      pt: 'Gerenciador de tarefas com cadastro, busca e conclusão de itens, estado gerenciado com Redux e persistência em MongoDB.',
      en: 'Task manager with item creation, search and completion, Redux state management and MongoDB persistence.',
      es: 'Gestor de tareas con alta, búsqueda y finalización de ítems, estado con Redux y persistencia en MongoDB.',
    },
    image: '/img/ToDo.png',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    repoUrl: 'https://github.com/guicalheira/ListaDeFazeresApp',
    year: '2024',
    category: { pt: 'Aplicação web', en: 'Web app', es: 'Aplicación web' },
  },
]
