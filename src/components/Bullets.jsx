import Placeholder from './Placeholder'

const clients = [1, 2, 3, 4, 5, 6]

export default function Bullets() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-16 md:px-20">
      <h2 className="font-inter text-2xl font-bold text-[#111]">Nuestros clientes</h2>
      <div className="flex w-full max-w-5xl flex-wrap items-center justify-between gap-6">
        {clients.map((n) => (
          <Placeholder key={n} label={`Cliente ${n}`} className="h-16 w-32 rounded" />
        ))}
      </div>
    </section>
  )
}
