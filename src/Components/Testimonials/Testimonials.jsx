import React from 'react'
import img from '../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png';
import img1 from '../../assets/imges/landing-page/sec-6/girl.png'
import img2 from '../../assets/imges/card/star.png'
import Slider from "react-slick";
export default function () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000
      };
  return (
    <div>
      <section className='test test-sec'>
        <div>
        <div className="main-header d-flex justify-content-center m-3">
        <button className='main-btn rounded-2' > TEST IMONIALS </button>
    </div>
    <h1 className='text-center m-4'>Most popular cars rental deals</h1>
<div className="  justify-content-around  ">
<Slider {...settings}>
      <div>
      <div className="card">
    <div className="row">
        <div className="col-md-6">
            <img className='img-fluid rounded-start w-100' src={img} alt="" />
        </div>
        <div className="col-md-6">
            <div className="card-body">
               <h3 className='card-title'>5.5 <small>stars</small></h3>
               <div className="stars d-flex">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
               </div>
               <p className='prag-text'>
               “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” 
               </p>
               <div className="card-text">
                <p  className="bold mb-0">Charlie Johnson</p>
               <small  className="text-muted">Last updated 3 mins ago</small></div>
            </div>
        </div>
    </div>
</div>
      </div>
      <div>
      <div className="card">
    <div className="row">
        <div className="col-md-6">
            <img className='img-fluid rounded-start w-100'  src={img1} alt="" />
        </div>
        <div className="col-md-6">
            <div className="card-body">
               <h3 className='card-title'>5.5 <small>stars</small> </h3>
               
               <div className="stars d-flex">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
                <img src={img2} alt="" />
               </div>
               <p className='prag-text'>
               “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” 
               </p>
               <div className="card-text">
                <p  className="bold mb-0">Charlie Johnson</p>
               <small  className="text-muted">Last updated 3 mins ago</small></div>
            </div>
        </div>
    </div>
</div>
      </div>
      
    </Slider>


</div>
        </div>
   
      </section>
    </div>
  )
}
