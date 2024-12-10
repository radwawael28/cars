import React from 'react'
import navimg from '../../assets/imges/nav/logo.png';
import img from '../../assets/imges/landing-page/car 2 1.png'
export default function Navbar() {
  return (

<section className="home container-fluid mb-5">
      <div className="div">
      <nav className="navbar container navbar-expand-lg navbar-light mb-5 p-4  ">
    <div className="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src={navimg}  alt="" />
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

        <ul className="navbar-nav d-flex justify-content-around w-100">
          <div className="btns">
          <button  type="button" class="btn bold">Become a renter</button>
          <button  type="button" class="btn bold">Rental deals</button>
          <button  type="button" class="btn bold">How it work</button>
          <button  type="button" class="btn bold">Why choose us</button>

         
          </div>
          <div  >
          <button  type="button" class="btn bold">Sign in</button>
        <button type="button" class="btn bold btn-primary">Sing up</button>
        </div>
    
        </ul>
       
        </div>
    </div>
  
  </nav>
<div className=" head d-flex justify-content-between align-items-center ">
    <div className=" texthead">
        <h1>Find, book and rent a car <span className='text-primary'>Easily</span> </h1>
        <p> Get a car wherever and whenever you need it with your IOS and Android device. </p>
    </div>
    <img className='img-fluid ' src={img} alt="" />
        </div>
      </div>


    </section>
  
  )
}
