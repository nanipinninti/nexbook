import React from "react";
import './index.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://i.postimg.cc/MKb6TcZV/nexbook-bg.jpg" className="header-logo" alt="placeholder" />     
            </div>
            <div className="header-middle">
                <div className="search-container">
                    <div className="search-icon-container">
                        <CiSearch className="search-icon" />
                    </div>
                    <div className="search-input-container">
                        <input type="search" className="header-search" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="header-right">
                <IoMdNotificationsOutline className="notification" />
                <GoGift className="gift" />
                <FaUser className="user" />
            </div>
        </div>
    );
};

export default Header;