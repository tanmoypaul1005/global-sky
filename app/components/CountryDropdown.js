"use client";
import React, { useState } from 'react';

const CountryDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="single-search-box">
            <div className="icon">
                {/* SVG Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0067 15.8571C18.5606 11.8496 18.2395 12.3496 18.3131 12.2451C19.2429 10.9336 19.7344 9.39009 19.7344 7.78125C19.7344 3.51469 16.2721 0 12 0C7.74178 0 4.26562 3.50775 4.26562 7.78125C4.26562 9.38906 4.76737 10.973 5.72766 12.3022L7.99322 15.8572C5.57095 16.2294 1.45312 17.3387 1.45312 19.7812C1.45312 20.6716 2.03428 21.9405 4.80291 22.9293C6.73612 23.6197 9.29208 24 12 24C17.0637 24 22.5469 22.5716 22.5469 19.7812C22.5469 17.3383 18.4339 16.2301 16.0067 15.8571ZM6.9023 11.5287C6.89457 11.5166 6.88649 11.5047 6.87806 11.4931C6.07898 10.3938 5.67188 9.09098 5.67188 7.78125C5.67188 4.26478 8.50341 1.40625 12 1.40625C15.4893 1.40625 18.3281 4.26605 18.3281 7.78125C18.3281 9.09309 17.9287 10.3517 17.1728 11.4221C17.1051 11.5114 17.4585 10.9624 12 19.5276L6.9023 11.5287ZM12 22.5938C6.46903 22.5938 2.85938 20.968 2.85938 19.7812C2.85938 18.9836 4.71413 17.6721 8.82413 17.1609L11.407 21.2138C11.4705 21.3135 11.5582 21.3956 11.6618 21.4525C11.7654 21.5093 11.8817 21.5391 12 21.5391C12.1182 21.5391 12.2345 21.5093 12.3381 21.4525C12.4417 21.3956 12.5294 21.3135 12.5929 21.2138L15.1757 17.1609C19.2858 17.6721 21.1406 18.9836 21.1406 19.7812C21.1406 20.9579 17.5635 22.5938 12 22.5938Z" />
                    <path d="M12 4.26562C10.0615 4.26562 8.48438 5.84273 8.48438 7.78125C8.48438 9.71977 10.0615 11.2969 12 11.2969C13.9385 11.2969 15.5156 9.71977 15.5156 7.78125C15.5156 5.84273 13.9385 4.26562 12 4.26562ZM12 9.89062C10.8369 9.89062 9.89062 8.94436 9.89062 7.78125C9.89062 6.61814 10.8369 5.67188 12 5.67188C13.1631 5.67188 14.1094 6.61814 14.1094 7.78125C14.1094 8.94436 13.1631 9.89062 12 9.89062Z" />
                </svg>
            </div>
            <div className="searchbox-input">
                <label>Country</label>
                <div className="custom-select-dropdown">
                    <div className="select-input" onClick={handleDropdownToggle}>
                        <input type="text" readOnly value={selectedCountry} />
                        <i className={`bi bi-chevron-down ${isDropdownOpen ? 'rotate-icon' : ''}`}></i>
                    </div>
                    {isDropdownOpen && (
                        <div className="custom-select-wrap two no-scroll">
                            <ul className="option-list">
                                {["Bangladesh", "India", "Nepal"].map((country) => (
                                    <li className="single-item" key={country} onClick={() => handleCountrySelect(country)}>
                                        <h6>{country}</h6>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountryDropdown;
