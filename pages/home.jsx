import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '@/components/Footer'

export default function Landing() {
  return (
    <div>
       <Navbar/>
       <div className="flex justify-center">
       <img
          className="acne-splash w-[75%] pb-40 z-30 fixed top-[50%] left-[50%] mix-blend-luminosity"
          src="/assets/logos/denim-logo.png"
        />
      </div>
       <Header/>
       <Footer/>
    </div>
  )
}
