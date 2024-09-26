import Image from "next/image";
import  "bootstrap/dist/css/bootstrap.min.css"
import { iAccordionImage,iCountryImage, iCountryImage2, iCountryImage3, iCountryImage4, iCountryImage5, iCountryImage6, iCountryImage7, iDestinationImage, iDestinationImage2, iDestinationImage3, iDestinationImage4, iFlag, iFlag2, iFlag3, iFlag4, iFlag5, iFlag6, iFlag7, iFlag8, iLogo, iVisaSection } from "@/util/imageImports";
import "../app/css/style.css"
import OfferBannerSlider from "./components/OfferBannerSlider";
import ClientSpeak from "./components/ClientSpeak";
import ProvideVisa from "./components/Providevisa";
import Link from "next/link";
import Service from "./components/service/Service";
export default function Home() {

    const backgroundImageStyle = {
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://i.imgur.com/poXW1wg.jpeg)'
      };

  return (
    <body className="backgraound-color">

    {/* <!-- hearder section strats here --> */}
    <header className="header-area header1">
        <div className="header-logo">
            <Link href="/"><Image alt="image"  classNameName="img-fluid" src={iLogo}/></Link>
        </div>
        <div className="main-menu">
            <div className="mobile-menu-logo">
                <Link href="/"><Image alt="image" className="img-fluid" src={iLogo}/></Link>
            </div>
            <ul className="menu-list">
                <li>
                    <a style={{textDecoration:"none"}} href="#" className="drop-down">HOME </a>
                </li>
                <li className="menu-item-has-children">
                    <a style={{textDecoration:"none"}} href="#">Global Visa</a>
                    <i className="bi bi-plus dropdown-icon"></i>
                    <ul className="sub-menu">
                        <li><Link  href="/">Global Visa1</Link></li>
                        <li><Link  href="/">Global Visa2</Link></li>
                        <li><Link  href="/">Global Visa3</Link></li>
                    </ul>
                </li>
                <li><Link  href="/attraction">UAE Attraction</Link></li>
                <li><Link  href="/">holiday package</Link></li>
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
    {/* <!-- hearder section ends here --> */}

    {/* <!-- Banner section strats here --> */}
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

    <Service/>
    
    {/* <!-- Destination section ends here --> */}
    {/* <!-- Banner section ends here --> */}
    {/* <!-- Destination section strats here --> */}
    <div className="destination-section mb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-60">
                    <div className="section-title style-2 text-center">
                        <h2>Most Requested Visas</h2>
                        <p>We understand your needs and deliver digital marketing through unique selling oneto
                            proposition.</p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <Link href="/visa/1" className="col-lg-3 col-sm-6">
                    <div className="destination-card">
                        <div className="destination-image">
                            <Image src={iDestinationImage} alt=""/>
                        </div>
                        <div className="destination-card-content">
                            <div className="content-text">
                                <h5><a href="#">Schengen Visa</a></h5>
                                <a href="#" className="whatsup-icon">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="white" />
                                        <path
                                            d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                            fill="url(#paint0_linear_285_753)" />
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="url(#paint1_linear_285_753)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/visa/1"  className="col-lg-3 col-sm-6">
                    <div className="destination-card">
                        <div className="destination-image">
                            <Image height={500} width={500} src={iDestinationImage2} alt=""/>
                        </div>
                        <div className="destination-card-content">
                            <div className="content-text">
                                <h5><a href="#">Dubai Visa</a></h5>
                                <a href="#" className="whatsup-icon">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="white" />
                                        <path
                                            d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                            fill="url(#paint0_linear_285_753)" />
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="url(#paint1_linear_285_753)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/visa/1"  className="col-lg-3 col-sm-6">
                    <div className="destination-card">
                        <div className="destination-image">
                            <Image src={iDestinationImage3} alt=""/>
                        </div>
                        <div className="destination-card-content">
                            <div className="content-text">
                                <h5><a href="#">USA Visa</a></h5>
                                <a href="#" className="whatsup-icon">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="white" />
                                        <path
                                            d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                            fill="url(#paint0_linear_285_753)" />
                                        <path
                                            d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                            fill="url(#paint1_linear_285_753)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                            fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/visa/1"  className="col-lg-3 col-sm-6">
                    <div className="destination-card">
                        <div className="destination-image">
                            <Image src={iDestinationImage4} alt=""/>
                        </div>
                        <div className="destination-card-content">
                            <div className="content-text">
                                <h5><a href="#">Canada Visa</a></h5>
                                <a href="#" className="whatsup-icon">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_285_753)">
                                            <path
                                                d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                fill="white" />
                                            <path
                                                d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                fill="url(#paint0_linear_285_753)" />
                                            <path
                                                d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                fill="url(#paint1_linear_285_753)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_285_753" x1="12.9999" y1="25.5503"
                                                x2="12.9999" y2="0.450422" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#20B038" />
                                                <stop offset="1" stop-color="#60D66A" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_285_753" x1="12.9998" y1="26" x2="12.9998"
                                                y2="0" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#F9F9F9" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <clipPath id="clip0_285_753">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    {/* <!-- Destination section ends here --> */}
    {/* <!-- Offer section strats here --> */}
    <div class="offer-section mb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="offer-banner-title">
                        <h2>Exclusive Offers</h2>
                    </div>
                </div>
            </div>
            <OfferBannerSlider/>
        </div>
    </div>
    {/* <!-- Offer section ends here --> */}

    {/* <!-- Country section strats here --> */}
    <div className="country-section mb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-60">
                    <div className="section-title text-center">
                        <h2>Talk with our country specialists</h2>
                        <p>We understand your needs and deliver digital marketing through unique selling offer that our
                            country specialists oneto proposition.</p>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Schengen</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag} alt=""/>
                                        </div>
                                        <h4>Schengen</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag2} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Dubai</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag2} alt=""/>
                                        </div>
                                        <h4>Dubai</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage2} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag3} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>United states</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag3} alt=""/>
                                        </div>
                                        <h4>United states</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage3} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag4} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>United Kingdom</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag4} alt=""/>
                                        </div>
                                        <h4>United Kingdom</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage4} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag5} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Canada</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag5} alt=""/>
                                        </div>
                                        <h4>Canada</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage5} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag6} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Japan</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag6} alt=""/>
                                        </div>
                                        <h4>Japan</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage6} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag7} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Singapore</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag7} alt=""/>
                                        </div>
                                        <h4>Singapore</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={iCountryImage7} alt=""/></a>
                                <div className="flag-icon">
                                    <Image src={iFlag8} alt=""/>
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>Malaysia</h4>
                                <p>Tourist and Business Visa</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={iFlag8} alt=""/>
                                        </div>
                                        <h4>Malaysia</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>“We understand your need verya deliver digital marketing through specialists
                                            one
                                            position”.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="white" />
                                                <path
                                                    d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z"
                                                    fill="url(#paint0_linear_285_753)" />
                                                <path
                                                    d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z"
                                                    fill="url(#paint1_linear_285_753)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Country section ends here --> */}
    {/* <!-- Visa section strats here --> */}
    <div className="visa-section mb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 position-relative ">
                    <div className="slider-btn-groups">
                        <div className="slider-btn prev-1">
                            <svg width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 6.75C20.4142 6.75 20.75 6.41421 20.75 6C20.75 5.58579 20.4142 5.25 20 5.25L20 6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989594 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.6967L0.469669 5.46967ZM20 5.25L1 5.25L1 6.75L20 6.75L20 5.25Z" />
                            </svg>
                        </div>
                        <div className="slider-btn next-1">
                            <svg width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6.75L20 6.75V5.25L1 5.25L1 6.75Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="swiper visa-card-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="visa-section-card">
                                    <Image src={iVisaSection} alt=""/>
                                    <div className="visa-card-content">
                                        <span>Student Visa</span>
                                        <h2>Get Dubai Visa</h2>
                                        <p>“We understand your need verya deliver digital”.</p>
                                        <a href="#" className="primary-btn1">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="visa-section-card">
                                    <Image src={iVisaSection} alt=""/>
                                    <div className="visa-card-content">
                                        <span>Student Visa</span>
                                        <h2>Get Dubai Visa</h2>
                                        <p>“We understand your need verya deliver digital”.</p>
                                        <a href="#" className="primary-btn1">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="visa-section-card">
                                    <Image src={iVisaSection} alt=""/>
                                    <div className="visa-card-content">
                                        <span>Student Visa</span>
                                        <h2>Get Dubai Visa</h2>
                                        <p>“We understand your need verya deliver digital”.</p>
                                        <a href="#" className="primary-btn1">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Visa section ends here --> */}

    {/* <!-- provide visa section strats here --> */}
    <ProvideVisa/>

    {/* <!-- provide visa section ends here --> */}
    {/* <!-- Testimonial section strats here --> */}
     <ClientSpeak/>
    {/* <!-- Testimonial section ends here -->
    <!-- accordion section strats here --> */}
    <div className="accordion-with-tab-section mb-90">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="accordion-image">
                        <Image src={iAccordionImage} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="accordion-with-tab-content">
                        <h2>Why You Should Choose Our Visa Services.</h2>

                        <div className="accordion-with-tab-wrap">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane" type="button" role="tab"
                                        aria-controls="home-tab-pane" aria-selected="true">Visa</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane" type="button" role="tab"
                                        aria-controls="profile-tab-pane" aria-selected="false">Flight</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#contact-tab-pane" type="button" role="tab"
                                        aria-controls="contact-tab-pane" aria-selected="false">Hotel</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                    aria-labelledby="home-tab" tabindex="0">
                                    <div className="faq-content">
                                        <div className="accordion" id="accordionGeneral">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingOne">
                                                    <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseOne"
                                                        aria-expanded="true" aria-controls="faqcollapseOne">
                                                        01. How do I book a Visa with your agency?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo"
                                                        aria-expanded="false" aria-controls="faqcollapseTwo">
                                                        02. What payment methods do you accept?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseThree"
                                                        aria-expanded="false" aria-controls="faqcollapseThree">
                                                        03. What is your cancellation policy?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingThree"
                                                    data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseFour"
                                                        aria-expanded="false" aria-controls="faqcollapseFour">
                                                        04. Can I make changes my reservation after booking?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                    aria-labelledby="profile-tab" tabindex="0">
                                    <div className="faq-content">
                                        <div className="accordion" id="accordionGeneral">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingOne">
                                                    <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseOne"
                                                        aria-expanded="true" aria-controls="faqcollapseOne">
                                                        01. How do I book a Visa with your agency?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo"
                                                        aria-expanded="false" aria-controls="faqcollapseTwo">
                                                        02. What payment methods do you accept?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseThree"
                                                        aria-expanded="false" aria-controls="faqcollapseThree">
                                                        03. What is your cancellation policy?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingThree"
                                                    data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseFour"
                                                        aria-expanded="false" aria-controls="faqcollapseFour">
                                                        04. Can I make changes my reservation after booking?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                    aria-labelledby="contact-tab" tabindex="0">
                                    <div className="faq-content">
                                        <div className="accordion" id="accordionGeneral">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingOne">
                                                    <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseOne"
                                                        aria-expanded="true" aria-controls="faqcollapseOne">
                                                        01. How do I book a Visa with your agency?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo"
                                                        aria-expanded="false" aria-controls="faqcollapseTwo">
                                                        02. What payment methods do you accept?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseThree"
                                                        aria-expanded="false" aria-controls="faqcollapseThree">
                                                        03. What is your cancellation policy?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingThree"
                                                    data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="faqheadingFour">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqcollapseFour"
                                                        aria-expanded="false" aria-controls="faqcollapseFour">
                                                        04. Can I make changes my reservation after booking?
                                                    </button>
                                                </h2>
                                                <div id="faqcollapseFour" className="accordion-collapse collapse"
                                                    aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                    <div className="accordion-body">
                                                        Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                        per inci auctor tol euismod sit amet non ipsul growing this
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- accordion section ends here --> */}



</body>
  );
}
