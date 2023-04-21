import { useNavigate } from "react-router-dom";

import logo from  "../../../images/DRC-Art-128x128.png";
import '../../../css/header.css';
import '../../../css/effects.css';

export function Header(props) {

    const navigate = useNavigate();

    return(
        <header>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container-fluid">
                    <div className="row">

                    <div className="col-2">
                        <img src={logo} class="main-logo"></img>
                    </div>
                    <div className="col-8">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
                        </a>

                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/')}
                                >
                                    Home
                                </div>
                            </li>
                            <li>
                            <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/about')}
                                >
                                    About
                                </div>
                            </li>
                            <li>
                            <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/aervices')}
                                >
                                    Services
                                </div>
                            </li>
                            <li>
                            <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/blog')}
                                >
                                    Blog
                                </div>
                            </li>
                            <li>
                            <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/gallery')}
                                >
                                    Gallery
                                </div>
                            </li>
                            <li>
                            <div 
                                className="text-white nav-button type1" 
                                onClick={navigate('/contact')}
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
                {/* <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-center">
                    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div class="text-end">
                    <button type="button" class="btn btn-light text-dark me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                    </div>
                </div>
                </div> */}
        </header>
    )
}