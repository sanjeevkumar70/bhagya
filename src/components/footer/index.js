import './footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'reactstrap'
import fb from "../../assets/svg-icon/facebook.svg"
import logo from "../../assets/svg-icon/logo-white.svg"
import insta from "../../assets/svg-icon/instagram.svg"
import twitter from "../../assets/svg-icon/twitter.svg"
import linkedin from "../../assets/svg-icon/linkedin.svg"


const Footer = () => {
    return (
        <div>
            <div className="newsletter mb-5" style={{position:"relative"}}>
                <div className="row newsletter-box">
                    <div className="col-md-6 newsletter-text">
                        <span>Subscribe to our newsletter</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-3">
                        <Input className="mb-50" type="text" id="search-input" />
                    </div>
                    <div className="col-md-3">
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="row footer-box">
                <div className="col-md-6 footer-left ">
                    <div className="footer-image">
                        <div className="footer-logo mb-4">
                            <Link> <img src={logo} alt="" /></Link>
                        </div>
                        <div className="social-icon">
                            <Link>  <img src={fb} alt="" /> </Link>
                            <Link>   <img src={insta} alt="" /></Link>
                            <Link>  <img src={twitter} alt="" /></Link>
                            <Link> <img src={linkedin} alt="" /></Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 footer-right">
                    <div className="row">
                        <div className="col-md-4 footer-about-box">
                            <span>About Us</span>
                            <ul>
                                <li><Link href="">Company</Link></li>
                                <li><Link href="">Careers</Link></li>
                                <li><Link href="">Goals</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-ind-box">
                            <span>Industries</span>
                            <ul>
                                <li><Link href="">Agriculture</Link></li>
                                <li><Link href="">Food & Beverage</Link></li>
                                <li><Link href="">Paint & Dye</Link></li>
                                <li><Link href="">Construction</Link></li>
                                <li><Link href="">Flavour & Fragrance</Link></li>
                                <li><Link href="">Home Care</Link></li>
                            </ul>

                        </div>
                        <div className="col-md-4 footer-media-box">
                            <span>Media</span>
                            <ul>
                                <li><Link href="">Blogs</Link></li>
                                <li><Link href="">News & Events</Link></li>
                                <li><Link href="">Gallery</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
              <div style={{height:2,background:"#fff",borderRadius:"50%"}}>

              </div>
              <span className='right-reserved'>2023 Company name all rights reserved</span>
            </div>
        </div>
    )
}

export default Footer