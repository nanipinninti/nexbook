import React, { useState, useEffect, useRef } from "react";
import './index.css';
import Loading from "../../Loading";
import Cookies from "js-cookie";
import { CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { GrPowerReset } from "react-icons/gr";

const fixedNames = {
    loading: "Loading",
    active: "active",
    failure: "failure"
};

const BookHall = (props) => {
    const [status, setStatus] = useState(fixedNames.loading);
    const { setShowPopup, hotel_id, date } = props;
    const hasBooked = useRef(false); // Flag to ensure bookSlot is called only once

    useEffect(() => {
        if (!hasBooked.current) {
            bookSlot();
            hasBooked.current = true;
        }
    }, []);

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const bookSlot = async () => {
        const api = `http://localhost:5001/function-halls/bookings`;
        const login_token = Cookies.get("login_token");
        if (login_token) {
            const options = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${login_token}`,
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify({hotel_id,date})
            };
            const response = await fetch(api, options);
            
            if (response.ok) {
                await sleep(1000);
                setStatus(fixedNames.active);
            } else {
                setStatus(fixedNames.failure);
            }
        }else{
            setStatus(fixedNames.failure);
            alert("Please login to book a slot");
        }
    };


    const button = () => {
        return (
            <>
                {status === fixedNames.active &&
                    <button className="button" onClick={() => setShowPopup(false)}>Ok</button>
                }
                {status === fixedNames.failure &&
                    <div className="d-flex w-100 gap-3">
                        <button className="button" onClick={()=>{setStatus(fixedNames.loading);bookSlot()}}>Retry</button>
                        <button className="button" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                }
            </>
        );
    };

    const heading = () => {
        return (
            <>
                {status === fixedNames.loading &&
                    <h1 className="booking-pop-up-heading text-orange">Order Processing</h1>
                }
                {status === fixedNames.active &&
                    <h1 className="booking-pop-up-heading text-success">Order Confirmed</h1>
                }
                {status === fixedNames.failure &&
                    <h1 className="booking-pop-up-heading text-danger">Order Failed</h1>
                }
            </>
        );
    };

    return (
        <div className="wrapper-booking-pop-up" >
            <div className="booking-pop-up-container">
                {heading()}
                {status === fixedNames.loading && <Loading  />}
                {status === fixedNames.active &&
                    <CiCircleCheck className="booking-icons text-success"/>
                }
                {status === fixedNames.failure && 
                    <RxCrossCircled className="booking-icons text-danger"/>}
                {button()}
            </div>
        </div>
    );
};

export default BookHall;