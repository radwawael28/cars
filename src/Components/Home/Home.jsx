import React from 'react'
import Work from '../Work/Work'
import Choose from '../Choose/Choose'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'
import Cars from '../Cars/Cars'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function () {
  return (
    <div>
    <Navbar/>
    <Cars/>
    <Work/>
    <Choose/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}
