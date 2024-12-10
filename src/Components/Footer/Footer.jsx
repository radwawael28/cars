import React from 'react'
import img1 from '../../assets/imges/footer/logo-footer.png'
import img2 from '../../assets/imges/footer/location.png'
import img3 from '../../assets/imges/footer/call.png'
import img4 from '../../assets/imges/footer/sms.png'
import img5 from '../../assets/imges/footer/facebook.png'
import img6 from '../../assets/imges/footer/instagram.png'
import img7 from '../../assets/imges/footer/youtube.png'
export default function Footer() {
  return (
    <section   className=" footer w-100 py-5 ">
      <section   className="text-white container">
        <section   className="sec-8 col-md-12 d-flex flex-wrap mx-2 justify-content-between">
          <div   className="col-md-3 me-3 mb-5">
            <img   src={img1} className="mb-4"/>
            <div   className="d-flex">
              <img   src={img2} className="align-self-center me-2"/>
              <div   className="d-flex flex-column">
                <small  >25566 Hc 1, Glenallen,</small>
                <small  > Alaska, 99588, USA</small>
                </div></div><div   className="d-flex my-2">
                  <img   src={img3} className="me-2"/>
                  <small  >+603 4784 273 12</small>
                  </div>
                  <div   className="d-flex">
                    <img   src={img4} className="me-2"/>
                    <small  >rentcars@gmail.com</small></div></div>
                    <div   className="col-md-2 d-flex flex-column me-3 mb-5">
                      <p   className="mb-4">Our Products</p>
                      <small  >Career</small><small  >Car</small>
                      <small  >Packages</small><small  >Features</small>
                      <small  >Priceline</small></div>
                      <div   className="col-md-2 d-flex flex-column me-3 mb-5">
                        <p   className="mb-4">Resources</p>
                        <small  >Download</small>
                        <small  >Help Centre</small>
                        <small  >Guides</small>
                      <small  >Partner Network</small>
                      <small  >Cruises</small>
                      <small  >Developer</small></div>
                      <div   className="col-md-2 d-flex flex-column me-3 mb-5">
                        <p   className="mb-4">About Rentcars</p>
                        <small  >Why choose us</small>
                        <small  >Our Story</small>
                        <small  >Investor Relations</small>
                        <small  >Press Center</small>
                        <small  >Advertise</small></div>
                        <div   className="col-md-2 d-flex flex-column mb-5">
                          <p   className="mb-4">Follow Us</p>
                          <div  >
                            <img   src={img5} alt="facebook"/>
                            <img   src={img6} alt="instagram" className="mx-3"/>
                            <img   src={img7} alt="youtube"/>
                            </div>
                            </div></section>
                            <hr/>
                            <section  >
                              <small   className="text-md-center">Copyright 2023 ・ Rentcars, All Rights Reserved</small>
                              </section>
                              </section>
                              </section>
  )
}
