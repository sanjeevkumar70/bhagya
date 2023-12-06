import React from 'react'
import "./industries.scss"
import chemical2 from "../../assets/image/chemical2.jpg"
import chemical3 from "../../assets/image/chemical3.png"
import chemical1 from "../../assets/image/chemical1.png"
import { Link } from 'react-router-dom'

const IndustryPage = () => {


    const medicedata = [
        {
            name: "Ammonia Liquid sd sfsad ghjkkjh cbvb rtertn rtrt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical2
        },
        {
            name: "Cetrimide Solution",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical3
        },
        {
            name: "Chlorhexidine Gluconate",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical1
        },
        {
            name: "Ammonia Liquid",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical2
        },
        {
            name: "Cetrimide Solution",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical3
        },
        {
            name: "Chlorhexidine Gluconate",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit am ",
            image: chemical1
        },


    ]


    return (
        <div>

            <div className='ind-banner'>
                <div className="ind-text-box">
                    <div className="ind-text">
                        <h2>Industries</h2>
                        <span>Home {">>"}Industries</span>
                    </div>
                </div>
            </div>

            <div className="row ind-header">
                <div className="col-md-6 ind-heading d-flex justify-content-between">
                    <h4>Personal Care</h4>
                </div>
                <div className="col-md-6 view-all  d-flex justify-content-end">
                    <button>
                        View All
                    </button>
                </div>
            </div>


            <div className="ind-card">
                <div class="row">
                    {medicedata.map((item) => {
                        return (
                            <div class="col-md-4 col-sm-6 mb-5">
                                <div class="card card-block">
                                    <img src={item.image} alt={item.name} />
                                    <h5 class="card-title mt-3 mb-3">{item.name}</h5>
                                    <p class="card-text">{item.desc}<Link to="#"> Read more</Link> </p>
                                    <button>Get Quote </button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>

        </div>

    )
}

export default IndustryPage