import { useNavigate } from "react-router-dom";

import logo from  "../../../images/DRC-Art-128x128.png";
import '../../../css/header.css';
import '../../../css/effects.css';

export function Header(props) {

    const navigate = useNavigate();

    return(
        <>
        <header className="desktop">
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <img src={logo} className="main-logo"></img>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/')}}
                                        >
                                            Home
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/about')}}
                                        >
                                            About
                                        </div>
                                    </li>
                                    <li>
                                    <div className="text-white nav-button type1 flex-shrink-0 dropdown dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" >
                                            Services
                                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                            <li><a className="dropdown-item" href="#">All Services</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Plan Spec</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Consulting</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Commissioning</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Retro Fit</a></li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/blog')}}
                                        >
                                            Blog
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/gallery')}}
                                        >
                                            Gallery
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/contact')}}
                                        >
                                            Contact
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobile offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: 'fit-content'}}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280 + 'px', height: 100 + 'vh'}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={logo} className="main-logo"></img>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    About
                    </a>
                </li>
                <li>
                    <div className="dropdown">
                        <a href="#" className="nav-link text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">All Services</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Plan Spec</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Consulting</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Commissioning</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Retro Fit</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    Blog
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    Gallery
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    Contact
                    </a>
                </li>
                </ul>
                <hr/>
            </div>
        </div>
        </>
    )
}