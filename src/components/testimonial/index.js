import React from 'react'
import "./testimonial.scss"
import Slider from "react-slick";
import { Rating } from 'react-simple-star-rating';
import { ReactComponent as PrevArrow } from '../../assets/svg-icon/prev-arrow.svg';
import { ReactComponent as NextArrow } from '../../assets/svg-icon/next-arrow.svg';

const Testimonial = () => {


    var settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='test'>
            <div className=''>

                <div className="testimonial-top-content">
                    <h2>Testimonial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. t amet, consectetur adipiscing </p>
                </div>
                <div className="testimonial-bottom-content">
                    <div className='ms-2'>
                        <Slider {...settings}>
                            {[...Array(20)].map((item) => {
                                return (
                                    <>
                                        <div className='user-review-box'>
                                            <div className="row box-data">
                                                <div className="col-md-4 user-review-card-left">
                                                    <img width={"120px"} height={"160px"} src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" alt="" />
                                                </div>
                                                <div className="col-md-8 user-review-card-right">
                                                    <div className="rating">
                                                        <Rating initialValue={4} readonly={true} allowFraction size={20} />
                                                    </div>
                                                    <div className="rating-desc">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className='name'>
                                                            Jessie Evans
                                                        </span>
                                                        <br />
                                                        <span className='role'>Product Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </Slider>
                    </div>
                </div>

            </div>


           
        </div>
    )
}

export default Testimonial