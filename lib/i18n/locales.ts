// ============================================
// Sistema de Internacionalização (i18n)
// Suporte para: Português, English, Español
// ============================================

export const locales = ['pt', 'en', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'pt'

// Labels para o seletor de idioma
export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
}

// Bandeiras (emoji)
export const localeFlags: Record<Locale, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸',
}

// ============================================
// Traduções
// ============================================

export const translations = {
  pt: {
    // Navegação
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    // Hero Section
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Guilherme Calheira',
      role: 'Desenvolvedor',
      roleHighlight: 'Full Stack',
      description: 'Transformo ideias em experiências digitais elegantes e performáticas. Especializado em criar interfaces modernas com atenção obsessiva aos detalhes.',
      cta: 'Ver Projetos',
      ctaSecondary: 'Entrar em Contato',
      scrollHint: 'Role para explorar',
    },
    // About Section
    about: {
      title: 'Sobre Mim',
      subtitle: 'Desenvolvedor apaixonado por criar experiências únicas',
      description: 'Bacharel em Sistemas de Informação pelo IFBA (Vitória da Conquista). Com experiência sólida em JavaScript, Python, React, Next.js, Vue.js e Node.js. Busco sempre criar código limpo, escalável e interfaces que sejam suaves, modernas e com propósito.',
      skills: 'Habilidades',
      experience: 'anos de experiência',
      projects: 'projetos entregues',
      clients: 'clientes satisfeitos',
    },
    // Projects Section
    projects: {
      title: 'Projetos',
      subtitle: 'Trabalhos selecionados',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      technologies: 'Tecnologias',
      viewAll: 'Ver todos no GitHub',
    },
    // Contact Section
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Tem um projeto em mente? Adoraria ouvir sobre ele.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Conte-me sobre seu projeto...',
    },
    // Footer
    footer: {
      rights: 'Todos os direitos reservados',
      madeWith: 'Feito com',
      and: 'e',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Guilherme Calheira',
      role: 'Full Stack',
      roleHighlight: 'Developer',
      description: 'I transform ideas into elegant and performant digital experiences. Specialized in creating modern interfaces with obsessive attention to detail.',
      cta: 'View Projects',
      ctaSecondary: 'Get in Touch',
      scrollHint: 'Scroll to explore',
    },
    about: {
      title: 'About Me',
      subtitle: 'Developer passionate about creating unique experiences',
      description: "Bachelor's degree in Information Systems from IFBA (Vitória da Conquista). Solid experience with JavaScript, Python, React, Next.js, Vue.js and Node.js. I always strive to create clean, scalable code and interfaces that are smooth, modern and purposeful.",
      skills: 'Skills',
      experience: 'years of experience',
      projects: 'delivered projects',
      clients: 'satisfied clients',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected works',
      viewProject: 'View Project',
      viewCode: 'View Code',
      technologies: 'Technologies',
      viewAll: 'View all on GitHub',
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Have a project in mind? I would love to hear about it.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
      and: 'and',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Guilherme Calheira',
      role: 'Desarrollador',
      roleHighlight: 'Full Stack',
      description: 'Transformo ideas en experiencias digitales elegantes y eficientes. Especializado en crear interfaces modernas con atención obsesiva a los detalles.',
      cta: 'Ver Proyectos',
      ctaSecondary: 'Contáctame',
      scrollHint: 'Desplázate para explorar',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Desarrollador apasionado por crear experiencias únicas',
      description: 'Licenciado en Sistemas de Información por el IFBA (Vitória da Conquista). Experiencia sólida con JavaScript, Python, React, Next.js, Vue.js y Node.js. Siempre busco crear código limpio, escalable e interfaces suaves, modernas y con propósito.',
      skills: 'Habilidades',
      experience: 'años de experiencia',
      projects: 'proyectos entregados',
      clients: 'clientes satisfechos',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Trabajos seleccionados',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      technologies: 'Tecnologías',
      viewAll: 'Ver todos en GitHub',
    },
    contact: {
      title: 'Hablemos',
      subtitle: '¿Tienes un proyecto en mente? Me encantaría saber más.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar. Inténtalo de nuevo.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@correo.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      and: 'y',
    },
  },
} as const

export type Translations = typeof translations.pt
