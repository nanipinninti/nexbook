import React from "react";
import { useState } from "react";
import FunctionHalls from "../FunctionHalls";
import './index.css'
import Header from "../Header";
import Footer from "../Footer";
  
const Home = ()=>{
    const sections = [
        {
            name: "Birthday Party",
            api: "http://localhost:5001/function-halls/birthday-hotels",
        },
        {
            name: "Corporate Party",
            api: "http://localhost:5001/function-halls/corporate-hotels",
        },
        {
            name: "Private Theater",
            api: "http://localhost:5001/function-halls/private-theater-hotels",
        },
    ];
    return(
        <div className="home-container">
            <Header/>
            <div className="function-halls-container">
            {
                sections.map(obj=>(
                    <FunctionHalls SectionDetails = {obj} />
                ))
            }
            </div>
            <Footer />
        </div>
        
    )
}
export default Home;