# Portfolio - Guilherme

Portfolio pessoal moderno construído com **Next.js 14**, **Tailwind CSS**, **Framer Motion** e **GSAP**.

![Portfolio Preview](./public/img/perfil.png)

## ✨ Features

- **Dark Mode Elegante** - Paleta sofisticada com tons escuros e acentos dourados
- **Multilíngue** - Suporte para Português, English e Español
- **Animações Fluidas** - Framer Motion para microinterações + GSAP para scroll animations
- **Totalmente Responsivo** - Design mobile-first
- **Performance Otimizada** - Next.js App Router com otimizações automáticas
- **SEO Ready** - Metadata otimizada para buscadores

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [React 18](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animações declarativas
- [GSAP](https://greensock.com/gsap/) - Animações baseadas em scroll

## 📁 Estrutura

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raiz com providers
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Navigation/        # Header com menu
│   ├── Hero/              # Seção inicial
│   ├── About/             # Sobre + Skills
│   ├── Projects/          # Grid de projetos
│   ├── Contact/           # Formulário
│   └── Footer/            # Rodapé
├── lib/                   # Utilitários
│   ├── i18n/              # Sistema de tradução
│   ├── data/              # Dados (projetos, skills)
│   └── utils.ts           # Helpers
└── public/                # Assets estáticos
    └── img/               # Imagens dos projetos
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 🎨 Customização

### Cores

Edite `tailwind.config.ts` para alterar a paleta:

```ts
colors: {
  background: { DEFAULT: '#0a0a0b', ... },
  foreground: { DEFAULT: '#fafafa', ... },
  accent: { DEFAULT: '#d4a853', ... },  // Cor principal
}
```

### Projetos

Adicione/edite projetos em `lib/data/projects.ts`:

```ts
{
  id: 'meu-projeto',
  title: 'Nome do Projeto',
  description: { pt: '...', en: '...', es: '...' },
  image: '/img/projeto.png',
  technologies: ['React', 'Node.js'],
  liveUrl: 'https://...',
  repoUrl: 'https://github.com/...',
}
```

### Traduções

Edite `lib/i18n/locales.ts` para alterar textos em qualquer idioma.

## 📱 Screenshots

O site inclui:

1. **Hero** - Animação de entrada com texto letra por letra
2. **About** - Cards de skills com animações GSAP no scroll
3. **Projects** - Grid com efeito 3D no hover
4. **Contact** - Form com labels flutuantes animados

## 📄 Licença

MIT © Guilherme
