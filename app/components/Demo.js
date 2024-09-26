"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import { iProvideVisa, iProvideVisa2, iProvideVisa3, iProvideVisa4, iProvideVisa5 } from '@/util/imageImports';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Demo() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa2} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa3} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa4} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa5} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa2} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa3} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa4} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="provide-visa-card">
                        <div className="provide-image">
                            <Image src={iProvideVisa5} alt="" />
                        </div>
                        <div className="provide-content">
                            <div className="content-title">
                                <h4>Student Visa</h4>
                                <p>Unlock Opportunity Your Passport to Global Employment.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}