import React from "react";
import { useState } from "react";
import './index.css'
import { Link, useLocation } from "react-router-dom";

const Options = (props) => {
    const {active} = props;
    return (
        <ul className="options-container">
            <li className="option">
                <Link className= {(active === "/") ? `active-link` : `link`} to={'/'}>Function Halls</Link>
            </li>
            <li className="option">
                <Link className= {(active === "/sports") ? `active-link` : `link`} to={'/sports'}>Sports</Link>
            </li>
            <li className="option">
                <Link className= {(active === "/movies") ? `active-link` : `link`} to={'/movies'}>Movies</Link>
            </li>
        </ul>
    )
}

export default Options;