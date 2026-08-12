import Placeholder from './Placeholder'
import { ArrowIcon } from './icons'

const cards = [
  {
    title: 'Empaque y embalaje',
    copy: 'Bolsas, film strech, cinta adhesiva y más',
    span: true,
  },
  {
    title: 'Papel higiénico y dispensadores',
    copy: 'Productos institucionales para sanitarios y oficinas',
  },
  {
    title: 'Limpieza\ny sanitización',
    copy: 'Jabón, Alcohol, toallas y soluciones integrales',
  },
]

const highlights = [
  'Entregas rápidas en CDMX\ny zona metropolitana',
  'Stock disponible\ntodo el año',
  'Atención directa\ncon asesores',
  'Facturación\ninmediata',
]

export default function Servicios() {
  return (
    <section id="servicios" className="mx-4 overflow-hidden rounded-[40px] bg-gris md:mx-20">
      <div className="flex flex-col gap-4 px-6 pt-16 md:px-20">
        <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-azul md:h-[300px]">
          <Placeholder label="Fotografía: empaque y embalaje" tone="dark" className="absolute inset-0 border-0" />
          <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-6 text-white md:p-10">
            <p className="font-inter text-2xl font-bold md:text-[32px]">{cards[0].title}</p>
            <p className="font-inter text-xs">{cards[0].copy}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {cards.slice(1).map((c) => (
            <div key={c.title} className="relative h-[220px] flex-1 overflow-hidden rounded-xl bg-azul md:h-[300px]">
              <Placeholder label="Fotografía de producto" tone="dark" className="absolute inset-0 border-0" />
              <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-6 text-white md:p-10">
                <p className="whitespace-pre-line font-inter text-2xl font-bold md:text-[32px]">{c.title}</p>
                <p className="font-inter text-xs">{c.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-20">
        {highlights.map((h) => (
          <div key={h} className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <span className="block size-20 rounded-full bg-azul" aria-hidden="true" />
            <p className="whitespace-pre-line font-inter text-base text-[#111]">{h}</p>
          </div>
        ))}
      </div>

      <div className="px-6 pb-16 md:px-20">
        <div className="flex flex-col overflow-hidden rounded-lg bg-white md:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-16 md:px-10">
            <p className="font-inter text-2xl font-bold text-[#111] md:max-w-[480px] md:text-[32px]">
              Descarga nuestro catálogo completo y explora los productos que tenemos para tí
            </p>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-azul px-4 py-2.5 font-inter text-[15px] font-bold text-white transition hover:brightness-110"
            >
              Catálogo en PDF
              <ArrowIcon />
            </a>
          </div>
          <div className="relative w-full shrink-0 bg-azul p-10 md:w-[475px]">
            <div className="mx-auto max-w-[358px] overflow-hidden rounded-lg bg-white shadow-2xl">
              <div className="bg-azul px-5 py-4 text-white">
                <p className="font-poppins text-base font-bold leading-tight">
                  Catalogo
                  <br />
                  de productos
                </p>
              </div>
              <ul className="divide-y divide-gris px-5 py-3 text-[11px] text-[#111]">
                {[
                  'Despachadores',
                  'Jaboneras',
                  'Línea acero inoxidable',
                  'Herramientas de limpieza',
                  'Gel antibacterial y sanitizantes',
                ].map((item) => (
                  <li key={item} className="flex items-center justify-between py-2 font-poppins font-semibold">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
