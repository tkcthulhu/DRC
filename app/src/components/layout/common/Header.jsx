import { useNavigate } from "react-router-dom";

import logo from  "../../../images/DRC-Logo.png";
import drc_banner from "../../../images/drc-banner.jpg";
import drc_mobile_banner from "../../../images/drc-mobile-menu-bg.jpg"

import '../../../css/header.css';
import '../../../css/effects.css';

export function Header(props) {

    const navigate = useNavigate();

    return(
        <>
        <header className="desktop">
            <div className="px-3 py-2 bg-dark text-white" style={{backgroundImage: `url(${drc_banner})`, backgroundSize: 'cover'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <img onClick={() => {navigate('/')}} src={logo} className="main-logo" alt="logo"></img>
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/')}}
                                        >
                                            <b>Home</b>
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/about')}}
                                        >
                                            <b>About</b>
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1 flex-shrink-0 dropdown dropdown-toggle"
                                    >
                                            <b>Services</b>
                                        <ul className="dropdown-menu text-small bg-dark">
                                            <li>
                                                <a
                                                    className="dropdown-item text-white" 
                                                    href='/services/planspec'
                                                >
                                                    <b>Plan Spec</b>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <a 
                                                    className="dropdown-item text-white" 
                                                    href='/services/retrofit'
                                                >
                                                    <b>Retro Fit</b>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <a 
                                                    className="dropdown-item text-white" 
                                                    href='/services/panel-build-out'
                                                >
                                                    <b>Panel Build Out</b>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <a 
                                                    className="dropdown-item text-white" 
                                                    href='/services/commissioning'
                                                >
                                                    <b>Commissioning</b>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <a 
                                                    className="dropdown-item text-white" 
                                                    href='/services/peripheral-control-termination'
                                                >
                                                    <b>Peripheral Control Termination</b>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <a 
                                                    className="dropdown-item text-white" 
                                                    href='/services/automation-consulting'
                                                >
                                                    <b>Automation Consulting</b>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    </li>
                                    {/* <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/blog')}}
                                        >
                                            <b>Blog</b>
                                        </div>
                                    </li>
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/gallery')}}
                                        >
                                            <b>Gallery</b>
                                        </div>
                                    </li> */}
                                    <li>
                                    <div 
                                        className="text-white nav-button type1" 
                                        onClick={() => {navigate('/contact')}}
                                        >
                                            <b>Contact</b>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav class="mobile navbar navbar-light bg-dark" style={{backgroundImage: `url(${drc_banner})`, backgroundSize: 'cover'}}>
            <div class="container-fluid">
                <img src={logo} className="mobile-logo" alt="logo"></img>
                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="bi bi-list white menu-icon"></i>
                </button>
            </div>
        </nav>
        <div className="mobile offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: 'fit-content'}}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280 + 'px', height: 100 + 'vh', backgroundImage: `url(${drc_mobile_banner})`, backgroundSize: 'cover'}}>
                <a 
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    onClick={() => {navigate('/')}}
                >
                    <img onClick={() => {navigate('/')}} src={logo} className="main-logo"></img>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a 
                        className="nav-link active" 
                        onClick={() => {navigate('/')}}
                        aria-current="page"
                    >
                    Home
                    </a>
                </li>
                <li>
                    <a 
                        className="nav-link text-white"
                        onClick={() => {navigate('/about')}}
                    >
                    About
                    </a>
                </li>
                <li>
                    <div className="dropdown">
                        <a 
                            className="nav-link text-white text-decoration-none dropdown-toggle" 
                            id="dropdownUser1" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Services
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            {/* <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services')}}
                                >
                                    All Services
                                </a>
                            </li> */}
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/planspec')}}
                                >
                                    Plan Spec
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/retrofit')}}
                                >
                                    Retro Fit
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/panel-build-out')}}
                                >
                                    Panel Build Out
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/commissioning')}}
                                >
                                    Commissioning
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/peripheral-control-termination')}}
                                >
                                    Peripheral Control Termination
                                </a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a 
                                    className="dropdown-item" 
                                    onClick={() => {navigate('/services/automation-consulting')}}
                                >
                                    Automation Consulting
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                {/* <li>
                    <a  
                        className="nav-link text-white"
                        onClick={() => {navigate('/blog')}}
                    >
                    Blog
                    </a>
                </li>
                <li>
                    <a  
                        className="nav-link text-white"
                        onClick={() => {navigate('/gallery')}}
                    >
                    Gallery
                    </a>
                </li> */}
                <li>
                    <a  
                        className="nav-link text-white"
                        onClick={() => {navigate('/contact')}}
                    >
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