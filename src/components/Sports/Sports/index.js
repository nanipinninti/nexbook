import React from "react";
import { useState } from "react";
import FunctionHalls from "../Stadiums";
import './index.css'
import Header from "../../Header";
import Footer from "../../Footer";
import Options from "../../Options";
  
const Sports = ()=>{
    const sections = [
        {
            name: "Cricket",
            api: "http://localhost:5001/sports/queries/stadiums?category=Cricket",
        },
        {
            name: "Foot Ball",
            api: "http://localhost:5001/sports/queries/stadiums?category=Football",
        },
        {
            name: "Private Theater",
            api: "http://localhost:5001/sports/queries/stadiums?category=Kabaddi",
        },
    ];
    return(
        <div className="home-container">
            <Header/>
            <Options active = "/sports"/>
            <div className="function-halls-container">
            {
                sections.map(obj=>(
                    <FunctionHalls key={obj.id} SectionDetails = {obj} />
                ))
            }
            </div>
            <Footer />
        </div>
        
    )
}
export default Sports;