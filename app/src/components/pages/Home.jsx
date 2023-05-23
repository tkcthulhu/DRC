import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../css/home.css';

import slider_1 from '../../images/Slide_1.jpeg';
import slider_2 from '../../images/Slide_2.jpeg';
import slider_3 from '../../images/Slide_3.jpeg';

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
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <h1 className="text-white">
                                        TEST
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_2}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <h1 className="text-white">
                                        TEST
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
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <div className="d-block w-100 carousel-slide" style={{backgroundImage: `url(${slider_3}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
                        <div className="container">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <h1 className="text-white">
                                        TEST
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
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
