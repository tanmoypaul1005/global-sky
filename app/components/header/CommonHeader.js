import { iLogo2 } from '@/util/imageImports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommonHeader = () => {
    return (
        <div>
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
                                <Link href="/">HOME</Link>
                            </li>
                            <li className="menu-item-has-children"><a className="drop-down" href="#">Global Visa</a><i
                                className="bi bi-plus dropdown-icon"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">Services-01</a></li>
                                    <li><a href="#">Services-02</a></li>
                                    <li><a href="#">Service Details</a></li>
                                </ul>
                            </li>
                            <li><Link href="/attraction">UAE Attraction</Link></li>
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
        </div>
    )
}

export default CommonHeader