import React from "react";
import { useState } from "react";
import './index.css'
const FunctionHalls = ()=>{
    const bdayApi = "http://localhost:5001/addToBirthday"
    const corporateApi = "http://localhost:5001/addToCorporateParty"
    const privateApi = "http://localhost:5001/addToPrivateTheater"
    const sections = [
        {
            name : "Birthday Party",
            api : "http://localhost:5001/addToBirthday",
        },
        {
            name : "Corporate Party",
            api : "http://localhost:5001/addToBirthday",
        },
        {
            name : "Private Theater",
            api : "http://localhost:5001/addToBirthday",
        },
    ]
    return(
        <div className="function-hall-container">
            <div className="birthday-party-container">
                
            </div>
        </div>
    )
}
export default FunctionHalls;