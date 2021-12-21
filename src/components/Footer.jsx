import React from 'react';
import { useMediaMatch } from "rooks";
import { Facebook, Instagram, Linkedin, Twitch, Twitter } from 'react-feather';

const Footer = () => {
    const isNarrowWidth = useMediaMatch("(max-width: 600px)");

    return ( 
        <>
            <div className={`footer-wrapper layer-after bg-dark mt-0 ${isNarrowWidth && "mb-5 pb-5"}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 text-left">
                        <h4 className="mb-4 text-grey-300 fw-300 font-xl open-font lh-3 d-inline-block">
                        
                        </h4>
                    </div>
                    <div className="col-sm-6 text-left">
                        <ul className="d-flex align-items-center mt-2 float-left xs-mb-2">
                        <li className="mr-2">
                            <a href="#Facebook" className="btn-round-md bg-facebook">
                                <Facebook className="font-xs text-white"/>
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#Twitter" className="btn-round-md bg-twiiter">
                                <Twitter className="font-xs text-white"/>
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#Linkedin" className="btn-round-md bg-linkedin">
                                <Linkedin className="font-xs text-white"/>
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#Instagram" className="btn-round-md bg-instagram">
                                <Instagram className="font-xs text-white"/>
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="#Twitch" className="btn-round-md bg-pinterest">
                                <Twitch className="font-xs text-white"/>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-sm-5 offset-sm-1 text-right">
                        <form action="#" className="mt-2">
                        <input type="text" placeholder="Correo" />
                        <button>Enviar</button>
                        </form>
                    </div>
                    <div className="col-sm-12 lower-footer" />
                        <div className="col-sm-6">
                            <p className="copyright-text">© 2021 copyright. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <p className="float-right copyright-text">
                                Creado por: <a href="#Jesem2">Jesen23</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {isNarrowWidth && (
                <div className="app-footer border-0 shadow-lg">
                    <a href="#diaria" className="nav-content-bttn nav-center">
                        <img src="assets/images/diaria.png" alt="user" className="w40 shadow-xss"/>
                    </a>
                    <a href="#fecha" className="nav-content-bttn">
                        <img src="assets/images/fechas.png" alt="user" className="w40 shadow-xss"/>
                    </a>
                    <a href="#juga3" className="nav-content-bttn">
                        <img src="assets/images/juga3.png" alt="user" className="w40 shadow-xss"/>
                    </a>
                    <a href="#premia2" className="nav-content-bttn">
                        <img src="assets/images/supercombo.png" alt="user" className="w40 shadow-xss"/>
                    </a>
                    <a href="#grande" className="nav-content-bttn">
                        <img src="assets/images/lagrande.png" alt="user" className="w40 shadow-xss"/>
                    </a>
                </div>
            )}
        </>
    );
}
 
export default Footer;