import React from "react";
import { useState } from "react";
import './index.css'
import { Link, useLocation } from "react-router-dom";

const Options = () => {
    const Location = useLocation();
    const location = Location.pathname

    return (
        <ul className="options-container">
            <li className="option">
                <Link className= {(location === "/") ? `active-link` : `link`} to={'/'}>Function Halls</Link>
            </li>
            <li className="option">
                <Link className= {(location === "/sports") ? `active-link` : `link`} to={'/sports'}>Sports</Link>
            </li>
            <li className="option">
                <Link className= {(location === "/movies") ? `active-link` : `link`} to={'/movies'}>Movies</Link>
            </li>
        </ul>
    )
}

export default Options;