import React from 'react'

const StepButton = ({ currentStep, setCurrentStep }) => {
    return (
        <>

<div className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
            {currentStep > 1 && (
                <button className="prev primary-btn1" onClick={() => setCurrentStep(currentStep - 1)}>
                    <i className="bi bi-arrow-left"></i> Previous
                </button>
            )}
            {currentStep < 3 && (
                <button className="next primary-btn1" onClick={() => setCurrentStep(currentStep + 1)}>
                    Next <i className="bi bi-arrow-right"></i>
                </button>
            )}
            {currentStep === 3 && (
                <button className="primary-btn1" type="submit">
                    Submit
                </button>
            )}
        </div>
            {/* <div
                className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                    Previous</button>
                    {
                      currentStep === 1    
                    }
                    <button onClick={()=>{setCurrentStep(3)}} className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                        </button>

                <button className=" primary-btn1" type="submit">Submit</button>
            </div>

            <div
                                                        className="next-prev-btn d-flex align-items-center justify-content-end flex-wrap gap-4">
                                                        <button className="prev primary-btn1"> <i className="bi bi-arrow-left"></i>
                                                            Previous</button>
                                                        <button onClick={()=>{setCurrentStep(3)}} className="next primary-btn1">Next <i className="bi bi-arrow-right"></i>
                                                        </button>
                                                    </div>  */}
        </>
    )
}

export default StepButton