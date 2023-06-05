import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import '../../css/home.css';

import slider_1 from '../../images/Slide_1.jpeg';
import slider_2 from '../../images/Slide_2.jpeg';
import slider_3 from '../../images/Slide_3.jpeg';
import slider_4 from '../../images/Slide_4.jpeg';
import slider_5 from '../../images/Slide_5.jpeg';

import logo from '../../images/DRC-Logo.png';

export function Home(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate();

    let statements = [
        {header: 'EXPERTISE', statement: 'With years of industry experience, our team of skilled professionals possesses the knowledge and expertise needed to design, install, and maintain robust automation solutions.', icon: <i className="bi bi-tools"></i>},
        {header: "INNOVATION", statement: "We stay at the forefront of technological advancements to bring you the latest automation tools and techniques, delivering innovative solutions that drive your success.", icon: <i className="bi bi-lightbulb"></i>},
        {header: "CUSTOMIZATION", statement: "We understand that every business is unique. That's why we take a personalized approach, tailoring our solutions to meet your specific needs, objectives, and budget.", icon: <i className="bi bi-boxes"></i>},
        {header: "RELIABILITY", statement: "We pride ourselves on the reliability of our products and services. Our commitment to quality craftsmanship ensures that you receive durable and efficient control systems that stand the test of time.", icon: <i className="bi bi-bricks"></i>},
        {header: "PARTNERSHIP", statement: "We believe in building strong, long-term partnerships with our clients. From the initial consultation to ongoing support, we are dedicated to your success every step of the way.", icon: <i className="bi bi-graph-up-arrow"></i>}
    ]

    let cards = [];

    for(const card of statements) {

        let key = Date.now();

        cards.push(
            <div className="col-md-6">
                <div className="card text-white dark-bg-card mb-3 zoom" >
                    <div className="card-header">
                        <h1 className="text-center">
                            {card.icon}
                        </h1>
                        <h2 className="text-center">
                            {card.header}: 
                        </h2>
                    </div>
                    <div className="card-body">
                        <h4 className="card-text">
                            {card.statement}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className="home-carousel">
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_1}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center" id="slider-text-1">
                                        Welcome to Dead Right Controls: Your gateway to the forefront of automation.  
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                    <h3 role="button" onClick={() => {navigate('/services/planspec')}}>SEE WHAT DRC CAN DO FOR YOU</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_2}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white align-items-center" height="100%">
                            <div className="row justify-content-center mt-10">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Step inside and witness the transformative power of cutting-edge automation solutions that propel your operations to new heights.
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        {/* automation solutions that propel your operations to new heights. */}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                    <h3 role="button" onClick={() => {navigate('/services/automation-consulting')}}>SEE WHAT DRC CAN DO FOR YOU</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_3}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white carousel-container">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Enter the realm of automation excellence at Dead Right Controls, where innovation knows no bounds.
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                    <h3 role="button" onClick={() => {navigate('/about')}}>LEARN ABOUT DEAD RIGHT CONTROLS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_4}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Experience the next generation of automation at Dead Right Controls, where the future becomes reality.
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                    <h3 role="button" onClick={() => {navigate('/contact')}}>GET IN TOUCH AND BEGIN A CONSULTATION NOW</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_5}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Open the door to the automation revolution at Dead Right Controls, where we redefine what's possible.
                                    </h1>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                    <h3 role="button" onClick={() => {navigate('/contact')}}>GET IN TOUCH AND BEGIN A CONSULTATION NOW</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container text-white py-5 text-shadow">
                <div className="row justify-content-center">
                    <div className="col-8 d-flex justify-content-center">            
                        <img src={logo} className="logo" alt="logo"></img><br/>
                    </div>
                    <div className="col-10 d-flex justify-content-center">
                        <h1 className="text-center">WHY CHOOSE DEADRIGHT CONTROLS?</h1>
                    </div>
                    <div className="row justify-content-center">
                        {cards}
                    </div>
                    {/* <br/><br/> 
                    <h3 className="text-center">We believe in building strong, long-term partnerships with our clients. From the initial consultation to ongoing support, we are dedicated to your success every step of the way.</h3>
                    <br/><br/>
                    <h3 className="text-center">Experience the Dead Right Controls Difference</h3>
                    <br/><br/>
                    <h3 className="text-center">At Dead Right Controls, we are passionate about automation and the endless possibilities it offers. We invite you to explore our comprehensive range of building automation solutions and experience the Dead Right Controls difference for yourself. Join the growing community of businesses that have embraced automation to propel their success in an increasingly competitive world.</h3>
                    <br/><br/>
                    <h3 className="text-center">Automate your success with Dead Right Controls today.</h3> */}

                </div>
            </div>
        </>
    )
}
