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
                                <span className="ball-shadow"></span>
                            </figure>
                        </section>

                        <h5 className="mb-3 mt-2 text-white">
                            {dia}
                        </h5>
                        <p className="mb-0 text-white">
                            {hora}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LotoCard;