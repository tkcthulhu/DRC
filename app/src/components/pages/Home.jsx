import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../css/home.css';

import slider_1 from '../../images/Slide_1.jpeg';
import slider_2 from '../../images/Slide_2.jpeg';
import slider_3 from '../../images/Slide_3.jpeg';
import slider_4 from '../../images/Slide_4.jpeg';
import slider_5 from '../../images/Slide_5.jpeg';

import logo from '../../images/DRC-Art-128x128.png';

export function Home(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className="home-carousel">
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_1}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Welcome to Dead Right Controls, your gateway to the forefront of automation innovation.
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
                    <h3>SEE WHAT DRC CAN DO FOR YOU</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_2}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container-fluid text-white">
                            <div className="row justify-content-center">
                                <div className="col-10 d-flex justify-content-center">
                                    <h1 className="heading-1 text-center">
                                        Step inside and witness the transformative power of cutting-edge automation solutions that propel your operations to new heights.
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
                    <h3>SEE WHAT DRC CAN DO FOR YOU</h3>
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
                    <h3>LEARN ABOUT DEAD RIGHT CONTROLS</h3>
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
                    <h3>GET IN TOUCH AND BEGIN A CONSULTATION NOW</h3>
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
                    <h3>GET IN TOUCH AND BEGIN A CONSULTATION NOW</h3>
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
                    <div className="col-10 d-flex justify-content-center">
                        <h2>EXPERTISE:</h2>
                    </div>                
                    <br/><br/> 
                    <h3 className="text-center">With years of industry experience, our team of skilled professionals possesses the knowledge and expertise needed to design, install, and maintain robust automation solutions.</h3>
                    <br/><br/>
                    <div className="col-10 d-flex justify-content-center">
                        <h2>INNOVATION:</h2>
                    </div>
                    <br/><br/> 
                    <h3 className="text-center">We stay at the forefront of technological advancements to bring you the latest automation tools and techniques, delivering innovative solutions that drive your success.</h3>
                    <br/><br/>
                    <div className="col-10 d-flex justify-content-center">
                        <h2>CUSTOMIZATION:</h2>
                    </div>
                    <br/><br/> 
                    <h3 className="text-center">We understand that every business is unique. That's why we take a personalized approach, tailoring our solutions to meet your specific needs, objectives, and budget.</h3>
                    <br/><br/>
                    <div className="col-10 d-flex justify-content-center">
                        <h2>RELIABILITY:</h2>
                    </div>
                    <br/><br/> 
                    <h3 className="text-center">We pride ourselves on the reliability of our products and services. Our commitment to quality craftsmanship ensures that you receive durable and efficient control systems that stand the test of time.</h3>
                    <br/><br/>
                    <div className="col-10 d-flex justify-content-center">
                        <h2>PARTNERSHIP:</h2>
                    </div>
                    <br/><br/> 
                    <h3 className="text-center">We believe in building strong, long-term partnerships with our clients. From the initial consultation to ongoing support, we are dedicated to your success every step of the way.</h3>
                    <br/><br/>
                    <h3 className="text-center">Experience the Dead Right Controls Difference</h3>
                    <br/><br/>
                    <h3 className="text-center">At Dead Right Controls, we are passionate about automation and the endless possibilities it offers. We invite you to explore our comprehensive range of building automation solutions and experience the Dead Right Controls difference for yourself. Join the growing community of businesses that have embraced automation to propel their success in an increasingly competitive world.</h3>
                    <br/><br/>
                    <h3 className="text-center">Automate your success with Dead Right Controls today.</h3>

                </div>
            </div>
        </>
    )
}
