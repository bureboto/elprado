export default function Cta() {
  return (
    <section className="flex flex-col items-center gap-4 bg-gris px-6 py-16 md:px-20">
      <span className="block size-16 rounded-full bg-azul" aria-hidden="true" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="max-w-[483px] text-center font-inter text-2xl font-bold text-[#111] md:text-[32px]">
          Únete a nuestra red de distribuidores
        </h2>
        <p className="text-center font-inter text-xs text-[#111]">
          (Aplica en despachadores y artículos de limpieza)
        </p>
      </div>
      <a
        href="#contacto"
        className="rounded-lg bg-azul px-4 py-2.5 font-inter text-[15px] font-bold text-white transition hover:brightness-110"
      >
        Quiero ser distribuidor
      </a>
    </section>
  )
}
