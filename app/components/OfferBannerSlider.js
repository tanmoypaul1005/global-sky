"use client"
import { iOfferBannerCard, iOfferBannerCard2 } from '@/util/imageImports';
import Image from 'next/image'; // Assuming you're using Next.js


const OfferBannerSlider = () => {
    return (
        <div class="row">
            <div class="col-lg-12 mb-60 position-relative">
                <div class="swiper offer-banner-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="offer-card">
                                <Image src={iOfferBannerCard} alt="" />
                                <div class="offer-card-content">
                                    <span>Best Deal 20% Off</span>
                                    <h2>Tourist Visa</h2>
                                    <h6>Discover Great Deal</h6>
                                    <a href="#" class="primary-btn1">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="offer-card">
                                <Image src={iOfferBannerCard2} alt="" />
                                {/* <img src="assets/image/offer-banner-card-image2.png" alt=""/> */}
                                <div class="offer-card-content style-2">
                                    <span>Best Deal 20% Off</span>
                                    <h2>20% Off</h2>
                                    <h6>Discover Great Deal</h6>
                                    <a href="#" class="primary-btn1 style-2">View Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="offer-card">
                                <Image src={iOfferBannerCard2} alt="" />
                                {/* <img src="assets/image/offer-banner-card-image2.png" alt=""/> */}
                                <div class="offer-card-content style-2">
                                    <span>Best Deal 20% Off</span>
                                    <h2>20% Off</h2>
                                    <h6>Discover Great Deal</h6>
                                    <a href="#" class="primary-btn1 style-2">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination1"></div>
            </div>
        </div>
    );
};

export default OfferBannerSlider;
