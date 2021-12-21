import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-wrapper bg-white pt-3 pb-3 shadow-xss">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 navbar pt-0 pb-0">
                        <Link to="/">
                            <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl" style={{ color: "#fe9431" }}>Loto
                                <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Te Cambia La Vida</span>
                            </h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#diaria">Diaria</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#fecha">Fechas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#juga3">Juga 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#premia2">Premia 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <a className="navbar-brand" href="#page-top">Loto Nicaragua</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#diaria">Diaria</a></li>
                        <li className="nav-item"><a className="nav-link" href="#fecha">Fechas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#juga">Juga 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="#premia">Premia 2</a></li>
                    </ul>
                </div>
            </div>
        </nav>


*/

export default Header;