"use client"
import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { iOfferBannerCard, iOfferBannerCard2 } from '@/util/imageImports';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const OfferBannerSlider = () => {
    return (
        <div className="row">
            <div className="col-lg-12 mb-60 position-relative">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    className="swiper offer-banner-slider"
                >
                    <SwiperSlide className="custom-swiper-slide">
                        <div className="offer-card">
                            <Image src={iOfferBannerCard} alt="Offer Banner Card" layout="responsive" />
                            <div className="offer-card-content">
                                <span>Best Deal 20% Off</span>
                                <h2>Tourist Visa</h2>
                                <h6>Discover Great Deal</h6>
                                <a href="#" className="primary-btn1">View Details</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="custom-swiper-slide">
                        <div className="offer-card">
                            <Image src={iOfferBannerCard2} alt="Offer Banner Card 2" layout="responsive" />
                            <div className="offer-card-content style-2">
                                <span>Best Deal 20% Off</span>
                                <h2>20% Off</h2>
                                <h6>Discover Great Deal</h6>
                                <a href="#" className="primary-btn1 style-2">View Details</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="custom-swiper-slide">
                        <div className="offer-card">
                            <Image src={iOfferBannerCard2} alt="Offer Banner Card 2" layout="responsive" />
                            <div className="offer-card-content style-2">
                                <span>Best Deal 20% Off</span>
                                <h2>20% Off</h2>
                                <a href="#" className="primary-btn1 style-2">View Details</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* Swiper Navigation buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default OfferBannerSlider;
