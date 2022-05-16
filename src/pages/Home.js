import React from 'react'
import AboutSection from '../components/AboutSection/AboutSection'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <>
        <Hero />
        <AboutSection/>
        <Services />
        <Contact />
        <Footer/>
    </>
  )
}

export default Home