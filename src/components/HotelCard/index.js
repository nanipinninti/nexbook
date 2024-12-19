import React from "react";
import { FaHeart, FaShareAlt, FaMapMarkerAlt } from "react-icons/fa";
import './index.css';

const data = {
  name: "Grand Palm Resort",
  price: 20000,
  city: "Visakhapatnam",
  address: "Visakhapatnam, Andhra Pradesh",
  description: "A luxurious escape with breathtaking ocean views.",
  image_url: "https://i.postimg.cc/wBXSCMzj/1.jpg",
  capacity: 300,
  likes: 0,
  shares: 0,
};

const HotelCard = () => {
  const { name, price, address, image_url, likes, shares } = data;

  return (
    <div className="hotel-card-container">
      <img src={image_url} alt={name} className="hotel-card-image" />
      <h1 className="hotel-card-name">{name}</h1>
      <div className="hotel-card-details">
        <p className="hotel-card-price">₹ {price} /-</p>
        <div className="hotel-card-details-shares-likes">
          <FaHeart className="hotel-card-icon" />
          <p className="hotel-card-noof-likes">{likes}</p>
          <FaShareAlt className="hotel-card-icon" />
          <p className="hotel-card-noof-shares">{shares}</p>
        </div>
      </div>
      <div className="hotel-card-location">
        <FaMapMarkerAlt className="icon-location" />
        <p className="hotel-card-address">{address}</p>
      </div>
    </div>
  );
};

export default HotelCard;
