# Portfólio — Guilherme Calheira

Portfólio pessoal de desenvolvedor full stack, construído com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

![PsiMais](./public/img/projects/psimais.jpg)

## Direção de arte

Linguagem editorial em vez de “landing page de template”:

- **Papel e tinta** — fundo quente (`#F1EEE7`), texto quase preto e um único acento vermelhão, usado só em marcadores, estados e ênfases. Tema escuro com a mesma lógica.
- **Tipografia** — *Instrument Serif* para títulos (itálico para ênfase), *Inter Tight* para texto e *JetBrains Mono* para metadados e índices.
- **Grid de 12 colunas** com réguas finas e numeração (01–04) orientando a leitura; sem cards arredondados, sem gradientes, sem glassmorphism.
- **Movimento discreto** — entrada do nome por máscara, revelações curtas ao rolar e prévia de projeto que segue o cursor. Tudo respeita “reduzir movimento” do sistema.

## Seções

1. **Hero** — nome, atuação, hora local e chamadas para os trabalhos e o currículo.
2. **Trabalhos** — estudo de caso do **PsiMais** (SaaS em produção) + índice dos demais projetos.
3. **Sobre** — apresentação, retrato e fatos rápidos.
4. **Stack** — tecnologias organizadas pelas camadas de um produto (front-end → back-end → dados), mais linguagens e fluxo de trabalho.
5. **Contato** — e-mail com botão de copiar, GitHub, LinkedIn e currículo.

Disponível em inglês (padrão), português e espanhol. O HTML gerado e os metadados (SEO, prévias de link) ficam em inglês; na primeira visita, navegadores em português ou espanhol recebem o próprio idioma automaticamente. A escolha manual no seletor PT/EN/ES fica salva e tem prioridade.

## Estrutura

```
app/
  layout.tsx       # Fontes, metadados (SEO) e script de tema/idioma
  providers.tsx    # Tema, i18n e configuração do Framer Motion
  page.tsx         # Composição das seções
  globals.css      # Tokens de cor e componentes base (botões, rótulos, links)
components/        # Header, Hero, Work, About, Stack, Contact + Reveal/SectionHeading
lib/
  data/projects.ts # Projetos (PsiMais em destaque + índice)
  data/skills.ts   # Camadas da stack
  i18n/            # Traduções e contexto de idioma
  theme/           # Contexto de tema claro/escuro
  site.ts          # E-mail, redes e link do currículo
public/img/        # Imagens dos projetos, retrato e currículo (PDF)
```

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Como editar

- **Projetos:** `lib/data/projects.ts` — `featuredProject` é o estudo de caso; `projects` alimenta o índice.
- **Textos:** `lib/i18n/locales.ts` (pt, en, es).
- **Contatos e currículo:** `lib/site.ts`.
- **Cores:** variáveis em `app/globals.css` (`:root` e `.dark`).
- **Escala tipográfica:** `tailwind.config.ts`.

## Licença

MIT © Guilherme Calheira
