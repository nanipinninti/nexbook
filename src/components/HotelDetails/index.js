import React from "react";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Options from "../Options";
import './index.css'
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";

const data =   {
    "name": "Grand Palm Resort",
    "price": 20000,
    "city": "Visakhapatnam",
    "address": "Visakhapatnam, Andhra Pradesh",
    "description": "A luxurious escape with breathtaking ocean views.A luxurious escape with breathtaking ocean views. Book your stay with us today and let us create memories you'll cherish forever!",
    "image_url": "https://i.postimg.cc/wBXSCMzj/1.jpg",
    "capacity": 300
  }

const HotelDetails = ()=>{
    const {name,price,city,address,description,image_url,capacity} = data
    return(
        <div className="hotel-details-container">
            <Header />
            <Options />
            <div className="hotel-details-bottom-container">
                
                <img src={image_url} alt={name} className="hotel-details-image"/>
                
                <div className="hall-details-container">
                    <div className="hotel-details-name-price-container">
                        <p className="hall-name">{name}</p>
                        <p className="hall-price">{price}/-</p>
                    </div>
                    <div className="hotel-details-address-container">
                        <MdLocationOn className="hotel-details-icon-location" />
                        <p className="hotel-details-address">{address}</p>
                    </div>
                    
                    <p className="hall-description">{description}</p>
                    <span> Capacity: 1000</span>
                    <div className="hall-details-icons-container">
                        <div className="likes-container">
                        <CiHeart className="hotel-details-icon" />
                        <p className="hotel-details-noof-likes">0</p>
                        </div>
                        <div className="shares-container">
                        <CiShare2 className="hotel-details-icon" />
                        <p className="hotel-details-noof-likes">0</p>
                        </div>
                        <div className="date-input-container">
                          <i className="calendar-icon"></i>
                          <input type="date" className="hotel-details-date-input" />
                        </div>

                    </div>
                    <div>
                        <button className="hotel-details-btn">View contact</button>
                        <button className="hotel-details-btn">Add to cart</button>
                        <button className="hotel-details-btn">Book</button>
                    </div>
                </div>


                


            </div>
        </div>
    )
}
export default HotelDetails;