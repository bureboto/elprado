export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 md:px-20 md:py-3">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 40 40" className="h-10 w-10 text-azul" aria-hidden="true">
          <circle cx="12" cy="12" r="6" fill="currentColor" />
          <circle cx="28" cy="12" r="6" fill="currentColor" opacity="0.6" />
          <circle cx="12" cy="28" r="6" fill="currentColor" opacity="0.6" />
          <circle cx="28" cy="28" r="6" fill="currentColor" opacity="0.3" />
        </svg>
        <span className="font-poppins text-xl font-bold text-black">El Prado</span>
      </div>
      <a
        href="#contacto"
        className="rounded-lg bg-azul px-4 py-2.5 font-inter text-[15px] font-bold text-white shadow-sm transition hover:brightness-110"
      >
        Quiero ser distribuidor
      </a>
    </header>
  )
}
