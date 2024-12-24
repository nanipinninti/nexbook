import React from "react";
import { useState ,useEffect} from "react";
import HotelCard from "../HotelCard"
import Loading from "../Loading";
import Popup from "reactjs-popup";
import { IoIosOptions } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

import './index.css'
import { data } from "react-router-dom";

const Names = {
    loading : "Loading",
    active : "active",
    failure : "failure"
}
const FunctionHalls = (props)=>{ 
    const {SectionDetails} = props

    const [hotelDetails,setHotelDetails] = useState([])
    const [api,setApi] = useState(SectionDetails.api)
    const [showAll,setShowAll] = useState(false)
    const [totalHotels,setTotalHotels] = useState(0)
    const [status,setStatus] = useState(Names.loading)
    const [capacity,setCapacity] = useState('')
    const [price,setPrice] = useState('')
    const [city,setCity] = useState('')

    const [tempCapacity, setTempCapacity] = useState(capacity);
    const [tempPrice, setTempPrice] = useState(price);
    const [tempCity, setTempCity] = useState(city);

    useEffect(()=>{
        fetchDetail(api, capacity, price, city)
    },[api,showAll, capacity, price, city])

    const fetchDetail = async (api, capacity, price, city) => {
        const options = {
            method: "GET"
        };
        const url = new URL(api);
        if (capacity) url.searchParams.append('capacity', capacity);
        if (price) url.searchParams.append('price', price);
        if (city) url.searchParams.append('city', city);
    
        try {
            const response = await fetch(url, options);
    
            if (response.ok) {
                const Data = await response.json();
                if (!showAll && Data.data.length >4){
                    setHotelDetails([...Data.data.slice(0, 4)]);
                }
                else{
                    setHotelDetails([...Data.data])
                }
                setTotalHotels(Data.data.length)
                setStatus(Names.active)
            } else {
                setStatus(Names.failure);
                console.log("Failed to fetch, status:", response.status);
            }
        } catch (error) {
            setStatus(Names.failure);
            console.log("Unable to make request:", error.message);
        }
    };

    const applyFilters = () => {
        setCapacity(tempCapacity);
        setPrice(tempPrice);
        setCity(tempCity);
    };

    const filterPopup = ()=> {
        return(
            <div>
                <Popup
                    modal
                    trigger={
                        <div className="fh-section-filter" >
                            <IoIosOptions className="fh-filter-option"/>
                            <p className="fh-filter-text">filter</p>
                        </div>
                    }
                >
                {close => (
                    <div className="filter-popup">
                         <div className="filter-popup-option">
                            <label>Date</label>
                            <input type="date" id="date" placeholder="select Date" required/>
                        </div>
                        <div className="filter-popup-option">
                            <label>Capacity</label>
                            <input id="capacity"
                                 type="text" placeholder="Enter Max Capacity"
                                 value={tempCapacity} onChange={e=>setTempCapacity(e.target.value)}
                            />
                        </div>

                        <div className="filter-popup-option">
                            <label>Price</label>
                            <input id="price"
                                 type="text" placeholder="Enter Price"
                                 value={tempPrice} onChange={e=>setTempPrice(e.target.value)}
                            />
                        </div>

                        <div className="filter-popup-option">
                            <label>City</label>
                            <input id="city"
                                 type="text" placeholder="Enter City"
                                 value={tempCity} onChange={e=>setTempCity(e.target.value)}
                            />
                        </div>
                        <div className="filter-popup-buttons">
                            <button className="ok-button" onClick={() => { applyFilters(); close(); }}>OK</button>
                            <button className="close-button" onClick={close}>Close</button>
                        </div>
                    </div>
                    )
                }
                </Popup>
            </div>
        )
    }

    return(
        <div className="function-hall-section-container">
            <div className="fh-section-header-container">
                <h1 className="fh-section-head">{SectionDetails.name}</h1>
                {filterPopup()}
            </div>

            <div className={(showAll) ? `fh-card-show-all-true` : `fh-card`}>
            {
                status === Names.loading && <Loading />
            }
            {
                status === Names.active && hotelDetails.length > 0 && hotelDetails.map(obj => (
                    <HotelCard key={obj.id} hotelDetails={obj} />
                ))
            }
            {
                status === Names.active && hotelDetails.length === 0 && (
                    <p>No hotels found</p>
                )
            }
            </div>
            {
                (status === Names.active && totalHotels > 4 && !showAll &&(
                    <div className="fh-show-all" onClick={ ()=>{setShowAll(!showAll)}}>
                        <MdKeyboardArrowRight />
                        <p>Show all</p>
                    </div>
                ))
            }
            {
                (status === Names.active && totalHotels > 4 && showAll &&(
                    <div className="fh-show-all" onClick={ ()=>{setShowAll(!showAll)}}>
                        <MdKeyboardArrowLeft />
                        <p>Show Less</p>
                    </div>
                ))
            }
        </div>
    )
}
export default FunctionHalls;