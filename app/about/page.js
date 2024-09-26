import { iLogo2 } from '@/util/imageImports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <body className="backgraound-color">
            {/* <!-- hearder section strats here --> */}
            <header className="about-us">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <Link href="/"><Image alt="image" className="img-fluid" src={iLogo2} /></Link>
                    </div>
                    <div className="main-menu">
                        <div className="mobile-menu-logo">
                        <Link href="/"><Image alt="image" className="img-fluid" src={iLogo2} /></Link>
                        </div>
                        <ul className="menu-list">
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li className="menu-item-has-children"><a className="drop-down" href="#">Global Visa</a><i
                                className="bi bi-plus dropdown-icon"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">Services-01</a></li>
                                    <li><a href="#">Services-02</a></li>
                                    <li><a href="#">Service Details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">UAE Attraction</a></li>
                            <li><a href="#">holiday package</a></li>
                            <li>
                                <a href="#">Travel insurance</a>
                            </li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        <div className="d-xl-none d-block">
                            <a className="primary-btn2" href="#">
                                Consultancy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="btn-area d-md-flex d-none">
                        <a className="primary-btn2" href="#">
                            Consultancy
                        </a>
                    </div>
                    <div className="sidebar-button mobile-menu-btn ">
                        <span></span>
                    </div>
                </div>
            </header>
            {/* <!-- hearder section ends here --> */}
            {/* <!-- Banner section strats here --> */}
            <div className="about-breadcrum-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content">
                                <h1>About Us
                                    More</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner section ends here --> */}
            {/* <!-- About us section strats here --> */}
            <div className="about-us-section mb-70">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="about-us-content">
                                <h2>Who We Are</h2>
                                <p>Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula
                                    tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse
                                    ullamcorper, enim vitae tristique blandit, eratot augue torel tempo libero, non porta lectus
                                    tortor et elit. Quisque finibusot enim et eratourgt gravida, eu elementum turpis lacinia.
                                    Integer female go tellus ligula, attendora and condimentum.</p>
                                <div className="counter-area">
                                    <div className="customer-image">
                                        <img src="assets/image/about-us/customer-img-grp.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="number">
                                            <h6 className="counter">600</h6>
                                            <span>+</span>
                                        </div>
                                        <p className="counter-text">Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="assets/image/about-us/about-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About us section ends here --> */}
            {/* <!-- Our mission section strats here --> */}
            <div className="our-mission-section mb-120">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="our-mission-section-image">
                                <img src="assets/image/about-us/our-misson-section-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="our-mission-content">
                                <h2>Our Mission</h2>
                                <p className="our-mission-pera">Aenean feugiat ante ident augue bibendum, bibendum interdum dunatont
                                    fermentum. Integer
                                    auctor enim eget excet eleifend tristique. Suspendisse sed elit tortor. Nunc luctus, tellus
                                    acces elementum accumsan, diam dolor accumsan eros, sit amet porttitor diam ante ac augue.
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/image/about-us/icon/mission-card-icon.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Visa Processing Insure</h5>
                                            <p>Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere.
                                                Vestibulum commodo, massa eget rutrum feugiat</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/image/about-us/icon/mission-card-icon2.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Travel Any Where</h5>
                                            <p>Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere.
                                                Vestibulum commodo, massa eget rutrum feugiat</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/image/about-us/icon/mission-card-icon3.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h5>Travel Insurance Insure</h5>
                                            <p>Praesent gravida nunc at tortor cursus, molestie dapibus purus posuere.
                                                Vestibulum commodo, massa eget rutrum feugiat</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our mission section ends here --> */}
            {/* <!-- office location section strats here --> */}
            <div className="office-location-section mb-120">
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="office-location-card">
                                <h4>Dubai Office</h4>
                                <a href="#">707, Fahidi Heights (7th Floor), Al Mussalla Road, Bur Dubai Sharaf DG Metro Station Exit 4,
                                    UAE</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="office-location-card">
                                <h4>Dhaka Office</h4>
                                <a href="#">177 Mahtab Center (16th Floor), Shaheed Nazrul Islam Sarani, Vijaynagar, Dhaka-1000</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="office-location-card">
                                <h4>Cumilla Office</h4>
                                <a href="#">251 Silver Moon (1st Floor), Shaheed Samshul Haque Road, Jhautla, Cumilla-3500</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- office location section ends here --> */}
            {/* <!-- Facilities section strats here --> */}
            <div className="facilites-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-end">
                            <div className="facilites-content">
                                <div className="section-title2">
                                    <h2>We provide the best tour facilities.</h2>
                                    <p>Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed
                                        vehicula
                                        tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse
                                        ullamcorper.</p>
                                </div>
                                <div className="row g-4 mb-30">
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="facility-card">
                                            <div className="icon">
                                                <img src="assets/image/about-us/icon/facility-card-icon.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Safety first <br></br>always</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="facility-card two">
                                            <div className="icon">
                                                <img src="assets/image/about-us/icon/facility-card-icon2.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Trusted travel <br></br>guide</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="facility-card two">
                                            <div className="icon">
                                                <img src="assets/image/about-us/icon/facility-card-icon3.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Expertise and <br></br>Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="facility-card ">
                                            <div className="icon">
                                                <img src="assets/image/about-us/icon/facility-card-icon4.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Time and Stress <br></br>Savings</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="facilities-image">
                                <img src="assets/image/about-us/facilities-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default About