"use client"
import React, { useState } from 'react';

const ServiceDropdown = ({ value="",laval = "", icon = <></>, content = <></> }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div
            className="col-xl-3 col-sm-6 d-flex justify-content-center">
            <div className="single-search-box">
                <div className="icon">
                    {icon}
                </div>
                <div className="searchbox-input">
                    <label>{laval}</label>
                    <div className="custom-select-dropdown">
                        <div className="select-input" onClick={toggleDropdown}>
                            <input type="text" readonly  value={value} />
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        {isDropdownOpen && (
                            <>{content}</>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDropdown

{/* <div className="select-input">
<h6><span id="adult-qty">1</span> Adults, <span
    id="child-qty">0</span> Child</h6>
<i className="bi bi-chevron-down"></i>
</div> */}