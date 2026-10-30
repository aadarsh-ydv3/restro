import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Section/HeroSection'
import About from './Section/About'
import Stats from './Section/Stats'
import Dishes from './Section/Dishes'
import Features from './Section/Features'
import BookingProcess from './Section/BookingProcess'
import Timing from './Section/Timing'
import TestimonialSection from './Section/TestimonialSection'
import FAQs from './Section/FAQs'
import Cta from './Section/Cta'
import Footer from './Components/Footer'
import LenisScroll from './Components/LenisScroll'

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSection />
      <FAQs />
      <Cta />
      <Footer />
    </>
  )
}

export default App