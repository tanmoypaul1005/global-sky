"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination,Autoplay } from 'swiper';
import VisaSlider from './VisaSlider';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination,Autoplay]);

const ProvideVisa = () => {
    return (
        <div className="provide-visa-section mb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-30">
                        <div className="section-title text-center">
                            <h2>We Provide all Visa You Need</h2>
                            <p>We understand your needs and deliver digital marketing through unique selling offer that our
                                country specialists oneto proposition.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 position-relative">
                        <VisaSlider/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvideVisa;