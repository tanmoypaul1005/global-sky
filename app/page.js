"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"
import { iDestinationImage, iDestinationImage2, iDestinationImage3, iDestinationImage4 } from "@/util/imageImports";
import OfferBannerSlider from "./components/OfferBannerSlider";
import ClientSpeak from "./components/clientSpeak/ClientSpeak";
import ProvideVisa from "./components/providevisa/Providevisa";
import Link from "next/link";
import Service from "./components/service/Service";
import VisaAccordion from "./components/VisaAccordion";
import Footer from './components/Footer';
import HomePageHeader from './components/homePage/HomePageHeader';
import VisaBanner from './components/homePage/VisaBanner';
import CountrySection from './components/homePage/CountrySection';
import DestinationSection from './components/homePage/DestinationSection';


export default function Home() {

    const backgroundImageStyle = {
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://i.imgur.com/poXW1wg.jpeg)'
    };

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the server
    }

    return (
        <body className="backgraound-color">

            <HomePageHeader />

            <div className="home1-banner-area">
                <div className="swiper banner-section-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="home1-banner-wrapper"
                                style={backgroundImageStyle}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="home1-banner-content">
                                                <h1>Explore the world <span>With Us!</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="home1-banner-wrapper"
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="home1-banner-content">
                                                <h1>Explore the world <span>With Us!</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="home1-banner-wrapper" style={backgroundImageStyle}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="home1-banner-content">
                                                <h1>Explore the world <span>With Us!</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Service />

            <DestinationSection />

            <div className="offer-section mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="offer-banner-title">
                                <h2>Exclusive Offers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-60 position-relative">
                            <OfferBannerSlider />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Offer section ends here --> */}


            <CountrySection />

            <VisaBanner />

            <ProvideVisa />

            <ClientSpeak />

            <VisaAccordion />

            <Footer />
        </body>
    );
}
