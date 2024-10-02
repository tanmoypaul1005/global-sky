import { iLogo } from '@/util/imageImports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePageHeader = () => {
    return (
        <header className="header-area header1">
        <div className="header-logo">
            <Link href="/"><Image alt="image" classNameName="img-fluid" src={iLogo} /></Link>
        </div>
        <div className="main-menu">
            <div className="mobile-menu-logo">
                <Link href="/"><Image alt="image" className="img-fluid" src={iLogo} /></Link>
            </div>
            <ul className="menu-list">
                <li>
                    <a style={{ textDecoration: "none" }} href="#" className="drop-down">HOME </a>
                </li>
                <li className="menu-item-has-children">
                    <a style={{ textDecoration: "none" }} href="#">Global Visa</a>
                    <i className="bi bi-plus dropdown-icon"></i>
                    <ul className="sub-menu">
                        <li><Link href="/">Global Visa1</Link></li>
                        <li><Link href="/">Global Visa2</Link></li>
                        <li><Link href="/">Global Visa3</Link></li>
                    </ul>
                </li>
                <li><Link href="/attraction">UAE Attraction</Link></li>
                <li><Link href="/">holiday package</Link></li>
                <li><Link href="/">Travel insurance</Link></li>
                <li>
                    <Link href="/about" className="drop-down"> About Us</Link>
                </li>
            </ul>
            <div className="d-xl-none d-block">
                <a className="primary-btn1" href="#">
                    Consultancy
                </a>
            </div>
        </div>
        <div className="nav-right">
            <div className="btn-area d-md-flex d-none">
                <a className="primary-btn1" href="#">
                    Consultancy
                </a>
            </div>
            <div className="sidebar-button mobile-menu-btn ">
                <span></span>
            </div>
        </div>
    </header>
    )
}

export default HomePageHeader