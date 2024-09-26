"use client"
import { iAccordionImage } from '@/util/imageImports'
import Image from 'next/image'
import React,{useState} from 'react'

const VisaAccordion = () => {

    const [selectIndex, setSelectIndex] = useState(null)

    const accordionItems = [
        {
            id: "faqcollapseOne",
            headingId: "faqheadingOne",
            targetId: "faqcollapseOne",
            question: "01. How do I book a Visa with your agency?",
            answer: "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci auctor tol euismod sit amet non ipsul growing this",
            isExpanded: true
        },
        {
            id: "faqcollapseTwo",
            headingId: "faqheadingTwo",
            targetId: "faqcollapseTwo",
            question: "02. What payment methods do you accept?",
            answer: "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci auctor tol euismod sit amet non ipsul growing this",
            isExpanded: false
        },
        {
            id: "faqcollapseThree",
            headingId: "faqheadingThree",
            targetId: "faqcollapseThree",
            question: "03. What is your cancellation policy?",
            answer: "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci auctor tol euismod sit amet non ipsul growing this",
            isExpanded: false
        },
        {
            id: "faqcollapseFour",
            headingId: "faqheadingFour",
            targetId: "faqcollapseFour",
            question: "04. Can I make changes my reservation after booking?",
            answer: "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci auctor tol euismod sit amet non ipsul growing this",
            isExpanded: false
        }
    ];

    return (
        <div className="accordion-with-tab-section mb-90">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="accordion-image">
                            <Image src={iAccordionImage} alt="" />
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
                                <div className="accordion" id="accordionGeneral">
                                    {
                                        accordionItems?.map((item, index) => {
                                            return <AccordionItem
                                                key={index}
                                                id="faqcollapseOne"
                                                headingId="faqheadingOne"
                                                targetId="faqcollapseOne"
                                                question={item?.question}
                                                answer={item?.answer}
                                                isExpanded={selectIndex === index}
                                                onSlide={() => setSelectIndex(index)}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaAccordion

const AccordionItem = ({ headingId, targetId, question, answer, isExpanded,onSlide }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={headingId}>
                <button 
                onClick={onSlide}
                className={`accordion-button ${!isExpanded ? 'collapsed' : ''}`} type="button"
                    data-bs-toggle="collapse" data-bs-target={`#${targetId}`}
                    aria-expanded={isExpanded} aria-controls={targetId}>
                    {question}
                </button>
            </h2>
            <div id={targetId} className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
                aria-labelledby={headingId} data-bs-parent="#accordionGeneral">
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    );
};


