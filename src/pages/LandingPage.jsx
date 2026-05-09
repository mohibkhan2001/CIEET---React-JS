import CurrentStats from "../components/Landing Page/CurrentStats"
import Features from "../components/Landing Page/Features"
import Footer from "../components/Landing Page/Footer"
import Header from "../components/Landing Page/Header"
import Hero from "../components/Landing Page/Hero"
import WhyChooseCIEET from "../components/Landing Page/WhyChooseCIEET"

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
        <Header/>
        <Hero/>
        <CurrentStats/>
        <Features/>
        <WhyChooseCIEET/>
        <Footer/>
    </div>
  )
}

export default LandingPage