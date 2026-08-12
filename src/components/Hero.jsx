import Placeholder from './Placeholder'
import { CheckIcon } from './icons'

const bullets = [
  'Atención personalizada',
  'Entregas puntuales',
  'Productos confiables',
]

export default function Hero() {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-stretch">
      <div className="flex flex-1 flex-col items-start gap-6 px-6 py-16 md:py-20 md:pl-20 md:pr-0">
        <div className="flex w-full flex-col items-start gap-4 md:pr-20">
          <h1 className="font-poppins text-[32px] font-bold leading-tight text-black md:text-[40px]">
            Soluciones de empaque,
            <br />
            higiene y limpieza para tu empresa
          </h1>
          <p className="font-poppins text-base font-light leading-snug text-black">
            Encuentra un extenso surtido de bolsas,
            <br className="hidden md:block" />
            {' '}productos para empaque y embalaje, despachadores y mucho más.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckIcon className="size-6 shrink-0" />
                <span className="font-poppins text-xs text-black">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <a
          href="#servicios"
          className="rounded-lg bg-azul px-4 py-2.5 font-poppins text-[15px] font-bold text-white shadow-sm transition hover:brightness-110"
        >
          Visitar tienda
        </a>
      </div>
      <div className="relative min-h-[360px] w-full shrink-0 overflow-hidden bg-gris md:min-h-[480px] md:w-[560px] md:rounded-l-3xl">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-6 md:p-10">
          <Placeholder label="Bolsa negra" className="col-span-2 rounded-2xl" />
          <Placeholder label="Cinta impresa" className="rounded-2xl" />
          <Placeholder label="Dispensador acero" className="rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
