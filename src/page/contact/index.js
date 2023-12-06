import React from 'react'
import "./contact-page.scss"
import worker from "../../assets/image/worker.png"
import { Button,  Col, Form, Input, Label, Row } from 'reactstrap'

const ContactPage = () => {
    return (
        <div>
            <div className='contact-page-banner'>
                <div className="contact-page-text-box">
                    <div className="contact-page-text">
                        <h2>Contact Us</h2>
                        <span>Home {">>"}Contact Us</span>
                    </div>
                </div>
            </div>

            <div className='background-contact-image-2'>
                <div className='row back-content-container'>
                    <h2>  Get in Touch</h2>
                    <div className='col-md-6 contact-form-box'>
                        <Form className='form-data'>
                            <Row>
                                <Col className="mb-3" md="12" sm="12">
                                    <Label className="form-label">Name</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>

                                <Col className="mb-3" md="12" sm="12">
                                    <Label className="form-label">Email Address</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="12" sm="12">
                                    <Label className="form-label">Company Name</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="12" sm="12">
                                    <Label className="form-label">Contact Number</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="12" sm="12">
                                    <Label className="form-label">Industry</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-1" md="12" sm="12">
                                    <Label className="form-label">Message (optional)</Label>
                                    <textarea
                                        style={{ resize: "none" }}
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="2"
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Button > Submit</Button>
                        </Form>
                    </div>
                    <div className='col-md-6 contact-address-box' style={{ position: "relative" }}>
                        <div className="address-box">
                            <img src={worker} alt="" />
                        </div>

                        <div style={{ position: "absolute", top: 0, }}>
                            <div className="address-box-data mt-5">
                                <div className='d-flex gap-4'>
                                    <div style={{ height: 50, background: "#00ABC8", width: 6 }}></div>
                                    <div className='address-details'>
                                        <span>Phone Number</span>
                                        <ul>
                                            <li>+91 32547 65102</li>
                                            <li>+91 54893 25102</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="address-box-data">
                                <div className='d-flex gap-4'>
                                    <div style={{ height: 50, background: "#00ABC8", width: 6 }}></div>
                                    <div className='address-details'>
                                        <span>Email Address</span>
                                        <ul>
                                            <li>Companymail@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="address-box-data">
                                <div className='d-flex gap-4'>
                                    <div style={{ height: 50, background: "#00ABC8", width: 6 }}></div>
                                    <div className='address-details'>
                                        <span>Office Address</span>
                                        <ul>
                                            <li>B/1002 Building Name , Near Landmark Name Abc Street City Name State 354900 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="address-box-data">
                                <div className='d-flex gap-4'>
                                    <div style={{ height: 50, background: "#00ABC8", width: 6 }}></div>
                                    <div className='address-details'>
                                        <span>Our Social handles</span>
                                        <ul>
                                            <li>B/1002 Building Name  </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage