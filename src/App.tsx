import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Process />
        <Banner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
