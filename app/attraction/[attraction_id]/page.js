"use client"
import React, { useEffect } from 'react'
import CommonHeader from '@/app/components/header/CommonHeader'
import { iAttraction1, iAttraction2, iAttraction3, iAttraction4, iAttraction5 } from '@/util/imageImports'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';


// Dynamic import for Fancybox
import dynamic from 'next/dynamic';
const Fancybox = dynamic(() => import('@fancyapps/ui'), { ssr: false });
import '@fancyapps/ui/dist/fancybox/fancybox.css';


const AttractionDetails = () => {
    useEffect(() => {
        if (Fancybox) {
            Fancybox.bind("[data-fancybox]", {
                Image: {
                    fit: "contain",  // Options: 'cover', 'contain', 'inside', 'outside'
                },
                loop: true,
                buttons: [
                    "zoom",
                    "slideShow",
                    "fullScreen",
                    "thumbs",
                    "close"
                ],
            });
        }
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    
    
    return (
        <body className="backgraound-color">

            <CommonHeader />

            {/* <!-- Banner section strats here --> */}
            <div className="about-breadcrum-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content">
                                <h1>Attraction Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner section ends here --> */}
            <div className="package-details-area mb-120">
                <div className="container">
                    <div className="row">
                        <div className="co-lg-12">
                            <div className="package-img-group mb-50">
                                <div className="row align-items-center g-3">
                                    <div className="col-lg-6">
                                        <div className="gallery-img-wrap">
                                            <Image src={iAttraction1} alt="" />
                                            <a data-fancybox="gallery-01" href="/assets/image/attraction-01.png"><i
                                                className="bi bi-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 h-100">
                                        <div className="row g-3 h-100">
                                            <div className="col-6">
                                                <div className="gallery-img-wrap">
                                                    <Image src={iAttraction2} alt="" />
                                                    <a data-fancybox="gallery-01" href="/assets/image/attraction-02.png"><i
                                                        className="bi bi-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="gallery-img-wrap">
                                                    <Image src={iAttraction3} alt="" />
                                                    <a data-fancybox="gallery-01" href="/assets/image/attraction-03.png"><i
                                                        className="bi bi-eye"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="gallery-img-wrap active">
                                                    <Image src={iAttraction4} alt="" />
                                                    <button className="StartSlideShowFirstImage"><i className="bi bi-plus-lg"></i> View More Images</button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="gallery-img-wrap active">
                                                    <Image src={iAttraction5} alt="" />
                                                    <a data-fancybox="gallery-01"
                                                        href="https://www.youtube.com/watch?v=u31qwQUeGuM"><i
                                                            className="bi bi-play-circle"></i> Watch Video</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="others-image-wrap d-none">
                        <a href="/assets/image/attraction-01.png" data-fancybox="images"><Image src={iAttraction1} alt="" /></a>
                        <a href="/assets/image/attraction-02.png" data-fancybox="images"><Image src={iAttraction1} alt="" /></a>
                        <a href="/assets/image/attraction-03.png" data-fancybox="images"><Image src={iAttraction1} alt="" /></a>
                        <a href="/assets/image/attraction-04.png" data-fancybox="images"><Image src={iAttraction1} alt="" /></a>
                        <a href="/assets/image/attraction-05.png" data-fancybox="images"><Image src={iAttraction1} alt="" /></a>
                    </div>
                    <div className="row g-xl-4 gy-5">
                        <div className="col-xl-8">
                            <h2>Sky Views Observatory</h2>
                            <div className="tour-price">
                                <h3>$175/</h3><span>per person</span>
                            </div>
                            <ul className="tour-info-metalist">
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z">
                                        </path>
                                    </svg>
                                    Italy & France.
                                </li>
                            </ul>
                            <p>Across from Burj Khalifa in Downtown Dubai, youll find the futuristic-looking Sky Views podium. It connects the top of The Address Sky View, a pair of 50-story elliptical dual towers (237.45 and 260.85 meters in height, respectively), which rise from a curved plinth.</p>
                            <h4>Included and Excluded</h4>
                            <div className="includ-and-exclud-area mb-20">
                                <ul>
                                    <li><i className="bi bi-check-lg"></i> Ski touring involves exploring remote, off-piste terrains away from ski resorts.</li>
                                    <li><i className="bi bi-check-lg"></i> A full-body workout combining skiing, hiking, and endurance.</li>
                                    <li><i className="bi bi-check-lg"></i> Engaging in challenging ascents and thrilling descents on various terrains.</li>
                                    <li><i className="bi bi-check-lg"></i> Enjoying pristine landscapes and serene natural environments.</li>
                                    <li><i className="bi bi-check-lg"></i> Carrying safety gear (avalanche transceivers, shovels, probes) and knowledge of rescue procedures.</li>
                                </ul>
                                <ul className="exclud">
                                    <li><i className="bi bi-x-lg"></i> Ski touring typically avoids the amenities and maintained slopes found in ski resorts.</li>
                                    <li><i className="bi bi-x-lg"></i> It steers clear of crowded slopes and lift systems.</li>
                                    <li><i className="bi bi-x-lg"></i> Ski touring often involves more challenging and varied terrains, less suitable for beginners.</li>
                                    <li><i className="bi bi-x-lg"></i> In case of emergencies, immediate assistance may not be readily available compared to ski resorts.</li>
                                    <li><i className="bi bi-x-lg"></i>  Unlike ski resorts, conditions in backcountry areas can vary significantly and may not be groomed or controlled.</li>
                                </ul>
                            </div>
                            <div className="highlight-tour mb-20">
                                <h4>Highlights of the Place</h4>
                                <ul style={{
                                    marginLeft: "-30px"
                                }}>
                                    <li><span><i className="bi bi-check"></i></span> Immersion in breathtaking, untouched landscapes away from crowded ski resorts.</li>
                                    <li><span><i className="bi bi-check"></i></span> Combining endurance and skill while exploring diverse terrains.</li>
                                    <li><span><i className="bi bi-check"></i></span> Accessing pristine, less-traveled areas for a unique adventure.</li>
                                    <li><span><i className="bi bi-check"></i></span> Strengthening camaraderie among fellow skiers in a shared outdoor experience.</li>
                                    <li><span><i className="bi bi-check"></i></span> Accomplishing challenging ascents and thrilling descents in natural settings.</li>
                                    <li><span><i className="bi bi-check"></i></span> Feeling the elements and connecting with the mountains in a profound way.</li>
                                    <li><span><i className="bi bi-check"></i></span> Experiencing the freedom of traveling through snowy wilderness on skis.</li>
                                </ul>
                            </div>
                            <div className="accordion tour-plan" id="tourPlan">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Know before you go
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                                        <div className="accordion-body">
                                            <ul style={{
                                                marginLeft: "-30px"
                                            }}>
                                                <li><i className="bi bi-check-lg"></i> Passport or Emirates ID is mandatory to be carried.</li>
                                                <li><i className="bi bi-check-lg"></i> <strong>Weight criteria :</strong> Guests weighing from 30 to 150 kgs will be allowed for the glass slide</li>
                                                <li><i className="bi bi-check-lg"></i> <strong>Height criteria :</strong> Guests with height ranging from 120 cm to 200 cm will be allowed for the glass slide</li>
                                                <li><i className="bi bi-check-lg"></i> <strong>Weight criteria :</strong> Guests weighing from 30 – 120 kg will be allowed for the Edge Walk</li>
                                                <li><i className="bi bi-check-lg"></i> <strong>Height criteria :</strong> Guests with height ranging from 135 cm – 200 cm. will be allowed for the Edge Walk </li>
                                                <li><i className="bi bi-check-lg"></i> You are required to wear modest and comfortable clothing (no loose dresses, skirts, flip flops, loose footwear, or long and loose scarves).</li>
                                                <li><i className="bi bi-check-lg"></i> Please notify the Sky Views staff of any pre-existing health conditions, including any physical limitations or medical conditions including but not limited to; neck weakness, back weakness, broken bones, heart conditions, nervous disorders, motion sickness, epilepsy, or if pregnant.</li>
                                                <li><i className="bi bi-check-lg"></i> Subject to Availability</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Child policy
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#tourPlan">
                                        <div className="accordion-body">
                                            <ul>
                                                <li><i className="bi bi-check-lg"></i>Children under 3 years will be considered as Infant and entry will be free of cost.</li>
                                                <li><i className="bi bi-check-lg"></i>Children 4 to 12 years will be charged as child rate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Facilities
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#tourPlan">
                                        <div className="accordion-body">
                                            <ul>
                                                <li><i className="bi bi-check-lg"></i> Washroom</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-location">
                                <h4>Location Map</h4>
                                <div className="map-area mb-30">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193325.0481540361!2d-74.06757856146028!3d40.79052383652264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1660366711448!5m2!1sen!2sbd" width="600" height="450"
                                        // style="border:0;" 
                                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="review-wrapper">
                                <h4>Customer Review</h4>
                                <div className="review-box">
                                    <div className="total-review">
                                        <h2>9.5</h2>
                                        <div className="review-wrap">
                                            <ul style={{
                                                marginLeft: "-30px"
                                            }} className="star-list">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-half"></i></li>
                                            </ul>
                                            <span>2590 Reviews</span>
                                        </div>
                                    </div>
                                    {/* <!-- modal for review --> */}
                                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabindex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"><i className="bi bi-x-lg"></i></button>
                                                    <div className="row g-2">
                                                        <div className="col-lg-8">
                                                            <div className="review-from-wrapper">
                                                                <h4>Write Your Review</h4>
                                                                <form>
                                                                    <div className="row">
                                                                        <div className="col-md-6 mb-20">
                                                                            <div className="form-inner">
                                                                                <label>Name</label>
                                                                                <input type="text" placeholder="Enter Your Name:" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 mb-20">
                                                                            <div className="form-inner">
                                                                                <label>Email</label>
                                                                                <input type="email" placeholder="Enter Your Email:" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12 mb-20">
                                                                            <div className="form-inner">
                                                                                <label>Review*</label>
                                                                                <textarea name="message"
                                                                                    placeholder="Enter Your Review..."></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12 mb-40">
                                                                            <div className="star-rating-wrapper">
                                                                                <ul className="star-rating-list">
                                                                                    <li>
                                                                                        <div className="rating-container "
                                                                                            data-rating="0">
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                        </div>
                                                                                        <span>Overall</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="rating-container"
                                                                                            data-rating="0">
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                        </div>
                                                                                        <span>Transport</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="rating-container"
                                                                                            data-rating="0">
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                        </div>
                                                                                        <span>Food</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="rating-container"
                                                                                            data-rating="0">
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                        </div>
                                                                                        <span>Destination</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="rating-container"
                                                                                            data-rating="0">
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                            <i
                                                                                                className="bi bi-star-fill star-icon"></i>
                                                                                        </div>
                                                                                        <span>Hospitality</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <button type="submit" className="primary-btn1">Submit
                                                                                Now</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 d-lg-flex d-none">
                                                            <div className="modal-form-image">
                                                                <Image src={iAttraction1} alt="image" className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="primary-btn1" data-bs-toggle="modal" href="#exampleModalToggle" role="button">GIVE A
                                        RATING</a>
                                </div>
                                <div className="review-area">
                                    <ul className="comment">
                                        <li>
                                            <div className="single-comment-area">
                                                <div className="author-img">
                                                    <Image src={iAttraction1} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="author-name-deg">
                                                        <h6>Mr. Bowmik Haldar,</h6>
                                                        <span>05 June, 2023</span>
                                                    </div>
                                                    <ul className="review-item-list">
                                                        <li>
                                                            <span>Overall</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list ">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Transport</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Food</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Destination</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Hospitality</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <p>A solution that we came up with is to think of sanitary pads packaging as you
                                                        would tea. Tea comes individually packaged </p>
                                                    <div className="replay-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11"
                                                            viewBox="0 0 14 11">
                                                            <path
                                                                d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z">
                                                            </path>
                                                        </svg>
                                                        Reply (01)
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="comment-replay">
                                                <li>
                                                    <div className="single-comment-area">
                                                        <div className="author-img">
                                                            <Image src={iAttraction1} alt="" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="author-name-deg">
                                                                <h6>Author Response,</h6>
                                                                <span>05 June, 2023</span>
                                                            </div>
                                                            <p>Thanks for your review.</p>
                                                            <div className="replay-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11"
                                                                    viewBox="0 0 14 11">
                                                                    <path
                                                                        d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z">
                                                                    </path>
                                                                </svg>
                                                                Reply
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="single-comment-area">
                                                <div className="author-img">
                                                    <Image src={iAttraction1} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="author-name-deg">
                                                        <h6>Srileka Panday,</h6>
                                                        <span>05 June, 2023</span>
                                                    </div>
                                                    <ul className="review-item-list">
                                                        <li>
                                                            <span>Overall</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Transport</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Food</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Destination</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Hospitality</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <p>A solution that we came up with is to think of sanitary pads packaging as you
                                                        would tea. Tea comes individually packaged </p>
                                                    <div className="replay-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11"
                                                            viewBox="0 0 14 11">
                                                            <path
                                                                d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z">
                                                            </path>
                                                        </svg>
                                                        Reply
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-comment-area">
                                                <div className="author-img">
                                                    <Image src={iAttraction1} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="author-name-deg">
                                                        <h6>Mr. Bowmik Haldar,</h6>
                                                        <span>05 June, 2023</span>
                                                    </div>
                                                    <ul className="review-item-list">
                                                        <li>
                                                            <span>Overall</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Transport</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Food</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Destination</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Hospitality</span>
                                                            <ul style={{
                                                                marginLeft: "-30px"
                                                            }} className="star-list">
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-fill"></i></li>
                                                                <li><i className="bi bi-star-half"></i></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <p>However, here are some well-regarded car dealerships known for their customer
                                                        service, inventory, and overall reputation. Its always a good idea to
                                                        research and read reviews specific...</p>
                                                    <div className="replay-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11"
                                                            viewBox="0 0 14 11">
                                                            <path
                                                                d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z">
                                                            </path>
                                                        </svg>
                                                        Reply
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="booking-form-wrap mb-30">
                                <h4>Reserve Your Activity</h4>
                                <p>Secure your spot for an unforgettable nature adventure now!</p>
                                <div className="nav nav-pills " role="tablist">
                                    <button className="nav-link show active" id="v-pills-booking-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-booking" type="button" role="tab"
                                        aria-controls="v-pills-booking" aria-selected="true">Online Booking</button>
                                    <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-contact" type="button" role="tab"
                                        aria-controls="v-pills-contact" aria-selected="false">Inquiry Form</button>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent2">
                                    <div className="tab-pane fade active show" id="v-pills-booking" role="tabpanel"
                                        aria-labelledby="v-pills-booking-tab">
                                        <div className="sidebar-booking-form">
                                            <form>
                                                <div className="tour-date-wrap mt-50  mb-50">
                                                    <h6>Select Your Booking Date:</h6>
                                                    <div className="form-inner mb-20">
                                                        <div className="form-group">
                                                            <input type="text" name="inOut" />
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                <path d="M10.3125 7.03125C10.3125 6.90693 10.3619 6.7877 10.4498 6.69979C10.5377 6.61189 10.6569 6.5625 10.7812 6.5625H11.7188C11.8431 6.5625 11.9623 6.61189 12.0502 6.69979C12.1381 6.7877 12.1875 6.90693 12.1875 7.03125V7.96875C12.1875 8.09307 12.1381 8.2123 12.0502 8.30021C11.9623 8.38811 11.8431 8.4375 11.7188 8.4375H10.7812C10.6569 8.4375 10.5377 8.38811 10.4498 8.30021C10.3619 8.2123 10.3125 8.09307 10.3125 7.96875V7.03125Z">
                                                                </path>
                                                                <path d="M3.28125 0C3.40557 0 3.5248 0.049386 3.61271 0.137294C3.70061 0.225201 3.75 0.34443 3.75 0.46875V0.9375H11.25V0.46875C11.25 0.34443 11.2994 0.225201 11.3873 0.137294C11.4752 0.049386 11.5944 0 11.7188 0C11.8431 0 11.9623 0.049386 12.0502 0.137294C12.1381 0.225201 12.1875 0.34443 12.1875 0.46875V0.9375H13.125C13.6223 0.9375 14.0992 1.13504 14.4508 1.48667C14.8025 1.83831 15 2.31522 15 2.8125V13.125C15 13.6223 14.8025 14.0992 14.4508 14.4508C14.0992 14.8025 13.6223 15 13.125 15H1.875C1.37772 15 0.900806 14.8025 0.549175 14.4508C0.197544 14.0992 0 13.6223 0 13.125V2.8125C0 2.31522 0.197544 1.83831 0.549175 1.48667C0.900806 1.13504 1.37772 0.9375 1.875 0.9375H2.8125V0.46875C2.8125 0.34443 2.86189 0.225201 2.94979 0.137294C3.0377 0.049386 3.15693 0 3.28125 0V0ZM1.875 1.875C1.62636 1.875 1.3879 1.97377 1.21209 2.14959C1.03627 2.3254 0.9375 2.56386 0.9375 2.8125V13.125C0.9375 13.3736 1.03627 13.6121 1.21209 13.7879C1.3879 13.9637 1.62636 14.0625 1.875 14.0625H13.125C13.3736 14.0625 13.6121 13.9637 13.7879 13.7879C13.9637 13.6121 14.0625 13.3736 14.0625 13.125V2.8125C14.0625 2.56386 13.9637 2.3254 13.7879 2.14959C13.6121 1.97377 13.3736 1.875 13.125 1.875H1.875Z">
                                                                </path>
                                                                <path d="M2.34375 3.75C2.34375 3.62568 2.39314 3.50645 2.48104 3.41854C2.56895 3.33064 2.68818 3.28125 2.8125 3.28125H12.1875C12.3118 3.28125 12.431 3.33064 12.519 3.41854C12.6069 3.50645 12.6562 3.62568 12.6562 3.75V4.6875C12.6562 4.81182 12.6069 4.93105 12.519 5.01896C12.431 5.10686 12.3118 5.15625 12.1875 5.15625H2.8125C2.68818 5.15625 2.56895 5.10686 2.48104 5.01896C2.39314 4.93105 2.34375 4.81182 2.34375 4.6875V3.75Z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="booking-form-item-type mb-45">
                                                    <div className="number-input-item adults">
                                                        <label className="number-input-lable">Adult:<span>
                                                        </span><span> $60 <del>$80</del></span></label>
                                                        <div className="quantity-counter">
                                                            <a href="#" className="quantity__minus"><i className="bi bi-dash"></i></a>
                                                            <input name="quantity" type="text" className="quantity__input"
                                                                value="04" />
                                                            <a href="#" className="quantity__plus"><i className="bi bi-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="number-input-item children">
                                                        <label className="number-input-lable">Children:<span>
                                                        </span><span>$15</span></label>
                                                        <div className="quantity-counter">
                                                            <a href="#" className="quantity__minus"><i className="bi bi-dash"></i></a>
                                                            <input name="quantity" type="text" className="quantity__input"
                                                                value="04" />
                                                            <a href="#" className="quantity__plus"><i className="bi bi-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="booking-form-item-type">
                                                    <h5>Other Extra Services</h5>
                                                    <div className="checkbox-container">
                                                        <label className="check-container">Home Pickup
                                                            <input type="checkbox" className="services_check" name="services_list[]"
                                                                value="0" />
                                                            <span className="checkmark"></span>
                                                            <span className="price">$10 </span>
                                                        </label>
                                                        <label className="check-container">Night Food
                                                            <input type="checkbox" className="services_check" name="services_list[]"
                                                                value="1" />
                                                            <span className="checkmark"></span>
                                                            <span className="price">$15 </span>
                                                        </label>
                                                        <label className="check-container">Seaplane Fyling
                                                            <input type="checkbox" className="services_check" name="services_list[]"
                                                                value="2" />
                                                            <span className="checkmark"></span>
                                                            <span className="price">$20 </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="booking-form-item-type">
                                                    <div className="single-total mb-30">
                                                        <span>Adult</span>
                                                        <ul>
                                                            <li><strong>$195</strong> PRICE</li>
                                                            <li><i className="bi bi-x-lg"></i></li>
                                                            <li><strong>02</strong> QTY</li>
                                                            <li><i className="bi bi-x-lg"></i></li>
                                                            <li><strong>04</strong> DAYS</li>
                                                        </ul>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15"
                                                            viewBox="0 0 27 15">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                                                        </svg>
                                                        <div className="total">$390</div>
                                                    </div>
                                                    <div className="single-total mb-30">
                                                        <span>Children</span>
                                                        <ul>
                                                            <li><strong>$195</strong> PRICE</li>
                                                            <li><i className="bi bi-x-lg"></i></li>
                                                            <li><strong>02</strong> QTY</li>
                                                            <li><i className="bi bi-x-lg"></i></li>
                                                            <li><strong>04</strong> DAYS</li>
                                                        </ul>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15"
                                                            viewBox="0 0 27 15">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z" />
                                                        </svg>
                                                        <div className="total">$390</div>
                                                    </div>
                                                </div>
                                                <div className="total-price"><span>Total Price:</span> $470</div>
                                                <button type="submit" className="primary-btn1 two">Book Now</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-contact" role="tabpanel"
                                        aria-labelledby="v-pills-contact-tab">
                                        <div className="sidebar-booking-form">
                                            <form>
                                                <div className="form-inner mb-20">
                                                    <label>Full Name <span>*</span></label>
                                                    <input type="text" placeholder="Enter your full name" />
                                                </div>
                                                <div className="form-inner mb-20">
                                                    <label>Email Address <span>*</span></label>
                                                    <input type="email" placeholder="Enter your email address" />
                                                </div>
                                                <div className="form-inner mb-20">
                                                    <label>Phone Number  <span>*</span></label>
                                                    <input type="text" placeholder="Enter your phone number" />
                                                </div>
                                                <div className="form-inner mb-30">
                                                    <label>Write Your Massage <span>*</span></label>
                                                    <textarea placeholder="Write your quiry"></textarea>
                                                </div>
                                                <div className="form-inner">
                                                    <button type="submit" className="primary-btn1 two">Submit Now</button>
                                                </div>
                                            </form>
                                        </div>
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

export default AttractionDetails