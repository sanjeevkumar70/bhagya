import './carousel.scss'
import React from 'react'
import arrow from "../../assets/svg-icon/Arrow1.svg"


const Carousel = () => {
    return (
        <>
            <div >
                <div className='background-image'>
                    <div className='content container'>
                        <div className='title'>
                            Empowering Industries Since 2 Decades !!
                        </div>
                        <div className='subtitle'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.adipiscing elit, sed do eiusmod tempor incididunt ut
                        </div>
                        <div className='mt-4 button-quote'>
                            <button className='btn'>Get Quote <img src={arrow} alt="" /> </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel