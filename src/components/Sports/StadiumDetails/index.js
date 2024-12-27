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
import BookStadium from "../BookStadium";

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

const StadiumDetails = () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(names.loading);
    const [date, setDate] = useState(getTodayDate());
    const [showPopup, setShowPopup] = useState(false);
    const [slots, setSlots] = useState(Array(24).fill(false)); 
    const [clickedSlots, setClickedSlots] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchDetails();
    }, []);

    useEffect(() => {
        fetchSlots();
    }, [date,showPopup]);
    
    const fetchSlots = async () => {
        const api = `http://localhost:5001/sports/availability/hourly-status?stadium_id=${id}&date=${date}`;
        const options = {
            method: "GET"
        }
        try {
            const response = await fetch(api, options);
            if (response.ok) {
                const Data = await response.json();
                setClickedSlots([]);
                setSlots(Data.hourlyStatus);
            }
        } catch (error) {
            console.log("Error in fetching slots", error);
        }
    }
    
    

    const fetchDetails = async () => {
        
        const api = `http://localhost:5001/sports/queries/stadium-details?id=${id}`;
        const options = {
            method: "GET"
        };
        try {
            const response = await fetch(api, options);
            if (response.ok) {
                const Data = await response.json();
                setData(Data.data);
                setStatus(names.active);
                // checkAvailability();
            } else {
                setStatus(names.failure);
            }
        } catch (error) {
            setStatus(names.failure);
        }
    }



    const { name, price, city, address, description, img_url, capacity } = data;
    return (
        <div className="hotel-details-container">
            <Header />
            <Options active = "/sports" />
            <div className="hotel-details-bottom-container">
                <img src={img_url} alt={name} className="hotel-details-image" />
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

                    {/* Available Slots */}
                    <h1 className="fs-6 mb-3">Available Slots</h1>
                    <div className="slots-container mb-2">
                    {
                        slots.map((slot,index)=>(
                        <>
                        { (slot)?(
                            // Already booked
                            <div className="booked-slot">
                                <div>{index}</div>
                            </div>   
                        ):(
                            (clickedSlots.includes(index))?(
                            <div className="clicked-slot" onClick={() => {
                                setClickedSlots(clickedSlots.filter((clickedIndex) => clickedIndex !== index));
                              }}>
                                <div>{index}</div>
                            </div>
                            ):(
                            <div className="available-slot" onClick={()=>{setClickedSlots([...clickedSlots,index])}}>
                                <div>{index}</div>
                            </div>
                            )
                        )
                        }                    
                        </>
                         ))
                    }
                    </div>

                    <div>
                        <button className="hotel-details-btn">View contact</button>
                        <button className="hotel-details-btn">Add to cart</button>
                        <button className="hotel-details-btn" onClick={()=>setShowPopup(true)}>Book</button>
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
                <BookStadium showPopup={showPopup} setShowPopup={setShowPopup} stadiumId={id} 
                    date = {date} hours={clickedSlots}/>
            }
            <Footer />

        </div>
    )
}
export default StadiumDetails;


