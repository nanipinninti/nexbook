import React from "react";
import './index.css'

const Filter = () => {
    return (
        <div className="filter-panel">
            <div className="filter-section">
                <div className="section-header">
                    <span>Capacity</span>
                    <button className="clear-button">Clear</button>
                </div>
                <div className="section-content">
                    <label className="input-container">
                        <span>Min Capacity:</span>
                        <input type="number" placeholder="e.g. 50" />
                    </label>
                    <label className="input-container">
                        <span>Max Capacity:</span>
                        <input type="number" placeholder="e.g. 200" />
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <div className="section-header">
                    <span>Price</span>
                    <button className="clear-button">Clear</button>
                </div>
                <div className="section-content">
                    <label className="input-container">
                        <span>Min Price:</span>
                        <input type="number" placeholder="e.g. 100" />
                    </label>
                    <label className="input-container">
                        <span>Max Price:</span>
                        <input type="number" placeholder="e.g. 1000" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filter;