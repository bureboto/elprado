import Placeholder from './Placeholder'
import { PlayIcon } from './icons'

const items = [1, 2]

export default function Videos() {
  return (
    <section className="flex flex-col gap-10 bg-white px-6 py-16 md:flex-row md:px-20">
      {items.map((n) => (
        <div key={n} className="flex flex-1 flex-col gap-2.5">
          <div className="relative h-[220px] w-full overflow-hidden rounded-lg md:h-[286px]">
            <Placeholder label="Miniatura de video" className="absolute inset-0 border-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>
          <p className="font-inter text-2xl font-bold text-[#111] md:max-w-[330px]">
            Catálogo despachadores, dispensadores y articulos de limpieza
          </p>
        </div>
      ))}
    </section>
  )
}
