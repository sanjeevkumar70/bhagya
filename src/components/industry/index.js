import React from 'react'
import './industry.scss'
import paint from "../../assets/svg-icon/paint-field.svg"
import medical from "../../assets/svg-icon/medical-kit.svg"
import perfume from "../../assets/svg-icon/perfume-bold.svg"
import agriculture from "../../assets/svg-icon/agriculture.svg"


const Industry = () => {
    return (
        <div>
            <div className="row industry-box">
                <div className="col-lg-6 industry-content-left mb-5">
                    <div className="industry-text">
                        <h5>Industries We Serve</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit </p>

                        <div className='bottom-btn'>
                            <button>See all</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 industry-content-right ">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 industry-image-left ">
                            <div className="industry-image1">
                                <img src={agriculture} width={"100px"} alt="" />
                            </div>
                            <div className="industry-image2">
                                <img src={medical} width={"100px"} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 industry-image-right">
                            <div className='industry-icon-box'>
                                <div className="industry-image2">
                                    <img src={perfume} width={"100px"} alt="" />
                                </div>
                                <div className="industry-image2">
                                    <img src={paint} width={"100px"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Industry