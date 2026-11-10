import { Header, Hero, Work, About, Stack, Contact } from '@/components'

// Ordem narrativa: quem é → o que construiu → como pensa → com o que trabalha → como falar
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
    </>
  )
}
