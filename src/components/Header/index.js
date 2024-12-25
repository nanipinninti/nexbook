import React, { useState } from "react";
import './index.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoGift } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    const [isDisplay, setIsDisplay] = useState(false);

    const displayProfile = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <div className="header">
            <div className="header-left">
                <img src="https://i.postimg.cc/MKb6TcZV/nexbook-bg.jpg" className="header-logo" alt="placeholder" />
                <img src="https://i.postimg.cc/JhBzS7fG/nexbook-mb-bg.jpg" className="header-logo-mb" alt="placeholder" />  

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
                <FaUser className="user" onClick={displayProfile}/>
            </div>
            <div className="header-right-mobile">
                    <RxHamburgerMenu className="options-icon" onClick={displayProfile}/>
            </div>

            {/* Profile */}
           {isDisplay && ( <div className="profile-container">
                <div className="profile-popup-top-container">
                    
                    <CgProfile className="profile-icon"/>
                    
                  <div className="profile-popup-details-container">
                     <p className="profile-popup-name">Ayush</p>
                     <p className="profile-popup-mail">aparnaayusha@gamil.com</p>
                  </div>
                </div>
                <div className="profile-popup-bottom-container">
                <div className="profile-popup-text-container">
                <MdOutlineModeEdit className="profile-popup-notification"/>
                <p className="profile-popup-text">Edit Profile</p>
                </div>
                <div className="profile-popup-text-container">
                <IoMdNotificationsOutline className="profile-popup-notification" />
                <p className="profile-popup-text">Notifications</p>
                </div>
                <div className="profile-popup-text-container">
                <CiHeart className="profile-popup-notification" />
                <p className="profile-popup-text">Whishlist</p>
                </div>
                <div className="profile-popup-text-container">
                <BsHandbag className="profile-popup-notification"/>
                <p className="profile-popup-text">Your Orders</p>
                </div>
                <div className="profile-popup-text-container">
                <MdOutlineCardGiftcard className="profile-popup-notification" />
                <p className="profile-popup-text">Vouchers</p>
                </div>
                <hr/>
                <div className="profile-popup-text-container">
                <AiOutlineLogout className="popup-logout-icon" />
                <p className="profile-popup-text">Logout</p>
                </div>
                
                
                

                </div>
            </div>)}
        </div>
    );
};

export default Header;
