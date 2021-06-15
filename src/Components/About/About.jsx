import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './About.scss';

import AboutImg from '../../img/about-img.webp';


const About = () => {
    return(
        <section className="about-panel">
            <Container>
                <Row>
                    <Col md={7}>
                        <img src={AboutImg} alt=""/>
                    </Col>
                    <Col md={5}>
                        <div className="about-panel__content">
                            <h2 className="about-panel__title">About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;