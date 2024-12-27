import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
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

const HotelCard = (props) => {
  const {hotelDetails} = props
  const { hotel_id,name, price, address, image_url } = hotelDetails;
  // console.log(hotelDetails);
  
  const likes = 0
  const shares = 0
  const navigate = useNavigate();
  return (
    <div className="hotel-card-container" onClick={() => navigate(`/hotel-details/${hotel_id}`)}>
        <img src={image_url} alt={name} className="hotel-card-image" />

        <h1 className="hotel-card-name">{name}</h1>

        <div className="hotel-card-details">
            <p className="hotel-card-price">₹ {price}</p>
            <div className="hotel-card-details-shares-likes">

                <CiHeart className="hotel-card-icon" />
                <p className="hotel-card-noof-likes">{likes}</p>
                <CiShare2 className="hotel-card-icon" />

                <p className="hotel-card-noof-shares">{shares}</p>
            </div>
        </div>

        <div className="hotel-card-location">
          <MdLocationOn className="icon-location" />
          <p className="hotel-card-address">{address}</p>
        </div>
    </div>
  );
};

export default HotelCard;
