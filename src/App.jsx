// all components here
import Header from './components/Header'
import Hero from './components/heroarea/Hero'
import Features from './components/features/Features'
import Properties from './components/property/Properties'
import PropertySection from './components/property/PropertySection'
import About from './components/aboutus/About'
import Cta from './components/cta/Cta'
import Faq from './components/faqsec/Faq'
import Team from './components/client/Team'
import Contact from './components/contactus/Contact'
import Footer from './components/footerarea/Footer'

// all components function here
function App() {  
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Properties />
      <PropertySection />
      <About />
      <Cta />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
export default App;
