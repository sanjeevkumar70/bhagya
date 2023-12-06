import './service.scss'
import React from 'react'
import globe from "../../assets/image/globe.png"
import check from "../../assets/svg-icon/check.svg"


const Service = () => {
    return (
        <div>
            <div className="row service-box">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={globe} alt="" width={"100%"} />
                </div>
                <div className="col-md-6 service-right-box">
                    <h3>We Proudly serve across the Globe</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>

                    <div className='mt-4'>
                        <div className='service-text'>
                            <h6><img src={check} alt="" /> <span>22+ Countries</span></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.dolor sit amet, consectetur.</p>
                        </div>
                        <div className='service-text'>
                            <h6><img src={check} alt="" /> <span>900+ International Clients</span></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.dolor sit amet, consectetur.</p>
                        </div>
                        <div className='service-text'>
                            <h6><img src={check} alt="" /> <span>1024 Projects Completed successfully</span></h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service