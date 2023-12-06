import './blog.scss'
import React from 'react'
import arrow from "../../assets/svg-icon/Arrow1.svg"
import rectangle from "../../assets/image/Rectangle 15.png"
import { Link } from 'react-router-dom'


const Blog = () => {
    return (
        <div>
            <div>
                <div className="blog-box">
                    <div className="blog-content">
                        <div className='banner-blog'>
                            Our Blogs
                        </div>
                        <div className='banner-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor</div>

                    </div>
                    <div className="blog-card">
                        <div className="row">
                            {[...Array(4)].map((item) => {
                                return (
                                    <div className="col-md-6 mb-4">
                                        <div className="card-box">
                                            <div className="card-left">
                                                <img src={rectangle} alt="" />
                                            </div>
                                            <div className="card-right">
                                                <div className='card-date'>Date & Time</div>
                                                <div className='card-header'>Why to work with industry certified enterprise with long term pro...</div>
                                                <div className='card-content'>lorem ipsum dolor sit amet, consectetur adipiscing elit,sum dolor sit amet, consectetur adip</div>
                                                <Link to="">Read more <img src={arrow} alt="" className='card-arrow' /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='bottom-btn'>
                        <button>See all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog