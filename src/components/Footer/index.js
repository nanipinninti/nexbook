import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './index.css'


const Footer = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ username, phoneNumber, description });
    };

    return (
        <>
        <hr className = "footer-seaparator"/>
        <div className="footer-container">
                <div className="footer-details-section">
                    <img src="https://i.postimg.cc/MKb6TcZV/nexbook-bg.jpg" alt="app-logo" className="footer-img-logo" />
                    <p className="footer-thanking-msg">
                        Thank you for shopping with us! We take pride in offering a diverse selection of quality products,
                        backed by excellent service. Your satisfaction is our priority, and we look forward to serving you again.
                    </p>

                    <div>
                        <p className="footer-social-media">Social Media</p>
                        <div className="footer-social-media-icons">
                           <FaWhatsapp className="footer-social-icon whatsapp" id="whatsapp-icon"/>
                           <FaFacebook className="footer-social-icon" id="facebook-icon"/>
                           <FaInstagram className="footer-social-icon" id="instagram-icon" />
                           <FaXTwitter className="footer-social-icon"/>
                        </div>
                    </div>

                </div>
                <div className="footer-queries-section">
                    <p className="footer-queries-msg">For any Queries</p>
                    <div className="footer-name-phn-container">
                        <div className="footer-input-field">
                            <label htmlFor="name">Username</label>
                            <input id="name" type="text" className="input-box" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="footer-input-field">
                            <label htmlFor="phn">Phone Number</label>
                            <input type="text" id="phn" className="input-box" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>

                    </div>
                    <div className="footer-input-field">
                        <label htmlFor="msg">Description</label>
                        <textarea  id="msg" className="footer-description-box" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="footer-send-btn" onClick={handleSubmit}>Send</button>

                </div>
        </div>
        </>
    )
}

export default Footer
