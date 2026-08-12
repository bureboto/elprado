import { PhoneIcon, MailIcon, PinIcon, DocIcon } from './icons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-azul px-6 py-10 md:px-20">
      <div className="relative z-10 flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 40 40" className="h-10 w-10 text-white" aria-hidden="true">
            <circle cx="12" cy="12" r="6" fill="currentColor" />
            <circle cx="28" cy="12" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="12" cy="28" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="28" cy="28" r="6" fill="currentColor" opacity="0.3" />
          </svg>
          <span className="font-poppins text-xl font-bold text-white">El Prado</span>
        </div>

        <div className="flex flex-col flex-wrap items-start justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <span className="font-inter text-xs text-white">5591530001</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon />
              <span className="font-inter text-xs text-white">contacto@plasticosprado.com.mx</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <PinIcon />
              <span className="font-inter text-xs text-white">Maria #149 Benito Juarez Distrito Federal</span>
            </div>
            <a href="#" className="flex items-center gap-2">
              <PinIcon />
              <span className="font-inter text-xs text-white">Aviso de Privacidad</span>
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-2.5 font-inter text-[15px] font-bold text-azul"
          >
            Catálogo en PDF
            <DocIcon className="bg-azul/10" />
          </a>
        </div>

        <p className="font-inter text-[9px] text-white">2026 El Prado. Todos los derechos reservados.</p>
      </div>

      <svg
        className="pointer-events-none absolute -right-10 -top-10 z-0 h-[140%] w-[60%] text-white/10"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="60" fill="currentColor" />
        <circle cx="150" cy="130" r="90" fill="currentColor" opacity="0.6" />
      </svg>
    </footer>
  )
}
