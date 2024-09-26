"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { iAuthor, iGlobalIcon, iGoogleIcon } from '@/util/imageImports';

const ClientSpeakSlider = () => {
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
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="testimonial-content">
                            <div className="google-icon">
                                <Image src={iGoogleIcon} alt="" />
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image src={iAuthor} alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Mateo Daniel</h6>
                                    <span>a year ago</span>
                                </div>
                            </div>
                            <div className="author-text">
                                <div className="rating">
                                    <ul className="star">
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                    </ul>
                                </div>
                                <p>“I cannot express enough how satisfie I am with th web
                                    development service pr final delivery, they have exceeded.”</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="testimonial-content">
                            <div className="google-icon">
                                <Image src={iGoogleIcon} alt="" />
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image src={iAuthor} alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Mateo Daniel</h6>
                                    <span>a year ago</span>
                                </div>
                            </div>
                            <div className="author-text">
                                <div className="rating">
                                    <ul className="star">
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                    </ul>
                                </div>
                                <p>“I cannot express enough how satisfie I am with th web
                                    development service pr final delivery, they have exceeded.”</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="testimonial-content">
                            <div className="google-icon">
                                <Image src={iGoogleIcon} alt="" />
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image src={iAuthor} alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Mateo Daniel</h6>
                                    <span>a year ago</span>
                                </div>
                            </div>
                            <div className="author-text">
                                <div className="rating">
                                    <ul className="star">
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                    </ul>
                                </div>
                                <p>“I cannot express enough how satisfie I am with th web
                                    development service pr final delivery, they have exceeded.”</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>                                        <div className="swiper-slide">
                    <div className="testimonial-content">
                        <div className="google-icon">
                            <Image src={iGoogleIcon} alt="" />
                        </div>
                        <div className="author-area">
                            <div className="author-img">
                                <Image src={iAuthor} alt="" />
                            </div>
                            <div className="author-content">
                                <h6>Mateo Daniel</h6>
                                <span>a year ago</span>
                            </div>
                        </div>
                        <div className="author-text">
                            <div className="rating">
                                <ul className="star">
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                            </div>
                            <p>“I cannot express enough how satisfie I am with th web
                                development service pr final delivery, they have exceeded.”</p>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>                                        <div className="swiper-slide">
                    <div className="testimonial-content">
                        <div className="google-icon">
                            <Image src={iGoogleIcon} alt="" />
                        </div>
                        <div className="author-area">
                            <div className="author-img">
                                <Image src={iAuthor} alt="" />
                            </div>
                            <div className="author-content">
                                <h6>Mateo Daniel</h6>
                                <span>a year ago</span>
                            </div>
                        </div>
                        <div className="author-text">
                            <div className="rating">
                                <ul className="star">
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                            </div>
                            <p>“I cannot express enough how satisfie I am with th web
                                development service pr final delivery, they have exceeded.”</p>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </>
    )
}

export default ClientSpeakSlider