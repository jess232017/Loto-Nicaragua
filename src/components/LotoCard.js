import React from 'react'

const LotoCard = ({color, dia, hora, numero}) => {
    return ( 
        <div className="col">
            <div className={`card mb-2 radius-15 bg-${color}`}>
                <div className="card-body text-center">
                    <div className="p-4 radius-15">
                        <section className="stage">
                            <figure className="ball">
                                <span className="number">{numero}</span>
                                <span className="shadow"></span>
                            </figure>
                        </section>

                        <h5 className="mb-0 mt-2 text-white">
                            {dia}
                        </h5>
                        <p className="mb-3 text-white">
                            {hora}
                        </p>
                        <div className="list-inline contacts-social mt-3 mb-3"> 
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-facebook" /></a>
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-twitter" /></a>
                            <a href="#" className="list-inline-item border-0"><i className="bx bxl-linkedin" /></a>
                        </div>
                        <div className="d-grid">
                            <a href="#" className="btn btn-white radius-15">Ver todos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LotoCard;