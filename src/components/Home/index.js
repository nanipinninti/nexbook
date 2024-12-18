import React from "react";
import { useState } from "react";
import './index.css'
import Header from "../Header";
import HotelCard from "../HotelCard";
const Home = ()=>{
    return(
        <div className="home-container">
            <Header/>
            <HotelCard/>
            
        </div>
        
    )
}
export default Home;