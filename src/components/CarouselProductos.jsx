import Placeholder from './Placeholder'

const products = [
  'Bolsa negra',
  'Film strech',
  'Despachador acero',
  'Bolsa negra',
  'Film strech',
  'Despachador acero',
]

export default function CarouselProductos() {
  return (
    <section className="flex flex-col items-center gap-10 px-6 py-16 md:px-20">
      <div className="flex w-full max-w-6xl items-center gap-4 overflow-x-auto pb-2 md:justify-between">
        {products.map((p, i) => (
          <Placeholder
            key={`${p}-${i}`}
            label={p}
            className="h-[220px] w-[170px] shrink-0 rounded-2xl md:h-[335px] md:w-[210px]"
          />
        ))}
      </div>
      <a
        href="#servicios"
        className="rounded-lg bg-azul px-4 py-2.5 font-inter text-[15px] font-bold text-white transition hover:brightness-110"
      >
        Visitar tienda
      </a>
    </section>
  )
}
