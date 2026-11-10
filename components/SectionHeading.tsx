import { Reveal } from './Reveal'

// Cabeçalho de seção: régua fina, índice em mono e título em serifa.
// O mesmo padrão em todas as seções cria ritmo e orientação.
export function SectionHeading({
  index,
  label,
  title,
  id,
  children,
}: {
  index: string
  label: string
  title: React.ReactNode
  id: string
  children?: React.ReactNode
}) {
  return (
    <header className="grid grid-cols-12 gap-x-6 border-t border-line pt-4">
      <p className="label col-span-12 flex gap-4 md:col-span-3">
        <span className="text-signal">{index}</span>
        <span>{label}</span>
      </p>
      <Reveal className="col-span-12 mt-10 md:col-span-9 md:mt-16">
        <h2 id={id} className="max-w-[18ch] font-serif text-h2">
          {title}
        </h2>
        {children}
      </Reveal>
    </header>
  )
}
