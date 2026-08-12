import Header from './components/Header'
import Hero from './components/Hero'
import Bullets from './components/Bullets'
import Servicios from './components/Servicios'
import Videos from './components/Videos'
import CarouselProductos from './components/CarouselProductos'
import Testimonios from './components/Testimonios'
import Forms from './components/Forms'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <Bullets />
      <Servicios />
      <Videos />
      <CarouselProductos />
      <Testimonios />
      <Forms />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
