// LoginComp.js

import React from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import styles from '../../css/myfile.module.css'; // Adjust the path to your CSS module
import img from '../../images/log.jpg'
const SignupComp = () => {
    return (
        <div className={`${styles.loginContainer}`}>
            <Row className="d-flex align-items-center justify-content-between">
                {/* Left side */}
                <Col md={5} className={`${styles.leftContent}`}>
                    <h4 className="mb-4">Create your Daraz Account</h4>
                    <div>
                        Already member? <a href="/login">Login</a> here
                    </div>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#E8F1F4", padding: "35px" }}>

                <Col md={5} className={`${styles.centeredcontent}`}>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold p-2">Phone or Email*</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone or email" className={`${styles.inputField}`} />
                        </Form.Group>

                        <Form.Group controlId="formBasiccode">
                            <Form.Label className="font-weight-bold p-2">Verification Code*</Form.Label>
                            <Form.Control type="text" placeholder="Verification Code" className={`${styles.inputField}`} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold p-2">Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" className={`${styles.inputField}`} />
                        </Form.Group>
                        <Form.Group controlId="formBasicgender">
                            <Form.Label className="font-weight-bold p-2">Gender*</Form.Label>
                            <Form.Control as="select" className={`${styles.inputField}`}>
                                <option value="" disabled selected>
                                    Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={5} className={`${styles.centeredcontent}`}>
                    <Form.Group controlId="formBasicname">
                        <Form.Label className="font-weight-bold p-2">Full Name*</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" className={`${styles.inputField}`} />
                    </Form.Group>
                    <div className={`${styles.socialButtons}`}>
                        <button type="submit" className={`${styles.loginButton}`}>
                            Signup
                        </button>
                        <p className={`${styles.myText}`}>By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy</p>
                        <p className={`${styles.orText}`}>Or, Signup with</p>
                        <button className={`${styles.facebook}`}>
                            Signup with Facebook
                        </button>
                        <button variant="outline-danger" className={`${styles.google}`}>
                            Signup with Google
                        </button>
                    </div>

                </Col>
                {/* <Col md={5} className={`${styles.rightContent}`}>
                    <img
                        src={img} // Replace with your image source
                        alt="Register Image"
                        className={`${styles.imageStyle}`}
                    />
                </Col> */}
            </Row>
        </div>
    );
};

export default SignupComp;
