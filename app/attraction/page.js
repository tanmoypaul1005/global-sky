import React from 'react'
import CommonHeader from '../components/header/CommonHeader'
import { iAttraction1, iAttraction2, iAttraction3, iAttraction4, iAttraction5 } from '@/util/imageImports'
import Image from 'next/image'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"

const Attraction = () => {
    return (
        <body className="backgraound-color">
            <CommonHeader />
            <div className="about-breadcrum-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content">
                                <h1>Attraction</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner section ends here --> */}
            <div className="attraction-section mb-120">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction1} alt="" />
                                    <div className="batch">
                                        <span>Popular</span>
                                    </div>
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction2} alt="" />
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction3} alt="" />
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction4} alt="" />
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction5} alt="" />
                                    <div className="batch">
                                        <span>Popular</span>
                                    </div>
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="attraction-card">
                                <Link href="/attraction/1" className="attraction-card-img">
                                    <Image src={iAttraction1} alt="" />
                                </Link>
                                <div className="attraction-card-content">
                                    <div className="card-content-top">
                                        <div className="rating-area">
                                            <ul className="rating">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <span style={{marginTop:-13}}>(28 Review)</span>
                                        </div>
                                        <h5><Link href="/attraction/1">Sky Views Observatory</Link></h5>
                                        <ul className="feature-list">
                                            <li>
                                                <svg className="with-stroke" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                                    <path
                                                        d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Abu Dhabi
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-content-bottom">
                                        <div className="price-area">
                                            <span className="title">Starting Form:</span>
                                            <h6><sub>$</sub>70.00 <del>$100.00</del></h6>
                                            <span>Per Person</span>
                                        </div>
                                        <a href="#" className="primary-btn1">Book a Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}

export default Attraction