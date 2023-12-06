import React from 'react'
import './contact.scss'
import Select from "react-select";
import person from "../../assets/image/person.png"
import eclipse from "../../assets/image/eclipse.png"
import { Card,  Row, Col, Label, Input, Form, Button, } from "reactstrap";

const Contact = () => {

    const colourOptions = [
        { value: "chemical", label: "Chemical" },
        { value: "agriculture", label: "Agriculture" },

    ];

    return (
        <div>
            <div className="row contact-form">
                <div className="col-md-6 contact-form-left">
                    <img src={eclipse} alt="" />

                    <div className='person-img'>
                        <img src={person} alt="" />
                    </div>
                </div>
                <div className="col-md-6 contact-form-right">
                    <Card className='contact-form-box mt-4 me-4'>
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Form className='form-data'>
                            <Row>
                                <Col className="mb-3" md="6" sm="12">
                                    <Label className="form-label">Name</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="6" sm="12">
                                    <Label className="form-label">Last Name</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="6" sm="12">
                                    <Label className="form-label">Email Address</Label>
                                    <Input className="mb-50" type="text" id="search-input" />
                                </Col>
                                <Col className="mb-3" md="6" sm="12">
                                    <Label className="form-label">Search By Groups</Label>
                                    <Select
                                        // theme={selectThemeColors}
                                        className="react-select"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        options={colourOptions}
                                        isClearable={false}
                                    />
                                </Col>

                                <Col className="mb-1" md="12" sm="12">
                                    <Label className="form-label">Message (optional)</Label>
                                    <textarea
                                        style={{resize:"none"}}
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="2"
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Button color="primary"> Send</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact