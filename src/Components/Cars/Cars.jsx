import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img3 from "../../assets/imges/landing-page/car3.png"
import img4 from "../../assets/imges/card/star.png"
import img5 from "../../assets/imges/card/user.png"
import img6 from "../../assets/imges/card/frame.png"
import img7 from "../../assets/imges/card/d8wxke_2_.png"
import img8 from "../../assets/imges/card/doors.png"
import img9 from "../../assets/imges/card/arrow-right.png"
import { Link } from 'react-router-dom'
export default function Cars() {
    let [cars, setCars]= useState([])

    let getAllCars =async()=>{
        let response =await axios.get(" https://myfakeapi.com/api/cars?limit=5")
        setCars(response?.data?.cars)
    }

    useEffect(()=>{
        getAllCars()
    },[])
  return (
    <div className='container cars' >
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><i className='fas fa-map-marker-alt'></i></span>
  <input type="text" class="form-control" placeholder="Search by name" aria-label="Username" aria-describedby="basic-addon1"/>
  <span class="input-group-text btn btn-primary" id="basic-addon2">search</span>
</div>
<div className="main-header d-flex justify-content-center m-3">
        <button className='main-btn rounded-2' > POPULAR RENTAL DEALS </button>
    </div>
    <h1 className='text-center m-4'>Most popular cars rental deals</h1>
        
    <div className="d-flex flex-wrap justify-content-around px-3 ">
{cars.splice(0,4).map((car)=>(
    <div key={car.id} className="card p-3 pt-3">
    <img className="card-img-top img-fluid m-1" src={img3} alt="" /><div className="card-body">
        <h5>{car.car}</h5>
        <div className="review d-flex ">
            <h6> <img src={img4} alt="" />4.6</h6>  <small className='ms-2'>(1.936reviews) </small>
        </div>
        <div className=" d-flex justify-content-between mt-3">
            <small> <img src={img5} alt="" />2 passangers</small>  <small> <img src={img6} alt="" />Auto</small>
        </div>
        <div className=" d-flex justify-content-between mt-2">
            <small> <img src={img7} alt="" />Air Conditioning</small>  <small> <img src={img8} alt="" />2 Doors</small>
        </div>

        <div className="footer-card mt-4 ">
            <div className=" d-flex justify-content-between align-items-center text-center mb-2">
                <h4 className='text-muted'>price</h4> <h5>{car.price}</h5>
            </div>
            <a href="#" class="btn btn-block btn-primary">Rent Now <img src={img9} alt="" /></a>
        </div>
    </div>
     </div>
   
     ))} 
    </div>
    <div className="btn-showall text-center d-flex justify-content-center my-5">
    <button className="btn btn-outline-secondary px-5" ><Link  to= "/allcars">  Show all vehicles </Link><i className='px-2 fas fa-long-arrow-alt-right'></i></button>  
    
    </div>
   </div>
  )
}
