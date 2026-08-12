import Placeholder from './Placeholder'
import { StarsIcon } from './icons'

const testimonials = [
  { quote: 'Excelente trato y atención', author: 'Alejandro García' },
  { quote: 'Excelente trato y atención', author: 'Alejandro García' },
  { quote: 'Excelente trato y atención', author: 'Alejandro García' },
]

export default function Testimonios() {
  return (
    <section className="flex flex-col gap-6 px-6 py-16 md:px-20">
      <h2 className="text-center font-inter text-[32px] font-bold text-[#111]">Testimonios</h2>
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-1 flex-col items-center">
            <Placeholder label="Foto de cliente" className="h-[200px] w-full rounded-t-lg" />
            <div className="flex w-full flex-col items-center gap-6 pt-6">
              <StarsIcon />
              <div className="flex flex-col items-center gap-2 text-center font-inter text-base text-[#111]">
                <p className="font-bold">&ldquo;{t.quote}&rdquo;</p>
                <p>– {t.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
