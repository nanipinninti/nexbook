import React from "react";
import { useState } from "react";
import './index.css'
const FunctionHalls = ()=>{
    const sections = [
        {
            name : "Birthday Party",
            api : "http://localhost:5001/addToBirthday",
        },
        {
            name : "Corporate Party",
            api : "http://localhost:5001/addToCorporateParty",
        },
        {
            name : "Private Theater",
            api : "http://localhost:5001/addToPrivateTheater",
        },
    ]
    return(
        <div className="function-hall-container">
        {
            sections.map(obj=>(
                <div className="function-hall-section-container">
                    <div className="fh-section-header-container d-flex w-100 justify-content-between px-5">
                        <h1 className="fh-section-head">{obj.name}</h1>
                        <div className="fh-section-filter">
                            <p>filter</p>
                        </div>
                    </div>
    
                </div>
            ))
        }
        </div>
    )
}
export default FunctionHalls;