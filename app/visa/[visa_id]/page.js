"use client"
import React, { useState } from 'react'
import CommonHeader from '@/app/components/header/CommonHeader'
import { iFlagImage, iVisaScreenshot } from '@/util/imageImports'
import Image from 'next/image'

const VisaDetails = () => {

    const [currentStep, setCurrentStep] = useState("details");

    const [selectIndex, setSelectIndex] = useState(null);


    const accordionData = [
        {
            id: 'faqheadingOne',
            target: '#faqcollapseOne',
            title: '1. Service Holder',
            content: [
                {
                    number: '01.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                },
                {
                    number: '02.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                }
            ]
        },
        {
            id: 'faqheadingTwo',
            target: '#faqcollapseTwo',
            title: '02. What payment methods do you accept?',
            content: [
                {
                    number: '01.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                },
                {
                    number: '02.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                }
            ]
        },
        {
            id: 'faqheadingThree',
            target: '#faqcollapseThree',
            title: '03. What is your cancellation policy?',
            content: [
                {
                    number: '01.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                },
                {
                    number: '02.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                }
            ]
        },
        {
            id: 'faqheadingFour',
            target: '#faqcollapseFour',
            title: '04. Can I make changes to my reservation after booking?',
            content: [
                {
                    number: '01.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                },
                {
                    number: '02.',
                    title: 'Passport',
                    description: 'Original passport required with;',
                    list: [
                        'a. Minimum 6 months validity',
                        'b. At least 2 Blank pages'
                    ],
                    note: 'Note: Old passport required (if any)'
                }
            ]
        }
    ];


    return (
        <body className="backgraound-color">
            <CommonHeader />
            {/* <!-- Banner section strats here --> */}
            <div className="about-breadcrum-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content">
                                <span>Tourist Visa</span>
                                <h1>Get Your
                                    Dubai Visa</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner section ends here -->
            <!-- Modal --> */}
            <div className="modal fade visa-apply-modal" id="visa-apply-modal" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="visa-apply-modalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content form-wapper">
                        <button type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close"><i
                            className="bi bi-x-circle"></i></button>
                        <div className="modal-header">
                            <ul className="visa-form-step" id="progressbar">
                                <li>Step 1: Travel Date</li>
                                <li>Step 2: Visa Type</li>
                                <li>Step 3: Personal Info</li>
                            </ul>
                        </div>
                        <div className="modal-body">
                            <form id="msform" className="visa-form">
                                <fieldset className="postcode">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Travel Details</h4>
                                                <p>Provide your travel details.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Departure Date</label>
                                                            <input type="text" name="inOut" readonly />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Return Date</label>
                                                            <input type="text" name="inOut" readonly />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                                                    <button className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="postcode">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Visa Details</h4>
                                                <p>Provide your visa details.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Entry Type</label>
                                                            <select>
                                                                <option>Select Entry Type</option>
                                                                <option>Select Entry Type</option>
                                                                <option>Select Entry Type</option>
                                                                <option>Select Entry Type</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Type of Visa</label>
                                                            <select>
                                                                <option>Select visa Type</option>
                                                                <option>Select visa Type</option>
                                                                <option>Select visa Type</option>
                                                                <option>Select visa Type</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Country of Application</label>
                                                            <input type="text" placeholder="Russia" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                                    <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                                                        Previous</button>
                                                    <button className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="postcode">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <div className="step-title">
                                                <h4>Personal Information & Requirement Upload</h4>
                                                <p>Provide your personal information and upload necessary documents.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="from-wrapper">
                                                <div className="row">
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Full name</label>
                                                            <input type="text" placeholder="Enter your full neme" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Date of Birth</label>
                                                            <input type="text" name="inOut" readonly />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-35">
                                                        <div className="form-inner">
                                                            <label>Nationality</label>
                                                            <select>
                                                                <option>Select Nationality</option>
                                                                <option>Select Nationality</option>
                                                                <option>Select Nationality</option>
                                                                <option>Select Nationality</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-1 text-center dz-clickable">
                                                                <div className="icon">
                                                                    <img src="assets/image/icon/file.svg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="image-drop-area mb-25">
                                                            <div className="dropzone dropzone-2 text-center dz-clickable">
                                                                <div className="icon">
                                                                    <img src="assets/image/icon/file.svg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 mb-35">
                                                        <div className="form-inner">
                                                            <label>Notes</label>
                                                            <textarea></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>Mobile Number</label>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-35">
                                                        <div className="form-inner">
                                                            <label>WhatsApp Number</label>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-20">
                                                        <div className="form-inner">
                                                            <label>Email Address</label>
                                                            <input type="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-50">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="contactCheck" />
                                                            <label className="form-check-label" for="contactCheck">
                                                                I have read & accepted Terms & Conditions.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-35">
                                                        <div className="form-inner">
                                                            <h6>DISCLAIMER</h6>
                                                            <p>This is to confirm that Global Sky Visa Services EST. will not in
                                                                any manner be liable or responsible for any delay in the
                                                                processing or rejection of any Visa applications, once the
                                                                documents have been delivered to the respectful Consulate
                                                                General. Upon receiving your documents make every effort to
                                                                ensure that the Visa(s) you have requested are correct: Any
                                                                Visa(s) you have requested have been obtained The dates of the
                                                                Visa(s) cover your period of intended stay for each country with
                                                                the appropriate number of entries you have requested. Your
                                                                Passport is valid for the appropriate time you will be abroad.
                                                                By entering your email address, you agree to receive emails
                                                                (including the picture newsletter, as well as promotional offers
                                                                and announcements.)</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                                        <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                                                            Previous</button>
                                                        <button className=" primary-btn1" type="submit">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ display: 'none' }}
                className="my-template">
                <div id="mytmp" className="dz-preview dz-file-preview">
                    <div className="dz-image"><img data-dz-thumbnail="" /></div>
                    <div className="dz-details">
                        <div className="dz-size"><span data-dz-size=""></span></div>
                        <div className="dz-filename"><span data-dz-name=""></span></div>
                    </div>
                    <div className="dz-progress">
                        <span className="dz-upload" data-dz-uploadprogress=""></span>
                    </div>
                    <div className="dz-error-message"><span data-dz-errormessage=""></span></div>
                    <div className="dz-success-mark">
                        <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 0 54 54" width="54px" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                    </div>
                    <div className="dz-error-mark">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="19" r="2"></circle>
                            <path d="M10 3h4v12h-4z"></path>
                        </svg>
                    </div>
                    <div className="dz-remove" data-dz-remove="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>


            <div className="visa-apply-section mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="apply-wrap">
                                <div className="destination-country-name">
                                    <h4>Dubai</h4>
                                </div>
                                <div className="visa-type-and-aply-form text-center">
                                    <h5>Tourist Visa</h5>
                                    <p>We understand your needs and deliver digital marketing through unique selling offer that
                                        our country specialists oneto proposition.</p>
                                    <button className="primary-btn1" data-bs-toggle="modal" data-bs-target="#visa-apply-modal">Apply
                                        Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="visa-details-section mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="visa-details-tab">
                                <ul className="nav nav-tabs" id="visaTab" role="tablist">
                                    <li onClick={() => { setCurrentStep("details") }} className="nav-item" role="presentation">
                                        <button className={`nav-link ${currentStep === "details" && "active"}`} id="details-tab" data-bs-toggle="tab"
                                            data-bs-target="#details-tab-pane" type="button" role="tab"
                                            aria-controls="details-tab-pane" aria-selected="true">Details</button>
                                    </li>
                                    <li onClick={() => { setCurrentStep("remarks") }} className="nav-item" role="presentation">
                                        <button className={`nav-link ${currentStep === "remarks" && "active"}`} id="remarks-tab" data-bs-toggle="tab"
                                            data-bs-target="#remarks-tab-pane" type="button" role="tab"
                                            aria-controls="remarks-tab-pane" aria-selected="false">Remarks</button>
                                    </li>
                                    <li onClick={() => { setCurrentStep("visa_fee") }} className="nav-item" role="presentation">
                                        <button className={`nav-link ${currentStep === "visa_fee" && "active"}`} id="services-tab" data-bs-toggle="tab"
                                            data-bs-target="#services-tab-pane" type="button" role="tab"
                                            aria-controls="services-tab-pane" aria-selected="false">Visa Fee & Service
                                            Charges</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="visa-details-tab-content">
                                <div className="tab-content" id="visaTabContent">
                                    {currentStep === "details" && <div className="tab-pane fade show active" id="details-tab-pane" role="tabpanel"
                                        aria-labelledby="details-tab" tabindex="0">
                                        <div className="single-information-wrap mb-40">
                                            <div className="title">
                                                <h6>Country Information</h6>
                                            </div>
                                            <div className="content">
                                                <h4>United Arab Emirates</h4>
                                                <div className="row g-4">
                                                    <div className="col-lg-5">
                                                        <div className="country-flag">
                                                            <Image src={iFlagImage} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="country-map">
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289972.0077536697!2d52.629290006695484!3d24.350804665813826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1726822002955!5m2!1sen!2sbd"
                                                                style={{ border: 0 }}
                                                                allowfullscreen="" loading="lazy"
                                                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                                <table className="country-info">
                                                    <tbody>
                                                        <tr>
                                                            <td>Capital: </td>
                                                            <td>Abu Dhabi</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Currency: </td>
                                                            <td>UAE dirham (AED)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Language: </td>
                                                            <td>Arabic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Religion: </td>
                                                            <td>76% Islam (official), 12.6% Christianity, 6% Hinduism, 6% other
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Population: </td>
                                                            <td>9,282,410</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone Code: </td>
                                                            <td>+971</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Time Zone: </td>
                                                            <td>UTC+04:00 (GST)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="single-information-wrap mb-40">
                                            <div className="title">
                                                <h6>Eligibility to Apply for visa</h6>
                                            </div>
                                            <div className="content">
                                                <div className="content-wrap">
                                                    <h6>Basic Eligibility</h6>
                                                    <p>We understand your needs and deliver digital marketing through unique
                                                        selling offer that our country specialists oneto proposition.</p>
                                                    <ul>
                                                        <li>be a genuine visitor</li>
                                                        <li>have enough funds to support his/her stay and leave</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="single-information-wrap mb-40">
                                            <div className="title">
                                                <h6>Documents Requirements</h6>
                                            </div>
                                            <div className="content">
                                                <div className="accordion" id="accordionGeneral">
                                                    {accordionData.map((item, index) => (
                                                        <div className="accordion-item" key={index}>
                                                            <h2
                                                                onClick={() => { 
                                                                    if(selectIndex === index) {
                                                                        setSelectIndex(null)
                                                                        return
                                                                    }
                                                                    setSelectIndex(index) 
                                                                }}
                                                                className="accordion-header" id={item.id}>
                                                                <button className={`accordion-button ${selectIndex !== index  && "collapsed"} `} type="button"
                                                                    data-bs-toggle="collapse" data-bs-target={item.target}
                                                                    aria-expanded="true" aria-controls={item.target.substring(1)}>
                                                                    {item.title}
                                                                </button>
                                                                
                                                            </h2>
                                                            <div id={item.target.substring(1)} className={`accordion-collapse collapse ${selectIndex === index && "show"}`}
                                                                aria-labelledby={item.id} data-bs-parent="#accordionGeneral">
                                                                <div className="accordion-body">
                                                                    {item.content.map((doc, docIndex) => (
                                                                        <div className="single-document" key={docIndex}>
                                                                            <div className="number">
                                                                                {doc.number}
                                                                            </div>
                                                                            <div className="doc-content">
                                                                                <h6>{doc.title}</h6>
                                                                                <p>{doc.description}</p>
                                                                                <ul>
                                                                                    {doc.list.map((listItem, listIndex) => (
                                                                                        <li key={listIndex}>{listItem}</li>
                                                                                    ))}
                                                                                </ul>
                                                                                {doc.note && <p>{doc.note}</p>}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 
                                        <div className="single-information-wrap mb-40">
                                            <div className="title">
                                                <h6>Documents Requirements</h6>
                                            </div>
                                            <div className="content">
                                                <div className="accordion" id="accordionGeneral">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingOne">
                                                            <button className="accordion-button" type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#faqcollapseOne"
                                                                aria-expanded="true" aria-controls="faqcollapseOne">
                                                                1. Service Holder
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseOne" className="accordion-collapse collapse show"
                                                            aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                        <p>Note: Old passport required (if any)</p>
                                                                    </div>
                                                                </div>
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
                                                        <div id="faqcollapseTwo" className="accordion-collapse collapse show"
                                                            aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                        <p>Note: Old passport required (if any)</p>
                                                                    </div>
                                                                </div>
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
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                        <p>Note: Old passport required (if any)</p>
                                                                    </div>
                                                                </div>
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
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="single-document">
                                                                    <div className="number">
                                                                        01.
                                                                    </div>
                                                                    <div className="doc-content">
                                                                        <h6>Passport</h6>
                                                                        <p>Original passport required with; </p>
                                                                        <ul>
                                                                            <li>a. Minimum 6 months validity </li>
                                                                            <li>b. At least 2 Blank pages</li>
                                                                        </ul>
                                                                        <p>Note: Old passport required (if any)</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}



                                        <div className="single-information-wrap mb-40">
                                            <div className="title">
                                                <h6>Processing Time</h6>
                                            </div>
                                            <div className="content">
                                                <div className="content-wrap">
                                                    <p>20 to 25 Working Days (Time may vary depending on applicants profile and
                                                        embassy actually processing time)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-information-wrap">
                                            <div className="title">
                                                <h6>Sample Documents & Photos</h6>
                                            </div>
                                            <div className="content">
                                                <div className="content-wrap">
                                                    <div className="row g-4">
                                                        <div className="col-md-6">
                                                            <div className="document-card">
                                                                <div className="document-image">
                                                                    <Image className="popup-image" src={iVisaScreenshot} alt="" />
                                                                </div>
                                                                <div className="document-content">
                                                                    <h6>Thailand Immigration Stamped
                                                                        (Sample Photo)</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="document-card">
                                                                <div className="document-image">
                                                                    <Image className="popup-image" src={iVisaScreenshot} alt="" />
                                                                </div>
                                                                <div className="document-content">
                                                                    <h6>Thailand Immigration Stamped
                                                                        (Sample Photo)</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="document-card">
                                                                <div className="document-image">
                                                                    <Image className="popup-image" src={iVisaScreenshot} alt="" />
                                                                </div>
                                                                <div className="document-content">
                                                                    <h6>Thailand Immigration Stamped
                                                                        (Sample Photo)</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="document-card">
                                                                <div className="document-image">
                                                                    <Image className="popup-image" src={iVisaScreenshot} alt="" />
                                                                </div>
                                                                <div className="document-content">
                                                                    <h6>Thailand Immigration Stamped
                                                                        (Sample Photo)</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="document-card">
                                                                <div className="document-image">
                                                                    <Image className="popup-image" src={iVisaScreenshot} alt="" />
                                                                </div>
                                                                <div className="document-content">
                                                                    <h6>Thailand Immigration Stamped
                                                                        (Sample Photo)</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    {currentStep === "remarks" && <div className="tab-pane fade show active" id="remarks-tab-pane" role="tabpanel"
                                        aria-labelledby="remarks-tab" tabindex="0">
                                        <div className="single-information-wrap">
                                            <div className="title">
                                                <h6>Remarks</h6>
                                            </div>
                                            <div className="content">
                                                <div className="content-wrap">
                                                    <p>
                                                        Documents in languages other than English (including Bangla) must be translated into English and shall be certified by a credible translator and a notary public.
                                                        <br></br> *** Consular officers reserve the rights to request more additional documents as deemed necessary. The embassy reserves the right to ask for more evidence and to contact the applicant for an interview if required.
                                                        <br></br> ***Amy is not liable for any further delays in visa processing or for the approval or denial of any visa application, since this entirely depends on the Embassy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    {currentStep === "visa_fee" && <div className="tab-pane fade show active" id="services-tab-pane" role="tabpanel"
                                        aria-labelledby="services-tab" tabindex="0">
                                        <div className="single-information-wrap">
                                            <div className="title">
                                                <h6>Visa Fees & Service Charges</h6>
                                            </div>
                                            <div className="content">
                                                <div className="content-wrap">
                                                    <ul>
                                                        <li>Visa Fees Including Service Charges - Single Entry - 90 days validity - 5,100 BDT (Self Application by Agent)</li>
                                                        <li>Visa Fees Including Service Charges - Single Entry - 90 days validity - 5,300 BDT (Self Application by Individual Applicant)</li>
                                                        <li>Visa Fees Including Service Charges - Single Entry - 90 days validity - 5,500 BDT (Applied by Amy Person)</li>
                                                        <li>Visa Fees Including Service Charges - Multiple Entry - 180 days validity - 19,000 BDT (Self Application by Agent)</li>
                                                        <li>Visa Fees Including Service Charges - Multiple Entry - 180 days validity - 19,500 BDT (Self Application by Individual Applicant)</li>
                                                        <li>Visa Fees Including Service Charges - Multiple Entry - 180 days validity - 20,000 BDT ( Applied by Amy Person)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="visa-sb">
                                <div className="single-offer">
                                    <div className="content">
                                        <h5>U.A.E Electronic visa (MALE) - MUST FLY VIA EMIRATES Type: E-Visa</h5>
                                        <ul>
                                            <li>
                                                <span>Validity</span>
                                                <h6>60 Days</h6>
                                            </li>
                                            <li>
                                                <span>Max Stay</span>
                                                <h6>30 Days</h6>
                                            </li>
                                        </ul>
                                        <h6>AED 799 / <span>Person</span></h6>
                                        <span><img src="assets/image/alart.svg" alt="" /> Visa issuance rights reserved by the embassy</span>
                                    </div>
                                    <button>SELECT OFFER</button>
                                </div>

                                <div className="single-offer">
                                    <div className="content">
                                        <h5>Electronic visa 5 years multiple entry Type: E-Visa</h5>
                                        <ul>
                                            <li>
                                                <span>Validity</span>
                                                <h6>1825 Days</h6>
                                            </li>
                                            <li>
                                                <span>Max Stay</span>
                                                <h6>85 Days</h6>
                                            </li>
                                        </ul>
                                        <h6>AED 5990 / <span>Person</span></h6>
                                        <span><img src="assets/image/alart.svg" alt="" /> Visa issuance rights reserved by the embassy</span>
                                    </div>
                                    <button>SELECT OFFER</button>
                                </div>

                                <div className="contact-area">
                                    <div className="icon">
                                        <svg width="35" height="35" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="white"></path>
                                            <path d="M0.507812 25.5482L2.275 19.1041C1.1832 17.2201 0.609375 15.0772 0.609375 12.8885C0.614453 6.02793 6.19531 0.452148 13.0508 0.452148C16.377 0.452148 19.5051 1.74707 21.8512 4.09824C24.2023 6.44941 25.4973 9.57246 25.4922 12.8986C25.4871 19.7541 19.9063 25.335 13.0508 25.335H13.0457C10.9637 25.335 8.91719 24.8119 7.09922 23.8217L0.507812 25.5482Z" fill="url(#paint0_linear_285_753)"></path>
                                            <path d="M0.0556641 26L1.88379 19.3223C0.756445 17.3723 0.167383 15.1531 0.167383 12.8832C0.167383 5.77891 5.95137 0 13.0557 0C16.5037 0 19.7385 1.3457 22.1709 3.77813C24.6033 6.21563 25.9439 9.45039 25.9439 12.8934C25.9389 19.9977 20.16 25.7766 13.0557 25.7766H13.0506C10.8924 25.7766 8.7748 25.2332 6.89082 24.2074L0.0556641 26ZM7.20566 21.8766L7.59668 22.1102C9.24199 23.0852 11.126 23.6031 13.0506 23.6031H13.0557C18.9615 23.6031 23.7654 18.7992 23.7654 12.8934C23.7654 10.0344 22.6533 7.34297 20.6322 5.3168C18.6111 3.29062 15.9197 2.17852 13.0607 2.17852C7.1498 2.17852 2.3459 6.98242 2.3459 12.8883C2.3459 14.9094 2.90957 16.8797 3.98105 18.5859L4.23496 18.9922L3.15332 22.943L7.20566 21.8766Z" fill="url(#paint1_linear_285_753)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.83125 7.49512C9.5875 6.95684 9.33359 6.94668 9.10508 6.93652C8.91719 6.92637 8.70391 6.93145 8.48555 6.93145C8.27227 6.93145 7.92188 7.01269 7.62734 7.33262C7.33281 7.65254 6.5 8.43457 6.5 10.0189C6.5 11.6033 7.65273 13.1369 7.81523 13.3502C7.97773 13.5635 10.0445 16.9201 13.3148 18.21C16.0367 19.2814 16.5902 19.0682 17.1793 19.0174C17.7684 18.9666 19.0836 18.2404 19.3527 17.4889C19.6219 16.7373 19.6219 16.0924 19.5406 15.9603C19.4594 15.8283 19.2461 15.7471 18.9211 15.5846C18.6012 15.4221 17.0168 14.6451 16.7223 14.5385C16.4277 14.4318 16.2145 14.376 15.9961 14.701C15.7828 15.0209 15.1633 15.7471 14.9754 15.9603C14.7875 16.1736 14.5996 16.2041 14.2797 16.0416C13.9598 15.8791 12.9188 15.5389 11.6898 14.442C10.7301 13.5889 10.0852 12.5326 9.89727 12.2127C9.70938 11.8928 9.87695 11.715 10.0395 11.5576C10.1816 11.4154 10.3594 11.1818 10.5219 10.9939C10.6844 10.8061 10.7352 10.674 10.8418 10.4557C10.9484 10.2424 10.8977 10.0545 10.8164 9.89199C10.7453 9.72441 10.1207 8.13496 9.83125 7.49512Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <span>WhatsApp Message</span>
                                        <h6><a href="#">+971-552 237 719</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="imageModal" className="image-modal">
                <span className="close">&times;</span>
                <img className="modal-image" id="modalImage" />
            </div>


        </body>
    )
}

export default VisaDetails
