import React from 'react'
import "./privacy-page.scss"
import superhero from "../../assets/image/superhero.png"

const PrivacyPage = () => {
    return (
        <div>
            <div className='privacy-banner'>
                <div className="privacy-text-box">
                    <div className="privacy-text">
                        <h2>Privacy Policy</h2>
                        <span>Home {">>"} Privacy Policy</span>
                    </div>
                </div>
            </div>

            <div className="privacy-content">
                <div className="row privacy-about">
                    <div className="col-md-6 privacy-left">
                        <h2>We Care About your Privacy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.</p>
                        <button>Read More</button>
                    </div>
                    <div className="col-md-6 privacy-right">
                        <img src={superhero} alt="" />
                    </div>
                </div>

                <div className="privacy-infn-collect">
                    <h2>What Information Do we Collect ?</h2>
                    <div className="privacy-desc">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique sunt in culpa</span>
                        <ul className='mt-3'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                        </ul>
                    </div>
                </div>

                <div className="privacy-infn-use">
                    <h2>How Do we use your Information ?</h2>
                    <div className="privacy-desc">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique sunt in culpa.</span>
                        <ul className='mt-3'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. occaecati cupiditate non provident, similique </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage