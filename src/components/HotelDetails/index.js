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
import Loading from "../Loading";

const names = {
    loading : "Loading",
    active : "active",
    failure : "failure"
}
const HotelDetails = ()=> {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(names.loading);
    const { hotel_id } = useParams();

    useEffect(() => {
        fetchDetails();
    }, [hotel_id]);

    const fetchDetails = async () => {
        const api = `http://localhost:5001/function-halls/queries/hotel-details?hotel_id=${hotel_id}`;
        const options = {
            method: "GET"
        };
        try {
            const response = await fetch(api, options);
            if (response.ok) {
                const Data = await response.json();
                setData(Data.data);
                setStatus(names.active);
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
            <Options />
            { status === names.active &&
                (<div className="hotel-details-bottom-container">
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
                </div>)
            }
            {
                status === names.loading && <Loading />
            }
            {
                status === names.failure && <p>Failed to fetch data</p>
            }
        </div>
    )
}
export default HotelDetails;