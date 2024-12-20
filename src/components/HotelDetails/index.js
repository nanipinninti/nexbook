import React from "react";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Options from "../Options";
import './index.css'

const data =   {
    "name": "Grand Palm Resort",
    "price": 20000,
    "city": "Visakhapatnam",
    "address": "Visakhapatnam, Andhra Pradesh",
    "description": "A luxurious escape with breathtaking ocean views.",
    "image_url": "https://i.postimg.cc/wBXSCMzj/1.jpg",
    "capacity": 300
  }

const HotelDetails = ()=>{
    const {name,price,city,address,description,image_url,capacity} = data
    return(
        <div className="hotel-details-container">
            <Header />
            <Options />
            <div>


                // write code here


            </div>
        </div>
    )
}
export default HotelDetails;