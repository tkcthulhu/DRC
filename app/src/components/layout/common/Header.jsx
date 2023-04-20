function Header(props) {


    return(
        // <ul class="nav nav-tabs">
        //     <li class="nav-item">
        //         <a class="nav-link active" aria-current="page" href="#">About</a>
        //     </li>
        //     <li class="nav-item dropdown">
        //         <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
        //         <ul class="dropdown-menu">
        //         <li><a class="dropdown-item" href="#">Plan Spec</a></li>
        //         <li><a class="dropdown-item" href="#">Retro Fitting</a></li>
        //         <li><hr class="dropdown-divider"/></li>
        //         <li><a class="dropdown-item" href="#">Commissioning</a></li>
        //         <li><a class="dropdown-item" href="#">Consulting</a></li>
        //         </ul>
        //     </li>
        //     <li class="nav-item">
        //         <a class="nav-link" href="#">Link</a>
        //     </li>
        //     <li class="nav-item">
        //         <a class="nav-link" href="#" tabindex="-1" >Disabled</a>
        //     </li>
        // </ul>

        <header>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>

                    <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                        <a href="#" class="nav-link text-secondary">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
                            Dashboard
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                            Orders
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                            Products
                        </a>
                        </li>
                        <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg>
                            Customers
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-center">
                    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div class="text-end">
                    <button type="button" class="btn btn-light text-dark me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;