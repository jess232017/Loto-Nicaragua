import React from 'react'

const Header = () => {
    return ( 
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
    );
}
 
export default Header;