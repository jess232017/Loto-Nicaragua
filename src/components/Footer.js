import React from 'react'
import { Facebook, Instagram, Linkedin, Twitch, Twitter } from 'react-feather';

const Footer = () => {
    return ( 
        <div className="footer-wrapper layer-after bg-dark mt-0">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 text-left">
                    <h4 className="mb-4 text-grey-300 fw-300 font-xl open-font lh-3 d-inline-block">
                    
                    </h4>
                </div>
                <div className="col-sm-6 text-left">
                    <ul className="d-flex align-items-center mt-2 float-left xs-mb-2">
                    <li className="mr-2">
                        <a href="#" className="btn-round-md bg-facebook">
                            <Facebook className="font-xs text-white"/>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="btn-round-md bg-twiiter">
                            <Twitter className="font-xs text-white"/>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="btn-round-md bg-linkedin">
                            <Linkedin className="font-xs text-white"/>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="btn-round-md bg-instagram">
                            <Instagram className="font-xs text-white"/>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="btn-round-md bg-pinterest">
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
                            Creado por: <a href="#">Jesen23</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
    );
}
 
export default Footer;