import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
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
            <div className="hotel-details-bottom-container">
                
                <img src={image_url} alt={name} className="hotel-details-image"/>
                
                <div className="hall-details-container">
                    <div className="hotel-details-name-price-container">
                        <p className="hall-name">{name}</p>
                        <p className="hall-price">{price}/-</p>
                    </div>
                    <div className="hotel-details-address-continer">
                        <MdLocationOn className="hotel-details-icon-location" />
                        <p className="hotel-details-address">{address}</p>
                    </div>
                    
                    <p className="hall-description">{description}</p>
                    <div className="hall-details-icons-container">
                        <div className="likes-continer">
                        <CiHeart className="hotel-details-icon" />
                        <p className="hotel-card-noof-likes">0</p>
                        </div>
                        <div className="shares-continer">
                        <CiShare2 className="hotel-details-icon" />
                        <p className="hotel-card-noof-likes">0</p>
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