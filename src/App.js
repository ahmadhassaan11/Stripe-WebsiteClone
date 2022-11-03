import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Submenu from './components/Submenu'
import Sidebar from './components/Sidebar'
import Navbar2 from './components/Navbar2'
import Review from './components/Review'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Working from './components/Working'
import Companies from './components/Companies'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Card from './components/Card'
function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Sidebar />
      <Hero />
      <Submenu />
      {/* <Card/> */}
      <Review />
      <Working />
      <Companies />
      <Process />
      <Pricing />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App
