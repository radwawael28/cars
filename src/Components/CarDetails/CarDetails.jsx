import React from 'react'
import img3 from "../../assets/imges/landing-page/car3.png"
import img4 from "../../assets/imges/card/star.png"
import img from '../../assets/imges/landing-page/sec-5/Audi 1.png';
import img5 from "../../assets/imges/card/user.png"
import img6 from "../../assets/imges/card/frame.png"
import img7 from "../../assets/imges/card/d8wxke_2_.png"
import img8 from "../../assets/imges/card/doors.png"
export default function () {
  

  return (
    <>

<section className='choose details d-flex my-5 py-5 '>
        <div className="img-car w-50 d-flex align-items-center">
            <img src={img} className='choose-img' alt="" />
        </div>
  <div className='max-width'>
           
<div className="main-header  m-3 ">
        <button className='main-btn rounded-2' >WHY CHOOSE US</button>
        <h4 className=' my-3'>We offer the best experience with our rental deals</h4>
    </div>

<div className="d-flex flex-column">
<p className='m-2 '> <img className='me-1' src={img7} alt="" />Air Conditioning</p> 
<p className='m-2'> <img className='me-1' src={img5} alt="" />2 passangers</p> 
<p className='m-2'> <img className='me-1' src={img6} alt="" />Auto</p>
<p className='m-2'> <img className='me-1' src={img8} alt="" />2 Doors</p>
</div>
         
             
        
       
       </div>
        </section>  
    </>
 
  )
}
