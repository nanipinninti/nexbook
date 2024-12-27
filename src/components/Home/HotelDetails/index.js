import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../../Header";
import Footer from "../../Footer";
import Options from "../../Options";
import Popup from "reactjs-popup";
import './index.css'
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import Loading from "../../Loading";
import BookHall from "../BookHall";
const names = {
    loading: "Loading",
    active: "active",
    failure: "failure"
}

const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

const HotelDetails = () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(names.loading);
    const [date, setDate] = useState(getTodayDate());
    const [available, setAvailable] = useState(true);
    const [selfBooked, setSelfBooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const { hotel_id } = useParams();

    useEffect(() => {
        fetchDetails();
    }, []);
    
    useEffect(() => {
        checkAvailability();
    }, [date,showPopup]); // Correctly closed the array and parentheses
    
    const checkAvailability = async () => {
        const public_api = `http://localhost:5001/function-halls/availability/check-public?hotel_id=${hotel_id}&date=${date}`;
        const private_api = `http://localhost:5001/function-halls/availability/check?hotel_id=${hotel_id}&date=${date}`;
        const login_token = Cookies.get("login_token");
        try{
            if (login_token) {
                const options = {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${login_token}`
                    }
                }
                const response = await fetch(private_api, options);
                if (response.ok) {
                    const Data = await response.json();
                    setAvailable(Data.available);
                    setSelfBooked(Data.selfbooked);
                } 
            }else{
                const options = {
                    method: "GET"
                }
                const response = await fetch(public_api, options);
                if (response.ok) {
                    const Data = await response.json();
                    setAvailable(Data.available);
                }
            }
        }catch(error){
            console.log("Error in checking availability", error);
        }
    }

    const fetchDetails = async () => {
        const api = `http://localhost:5001/function-halls/queries/hotel-details?hotel_id=${hotel_id}&date=${date}`;
        const options = {
            method: "GET"
        };
        try {
            const response = await fetch(api, options);
            if (response.ok) {
                const Data = await response.json();
                setData(Data.data);
                setStatus(names.active);
                checkAvailability();
            } else {
                setStatus(names.failure);
            }
        } catch (error) {
            setStatus(names.failure);
        }
    }



    const { name, price, city, address, description, image_url, capacity } = data;
    return (
        <div className="hotel-details-container">
            <Header />
            <Options active = "/" />
            <div className="hotel-details-bottom-container">
                <img src={image_url} alt={name} className="hotel-details-image" />
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
                    <span> Capacity: {capacity}</span>
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
                            <input type="date" className="hotel-details-date-input"
                                 value={date} onChange={e => {setDate(e.target.value)}} min={getTodayDate()} />
                        </div>
                    </div>
                    <div>
                        <button className="hotel-details-btn">View contact</button>
                        <button className="hotel-details-btn">Add to cart</button>
                        { (available && !selfBooked) &&
                            <button className="hotel-details-btn" onClick={()=>setShowPopup(true)}>Book</button>
                        }
                        { (!available && !selfBooked) &&
                            <button className="hotel-details-btn cursor-ban bg-danger">Already Booked</button>
                            
                        }
                        { (!available && selfBooked) &&
                            <button className="hotel-details-btn cursor-ban bg-success">Order Placed</button>
                        }
                    </div>
                </div>
            </div>
            {
                status === names.loading && <Loading />
            }
            {
                status === names.failure && <p>Failed to fetch data</p>
            }
            {
                showPopup &&    
                <BookHall showPopup={showPopup} setShowPopup={setShowPopup} hotel_id={hotel_id} 
                    date = {date}/>
            }
            <Footer />

        </div>
    )
}
export default HotelDetails;


