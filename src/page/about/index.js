import React, { useEffect } from 'react'
import "./about-page.scss"
import Setting from '../../assets/image/setting'
import man from "../../assets/image/man-group.png"
import { GetReviewList } from '../../redux/action/myfil'
import { REVIEW_DATA_QUERY } from '../../redux/action/graphql'
import { useQuery, gql, useLazyQuery } from '@apollo/client';


const AboutPage = () => {

    const { initiateReviewData } = GetReviewList()

    
    
    const { data } = useLazyQuery(REVIEW_DATA_QUERY);       




    // useEffect(() => {
    //     initiateReviewData({ reviewType: "google" })
    // }, [])


    return (
        <div>
            <div className='about-banner'>
                <div className="about-text-box">
                    <div className="about-text">
                        <h2>About Us</h2>
                        <span>Home {">>"}About Us</span>
                    </div>
                </div>
            </div>

            <div className="about-box-content">
                <div className="we-are">
                    <div className="row">
                        <div className="col-md-7 we-are-box1">
                            <div className='we-are-img1'>

                            </div>
                            <div className='we-are-img2 '>

                            </div>
                        </div>
                        <div className="col-md-5 we-are-box2">
                            <h2>What are we ?</h2>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.</span>
                            <div className='mt-4'>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="select-us">
                    <h2 className='text-center'>Why Choose Us ?</h2>
                    <div className="row mt-5">
                        <div className='col-md-4 select-info-box'>
                            <img src={man} alt="" />
                        </div>

                        <div className='col-md-4 select-info-box'>
                            <div className='select-text'>
                                <Setting />
                                <h5>Sustainable Technology</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, con  dolor sit amet,</span>
                            </div>
                        </div>

                        <div className='col-md-4 select-info-box'>
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className='col-md-4 select-info-box'>
                            <div className='select-text'>
                                <Setting />
                                <h5>Sustainable Technology</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, con  dolor sit amet,</span>
                            </div>
                        </div>

                        <div className='col-md-4 select-info-box'>
                            <img src={man} alt="" />
                        </div>

                        <div className='col-md-4 select-info-box'>
                            <div className='select-text'>
                                <Setting />
                                <h5>Sustainable Technology</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, con  dolor sit amet,</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutPage