import React from "react";
import { useState } from "react";
import FunctionHalls from "../FunctionHalls";
import './index.css'
import Header from "../Header";
const Home = ()=>{
    return(
        <div className="home-container">
            <Header/>
            <FunctionHalls />
        </div>
        
    )
}
export default Home;