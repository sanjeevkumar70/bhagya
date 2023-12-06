import './about.scss'
import React from 'react'
import Frame from '../frame'
import image1 from "../../assets/image/Rectangle 8.png"
import image2 from "../../assets/image/Rectangle 9.png"
import image3 from "../../assets/image/Rectangle 10.png"
import rightTik from "../../assets/svg-icon/rightTik.svg"



const About = () => {
    return (
        <div>
            <div className="row about-box">
                <div className="col-md-6 about-box-left">
                    <div className="row">
                        <div className="col-md-6 image-left">
                            <div style={{position:"relative"}}>
                                <img src={image3} width={"100%"} className='mb-4' alt="" />
                                 <div style={{position:"absolute",top:-10, right:-10 ,zIndex:-1}} >
                                    <Frame/>
                                 </div>
                            </div>
                            <div style={{position:"relative"}}>
                                <img src={image1} width={"100%"} className='mb-4' alt="" />
                                 <div style={{position:"absolute",bottom:15, left:-10 ,zIndex:-1}} >
                                    <Frame/>
                                 </div>
                            </div>
                           
                        </div>
                        <div className="col-md-6 image-right pb-5">
                        <div style={{position:"relative"}}>
                                <img src={image2} width={"100%"} className='mb-4' alt="" />
                                 <div style={{position:"absolute",bottom:15, right:-10 ,zIndex:-1}} >
                                    <Frame/>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 about-box-right">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="about-text-box">
                        {[...Array(4)].map((item) => {
                            return (
                                <div className='about-text-desc mt-3'>
                                    <p><img src={rightTik} alt="" /> Sustainable Technology</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About