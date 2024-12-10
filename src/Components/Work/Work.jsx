import React from 'react'
import img1 from '../../assets/imges/landing-page/location.png'
import img2 from '../../assets/imges/landing-page/car-icon.png'
import img3 from '../../assets/imges/landing-page/calender.png'
import img4 from '../../assets/imges/landing-page/jaguar.png'
import img5 from '../../assets/imges/landing-page/nissan.png'
import img6 from '../../assets/imges/landing-page/volvo.png'
import img7 from '../../assets/imges/landing-page/audi.png'
import Slider from "react-slick";
export default function Work() {
     var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:200
  };
  return (
    <div>
    <div className="main-header d-flex justify-content-center m-3">
        <button className='main-btn rounded-2' >HOW IT WORK</button>
    </div>
    <h1 className='text-center m-4'>Most popular cars rental deals</h1>
    <div className="d-flex flex-wrap  justify-content-center ">
        <div className="card-sec flex-column d-flex mx-4 my-2 justify-content-center align-items-center px-4">
            <div className="img-card">
            <img src={img1}   alt="" />
            </div>
           
            <h5 className='my-2'>Choose location</h5>
            <small className='text-muted'>Choose your and find your best car</small>
        </div>
        <div className="card-sec flex-column d-flex mx-4 my-2 align-items-center justify-content-center px-4">
            <div className="img-card">
            <img src={img2}  alt="" />
            </div>
           
            <h5 className='my-2'>Choose location</h5>
            <small className='text-muted'>Choose your and find your best car</small>
        </div>
        <div className="card-sec flex-column d-flex mx-4 my-2 align-items-center justify-content-center px-4">
            <div className="img-card">
            <img src={img3}  alt="" />
            </div>
           
            <h5 className='my-2'> Choose location</h5>
            <small className='text-muted'>Choose your and find your best car</small>
        </div>
    </div>
    <div className="mt-4">
    <Slider {...settings}>
      
      <div>
      <img src={img4} alt="" />
      </div>
      <div>
      <img src={img5} alt="" />
      </div>
      <div>
      <img src={img6} alt="" />
      </div>
      <div>
      <img src={img7} alt="" />
      </div>
      
     
     
    </Slider>
    </div>
   

    </div>
  )
}
