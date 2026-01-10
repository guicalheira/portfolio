// ============================================
// Dados dos Projetos
// Baseado no GitHub: https://github.com/guicalheira
// Fácil de customizar e adicionar novos projetos
// ============================================

export interface Project {
  id: string
  title: string
  description: {
    pt: string
    en: string
    es: string
  }
  image: string
  technologies: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  year: string
  category: string
}

export const projects: Project[] = [
  {
    id: 'natucoop',
    title: 'Natucoop',
    description: {
      pt: 'E-commerce de produtos naturais, com catálogo, vitrine de produtos e experiência de compra focada em simplicidade e confiança.',
      en: 'Natural products e-commerce with a product catalog, storefront experience, and a checkout flow focused on simplicity and trust.',
      es: 'E-commerce de productos naturales con catálogo, vitrina de productos y una experiencia de compra enfocada en simplicidad y confianza.',
    },
    image: '/img/projects/natucoop.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://www.natucoop.com.br',
    repoUrl: 'https://github.com/guicalheira/natucoop',
    featured: true,
    year: '2024',
    category: 'Full Stack',
  },
  {
    id: 'musicante',
    title: 'Musicante',
    description: {
      pt: 'Site de votação para um evento musical, com navegação por participantes, etapas do evento e uma experiência clara para o público votar.',
      en: 'Voting website for a music event, with participant browsing, event stages, and a clear public voting experience.',
      es: 'Sitio de votación para un evento musical, con navegación por participantes, etapas del evento y una experiencia clara para el público votar.',
    },
    image: '/img/projects/musicante.jpg',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://www.musicantesudoeste.com.br',
    repoUrl: 'https://github.com/guicalheira/musical',
    featured: true,
    year: '2024',
    category: 'Mobile App',
  },
  {
    id: 'lista-tarefas',
    title: 'Lista de Tarefas',
    description: {
      pt: 'Gerenciador de tarefas completo para organização do dia a dia. Integração com MongoDB, gerenciamento de estado com Redux e interface moderna.',
      en: 'Complete task manager for daily organization. MongoDB integration, Redux state management and modern interface.',
      es: 'Gestor de tareas completo para organización diaria. Integración con MongoDB, gestión de estado con Redux e interfaz moderna.',
    },
    image: '/img/ToDo.png',
    technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'CSS'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/guicalheira/ListaDeFazeresApp',
    featured: true,
    year: '2024',
    category: 'Web App',
  },
  {
    id: 'projeto-cadastro',
    title: 'Sistema de Cadastro',
    description: {
      pt: 'Sistema de cadastro de usuários com autenticação e persistência de dados no Firebase. Interface responsiva e validação em tempo real.',
      en: 'User registration system with authentication and Firebase data persistence. Responsive interface and real-time validation.',
      es: 'Sistema de registro de usuarios con autenticación y persistencia de datos en Firebase. Interfaz responsiva y validación en tiempo real.',
    },
    image: '/img/Cadastro.png',
    technologies: ['React', 'TypeScript', 'Firebase', 'HTML', 'CSS'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/guicalheira/Projeto-Cadastro',
    featured: true,
    year: '2024',
    category: 'Full Stack',
  },
  {
    id: 'calculadora-react',
    title: 'Calculadora React',
    description: {
      pt: 'Calculadora funcional desenvolvida em React com interface clean e suporte a operações matemáticas básicas e avançadas.',
      en: 'Functional calculator built with React featuring clean interface and support for basic and advanced math operations.',
      es: 'Calculadora funcional desarrollada en React con interfaz limpia y soporte para operaciones matemáticas básicas y avanzadas.',
    },
    image: '/img/calculadora.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/guicalheira/CalculadoraReact',
    featured: true,
    year: '2023',
    category: 'Utility',
  },
  {
    id: 'my-money',
    title: 'MyMoney',
    description: {
      pt: 'Aplicação de controle financeiro pessoal com dashboard interativo, gráficos de gastos e categorização de transações.',
      en: 'Personal finance control application with interactive dashboard, spending charts and transaction categorization.',
      es: 'Aplicación de control financiero personal con panel interactivo, gráficos de gastos y categorización de transacciones.',
    },
    image: '/img/MyMoney.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/guicalheira',
    featured: true,
    year: '2024',
    category: 'Web App',
  },
]

// Projetos em destaque (para a home)
export const featuredProjects = projects.filter(p => p.featured)
