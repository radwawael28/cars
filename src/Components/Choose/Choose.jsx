import React from 'react'
import img from '../../assets/imges/landing-page/sec-5/Audi 1.png';
import img1 from '../../assets/imges/landing-page/sec-5/user.png';
import img3 from '../../assets/imges/landing-page/sec-5/message.png';
import img4 from '../../assets/imges/landing-page/sec-5/chat.png';
export default function Choose() {
  return (

    <section className='choose d-flex my-5 py-5 '>
        <div className="img-car w-50 d-flex align-items-center">
            <img src={img} className='choose-img' alt="" />
        </div>
        <div className='max-width'>
           
<div className="main-header  m-3">
        <button className='main-btn rounded-2' >WHY CHOOSE US</button>
        <h4 className=' my-3'>We offer the best experience with our rental deals</h4>
    </div>
    
       
       <div  class="d-flex align-items-center">
        <img  src={img1} class="p-3 ps-0"/>
        <article ><h6  class="mb-0">Best price guaranteed</h6>
       <small >Find a lower price? We’ll refund you 100% of the difference.</small>
       </article>
       </div>
       <div  class="d-flex align-items-center">
        <img  src={img1} class="p-3 ps-0"/>
        <article ><h6  class="mb-0">24 hour car delivery</h6>
       <small >Book your car anytime and we will deliver it directly to you.</small>
       </article>
       </div>
       <div  class="d-flex align-items-center">
        <img  src={img3} class="p-3 ps-0"/>
        <article ><h6  class="mb-0">Best price guaranteed</h6>
       <small >Find a lower price? We’ll refund you 100% of the difference.</small>
       </article>
       </div>
       <div  class="d-flex align-items-center">
        <img  src={img4} class="p-3 ps-0"/>
        <article ><h6  class="mb-0">24/7 technical support</h6>
       <small >Have a question? Contact Rentcars support any time when you have problem.</small>
       </article>
       </div>
       </div>
        </section>  
    
  )
}
