import './App.css'
import Navbar from './Components/navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Componey from './Components/Componey-logo/Componay.jsx'
import PurposeSection from './Components/purposeSection/PurposeSection.jsx'
import Features from './Components/Features/Features.jsx'
import Schedule from './Components/schedule/Schedule.jsx'
import Monitor from './Components/Moniter/Monitor.jsx'
import Services from './Components/services/Services.jsx'
import Testimonial from './Components/testominal/Testimonial.jsx'
import NewsletterSection from './Components/newslatter/NewsletterSection.jsx'
import Footer from './Components/footer/Footer.jsx'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden '>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10' ></div>
      <div>
       <Navbar />
      <Hero />
      <Componey />
      <PurposeSection />
      <Features />
      <Schedule />
      <Monitor />
      <Services />
      <Testimonial />
      <NewsletterSection />
      <Footer />
      </div>
      
    </main>
  )
}

export default App
