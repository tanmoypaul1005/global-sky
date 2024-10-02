
"use client"
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import StepButton from '../components/StepButton';

const ApplyModal = ({ show, setShowModal }) => {

    const handleClose = () => setShowModal(false);

    const [currentStep, setCurrentStep] = useState(1)

    return (
        <div>
            <Modal size="lg" show={show} dialogClassName="" onHide={handleClose}>

                <div style={{ display: "block", paddingLeft: "0px" }} className="modal fade visa-apply-modal show" id="visa-apply-modal" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="visa-apply-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content form-wapper">
                            <button onClick={handleClose} type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close"><i
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
                                    {
                                    currentStep === 1 && 
                                    <fieldset className="postcode active">
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
                                                    {/* <div
                                                        className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-3">
                                                        <button onClick={()=>{setCurrentStep(2)}} className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                        </button>
                                                    </div> */}
                                                    <StepButton currentStep={currentStep}  setCurrentStep={setCurrentStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    }
                                    {
                                    currentStep === 2 && 
                                    <fieldset className="postcode active">
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
                                                    {/* <div
                                                        className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                                        <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                                                            Previous</button>
                                                        <button onClick={()=>{setCurrentStep(3)}} className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                        </button>
                                                    </div> */}
                                                     <StepButton currentStep={currentStep}  setCurrentStep={setCurrentStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    }
                                    {
                                    currentStep === 3 && 
                                    <fieldset className="postcode active">
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
                                                        {/* <div
                                                            className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                                            <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                                                                Previous</button>
                                                            <button className=" primary-btn1" type="submit">Submit</button>
                                                        </div> */}
                                                         <StepButton currentStep={currentStep}  setCurrentStep={setCurrentStep} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ApplyModal