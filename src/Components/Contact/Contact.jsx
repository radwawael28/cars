import React from 'react'
import img from '../../assets/imges/landing-page/andriod.png';
import img1 from '../../assets/imges/landing-page/ios.png';
import img2 from '../../assets/imges/landing-page/sec-7/iPhone-14.png';
export default function Contact() {
  return (
    <section className='d-flex justify-content-around mt-5'>

    
<div  class="mx-5">
    <h1  >Download Rentcars App for <span   class="text-primary">FREE </span>
    </h1><small  >For faster, easier booking and exclusive deals.</small>
    <div   class="my-3 my-3 col-md-7 d-flex justify-content-center">
        <img   src={img} class="me-2"/>
        <img   src={img1}/>
        </div>
        <form   novalidate="" class="d-flex flex-column col-md-7 ng-untouched ng-pristine ng-valid">
<input   type="text" placeholder="Name" formcontrolname="name" class="contact-us-input my-1 px-3 ng-untouched "/>
<input   type="text" placeholder="Phone Number" formcontrolname="phone" class="contact-us-input my-1 px-3 "/>
<input   type="text" placeholder="Email" formcontrolname="email" class="contact-us-input my-1 px-3 "/>
<div   class="d-flex justify-content-center my-2">
    <button   type="submit" id="button-addon2" class="btn bold btn-primary px-5"> Send </button>
    </div>
    
    </form>
    </div>
    <div  class="d-flex justify-content-center align-items-end">
    <img  src={img2}  alt="" className="mobile-img"/>
    </div>

    </section>
  )
}
