import Header from '@/components/header'
import Hero from '@/components/hero'
import Products from '@/components/products'
import Services from '@/components/services'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <section id="products">
          <Products />
        </section>
        <section id="services">
          <Services />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
