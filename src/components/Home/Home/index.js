import React from "react";
import { useState } from "react";
import FunctionHalls from "../FunctionHalls";
import './index.css'
import Header from "../../Header";
import Footer from "../../Footer";
import Options from "../../Options";
  
const Home = ()=>{
    const sections = [
        {
            name: "Birthday Party",
            api: "http://localhost:5001/function-halls/queries/birthday-hotels",
        },
        {
            name: "Corporate Party",
            api: "http://localhost:5001/function-halls/queries/corporate-hotels",
        },
        {
            name: "Private Theater",
            api: "http://localhost:5001/function-halls/queries/private-theater-hotels",
        },
    ];
    return(
        <div className="home-container">
            <Header/>
            <Options active = "/" />
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
export default Home;