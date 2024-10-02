"use client"
import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { iOfferBannerCard, iOfferBannerCard2 } from '@/util/imageImports';


const OfferBannerSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-bullet">' + "</span>";
        },
    };


    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={false}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            // pagination={pagination}
            // modules={[Pagination]}
            className="mySwiper"

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
    );
};

export default OfferBannerSlider;



