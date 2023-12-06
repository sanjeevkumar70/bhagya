import './header.scss'
import { Link } from 'react-router-dom';
import logo from "../../assets/svg-icon/logo.svg"
import React, { useEffect, useState } from 'react'


const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    var isMobile;

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (screenWidth <= 992) {
        isMobile = true
    } else {
        isMobile = false
    }

    return (
        <div>

            {isMobile ? <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid header_box">
                    <Link className="navbar-brand" to="#">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul className="dropdown-menu border-0">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Industries
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav> : <nav className="navbar navbar-expand-lg">
                <div className="container header_box">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} height={"60px"} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item home">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown drop-box">
                                <Link className="nav-link " to="/about-us" role="button"  >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item dropdown drop-box">
                                <Link className="nav-link dropdown-toggle " to="/industry" role="button" data-bs-toggle="dropdown" data-toggle="tooltip" aria-expanded="false">
                                    Industries
                                </Link>
                                
                                <ul className="dropdown-menu border-0  px-0 mx-0">
                                    <div className="row submenu-box">
                                        <Link className="inds-header" to="/industry">Industries</Link>
                                        <hr />
                                        <div className="col-md-4">
                                            <ul>
                                                <li><Link to="" >Personal Care</Link></li>
                                                <li><Link to="">Pharma & Healthcare</Link></li>
                                                <li><Link to="">Feed & Fertilizer</Link></li>
                                                <li><Link to="">Food & Nutrition</Link></li>
                                                <li><Link to="">Paint,Ink & Coatings</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li><Link to="">Plastic & Rubber</Link></li>
                                                <li><Link to="">Flavour & Fragrance</Link></li>
                                                <li><Link to="">Chemical Intermediates</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4  submenu-image-box">
                                            <div>
                                                <img src={"https://images.unsplash.com/photo-1696029741809-12b752232b2f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                                            </div>
                                            <div>
                                                <img src="https://images.unsplash.com/photo-1438968623539-2cfd04ee37ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>}

        </div>
    )
}

export default Header