import React from "react";
import { useState } from "react";
import FunctionHalls from "../FunctionHalls";
import './index.css'
import Header from "../Header";
import Footer from "../Footer";
const data =  [
    {
      "name": "Grand Palm Resort",
      "price": 20000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "A luxurious escape with breathtaking ocean views.",
      "image_url": "https://i.postimg.cc/wBXSCMzj/1.jpg",
      "capacity": 300
    },
    {
      "name": "Serenity Suites",
      "price": 60000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Your peaceful getaway in the heart of the city.",
      "image_url": "https://i.postimg.cc/26jXgxT0/10.avif",
      "capacity": 600
    },
    {
      "name": "Horizon Inn",
      "price": 30000,
      "city": "Vizianagram",
      "address": "Vizianagram, Andhra Pradesh",
      "description": "Modern amenities with stunning skyline views.",
      "image_url": "https://i.postimg.cc/1zrjWd0g/11.avif",
      "capacity": 600
    },
    {
      "name": "Evergreen Retreat",
      "price": 20000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Surrounded by lush greenery and tranquil vibes.",
      "image_url": "https://i.postimg.cc/xCsFQb4n/12.avif",
      "capacity": 100
    },
    {
      "name": "Royal Heritage Hotel",
      "price": 150000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "Experience regal comfort with world-class hospitality.",
      "image_url": "https://i.postimg.cc/WzhY1bBr/13.avif",
      "capacity": 1000
    },
    {
      "name": "Lakeside Lodge",
      "price": 150000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "A cozy retreat by the serene lakeside.",
      "image_url": "https://i.postimg.cc/MKfrkHbJ/14.jpg",
      "capacity": 1000
    },
    {
      "name": "Mountain Bliss Resort",
      "price": 30000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Nestled in the hills, perfect for adventure seekers.",
      "image_url": "https://i.postimg.cc/dQxSSrC9/15.jpg",
      "capacity": 300
    },
    {
      "name": "Urban Oasis Hotel",
      "price": 20000,
      "city": "Vizianagram",
      "address": "Vizianagram, Andhra Pradesh",
      "description": "A stylish urban stay with premium facilities.",
      "image_url": "https://i.postimg.cc/brWCDfP5/16.jpg",
      "capacity": 100
    },
    {
      "name": "Sapphire Sands Inn",
      "price": 100000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Chic coastal vibes with warm and friendly service.",
      "image_url": "https://i.postimg.cc/7Z7czhfn/2.jpg",
      "capacity": 500
    },
    {
      "name": "Golden Peak Lodge",
      "price": 90000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "High-altitude comfort with picturesque mountain views.",
      "image_url": "https://i.postimg.cc/63BDtK6L/3.jpg",
      "capacity": 300
    },
    {
      "name": "The Velvet Stay",
      "price": 100000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Sophistication meets comfort in every detail.",
      "image_url": "https://i.postimg.cc/wMvZRkm1/4.avif",
      "capacity": 500
    },
    {
      "name": "Aurora Sky Hotel",
      "price": 20000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "A blend of modern design and natural beauty.",
      "image_url": "https://i.postimg.cc/3R9zwqdM/5.jpg",
      "capacity": 300
    },
    {
      "name": "Whispering Woods Inn",
      "price": 60000,
      "city": "Amaravathi",
      "address": "Amaravathi, Andhra Pradesh",
      "description": "Quiet retreat surrounded by towering trees.",
      "image_url": "https://i.postimg.cc/1XjTGNGJ/6.jpg",
      "capacity": 400
    },
    {
      "name": "Ocean Breeze Resort",
      "price": 30000,
      "city": "Vizianagram",
      "address": "Vizianagram, Andhra Pradesh",
      "description": "Beachfront bliss with endless activities.",
      "image_url": "https://i.postimg.cc/h4yHWNkT/7.avif",
      "capacity": 400
    },
    {
      "name": "Starlight Stay",
      "price": 20000,
      "city": "Visakhapatnam",
      "address": "Visakhapatnam, Andhra Pradesh",
      "description": "Perfect for stargazing and serene nights.",
      "image_url": "https://i.postimg.cc/Fsw813sK/8.avif",
      "capacity": 300
    },
    {
      "name": "Nani",
      "price": 200000,
      "city": "Nellimarla",
      "address": "Nellimarla, Andhra Pradesh",
      "description": "High-altitude comfort with picturesque mountain views.",
      "image_url": "https://i.postimg.cc/k5mHvCS3/9.webp",
      "capacity": 1500
    }
  ]
  
const Home = ()=>{
    return(
        <div className="home-container">
            <Header/>
            <FunctionHalls />

            <Footer />
        </div>
        
    )
}
export default Home;