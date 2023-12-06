import React from 'react'
import './landing-page.scss'
import Blog from '../../components/blog'
import Contact from '../../components/contact'
import Service from '../../components/service'
import Carousel from '../../components/carousel'
import About from '../../components/about/Index'
import Industry from '../../components/industry'
import Testimonial from '../../components/testimonial'
import Rectangle from '../../components/rectangle-border'

const LandingPage = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <Carousel />
      <About />
      <Blog />
      <Industry />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default LandingPage